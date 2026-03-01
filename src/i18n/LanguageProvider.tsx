"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import pt, { type Translations } from "./pt";
import en from "./en";

export type Language = "pt" | "en";

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const dictionaries: Record<Language, Translations> = { pt, en };

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  t: pt,
  toggleLang: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored && (stored === "pt" || stored === "en")) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], toggleLang, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
