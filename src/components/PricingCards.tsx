"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/site-data";
import { useLocale } from "@/context/LocaleContext";

export default function PricingCards() {
  const { currency, t } = useLocale();

  const handleSelectPackage = (pkgName: string, localizedPrice: string) => {
    const label = `${pkgName} Package (${localizedPrice})`;
    window.dispatchEvent(
      new CustomEvent("select-pricing-package", { detail: label })
    );
    const contactEl = document.getElementById("contact-section");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
      {PRICING_PACKAGES.map((pkg) => {
        const localizedPrice = currency.rates[pkg.rateKey];

        return (
          <div
            key={pkg.name}
            className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
              pkg.highlighted
                ? "border-2 border-brand-orange bg-brand-navy text-white shadow-2xl shadow-brand-navy/20 lg:-translate-y-2"
                : "border border-slate-200 bg-white text-slate-900 shadow-lg shadow-slate-900/5"
            }`}
          >
            {pkg.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm">
                {pkg.badge}
              </div>
            )}

            <div>
              {!pkg.highlighted && (
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {pkg.badge}
                </span>
              )}

              <h3
                className={`mt-4 text-2xl font-extrabold ${
                  pkg.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {pkg.name}
              </h3>

              <p
                className={`mt-2 text-sm leading-relaxed ${
                  pkg.highlighted ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {pkg.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2 border-b border-slate-200/20 pb-6">
                <span
                  className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
                    pkg.highlighted ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {localizedPrice}
                </span>
                <span
                  className={`text-xs font-medium ${
                    pkg.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  / {pkg.billing} ({currency.currencyCode})
                </span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm" role="list">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        pkg.highlighted
                          ? "text-brand-orange"
                          : "text-emerald-600"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        pkg.highlighted ? "text-slate-200" : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => handleSelectPackage(pkg.name, localizedPrice)}
                aria-label={`${t.sections.getQuoteBtn} — ${pkg.name} (${localizedPrice})`}
                className={`flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold transition-all ${
                  pkg.highlighted
                    ? "bg-brand-orange text-white shadow-md hover:bg-brand-orange-hover"
                    : "bg-brand-navy text-white hover:bg-brand-blue"
                }`}
              >
                <span>{t.sections.getQuoteBtn}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
