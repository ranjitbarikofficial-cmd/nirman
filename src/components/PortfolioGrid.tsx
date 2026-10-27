"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/site-data";

const CATEGORIES = [
  "All",
  "Business Website",
  "E-Commerce",
  "Lead Gen Landing Page",
  "Website Redesign",
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Filter Buttons inside semantic <search> landmark */}
      <search aria-label="Filter portfolio projects by category" className="mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
                className={`min-h-[44px] rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-brand-navy hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </search>

      {/* Live status announcement for screen readers */}
      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length} projects in {selectedCategory}
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} showcase`}
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

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    aria-label={`Build a website similar to ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-orange"
                  >
                    <span>Want a similar website? Get a free quote</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
