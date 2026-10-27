"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ArrowRight, Globe } from "lucide-react";
import {
  SITE_CONFIG,
  COUNTRIES,
  LANGUAGES,
  CountryCode,
  LanguageCode,
} from "@/lib/site-data";
import { useLocale } from "@/context/LocaleContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { country, setCountry, language, setLanguage, t } = useLocale();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="visually-hidden fixed left-4 top-4 z-[100] rounded-lg bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top Bar: Country Currency & Language Switcher */}
      <div className="border-b border-slate-100 bg-slate-900 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="hidden font-medium text-slate-300 sm:block">
            <span className="font-brand text-sm font-bold italic lowercase text-brand-orange">
              nirman
            </span>{" "}
            — {t.hero.badge}
          </p>

          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
            {/* Country & Currency Selector */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="country-currency-select" className="sr-only">
                Select Country and Currency
              </label>
              <span className="text-slate-400">Country / Currency:</span>
              <select
                id="country-currency-select"
                value={country}
                onChange={(e) => setCountry(e.target.value as CountryCode)}
                className="cursor-pointer rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-semibold text-white transition-colors hover:border-brand-orange focus:border-brand-orange"
              >
                {Object.values(COUNTRIES).map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.countryName} ({c.currencyCode} {c.symbol.trim()})
                  </option>
                ))}
              </select>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5">
              <Globe
                className="h-3.5 w-3.5 text-brand-orange"
                aria-hidden="true"
              />
              <label htmlFor="language-select" className="sr-only">
                Select Language
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="cursor-pointer rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-semibold text-white transition-colors hover:border-brand-orange focus:border-brand-orange"
              >
                {Object.values(LANGUAGES).map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeLabel} ({l.label})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Wordmark Only: all lowercase ("small letter") in distinct editorial italic serif font */}
        <Link
          href="/"
          className="font-brand text-2xl font-bold italic lowercase tracking-wide text-brand-navy transition-colors hover:text-brand-orange"
        >
          {SITE_CONFIG.agencyName}
        </Link>

        {/* Desktop Primary Navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6" role="list">
            {navLinks.map((link) => (
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
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <PhoneCall
              className="h-4 w-4 text-brand-orange"
              aria-hidden="true"
            />
            <span>{SITE_CONFIG.phone}</span>
          </a>

          <Link
            href="/#contact-section"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:shadow"
          >
            <span>{t.nav.bookCall}</span>
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
            {navLinks.map((link) => (
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
              <PhoneCall
                className="h-5 w-5 text-brand-orange"
                aria-hidden="true"
              />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <Link
              href="/#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-orange-hover"
            >
              <span>{t.nav.bookCall}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
