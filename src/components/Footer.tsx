"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface FooterProps {
  dict: Dictionary["footer"];
  lang: Locale;
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-black py-16 text-neutral-400">
      <div className={theme.layout.container}>
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href={`/${lang}`} className="inline-block">
              <span className="text-base font-bold tracking-[0.14em] text-white uppercase font-sans">
                {siteConfig.brand.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm font-normal">
              {dict.description}
            </p>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              {dict.productsTitle}
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href={`/${lang}/products`} className="hover:text-white transition-colors">{dict.productsTitle}</Link></li>
              <li><Link href={`/${lang}/products/tensoric-mobile`} className="hover:text-white transition-colors">Tensoric Mobile</Link></li>
              <li><Link href={`/${lang}/products/tensoric-code`} className="hover:text-white transition-colors">Tensoric Code</Link></li>
              <li><Link href={`/${lang}/products/tensoric-research`} className="hover:text-white transition-colors">Tensoric Research</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              {dict.servicesTitle}
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href={`/${lang}/services`} className="hover:text-white transition-colors">{dict.servicesTitle}</Link></li>
              <li><Link href={`/${lang}/services#custom-ai`} className="hover:text-white transition-colors">Custom AI & Agents</Link></li>
              <li><Link href={`/${lang}/services#model-adaptation`} className="hover:text-white transition-colors">Model Fine-Tuning</Link></li>
              <li><Link href={`/${lang}/services#hardware-acceleration`} className="hover:text-white transition-colors">Silicon Acceleration</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              {dict.companyTitle}
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href={`/${lang}#contact`} className="hover:text-white transition-colors">{dict.contact}</Link></li>
              <li><Link href={`/${lang}#track-record`} className="hover:text-white transition-colors">{dict.research}</Link></li>
              <li><Link href={`/${lang}#contact`} className="hover:text-white transition-colors">{dict.careers}</Link></li>
              <li><Link href={`/${lang}#contact`} className="hover:text-white transition-colors">{dict.privacy}</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <p>© 2026 {siteConfig.brand.name} Labs. {dict.rights}</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Supercluster: 1,024× H100 SXM5 Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
