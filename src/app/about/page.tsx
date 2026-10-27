import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Target,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG, TRUST_STATS } from "@/lib/site-data";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Our Web Development Agency",
  description:
    "Learn about our mission to help everyday business owners and first-time entrepreneurs succeed online without confusing tech jargon or agency bloat.",
};

const TEAM_MEMBERS = [
  {
    name: "Alex Rivera",
    role: "Founder & Lead Strategist",
    bio: "Helps business owners turn their goals into clear, high-converting website plans without any confusing tech talk.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Head of Design & Customer Experience",
    bio: "Designs clean, trustworthy layouts that look great on every phone and make it effortless for customers to buy or book.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jordan Brooks",
    role: "Lead Web & E-Commerce Developer",
    bio: "Makes sure your website loads in a blink, ranks well on Google, and connects seamlessly to your WhatsApp, email, and payments.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
              About {SITE_CONFIG.agencyName}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              We Started This Agency Because Getting a Business Website Shouldn&apos;t Be Stressful
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Too many small business owners get burned by overpriced agencies
              that speak in confusing technical jargon—or cheap templates that
              never bring in a single customer. We built {SITE_CONFIG.agencyName}{" "}
              to be the friendly, results-first partner you can actually trust.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-6">
              <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                Our Story & Mission
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Helping Real Businesses Thrive Online Since Day One
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                When we started {SITE_CONFIG.agencyName} over 8 years ago, we
                noticed a clear pattern: local business owners and first-time
                entrepreneurs didn&apos;t care about buzzwords or complicated
                frameworks. They cared about{" "}
                <strong>getting more phone calls, more bookings, and more sales</strong>.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                So we stripped away the agency fluff. We created a streamlined
                4-step process with transparent fixed pricing, plain-English
                communication, and fast 2-to-4-week turnarounds.
              </p>
              <ul className="space-y-3 pt-2 text-sm font-medium text-slate-800" role="list">
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>You own 100% of your website, domain, and content</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>Direct access to the people actually building your site</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>Personal video training included at launch</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Target
                  className="h-8 w-8 text-brand-orange"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Results Over Flashiness
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Every button, headline, and section we design has a clear job:
                  building trust and guiding visitors to contact or buy from you.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <HeartHandshake
                  className="h-8 w-8 text-brand-orange"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Long-Term Partnership
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We don&apos;t vanish once your check clears. We stay in your
                  corner to support your growth as your business expands.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
                <ShieldCheck
                  className="h-8 w-8 text-brand-orange"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Our No-Surprise Guarantee
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  You get a clear written timeline and fixed price before we
                  begin. We revise the design until you are proud to share your
                  website with every customer.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-brand-navy p-8 text-white lg:grid-cols-4">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand-orange sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-300">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              The People Behind Your Website
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Meet Our Dedicated Team
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A friendly, tight-knit team of designers, copywriters, and
              developers obsessed with helping small businesses win.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <FadeIn
                key={member.name}
                delay={idx * 0.05}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    width={500}
                    height={375}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Repeated Book a Free Call CTA */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let&apos;s Talk About Your Business Goals
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Book a free 15-minute call directly with our founder. No pressure,
            just honest advice on how to grow your business online.
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
