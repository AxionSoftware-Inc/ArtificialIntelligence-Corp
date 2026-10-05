import React from "react";
import Link from "next/link";
import { ArrowUpRight, Binary, Layers, Network, Cpu, ChevronRight } from "lucide-react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface HomeServicesProps {
  dict: Dictionary["services"];
  lang: Locale;
}

const serviceIcons = [Binary, Layers, Network, Cpu];

export function HomeServices({ dict, lang }: HomeServicesProps) {
  // Take first 4 flagship services for the homepage showcase to keep it clean and noise-free
  const showcaseItems = dict.items.slice(0, 4);

  return (
    <section
      id="services"
      className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black relative`}
    >
      <div className={theme.layout.container}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{dict.eyebrow}</span>
            </div>
            <h2 className={theme.typography.h2}>
              {dict.titleLine1}{" "}
              <span className={theme.typography.gradientText}>{dict.titleLine2}</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              {dict.description}
            </p>
          </div>

          <Link
            href={`/${lang}/services`}
            className="hidden md:inline-flex items-center text-xs font-mono font-medium text-white hover:text-cyan-400 transition-colors"
          >
            <span>{dict.viewAll}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* 4-Item Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {showcaseItems.map((item, idx) => {
            const Icon = serviceIcons[idx] || Binary;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col justify-between hover:border-cyan-400/30 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-neutral-500">
                        {item.category}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-0.5 rounded-full bg-white/[0.02]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-500">
                    {item.metric}
                  </span>

                  <Link
                    href={`/${lang}/services#${item.slug}`}
                    className="inline-flex items-center text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>{dict.learnMore}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 text-neutral-500 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All CTA */}
        <div className="text-center pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${lang}/services`}
            className={theme.components.buttonPrimary}
          >
            <span>{dict.viewAll}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <Link
            href={`/${lang}#contact`}
            className={theme.components.buttonSecondary}
          >
            <span>{dict.requestAudit}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
