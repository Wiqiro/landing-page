"use client";

import { Locale } from "@/helpers/locales";
import { createContext, ReactNode, useContext } from "react";

export const I18nContext = createContext({ t: (k: string) => k, locale: "fr" as Locale });

export const I18nProvider = ({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, string>;
}) => {
  const t = (k: string) => messages[k] ?? k;
  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
