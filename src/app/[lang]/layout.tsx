import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { locales, defaultLocale, hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  const siteUrl = "https://tensoric.space";
  const canonicalUrl = `${siteUrl}/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: "%s | Syntheta AI",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(",").map((k) => k.trim()),
    authors: [{ name: "Syntheta AI Research Laboratory", url: siteUrl }],
    creator: "Syntheta AI",
    publisher: "Syntheta AI",
    applicationName: "Syntheta AI",
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: ["/icon.svg"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en`,
        uz: `${siteUrl}/uz`,
        ru: `${siteUrl}/ru`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      url: canonicalUrl,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Syntheta AI",
      images: [
        {
          url: "/icon.svg",
          width: 512,
          height: 512,
          alt: "Syntheta AI Monolith & Halo Emblem",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      creator: "@syntheta_ai",
      images: ["/icon.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(safeLang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tensoric.space/#organization",
        name: "Syntheta AI",
        url: "https://tensoric.space",
        logo: {
          "@type": "ImageObject",
          url: "https://tensoric.space/icon.svg",
        },
        description: dict.meta.description,
        sameAs: [
          "https://github.com/AxionSoftware-Inc/ArtificialIntelligence-Corp",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `https://tensoric.space/${safeLang}/#website`,
        url: `https://tensoric.space/${safeLang}`,
        name: "Syntheta AI",
        publisher: {
          "@id": "https://tensoric.space/#organization",
        },
        inLanguage: safeLang,
      },
      {
        "@type": "SoftwareApplication",
        name: "Syntheta Mobile",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS",
        description: dict.productPages["syntheta-mobile"].description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Syntheta Code",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Linux, macOS, Windows",
        description: dict.productPages["syntheta-code"].description,
      },
      {
        "@type": "SoftwareApplication",
        name: "Syntheta Research",
        applicationCategory: "ResearchApplication",
        operatingSystem: "Cloud, On-Premise",
        description: dict.productPages["syntheta-research"].description,
      },
    ],
  };

  return (
    <html
      lang={safeLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090a0c] text-[#ececed]">
        {children}
      </body>
    </html>
  );
}
