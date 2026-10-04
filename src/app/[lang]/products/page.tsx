import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Smartphone, Terminal, Microscope } from "lucide-react";
import { locales, hasLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { theme } from "@/lib/design-system";

interface ProductsIndexProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: ProductsIndexProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: dict.products.eyebrow,
    description: dict.products.description,
    alternates: {
      canonical: `/${locale}/products`,
      languages: {
        en: "/en/products",
        uz: "/uz/products",
        ru: "/ru/products",
      },
    },
  };
}

export default async function ProductsIndexPage({ params }: ProductsIndexProps) {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const common = dict.productCommon;

  const icons = [Smartphone, Terminal, Microscope];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth">
      <Navbar dict={dict.nav} lang={locale} />

      <main className="flex-1 flex flex-col pt-32 pb-24">
        <div className={theme.layout.container}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {common.breadcrumbHome}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <span className="text-neutral-200 font-semibold">{common.breadcrumbProducts}</span>
          </nav>

          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span>{dict.products.eyebrow}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              {dict.products.titleLine1} <br />
              <span className={theme.typography.gradientText}>{dict.products.titleLine2}</span>
            </h1>
            <p className={theme.typography.bodyLarge}>
              {dict.products.description}
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.products.items.map((product, idx) => {
              const Icon = icons[idx] || Terminal;
              return (
                <article
                  key={product.id}
                  className={`${theme.components.card} flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-cyan-400" />
                        <span className="font-mono text-xs text-neutral-500">
                          {String(idx + 1).padStart(2, "0")} / {product.category}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                        {product.status}
                      </span>
                    </div>

                    <h2 className={`${theme.typography.h3} mb-3`}>{product.name}</h2>
                    <p className={`${theme.typography.bodyMedium} mb-8`}>
                      {product.summary}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {product.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-neutral-300 leading-snug"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/${locale}/products/${product.slug}`}
                      className="inline-flex items-center text-xs font-mono font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      <span>{dict.products.learnMore}</span>
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>

                    <Link
                      href={`/${locale}#contact`}
                      className="font-mono text-[11px] text-neutral-500 hover:text-white transition-colors"
                    >
                      {product.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer dict={dict.footer} lang={locale} />
    </div>
  );
}
