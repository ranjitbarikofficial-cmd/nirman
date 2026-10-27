"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Tips & Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="visually-hidden fixed left-4 top-4 z-[100] rounded-lg bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-brand-navy"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-brand-orange shadow-sm">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            {SITE_CONFIG.agencyName.split(" ")[0]}
            <span className="text-brand-orange">
              {" "}
              {SITE_CONFIG.agencyName.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <PhoneCall className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            <span>{SITE_CONFIG.phone}</span>
          </a>

          <Link
            href="/#contact-section"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:shadow"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl lg:hidden"
        >
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              <PhoneCall className="h-5 w-5 text-brand-orange" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
            <Link
              href="/#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-orange-hover"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
