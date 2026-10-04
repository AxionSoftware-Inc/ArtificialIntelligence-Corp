"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface HeroProps {
  dict: Dictionary["hero"];
  lang: Locale;
}

export function Hero({ dict }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const container = heroRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden pt-32 pb-10 selection:bg-white/20 selection:text-white"
    >
      {/* Subtle Luxury Dot Texture on the dark half */}
      <div className="absolute inset-0 bg-luxury-dots opacity-25 pointer-events-none radial-mask" />

      {/* Dynamic 3D Parallax Stage (Right-Anchored) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `perspective(1200px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg) scale(1.02)`,
          }}
        >
          <Image
            src="/images/hero-3d.jpg"
            alt={dict.imageAlt}
            fill
            priority
            className="object-cover object-center lg:object-right opacity-90 transition-opacity duration-1000"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />

          {/* Glowing Aura Ring overlay simulating ambient neon emission */}
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-400/15 blur-[130px] pointer-events-none animate-neon-breath" 
          />

          {/* Seamless Edge Bleeds into pitch black */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent lg:from-black lg:via-black/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
      </div>

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
