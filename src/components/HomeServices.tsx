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
  const showcaseItems = dict.items.slice(0, 4);

  return (
    <section
      id="services"
      className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black relative`}
    >
      <div className={theme.layout.container}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
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

        {/* 4 Cards in 1 Single Row on Desktop - Ultra Clean & No Small Text Clutter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {showcaseItems.map((item, idx) => {
            const Icon = serviceIcons[idx] || Binary;
            return (
              <Link
                key={item.id}
                href={`/${lang}/services#${item.slug}`}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 lg:p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 border border-white/[0.08] px-2 py-0.5 rounded-full bg-white/[0.02]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    {dict.learnMore}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center md:hidden pt-2">
          <Link
            href={`/${lang}/services`}
            className={theme.components.buttonSecondary}
          >
            <span>{dict.viewAll}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
