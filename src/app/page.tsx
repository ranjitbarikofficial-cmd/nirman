import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  ShoppingBag,
  Rocket,
  Sparkles,
  TrendingUp,
  Clock,
  BadgeDollarSign,
  Smartphone,
  Search,
  HeartHandshake,
  Target,
  PhoneCall,
  Calendar,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import {
  SITE_CONFIG,
  TRUST_STATS,
  SERVICES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  PORTFOLIO_PROJECTS,
  BLOG_POSTS,
} from "@/lib/site-data";
import FadeIn from "@/components/FadeIn";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import PricingCards from "@/components/PricingCards";
import FaqAccordion from "@/components/FaqAccordion";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShoppingBag,
  Rocket,
  Sparkles,
  TrendingUp,
};

const WHY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  BadgeDollarSign,
  Smartphone,
  Search,
  HeartHandshake,
  Target,
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          1. HERO SECTION
      ====================================================================== */}
      <section className="relative bg-brand-navy pb-20 pt-14 text-white sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/70 px-4 py-1.5 text-xs font-semibold text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Websites Built for Business Owners, Not Techies</span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                We Build Websites That Bring Your Business Online
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Turn casual visitors into paying customers with a fast,
                trustworthy website, online store, or booking system—delivered
                in weeks with zero technical headaches.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contact-section"
                  className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl bg-brand-orange px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand-orange/25 transition-all hover:bg-brand-orange-hover"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>

                <Link
                  href="#portfolio"
                  className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-7 py-4 text-base font-bold text-white transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span>View Our Work</span>
                </Link>
              </div>

              {/* Risk-Reversal Micro-Benefits */}
              <ul
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-slate-300"
                role="list"
              >
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>Ready in 2–4 weeks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>Fixed, transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>100% owned by you</span>
                </li>
              </ul>
            </div>

            {/* Hero Visual Card (LCP Optimized) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-slate-700/80 bg-slate-900/90 p-5 shadow-2xl sm:p-6">
                {/* Browser Mockup Header */}
                <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="rounded-md bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
                    yourbusiness.com
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    99/100 Speed
                  </span>
                </div>

                {/* Business Result Preview Card */}
                <div className="space-y-4 rounded-2xl bg-slate-800/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Monthly Website Inquiries
                      </p>
                      <p className="mt-1 text-3xl font-extrabold text-white">
                        +184% Growth
                      </p>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                      <TrendingUp className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Visual Bar Chart Representation */}
                  <div
                    className="grid grid-cols-6 items-end gap-2 pt-3"
                    aria-hidden="true"
                  >
                    <div className="h-10 rounded-t-lg bg-slate-700" />
                    <div className="h-14 rounded-t-lg bg-slate-700" />
                    <div className="h-16 rounded-t-lg bg-slate-600" />
                    <div className="h-24 rounded-t-lg bg-brand-blue" />
                    <div className="h-28 rounded-t-lg bg-brand-orange/80" />
                    <div className="h-36 rounded-t-lg bg-brand-orange" />
                  </div>

                  {/* Live Lead Notification Pill */}
                  <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-slate-700 bg-slate-900/90 p-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="text-xs">
                      <p className="font-bold text-white">
                        New Consultation Booked!
                      </p>
                      <p className="text-slate-400">
                        Customer found you on Google Search • 2 mins ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. TRUST BAR
      ====================================================================== */}
      <section
        aria-label="Agency track record"
        className="relative z-10 -mt-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-slate-100 text-center sm:text-left lg:border-r lg:last:border-none lg:pr-6"
            >
              <p className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. SERVICES OVERVIEW
      ====================================================================== */}
      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              What We Can Build For You
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Win Customers Online
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you are launching your very first business or upgrading an
              outdated site, we build websites designed around one thing:{" "}
              <strong>growing your revenue</strong>.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => {
              const IconComponent =
                SERVICE_ICONS[service.icon] || Building2;
              return (
                <FadeIn
                  key={service.id}
                  delay={idx * 0.05}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-orange">
                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        From {service.startingPrice}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700" role="list">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4">
                    <Link
                      href={`/services#${service.id}`}
                      aria-label={`Learn more about ${service.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue transition-colors hover:text-brand-orange"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}

            {/* Custom Advice Card in 6th slot */}
            <FadeIn
              delay={0.25}
              className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue p-7 text-white shadow-lg"
            >
              <div>
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-orange-200">
                  Free Expert Guidance
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">
                  Not Sure Which Option Fits Your Business?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Tell us what you sell and who your customers are. We&apos;ll
                  recommend the exact setup that brings the highest return on
                  your budget.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="#contact-section"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-orange-hover"
                >
                  <span>Book a Free 15-Min Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. WHY CHOOSE US
      ====================================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Why Business Owners Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Zero Confusing Tech Jargon. Just Real Business Results.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              You have a business to run. We handle the design, copywriting,
              mobile optimization, and setup so you can focus on serving your
              customers.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = WHY_ICONS[item.icon] || CheckCircle2;
              return (
                <FadeIn
                  key={item.title}
                  delay={idx * 0.05}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. OUR PROCESS IN 4 STEPS
      ====================================================================== */}
      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Simple 4-Step Process
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              From First Idea to Live Website in 4 Easy Steps
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              We keep you in the loop at every stage without overwhelming you
              with technical decisions.
            </p>
          </FadeIn>

          <ol
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            role="list"
          >
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.step}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-brand-orange">
                      {step.step}
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                      Step {idx + 1} of 4
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand-orange">
                    {step.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              href="#contact-section"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-brand-orange-hover"
            >
              <span>Start Step 1: Book Your Free Discovery Call</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. PORTFOLIO PREVIEW (6 Project Cards)
      ====================================================================== */}
      <section id="portfolio" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                Recent Client Results
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Websites That Pay For Themselves
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Take a look at how we&apos;ve helped local businesses, clinics,
                and online brands attract more customers and grow sales.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-brand-navy hover:bg-slate-50"
            >
              <span>View Full Portfolio</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project, idx) => (
              <FadeIn
                key={project.id}
                delay={idx * 0.05}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} design preview`}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-navy/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{project.result}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. TESTIMONIALS SLIDER
      ====================================================================== */}
      <section className="bg-slate-100/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              What Business Owners Say
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by Entrepreneurs Who Value Simplicity & Results
            </h2>
          </FadeIn>

          <TestimonialsSlider />
        </div>
      </section>

      {/* =====================================================================
          8. PRICING PACKAGES (Starter, Business, Premium)
      ====================================================================== */}
      <section id="pricing" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Simple, Honest Investment
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Clear Packages With Zero Surprise Fees
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pick the package that fits your stage of business. Need something
              custom? We&apos;ll tailor a fixed quote on our free call.
            </p>
          </FadeIn>

          <PricingCards />
        </div>
      </section>

      {/* =====================================================================
          9. FAQ ACCORDION
      ====================================================================== */}
      <section id="faq" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Common Questions Answered
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Know Before Starting
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Straightforward answers about cost, timelines, domains, hosting,
              and ongoing support.
            </p>
          </FadeIn>

          <FaqAccordion />
        </div>
      </section>

      {/* =====================================================================
          10. BLOG / RESOURCES PREVIEW (For SEO Growth)
      ====================================================================== */}
      <section className="border-t border-slate-200/80 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                Free Business Guides
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Practical Tips to Grow Your Business Online
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-orange"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Read All Articles</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:border-brand-blue/30 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="rounded-md bg-brand-navy/10 px-2.5 py-1 font-semibold text-brand-navy">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand-orange"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-5 pt-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read article: ${post.title}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-orange"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. FINAL CTA BANNER WITH EMBEDDED LEAD CAPTURE FORM
      ====================================================================== */}
      <section
        id="contact-section"
        className="scroll-mt-20 bg-gradient-to-b from-brand-navy to-slate-900 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Reassurance & Direct Contact */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
                Let&apos;s Bring Your Business Online
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get Your Free Website Action Plan & Fixed Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Fill out this quick form and we&apos;ll get back to you within 4
                business hours with honest advice, timeline estimates, and
                exact pricing—no pushy sales pitch.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-slate-200" role="list">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Free 15-Minute Consultation:</strong> Discuss your
                    goals in plain English.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Custom Roadmap:</strong> Find out the fastest way to
                    start getting leads online.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Zero Obligation:</strong> Keep our recommendations
                    even if we don&apos;t work together.
                  </span>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Prefer to talk right now?
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-3 text-base font-bold text-white hover:text-brand-orange"
                  >
                    <PhoneCall
                      className="h-5 w-5 text-brand-orange"
                      aria-hidden="true"
                    />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <p className="text-xs text-slate-400">
                    Monday – Friday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Lead Capture Form */}
            <div className="lg:col-span-7">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
