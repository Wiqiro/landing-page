export const locales = ["fr", "en"] as const; // ajoute d’autres locales si besoin
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
