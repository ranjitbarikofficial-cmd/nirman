import type { Metadata } from "next";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Contact Us & Book a Free Consultation",
  description:
    "Get a free website consultation and fixed-price quote for your business. Reach out via our form, WhatsApp chat, phone, or email.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Free Consultation & Quote
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s Build a Website That Grows Your Business
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Tell us a little about your business below, or message us directly
              on WhatsApp. We reply to all inquiries within 4 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section id="book-call" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Sidebar: WhatsApp, Phone, Email, Socials */}
            <div className="space-y-6 lg:col-span-5">
              {/* Instant WhatsApp Chat Card */}
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
                <span className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                  Fastest Response
                </span>
                <h2 className="mt-3 text-xl font-extrabold text-slate-900">
                  Prefer Texting on WhatsApp?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Tap below to start a direct WhatsApp chat with our project
                  team. Ask quick questions about pricing, timelines, or your
                  idea.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#128C7E] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#075E54]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>

              {/* Direct Contact Details Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Direct Contact Details
                </h2>

                <ul className="mt-5 space-y-4 text-sm text-slate-700" role="list">
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Call or Text Us
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
                        className="mt-0.5 block text-base font-bold text-slate-900 hover:text-brand-orange"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Us
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="mt-0.5 block text-base font-bold text-slate-900 hover:text-brand-orange"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Working Hours
                      </p>
                      <p className="mt-0.5 font-semibold text-slate-900">
                        Mon – Fri: 9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Office Location
                      </p>
                      <p className="mt-0.5 font-semibold text-slate-900">
                        {SITE_CONFIG.address}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Connect With Us Online
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Object.entries(SITE_CONFIG.socials).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[38px] items-center rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold capitalize text-slate-700 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        >
                          {platform}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* What happens next box */}
              <div className="rounded-3xl bg-brand-navy p-6 text-white sm:p-8">
                <h3 className="text-base font-bold">
                  What Happens After You Submit?
                </h3>
                <ul className="mt-4 space-y-3 text-xs text-slate-300 sm:text-sm" role="list">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>
                      We review your business goals and current online presence.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>
                      We reach out within 4 business hours to schedule your
                      free 15-minute call or send your quote.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>
                      You receive a clear, fixed-price proposal with zero
                      obligation.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Main Validated Contact Form */}
            <div className="lg:col-span-7">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
