import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export default function FaqAccordion() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {FAQS.map((faq, index) => (
        <details
          key={faq.question}
          name="home-faq-accordion"
          open={index === 0}
          className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-all open:border-brand-blue/40 open:shadow-md"
        >
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-200 group-open:rotate-45 group-open:bg-brand-orange group-open:text-white"
            >
              <Plus className="h-5 w-5" />
            </span>
          </summary>
          <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-base leading-relaxed text-slate-600">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
