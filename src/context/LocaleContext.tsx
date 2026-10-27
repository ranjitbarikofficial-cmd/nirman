"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  CountryCode,
  LanguageCode,
  COUNTRIES,
  LANGUAGES,
  TRANSLATIONS,
  CountryCurrencyConfig,
  UITranslations,
} from "@/lib/site-data";

interface LocaleContextValue {
  country: CountryCode;
  setCountry: (code: CountryCode) => void;
  currency: CountryCurrencyConfig;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: UITranslations;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>("IN");
  const [language, setLanguageState] = useState<LanguageCode>("en");

  // Load saved preferences or auto-detect India / US / UK / UAE / Europe from timezone
  useEffect(() => {
    try {
      const savedCountry = localStorage.getItem(
        "nirman_country"
      ) as CountryCode | null;
      const savedLang = localStorage.getItem(
        "nirman_language"
      ) as LanguageCode | null;

      if (savedCountry && COUNTRIES[savedCountry]) {
        setCountryState(savedCountry);
      } else {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        if (tz.includes("Calcutta") || tz.includes("Kolkata")) {
          setCountryState("IN");
        } else if (tz.includes("London")) {
          setCountryState("GB");
        } else if (tz.includes("Dubai")) {
          setCountryState("AE");
        } else if (tz.includes("Sydney") || tz.includes("Melbourne")) {
          setCountryState("AU");
        } else if (tz.includes("Toronto") || tz.includes("Vancouver")) {
          setCountryState("CA");
        } else if (tz.startsWith("Europe/")) {
          setCountryState("EU");
        }
      }

      if (savedLang && LANGUAGES[savedLang]) {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  // Sync <html lang="..."> and <html dir="..."> when language changes
  useEffect(() => {
    const langConfig = LANGUAGES[language];
    if (typeof document !== "undefined" && langConfig) {
      document.documentElement.lang = langConfig.code;
      document.documentElement.dir = langConfig.dir;
    }
  }, [language]);

  const setCountry = (code: CountryCode) => {
    setCountryState(code);
    try {
      localStorage.setItem("nirman_country", code);
    } catch {
      // Ignore
    }
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("nirman_language", lang);
    } catch {
      // Ignore
    }
  };

  const value: LocaleContextValue = {
    country,
    setCountry,
    currency: COUNTRIES[country],
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
