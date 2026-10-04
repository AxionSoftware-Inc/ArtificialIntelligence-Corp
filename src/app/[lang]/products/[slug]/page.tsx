import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Cpu, ShieldCheck, Terminal, Smartphone, Microscope, Layers } from "lucide-react";
import { locales, hasLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { theme } from "@/lib/design-system";

interface ProductPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

const validSlugs = ["syntheta-mobile", "syntheta-code", "syntheta-research"] as const;
type ProductSlug = (typeof validSlugs)[number];

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of validSlugs) {
      paths.push({ lang, slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  if (!validSlugs.includes(slug as ProductSlug)) {
    return { title: "Product Not Found" };
  }

  const product = dict.productPages[slug as ProductSlug];

  return {
    title: product.name,
    description: product.tagline,
    alternates: {
      canonical: `/${locale}/products/${slug}`,
      languages: {
        en: `/en/products/${slug}`,
        uz: `/uz/products/${slug}`,
        ru: `/ru/products/${slug}`,
      },
    },
    openGraph: {
      title: `${product.name} — ${product.badge}`,
      description: product.tagline,
      url: `/${locale}/products/${slug}`,
      siteName: "Syntheta AI",
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { lang, slug } = await params;

  if (!hasLocale(lang) || !validSlugs.includes(slug as ProductSlug)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const product = dict.productPages[slug as ProductSlug];
  const common = dict.productCommon;

  // Icon selector based on product
  const ProductIcon =
    slug === "syntheta-mobile" ? Smartphone : slug === "syntheta-code" ? Terminal : Microscope;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth">
      {/* Navigation */}
      <Navbar dict={dict.nav} lang={lang} />

      <main className="flex-1 flex flex-col pt-32 pb-24">
        {/* Breadcrumb & Top Bar */}
        <div className={theme.layout.container}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">
              {common.breadcrumbHome}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <Link href={`/${lang}#products`} className="hover:text-white transition-colors">
              {common.breadcrumbProducts}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <span className="text-neutral-200 font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Hero Section of the Product */}
        <section className="relative overflow-hidden py-12 border-b border-white/[0.08]">
          <div className="absolute inset-0 bg-luxury-dots opacity-20 pointer-events-none radial-mask" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

          <div className={theme.layout.container}>
            <div className="max-w-3xl space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-neutral-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="tracking-wide uppercase">{product.badge}</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                  {product.name}
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* High-level Description */}
              <p className="text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${lang}#contact`}
                  className={theme.components.buttonPrimary}
                >
                  <span>{common.requestAccessButton}</span>
                  <ChevronRight className="h-4 w-4 ml-0.5 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </Link>

                <a
                  href="#specs"
                  className={theme.components.buttonSecondary}
                >
                  <span>{common.keySpecifications}</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {product.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-md"
                >
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Engine Simulation / Terminal Preview */}
        <section className={`${theme.layout.section} bg-black`}>
          <div className={theme.layout.container}>
            <div className="max-w-2xl mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <ProductIcon className="h-4 w-4 text-cyan-400" />
                <span>{common.interactiveDemoTitle}</span>
              </div>
              <h2 className={theme.typography.h2}>
                Runtime execution <br />
                <span className={theme.typography.gradientText}>in real environments.</span>
              </h2>
            </div>

            {/* Terminal Window */}
            <div className="rounded-2xl border border-white/[0.12] bg-[#0c0e12] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5 bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-neutral-400">
                    {product.name.toLowerCase()} ~ session-runtime
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE // SANDBOXED</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* User Input Prompt */}
                <div className="flex items-start gap-3 text-neutral-200 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
                  <span className="text-cyan-400 font-bold select-none">&gt;</span>
                  <p className="leading-relaxed font-mono">{product.demoSimulation.userPrompt}</p>
                </div>

                {/* Agent Execution Logs */}
                <div className="pt-2 space-y-2.5">
                  {product.demoSimulation.agentSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-neutral-400 leading-relaxed font-mono"
                    >
                      <span className="text-neutral-600 select-none">[{idx + 1}]</span>
                      <span className={idx === product.demoSimulation.agentSteps.length - 1 ? "text-emerald-400 font-semibold" : ""}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture Capabilities */}
        <section className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
          <div className={theme.layout.container}>
            <div className="max-w-2xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Cpu className="h-4 w-4 text-neutral-400" />
                <span>{common.coreCapabilities}</span>
              </div>
              <h2 className={theme.typography.h2}>
                Engineered for <br />
                <span className={theme.typography.gradientText}>mission-critical accuracy.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`${theme.components.card} flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                        {String(idx + 1).padStart(2, "0")} // FEATURE
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className={`${theme.typography.h3} mb-3`}>{feature.title}</h3>
                    <p className={theme.typography.bodyMedium}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Execution Pipeline Steps */}
        <section className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
          <div className={theme.layout.container}>
            <div className="max-w-2xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Layers className="h-4 w-4 text-neutral-400" />
                <span>{common.pipelineTitle}</span>
              </div>
              <h2 className={theme.typography.h2}>
                Deterministic pipeline <br />
                <span className={theme.typography.gradientText}>step by step.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.pipeline.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 space-y-4"
                >
                  <div className="text-3xl font-mono font-bold text-white tracking-tighter">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section id="specs" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
          <div className={theme.layout.container}>
            <div className="max-w-2xl mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>{common.keySpecifications}</span>
              </div>
              <h2 className={theme.typography.h2}>
                System specifications & <br />
                <span className={theme.typography.gradientText}>runtime constraints.</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-white/[0.08] overflow-hidden divide-y divide-white/[0.06] bg-white/[0.01]">
              {product.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 gap-2 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-mono text-xs sm:text-sm text-neutral-400">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Security Guarantee Note */}
            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-neutral-500">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{common.securityGuarantee}</span>
            </div>
          </div>
        </section>

        {/* Bottom CTA for the Product */}
        <section className="pt-20">
          <div className={theme.layout.container}>
            <div className="rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.04] to-transparent p-10 sm:p-16 text-center space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{common.earlyAccessBadge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Request early deployment for {product.name}
              </h2>

              <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
                Join our selective cohort of enterprise engineering teams testing {product.name} in production environments.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${lang}#contact`}
                  className={theme.components.buttonPrimary}
                >
                  <span>{common.requestAccessButton}</span>
                </Link>

                <Link
                  href={`/${lang}#products`}
                  className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span>{common.backToHome}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer dict={dict.footer} lang={lang} />
    </div>
  );
}
