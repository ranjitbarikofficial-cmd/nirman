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
import { useLocale } from "@/context/LocaleContext";

interface LeadCaptureFormProps {
  defaultPackage?: string;
  compact?: boolean;
}

export default function LeadCaptureForm({
  defaultPackage = "",
  compact = false,
}: LeadCaptureFormProps) {
  const { currency, language, t } = useLocale();
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

  // Listen for custom "select-pricing-package" event from Pricing cards
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
    const payload = {
      ...Object.fromEntries(formData.entries()),
      selectedCountry: currency.countryName,
      selectedCurrency: currency.currencyCode,
      selectedLanguage: language,
    };

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
          {t.form.thankYouTitle}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-base text-slate-700">
          {t.form.thankYouSub}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Hi Nirman! I just submitted the consultation form on your website."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#128C7E] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#075E54]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>{t.nav.whatsappChat}</span>
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
      {/* Anti-spam honeypot field */}
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
        {/* Full Name */}
        <div>
          <label
            htmlFor="full-name"
            className="block text-sm font-semibold text-slate-900"
          >
            {t.form.nameLabel} <span className="text-red-600">*</span>
          </label>
          <span
            id="name-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            {t.form.nameHint}
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
            {t.form.emailLabel} <span className="text-red-600">*</span>
          </label>
          <span
            id="email-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            {t.form.emailHint}
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
            <span>Please enter a valid email address.</span>
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
            {t.form.phoneLabel} <span className="text-red-600">*</span>
          </label>
          <span
            id="phone-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            {t.form.phoneHint}
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
            placeholder="+91 98765 43210 / +1 (555) 234-5678"
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

        {/* Business Type with Dynamic Currency Package Prices */}
        <div>
          <label
            htmlFor="business-type"
            className="block text-sm font-semibold text-slate-900"
          >
            {t.form.typeLabel} <span className="text-red-600">*</span>
          </label>
          <span
            id="business-type-hint"
            className="mb-1.5 block text-xs text-slate-600"
          >
            {t.form.typeHint}
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
            <option value={`Starter Package (${currency.rates.pkgStarter})`}>
              Starter Package ({currency.rates.pkgStarter})
            </option>
            <option value={`Business Package (${currency.rates.pkgBusiness})`}>
              Business Package ({currency.rates.pkgBusiness})
            </option>
            <option
              value={`Premium & E-Commerce Package (${currency.rates.pkgPremium})`}
            >
              Premium & E-Commerce ({currency.rates.pkgPremium}+)
            </option>
            <option value="Not Sure Yet - Need Advice">
              Not Sure Yet — Need Friendly Advice
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

      {/* Budget Range in Selected Country Currency (4 visible radio options) */}
      {!compact && (
        <fieldset className="space-y-2.5 pt-1">
          <legend className="text-sm font-semibold text-slate-900">
            {t.form.budgetLabel} ({currency.flag} {currency.currencyCode}){" "}
            <span className="text-red-600">*</span>
          </legend>
          <p className="text-xs text-slate-600">{t.form.budgetHint}</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {currency.rates.budgets.map((budgetRangeText, idx) => (
              <label
                key={budgetRangeText}
                htmlFor={`budget-option-${idx}`}
                className="flex min-h-[48px] cursor-pointer items-center gap-2.5 rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-brand-blue hover:bg-white has-[:checked]:border-brand-orange has-[:checked]:bg-orange-50/70 has-[:checked]:text-brand-navy"
              >
                <input
                  type="radio"
                  id={`budget-option-${idx}`}
                  name="budgetRange"
                  value={budgetRangeText}
                  defaultChecked={idx === 1}
                  required
                  className="h-4 w-4 accent-brand-orange"
                />
                <span>{budgetRangeText}</span>
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
          {t.form.detailsLabel}{" "}
          <span className="font-normal text-slate-500">(Optional)</span>
        </label>
        <span
          id="details-hint"
          className="mb-1.5 block text-xs text-slate-600"
        >
          {t.form.detailsHint}
        </span>
        <textarea
          id="project-details"
          name="projectDetails"
          rows={3}
          maxLength={1200}
          aria-describedby="details-hint"
          placeholder="e.g. I'm opening a clinic / retail brand and need a clean website so customers can call or order online..."
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
            {isSubmitting ? t.form.submittingBtn : t.form.submitBtn}
          </span>
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <Lock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span>{t.form.privacyNote}</span>
        </p>
      </div>
    </form>
  );
}
