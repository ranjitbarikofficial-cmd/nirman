import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-300">
      {/* Repeated "Book a Free Call" Strip at top of Footer */}
      <div className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Ready to grow your business?
            </p>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Not sure what kind of website you need? Let&apos;s chat for 15 minutes—free.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#contact-section"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-hover"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                SITE_CONFIG.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Agency Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-brand text-lg font-semibold tracking-wider text-white transition-colors hover:text-brand-orange"
            >
              {SITE_CONFIG.agencyName}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.description}
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-400" role="list">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>Plain-English support, zero tech jargon</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>Fixed transparent pricing</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              <li>
                <Link href="/" className="hover:text-brand-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-orange">
                  Client Work & Results
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-brand-orange">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-orange">
                  Business Growth Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange">
                  Contact & Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What We Build
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              <li>
                <Link
                  href="/services#business-websites"
                  className="hover:text-brand-orange"
                >
                  Business & Service Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ecommerce-stores"
                  className="hover:text-brand-orange"
                >
                  Online Stores (E-Commerce)
                </Link>
              </li>
              <li>
                <Link
                  href="/services#landing-pages"
                  className="hover:text-brand-orange"
                >
                  High-Converting Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/services#website-redesign"
                  className="hover:text-brand-orange"
                >
                  Complete Website Redesigns
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seo-and-maintenance"
                  className="hover:text-brand-orange"
                >
                  Local Google SEO & Monthly Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm" role="list">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(SITE_CONFIG.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] items-center rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium capitalize text-slate-300 transition-colors hover:border-brand-orange hover:text-white"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {currentYear} {SITE_CONFIG.agencyName}. All rights reserved.
          </p>
          <p>
            Designed to turn visitors into loyal customers.
          </p>
        </div>
      </div>
    </footer>
  );
}
