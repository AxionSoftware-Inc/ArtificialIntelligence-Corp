import { notFound } from "next/navigation";
import { locales, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrackRecord } from "@/components/TrackRecord";
import { Products } from "@/components/Products";
import { Solutions } from "@/components/Solutions";
import { Metrics } from "@/components/Metrics";
import { Workflow } from "@/components/Workflow";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth">
      {/* Precision Sticky AI Research Header with Language Switcher */}
      <Navbar dict={dict.nav} lang={lang} />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. 3D Monolith Parallax Hero Showcase */}
        <Hero dict={dict.hero} lang={lang} />

        {/* 2. Proven Track Record & Social Proof (20+ Projects, 5 Clients, 3 Partners) */}
        <TrackRecord dict={dict.trackRecord} lang={lang} />

        {/* 3. Proprietary Products (Mobile, Coder, Researcher) */}
        <Products dict={dict.products} lang={lang} />

        {/* 4. Core Capabilities Bento Grid */}
        <Solutions dict={dict.solutions} lang={lang} />

        {/* 5. Empirical Results & Measurable Impact */}
        <Metrics dict={dict.metrics} lang={lang} />

        {/* 6. Three-Step Deployment Protocol */}
        <Workflow dict={dict.workflow} lang={lang} />

        {/* 7. Final Technical Consultation CTA */}
        <CTA dict={dict.cta} lang={lang} />
      </main>

      {/* 8. Institutional Footer */}
      <Footer dict={dict.footer} lang={lang} />
    </div>
  );
}
