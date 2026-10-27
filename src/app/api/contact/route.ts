import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/site-data";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Anti-spam honeypot check
    if (body.company_website_hp) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone, businessType, budgetRange, projectDetails } =
      body;

    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: "Please fill in your name, email, phone, and website type." },
        { status: 400 }
      );
    }

    // Optional: Forward to Formspree or Google Sheets Webhook if configured
    const endpoint =
      process.env.FORMSPREE_ENDPOINT ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      SITE_CONFIG.formspreeEndpoint;

    if (endpoint) {
      const forwardRes = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessType,
          budgetRange: budgetRange || "Not specified",
          projectDetails: projectDetails || "No additional details provided",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!forwardRes.ok) {
        console.error("Webhook forwarding error:", await forwardRes.text());
      }
    } else {
      // Log lead cleanly in server console during local dev
      console.log("=== NEW WEBSITE LEAD CAPTURED ===", {
        name,
        email,
        phone,
        businessType,
        budgetRange,
        projectDetails,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Lead captured successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
