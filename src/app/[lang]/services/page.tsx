import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Binary, 
  Server, 
  Lock, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Activity
} from "lucide-react";
import { locales, hasLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { theme } from "@/lib/design-system";

interface ServicesPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.services.titleLine1} ${dict.services.titleLine2} | Syntheta AI`,
    description: dict.services.description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: "/en/services",
        uz: "/uz/services",
        ru: "/ru/services",
      },
    },
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const { services, productCommon } = dict;

  const serviceIcons = [
    Binary,        // Custom AI
    Layers,        // Model Adaptation
    Network,       // System Integration
    Cpu,           // Hardware Acceleration
    ShieldCheck,   // AI Security
    Server,        // Distributed Inference
  ];

  const guaranteeIcons = [Lock, ShieldCheck, Zap, Activity];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth">
      <Navbar dict={dict.nav} lang={locale} />

      <main className="flex-1 flex flex-col pt-32 pb-24">
        <div className={theme.layout.container}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {productCommon.breadcrumbHome}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <span className="text-neutral-200 font-semibold">{productCommon.breadcrumbServices}</span>
          </nav>

          {/* Master Service Header */}
          <div className="max-w-3xl mb-20 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{services.eyebrow}</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans leading-[1.1]">
              {services.titleLine1}{" "}
              <span className={theme.typography.gradientText}>{services.titleLine2}</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-normal">
              {services.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className={theme.components.buttonPrimary}
              >
                <span>{services.requestAudit}</span>
                <ChevronRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href={`/${locale}/products`}
                className={theme.components.buttonSecondary}
              >
                <span>{dict.products.viewAll}</span>
              </Link>
            </div>
          </div>

          {/* Deep Technical Service Catalog */}
          <div className="space-y-12 mb-28">
            <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                01 // {services.eyebrow}
              </span>
              <span className="font-mono text-xs text-neutral-500">
                {services.items.length} Production Architectures
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.items.map((service, idx) => {
                const Icon = serviceIcons[idx] || Terminal;
                return (
                  <article
                    key={service.id}
                    id={service.slug}
                    className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-400/40 hover:bg-white/[0.03] transition-all duration-300 group"
                  >
                    <div>
                      {/* Service Top Bar */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-neutral-500 block">
                              0{idx + 1} / {service.category}
                            </span>
                            <span className="text-[11px] font-mono text-neutral-400">
                              {service.tag}
                            </span>
                          </div>
                        </div>

                        <span className="font-mono text-xs text-neutral-300 border border-white/[0.1] px-3 py-1 rounded-full bg-white/[0.03]">
                          {service.metric}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-white transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                        {service.fullDescription}
                      </p>

                      {/* Deliverables Section */}
                      <div className="mb-8 p-5 rounded-xl border border-white/[0.05] bg-black/40">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-4">
                          Key Deliverables & Specifications
                        </span>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Pills */}
                      <div className="mb-8">
                        <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest block mb-3">
                          Verified Stack & Kernels
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <Link
                        href={`/${locale}#contact`}
                        className="inline-flex items-center text-xs font-mono font-medium text-white hover:text-cyan-400 transition-colors group/link"
                      >
                        <span>{services.requestAudit}</span>
                        <ArrowUpRight className="h-4 w-4 ml-1 text-neutral-400 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                      </Link>

                      <span className="font-mono text-[11px] text-neutral-500">
                        Enterprise SLA Guaranteed
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Enterprise Guarantees Matrix */}
          <section className="mb-28 p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-white/[0.01]">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
                02 // Sovereign Standards
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                {services.guaranteesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.guarantees.map((item, idx) => {
                const Icon = guaranteeIcons[idx] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-black/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Engagement Roadmap */}
          <section className="mb-28">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
                03 // Deployment Protocol
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
                {services.roadmapTitle}
              </h2>
              <p className="text-sm text-neutral-400">
                {services.roadmapSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.roadmapSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                      <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                        {step.phase}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2 py-0.5 rounded">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">{step.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>MILESTONE VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Consultation CTA Banner */}
          <div className="rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.04] to-transparent p-10 sm:p-14 text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {services.contactCta.headline}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              {services.contactCta.detail}
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}#contact`}
                className={theme.components.buttonPrimary}
              >
                <span>{services.contactCta.button}</span>
                <ChevronRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer dict={dict.footer} lang={locale} />
    </div>
  );
}
