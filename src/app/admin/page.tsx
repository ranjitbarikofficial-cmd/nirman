"use client";

import { useState, useEffect } from "react";
import {
  Download,
  FileSpreadsheet,
  Trash2,
  CheckCircle2,
  Copy,
  Send,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

interface CustomerLead {
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  budgetRange: string;
  projectDetails: string;
  selectedCountry?: string;
  selectedCurrency?: string;
}

const GOOGLE_APPS_SCRIPT_CODE = `function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date & Time",
      "Full Name",
      "Phone / WhatsApp",
      "Email",
      "Website Type",
      "Budget Range",
      "Country",
      "Project Details"
    ]);
  }
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.businessType || "",
    data.budgetRange || "",
    data.selectedCountry || "",
    data.projectDetails || ""
  ]);
  return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}`;

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<CustomerLead[]>([]);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [savedNotice, setSavedNotice] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [testStatus, setTestStatus] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bfy_customer_leads");
      if (raw) {
        setLeads(JSON.parse(raw));
      }
      const savedUrl =
        SITE_CONFIG.googleSheetWebhookUrl ||
        localStorage.getItem("bfy_google_sheet_webhook") ||
        "";
      setWebhookUrl(savedUrl);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleSaveWebhook = () => {
    try {
      localStorage.setItem("bfy_google_sheet_webhook", webhookUrl.trim());
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 3000);
    } catch {
      // Ignore
    }
  };

  const handleTestWebhook = async () => {
    const targetUrl = webhookUrl.trim() || SITE_CONFIG.googleSheetWebhookUrl;
    if (!targetUrl) {
      setTestStatus("Please paste your Google Sheet Web App URL first.");
      return;
    }
    setTestStatus("Sending test row to your Google Sheet...");
    const sampleLead: CustomerLead = {
      submittedAt: new Date().toISOString(),
      name: "Test Customer (BFY)",
      phone: "+91 9040408690",
      email: "test@example.com",
      businessType: "Business Website",
      budgetRange: "₹25,000 – ₹50,000",
      projectDetails: "Testing automatic Excel / Google Sheet lead capture.",
      selectedCountry: "India",
      selectedCurrency: "INR",
    };

    try {
      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(sampleLead),
      });
      setTestStatus(
        "Test row sent! Check your Google Sheet in a few seconds."
      );
    } catch {
      setTestStatus("Could not reach URL. Please check the Web App URL.");
    }
  };

  const handleExportExcelCsv = () => {
    const headers = [
      "Date & Time",
      "Full Name",
      "Phone / WhatsApp",
      "Email",
      "Website Type",
      "Budget Range",
      "Country",
      "Project Details",
    ];

    const escapeCsv = (val: string) =>
      `"${String(val ?? "").replace(/"/g, '""')}"`;

    const rows = leads.map((lead) => [
      escapeCsv(new Date(lead.submittedAt).toLocaleString()),
      escapeCsv(lead.name),
      escapeCsv(lead.phone),
      escapeCsv(lead.email),
      escapeCsv(lead.businessType),
      escapeCsv(lead.budgetRange),
      escapeCsv(lead.selectedCountry || ""),
      escapeCsv(lead.projectDetails),
    ]);

    // Prepend UTF-8 BOM (\uFEFF) so Microsoft Excel opens currencies & symbols properly
    const csvContent =
      "\uFEFF" +
      [headers.map(escapeCsv).join(","), ...rows.map((r) => r.join(","))].join(
        "\r\n"
      );

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bfy-customer-leads-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClearLeads = () => {
    localStorage.removeItem("bfy_customer_leads");
    setLeads([]);
  };

  const handleCopyScript = async () => {
    await navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 3000);
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-brand-navy p-6 text-white shadow-lg sm:flex-row sm:items-center sm:p-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
              <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" />
              Excel & Google Sheets Lead Manager
            </span>
            <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Customer Inquiries & Excel Export
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Download customer messages as an Excel (.csv) file or connect a
              live Google Sheet so every inquiry saves automatically.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleExportExcelCsv}
              disabled={leads.length === 0}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download Excel (.csv) ({leads.length})</span>
            </button>
            {leads.length > 0 && (
              <button
                type="button"
                onClick={handleClearLeads}
                className="inline-flex min-h-[46px] items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                <span>Clear Local List</span>
              </button>
            )}
          </div>
        </div>

        {/* Connect Live Google Sheet / Online Excel */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6">
            <h2 className="text-lg font-bold text-slate-900">
              1. Connect Live Google Sheet (Auto-Save Every Customer to Excel)
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Follow these 3 quick steps once so every customer from any phone
              or computer goes straight into your spreadsheet:
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>
                Open{" "}
                <a
                  href="https://sheets.new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue underline"
                >
                  sheets.new
                </a>{" "}
                to create a new Google Sheet, then click{" "}
                <strong>Extensions → Apps Script</strong>.
              </li>
              <li>
                Delete any code there, paste the script on the right, and click{" "}
                <strong>Deploy → New deployment</strong>.
              </li>
              <li>
                Choose type <strong>Web app</strong>, set{" "}
                <em>Who has access</em> to <strong>Anyone</strong>, click{" "}
                <strong>Deploy</strong>, and paste the <strong>Web app URL</strong>{" "}
                below (or set <code className="rounded bg-slate-100 px-1">googleSheetWebhookUrl</code> in{" "}
                <code className="rounded bg-slate-100 px-1">src/lib/site-data.ts</code>).
              </li>
            </ol>

            <div className="mt-5 space-y-3">
              <label
                htmlFor="sheet-webhook-url"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600"
              >
                Google Apps Script Web App URL
              </label>
              <input
                id="sheet-webhook-url"
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900"
              />
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSaveWebhook}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-brand-navy px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span>Save Sheet URL</span>
                </button>
                <button
                  type="button"
                  onClick={handleTestWebhook}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Send Test Row</span>
                </button>
                {savedNotice && (
                  <span className="text-xs font-semibold text-emerald-700">
                    Saved!
                  </span>
                )}
              </div>
              {testStatus && (
                <p className="text-xs font-medium text-brand-blue">
                  {testStatus}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                2. Copy Google Apps Script Code
              </h2>
              <button
                type="button"
                onClick={handleCopyScript}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800"
              >
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copiedScript ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>
            <pre className="mt-3 max-h-64 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-emerald-300">
              <code>{GOOGLE_APPS_SCRIPT_CODE}</code>
            </pre>
          </div>
        </div>

        {/* Captured Leads Spreadsheet Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              Captured Customer Inquiries ({leads.length})
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
            >
              <span>Go to Contact Form</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {leads.length === 0 ? (
            <div className="p-12 text-center text-sm text-slate-500">
              No inquiries stored in this browser yet. Submit a test message on
              the Contact Form and it will appear here ready for Excel download.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Submitted customer consultation inquiries
                </caption>
                <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <tr>
                    <th scope="col" className="px-4 py-3.5">
                      Date & Time
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Phone / WhatsApp
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Website Type
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Budget
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Project Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {leads.map((lead, idx) => (
                    <tr key={`${lead.submittedAt}-${idx}`} className="hover:bg-slate-50/80">
                      <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">
                        {new Date(lead.submittedAt).toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                        {lead.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a
                          href={`tel:${lead.phone}`}
                          className="font-medium text-brand-blue hover:underline"
                        >
                          {lead.phone}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-slate-700 hover:underline"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {lead.businessType}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium">
                        {lead.budgetRange}
                      </td>
                      <td className="max-w-xs px-4 py-3 text-xs text-slate-600">
                        {lead.projectDetails || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
