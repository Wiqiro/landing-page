"use client";

import { createContext, useContext } from "react";

type Ctx = { t: (k: string) => string; locale: string };
const I18nContext = createContext<Ctx>({ t: (k) => k, locale: "fr" });

export const I18nProvider = ({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
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
