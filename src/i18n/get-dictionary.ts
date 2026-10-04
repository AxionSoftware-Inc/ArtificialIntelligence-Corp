import { en, type Dictionary } from "./dictionaries/en";
import { uz } from "./dictionaries/uz";
import { ru } from "./dictionaries/ru";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, uz, ru };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
