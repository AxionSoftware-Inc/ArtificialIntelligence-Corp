"use client";

import React from "react";
import { theme } from "@/lib/design-system";
import { Bot, Cpu, ShieldCheck, Server, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface SolutionsProps {
  dict: Dictionary["solutions"];
  lang: Locale;
}

const solutionMeta = [
  { span: "lg:col-span-8", icon: Bot },
  { span: "lg:col-span-4", icon: Cpu },
  { span: "lg:col-span-4", icon: ShieldCheck },
  { span: "lg:col-span-8", icon: Server },
];

export function Solutions({ dict }: SolutionsProps) {
  return (
    <section id="solutions" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
      <div className={theme.layout.container}>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>{dict.eyebrow}</span>
          </div>
          <h2 className={theme.typography.h2}>
            {dict.titleLine1} <br />
            <span className={theme.typography.gradientText}>{dict.titleLine2}</span>
          </h2>
          <p className={theme.typography.bodyLarge}>
            {dict.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {dict.items.map((item, idx) => {
            const meta = solutionMeta[idx] || { span: "lg:col-span-6", icon: Bot };
            const Icon = meta.icon;
            return (
              <div 
                key={idx} 
                className={`${meta.span} ${theme.components.card} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                      {item.tag}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">
                    {item.category}
                  </span>
                  <h3 className={`${theme.typography.h3} mb-3 group-hover:text-white transition-colors`}>
                    {item.title}
                  </h3>
                  <p className={theme.typography.bodyMedium}>
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-500">{dict.benchmark}</span>
                  <span className="text-neutral-200 font-semibold flex items-center gap-1">
                    {item.metric}
                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
