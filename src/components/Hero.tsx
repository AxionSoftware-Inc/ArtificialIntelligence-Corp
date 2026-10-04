"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { HeroMonolithScene } from "@/components/HeroMonolithScene";

interface HeroProps {
  dict: Dictionary["hero"];
  lang: Locale;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden pt-32 pb-10 selection:bg-white/20 selection:text-white"
    >
      {/* Subtle Luxury Dot Texture */}
      <div className="absolute inset-0 bg-luxury-dots opacity-20 pointer-events-none radial-mask" />

      {/* Real-time Interactive WebGL 3D Monolith & Neon Halos Engine */}
      <HeroMonolithScene />

      {/* Edge Bleeds to guarantee 100% contrast for text and seamless section transition */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent lg:via-black/30 pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-[1]" />

      {/* Main Content Area */}
      <div className={`relative z-10 ${theme.layout.container} my-auto`}>
        <div className="max-w-2xl space-y-9">
          
          {/* Jewel Top Badge */}
          <div className={theme.components.badge}>
            <span className="relative flex h-2 w-2">
              <span className={theme.components.badgePulse} />
              <span className={theme.components.badgeJewel} />
            </span>
            <span className="tracking-wide">
              {dict.badge}
            </span>
          </div>

          {/* Master Headline (Optical Kerning + Silver Sheen) */}
          <h1 className={theme.typography.h1}>
            {dict.titleLine1} <br className="hidden sm:inline" />
            <span className={theme.typography.gradientText}>
              {dict.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`${theme.typography.bodyLarge} max-w-xl`}>
            {dict.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className={theme.components.buttonPrimary}
            >
              <span>{dict.primary}</span>
              <ChevronRight className="h-4 w-4 ml-0.5 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
            </Link>

            <Link
              href="#products"
              className={theme.components.buttonSecondary}
            >
              <span>{dict.secondary}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle Ambient Footer Telemetry Line inside Hero */}
      <div className={`relative z-10 ${theme.layout.container} w-full`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/[0.08] pt-6 gap-4 font-mono text-[11px] text-neutral-500 tracking-wider">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="uppercase text-neutral-400">RESEARCH COHORT 2026 // ON-DEVICE & AGENTS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>MODEL: SYNTHETA-1</span>
            <span>VERIFIED: LEAN 4 / Z3</span>
            <span>AIR-GAPPED COMPLIANT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
