"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Lock,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

interface LeadCaptureFormProps {
  defaultPackage?: string;
  compact?: boolean;
}

export default function LeadCaptureForm({
  defaultPackage = "",
  compact = false,
}: LeadCaptureFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultPackage) {
      setSelectedPackage(defaultPackage);
    }
  }, [defaultPackage]);

  // Listen for custom "select-package" event from Pricing cards on the Home page
  useEffect(() => {
    const handlePackageSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedPackage(customEvent.detail);
      }
    };
    window.addEventListener("select-pricing-package", handlePackageSelect);
    return () =>
      window.removeEventListener("select-pricing-package", handlePackageSelect);
  }, []);

  // Modern Web Guidance: Synchronize aria-invalid with :user-invalid and provide fallback
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap<
      Element,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");

    const syncFieldState = (el: EventTarget | null) => {
      if (
        !(
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }

      if (supportsUserInvalid) {
        const isUserInvalid = el.matches(":user-invalid");
        if (isUserInvalid) {
          el.setAttribute("aria-invalid", "true");
        } else {
          el.removeAttribute("aria-invalid");
        }
      } else {
        const isValid = el.checkValidity();
        el.classList.toggle("user-invalid-fallback", !isValid);
        el.classList.toggle("user-valid-fallback", isValid);
        if (!isValid) {
          el.setAttribute("aria-invalid", "true");
        } else {
          el.removeAttribute("aria-invalid");
        }
      }
    };

    const handleBlur = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasBlurred = true;
        dirtyState.set(target, state);
        if (state.hasInteracted || supportsUserInvalid) {
          syncFieldState(target);
        }
      }
    };

    const handleInput = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (state.hasBlurred || target.hasAttribute("aria-invalid")) {
          syncFieldState(target);
        }
      }
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleInput);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
      form.removeEventListener("change", handleInput);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Mark all invalid fields for screen readers on submit attempt
      const elements = Array.from(form.elements);
      for (const el of elements) {
        if (
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        ) {
          if (!el.checkValidity()) {
            el.classList.add("user-invalid-fallback");
            el.setAttribute("aria-invalid", "true");
          }
        }
      }
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(
          errData.error ||
            "Something went wrong sending your message. Please try again or message us on WhatsApp."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Unable to send right now. Please chat with us on WhatsApp or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-sm"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          Thank You! We&apos;ve Received Your Request
        </h3>
        <p className="mx-auto mt-2 max-w-md text-base text-slate-700">
          One of our friendly project specialists will review your goals and get
          back to you within <strong>4 business hours</strong> with clear ideas
          and pricing.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Hi! I just submitted the consultation form on your website and wanted to say hello."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#128C7E] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#075E54]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Need a faster reply? Message us on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex min-h-[48px] items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action="/api/contact"
      method="POST"
      noValidate
      className="space-y-5 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
    >
      {/* Anti-spam honeypot field (hidden from real users) */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company_website_hp">Leave this field empty</label>
        <input
          type="text"
          id="company_website_hp"
          name="company_website_hp"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
            aria-hidden="true"
          />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name (Single name field per Modern Web Guidance) */}
        <div>
          <label
            htmlFor="full-name"
            className="block text-sm font-semibold text-slate-900"
          >
            Your Full Name <span className="text-red-600">*</span>
          </label>
          <span
            id="name-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            How should we address you?
          </span>
          <input
            type="text"
            id="full-name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            enterKeyHint="next"
            aria-describedby="name-hint"
            aria-errormessage="name-error"
            placeholder="e.g. Sarah Jenkins"
            className="form-input min-h-[48px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-blue"
          />
          <p
            id="name-error"
            className="field-error-msg mt-1.5 items-center gap-1.5 text-xs font-medium text-red-600"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Please enter your name (at least 2 characters).</span>
          </p>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-900"
          >
            Email Address <span className="text-red-600">*</span>
          </label>
          <span
            id="email-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            Where we&apos;ll send your free custom quote
          </span>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="next"
            aria-describedby="email-hint"
            aria-errormessage="email-error"
            placeholder="you@yourbusiness.com"
            className="form-input min-h-[48px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-blue"
          />
          <p
            id="email-error"
            className="field-error-msg mt-1.5 items-center gap-1.5 text-xs font-medium text-red-600"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Please enter a valid email address (e.g. name@domain.com).</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Phone / WhatsApp Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-slate-900"
          >
            Phone or WhatsApp Number <span className="text-red-600">*</span>
          </label>
          <span
            id="phone-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            For a quick 10-minute discovery call or text
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            enterKeyHint="next"
            pattern="[\d\+\-\(\)\s]{7,25}"
            aria-describedby="phone-hint"
            aria-errormessage="phone-error"
            placeholder="+1 (555) 234-5678"
            className="form-input min-h-[48px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-blue"
          />
          <p
            id="phone-error"
            className="field-error-msg mt-1.5 items-center gap-1.5 text-xs font-medium text-red-600"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Please enter a valid phone or WhatsApp number.</span>
          </p>
        </div>

        {/* Business Type (6+ options -> <select> per Modern Web Guidance) */}
        <div>
          <label
            htmlFor="business-type"
            className="block text-sm font-semibold text-slate-900"
          >
            What Type of Website Do You Need?{" "}
            <span className="text-red-600">*</span>
          </label>
          <span
            id="business-type-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            Pick the closest match—we&apos;ll help you decide
          </span>
          <select
            id="business-type"
            name="businessType"
            required
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            aria-describedby="business-type-hint"
            aria-errormessage="business-type-error"
            className="form-input min-h-[48px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-blue"
          >
            <option value="" disabled>
              Select an option...
            </option>
            <option value="New Business Website">
              New Business or Service Website
            </option>
            <option value="Online Store (E-Commerce)">
              Online Store (Sell Products Online)
            </option>
            <option value="Booking / Appointment Website">
              Booking or Appointment Website
            </option>
            <option value="High-Converting Landing Page">
              Landing Page for Ads / Launch
            </option>
            <option value="Redesign Existing Website">
              Redesign My Current Website
            </option>
            <option value="Starter Package ($790)">
              Starter Package ($790)
            </option>
            <option value="Business Package ($1,490)">
              Business Package ($1,490)
            </option>
            <option value="Premium / E-Commerce ($2,490+)">
              Premium / E-Commerce Package ($2,490+)
            </option>
            <option value="Not Sure Yet - Need Advice">
              I&apos;m Not Sure Yet — Need Friendly Advice
            </option>
          </select>
          <p
            id="business-type-error"
            className="field-error-msg mt-1.5 items-center gap-1.5 text-xs font-medium text-red-600"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Please select what type of website you are looking for.</span>
          </p>
        </div>
      </div>

      {/* Budget Range: 4 options (< 6) -> Visible Radio Buttons per Selection Control Decision Matrix */}
      {!compact && (
        <fieldset className="space-y-2.5 pt-1">
          <legend className="text-sm font-semibold text-slate-900">
            Estimated Budget Range <span className="text-red-600">*</span>
          </legend>
          <p className="text-xs text-slate-600">
            Helps us recommend the best features without wasting your time
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "budget-starter", value: "$700 – $1,000", label: "$700 – $1,000" },
              {
                id: "budget-business",
                value: "$1,000 – $2,000",
                label: "$1,000 – $2,000",
              },
              {
                id: "budget-premium",
                value: "$2,000 – $4,000",
                label: "$2,000 – $4,000",
              },
              { id: "budget-scale", value: "$4,000+", label: "$4,000+" },
            ].map((item, idx) => (
              <label
                key={item.id}
                htmlFor={item.id}
                className="flex min-h-[48px] cursor-pointer items-center gap-2.5 rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-brand-blue hover:bg-white has-[:checked]:border-brand-orange has-[:checked]:bg-orange-50/70 has-[:checked]:text-brand-navy"
              >
                <input
                  type="radio"
                  id={item.id}
                  name="budgetRange"
                  value={item.value}
                  defaultChecked={idx === 1}
                  required
                  className="h-4 w-4 accent-brand-orange"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Project Details */}
      <div>
        <label
          htmlFor="project-details"
          className="block text-sm font-semibold text-slate-900"
        >
          Tell Us Briefly About Your Business{" "}
          <span className="font-normal text-slate-500">(Optional)</span>
        </label>
        <span
          id="details-hint"
          className="mb-1.5 block text-xs text-slate-600"
        >
          What do you sell or offer, and what is your main goal with a new website?
        </span>
        <textarea
          id="project-details"
          name="projectDetails"
          rows={3}
          maxLength={1200}
          aria-describedby="details-hint"
          placeholder="e.g. I'm opening a local plumbing business in Austin and need a clean website so homeowners can call or book online..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-blue"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-brand-orange px-6 py-3.5 text-base font-bold text-white shadow-md shadow-orange-950/10 transition-all hover:bg-brand-orange-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          <span>
            {isSubmitting
              ? "Sending Your Request..."
              : "Get My Free Consultation & Quote"}
          </span>
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <Lock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span>
            100% free, no-obligation advice. We never share your information.
          </span>
        </p>
      </div>
    </form>
  );
}
