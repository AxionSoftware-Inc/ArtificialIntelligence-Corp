"use client";

import React from "react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface WorkflowProps {
  dict: Dictionary["workflow"];
  lang: Locale;
}

export function Workflow({ dict }: WorkflowProps) {
  return (
    <section id="process" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
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

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.steps.map((step, idx) => (
            <div 
              key={idx}
              className={`${theme.components.card} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tighter">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                    {step.phase}
                  </span>
                </div>

                <h3 className={`${theme.typography.h3} mb-3`}>
                  {step.title}
                </h3>
                <p className={`${theme.typography.bodyMedium} mb-6`}>
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] space-y-2">
                {step.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
