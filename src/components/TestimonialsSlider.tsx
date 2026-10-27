"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  TrendingUp,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div
            className="flex items-center gap-1 text-amber-400"
            role="img"
            aria-label={`${current.rating} out of 5 stars`}
          >
            {Array.from({ length: current.rating }).map((_, idx) => (
              <Star
                key={idx}
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Result: {current.metric}</span>
          </span>
        </div>

        <div className="relative min-h-[180px] py-6">
          <Quote
            className="mb-3 h-8 w-8 text-brand-orange/30"
            aria-hidden="true"
          />
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.id}
              initial={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }
              }
              transition={{ duration: 0.25 }}
            >
              <blockquote className="text-lg font-medium leading-relaxed text-slate-800 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-slate-900">
                    {current.name}
                  </p>
                  <p className="text-sm text-slate-600">{current.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial from ${item.name}`}
                aria-current={idx === activeIndex ? "true" : undefined}
                className={`h-3 rounded-full transition-all ${
                  idx === activeIndex
                    ? "w-8 bg-brand-orange"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-brand-navy hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-brand-navy hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
