import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE_URL = "https://tensoric.space";
const productSlugs = ["tensoric-mobile", "tensoric-code", "tensoric-research"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((lang) => {
    // Localized Home
    routes.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          uz: `${BASE_URL}/uz`,
          ru: `${BASE_URL}/ru`,
        },
      },
    });

    // Localized Products Index
    routes.push({
      url: `${BASE_URL}/${lang}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Localized Product Details
    productSlugs.forEach((slug) => {
      routes.push({
        url: `${BASE_URL}/${lang}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  return routes;
}
