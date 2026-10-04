"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface CTAProps {
  dict: Dictionary["cta"];
  lang: Locale;
}

export function CTA({ dict }: CTAProps) {
  return (
    <section id="contact" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
      <div className={theme.layout.container}>
        <div className="relative rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.04] to-transparent p-10 sm:p-20 overflow-hidden shadow-2xl text-center">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{dict.eyebrow}</span>
            </div>

            {/* Master Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {dict.titleLine1} <br />
              <span className={theme.typography.gradientText}>{dict.titleLine2}</span>
            </h2>

            {/* Subtitle */}
            <p className={`${theme.typography.bodyLarge} max-w-xl mx-auto`}>
              {dict.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="#contact"
                className={theme.components.buttonPrimary}
              >
                <span>{dict.primary}</span>
              </Link>

              <Link
                href="#products"
                className="group inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <span>{dict.secondary}</span>
                <ArrowUpRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
