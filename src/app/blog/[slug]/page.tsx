import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-orange"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to All Business Guides</span>
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
          <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-brand-orange">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          <p className="text-xl font-medium text-slate-900">{post.excerpt}</p>
          <p>
            When potential customers hear about your business—whether from a
            friend, an Instagram post, or a local directory—their very next move
            is almost always the same: they search your name on Google and tap
            on your website.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-900">
            What Customers Look For in the First 5 Seconds
          </h2>
          <ul className="space-y-3" role="list">
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong>Clarity:</strong> Do you clearly state what you offer
                and who you serve right at the top of the screen?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong>Mobile Speed:</strong> Does the page load immediately on
                their smartphone without pinching or zooming?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong>Effortless Next Step:</strong> Is there an obvious
                button to call, message on WhatsApp, or request a quote?
              </span>
            </li>
          </ul>
          <p>
            At <strong>{SITE_CONFIG.agencyName}</strong>, we bake these exact
            principles into every business website and online store we build—so
            you never lose a great customer to an outdated online presence.
          </p>
        </div>

        {/* Embedded Article CTA */}
        <div className="mt-12 rounded-3xl bg-brand-navy p-8 text-white sm:p-10">
          <h2 className="text-2xl font-extrabold">
            Want Us to Review Your Current Website for Free?
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Book a free 15-minute call and we&apos;ll give you 3 actionable ways
            to get more leads and sales from your website.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-brand-orange-hover"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
