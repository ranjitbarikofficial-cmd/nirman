import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Small Business Website & Growth Tips | Blog",
  description:
    "Plain-English guides for business owners and entrepreneurs on getting more customers, ranking on Google, and turning website visitors into leads.",
};

export default function BlogIndexPage() {
  return (
    <div>
      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Free Business Growth Guides
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Practical Advice for Growing Your Business Online
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              No complicated tech tutorials—just actionable tips to help you
              attract more local customers, build trust, and increase sales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-full bg-brand-navy/10 px-3 py-1 font-bold text-brand-navy">
                      {post.category}
                    </span>
                    <span>
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand-orange"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read full article: ${post.title}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-orange"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
