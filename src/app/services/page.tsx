import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ShoppingBag,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Clock,
  HelpCircle,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/site-data";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Our Web Design & E-Commerce Services",
  description:
    "Explore our plain-English web design services: Business Websites, Online Stores, High-Converting Landing Pages, Website Redesigns, and Google SEO & Monthly Care.",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShoppingBag,
  Rocket,
  Sparkles,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Services Built For Business Growth
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Websites & Online Stores Designed to Win You More Customers
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              We don&apos;t sell confusing technical packages. We build complete,
              ready-to-use websites that make your business look trustworthy,
              show up on Google, and turn visitors into phone calls and sales.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-orange-hover"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/70 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                <span>Compare Pricing Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Breakdown */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.icon] || Building2;
            const isEven = index % 2 === 0;

            return (
              <FadeIn
                key={service.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12"
              >
                <div
                  id={service.id}
                  className="scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                >
                  {/* Service Overview */}
                  <div
                    className={`lg:col-span-7 ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-orange">
                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {service.fullDesc}
                    </p>

                    <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                      How This Helps Your Business:
                    </h3>
                    <ul className="mt-3 space-y-3 text-sm text-slate-700 sm:text-base" role="list">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Summary & CTA Box */}
                  <div
                    className={`lg:col-span-5 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-6 sm:p-8">
                      <div className="flex items-baseline justify-between border-b border-slate-200 pb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Starting Investment
                        </span>
                        <span className="text-3xl font-extrabold text-brand-navy">
                          {service.startingPrice}
                        </span>
                      </div>

                      <dl className="mt-4 space-y-4 text-sm">
                        <div>
                          <dt className="font-bold text-slate-900">
                            Best Suited For:
                          </dt>
                          <dd className="mt-1 text-slate-600">
                            {service.idealFor}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-200/70 pt-3">
                          <dt className="flex items-center gap-1.5 font-bold text-slate-900">
                            <Clock
                              className="h-4 w-4 text-brand-orange"
                              aria-hidden="true"
                            />
                            <span>Typical Timeline:</span>
                          </dt>
                          <dd className="font-semibold text-slate-800">
                            {service.timeline}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-6 space-y-3 pt-2">
                        <Link
                          href={`/contact?service=${encodeURIComponent(
                            service.title
                          )}`}
                          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-orange-hover"
                        >
                          <span>Request a Quote for {service.title}</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                          href="/contact"
                          className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
                        >
                          <HelpCircle className="h-4 w-4" aria-hidden="true" />
                          <span>Book a Free Call to Ask Questions</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Bottom Book a Free Call Banner */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Need a Custom Combination of Services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Let&apos;s hop on a quick 15-minute call with {SITE_CONFIG.agencyName}.
            We&apos;ll listen to your goals and put together a clear, fixed-price
            plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-brand-orange px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-brand-orange-hover"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
