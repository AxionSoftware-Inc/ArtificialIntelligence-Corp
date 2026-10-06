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
      template: "%s | Tensoric AI",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(",").map((k) => k.trim()),
    authors: [{ name: "Tensoric AI Research Laboratory", url: siteUrl }],
    creator: "Tensoric AI",
    publisher: "Tensoric AI",
    applicationName: "Tensoric AI",
    icons: {
      icon: [
        { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
        { url: "/favicon-48x48.png?v=3", sizes: "48x48", type: "image/png" },
        { url: "/icon.svg?v=3", type: "image/svg+xml" },
        { url: "/favicon.ico?v=3", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.ico?v=3"],
    },
    manifest: "/site.webmanifest",
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
      siteName: "Tensoric AI",
      images: [
        {
          url: "/icon.svg",
          width: 512,
          height: 512,
          alt: "Tensoric AI Neural Lattice Emblem",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      creator: "@tensoric_ai",
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
        name: "Tensoric AI",
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
        name: "Tensoric AI",
        publisher: {
          "@id": "https://tensoric.space/#organization",
        },
        inLanguage: safeLang,
      },
      {
        "@type": "SoftwareApplication",
        name: "Tensoric Mobile",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS",
        description: dict.productPages["tensoric-mobile"].description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Tensoric Code",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Linux, macOS, Windows",
        description: dict.productPages["tensoric-code"].description,
      },
      {
        "@type": "SoftwareApplication",
        name: "Tensoric Research",
        applicationCategory: "ResearchApplication",
        operatingSystem: "Cloud, On-Premise",
        description: dict.productPages["tensoric-research"].description,
      },
    ],
  };

  return (
    <html
      lang={safeLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=3" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="icon" href="/icon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest" />
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
