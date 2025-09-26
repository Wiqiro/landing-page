"use client";

import { createContext, useContext } from "react";

export type Ctx = { t: (k: string) => string; locale: string };
export const I18nContext = createContext<Ctx>({ t: (k) => k, locale: "fr" });
export const useI18n = () => useContext(I18nContext);
