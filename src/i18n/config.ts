export const locales = ["en", "uz", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  uz: "UZ",
  ru: "RU",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
