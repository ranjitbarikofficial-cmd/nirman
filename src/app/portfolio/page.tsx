import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work & Client Results | Portfolio",
  description:
    "Browse real-world examples of business websites, online stores, and high-converting landing pages we have built to help business owners grow.",
};

export default function PortfolioPage() {
  return (
    <div>
      {/* Portfolio Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
            Proven Business Impact
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Websites Built to Turn Visitors Into Loyal Customers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Filter by industry or website type below to see how we help local
            service businesses, clinics, and online stores grow their revenue.
          </p>
        </div>
      </section>

      {/* Filterable Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>

      {/* Repeated Book a Free Call CTA */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Make Your Business Our Next Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Book a free 15-minute call and we&apos;ll show you what a modern,
            high-converting website can do for your business.
          </p>
          <div className="mt-8">
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
