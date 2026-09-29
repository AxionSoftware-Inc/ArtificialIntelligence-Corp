"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig, theme } from "@/lib/design-system";

export function Hero() {
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
            transform: `perspective(1200px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg) scale(1.02)`,
          }}
        >
          <Image
            src="/images/hero-3d.jpg"
            alt="Ascending Monoliths with Glowing Halos"
            fill
            priority
            className="object-cover object-center lg:object-right opacity-95 transition-opacity duration-1000"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />

          {/* Glowing Aura Ring overlay simulating ambient neon emission */}
          <div 
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none animate-neon-breath" 
          />

          {/* Deep Black Gradient Masks for Seamless Edge Bleed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
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
              {siteConfig.brand.badgeText}
            </span>
          </div>

          {/* Master Headline (Optical Kerning + Silver Sheen) */}
          <h1 className={theme.typography.h1}>
            Turn Intelligence <br className="hidden sm:inline" />
            <span className={theme.typography.gradientText}>
              Into Growth Infrastructure.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`${theme.typography.bodyLarge} max-w-xl`}>
            {siteConfig.brand.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-6">
            <Link
              href={siteConfig.links.primaryAction.href}
              className={theme.components.buttonPrimary}
            >
              <span>{siteConfig.links.primaryAction.label}</span>
            </Link>

            <Link
              href={siteConfig.links.secondaryAction.href}
              className={theme.components.buttonSecondary}
            >
              <span>{siteConfig.links.secondaryAction.label}</span>
              <ChevronRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Partner / Client Logos Bar */}
      <div className="relative z-10 w-full border-t border-white/[0.08] pt-9 mt-14 bg-gradient-to-b from-transparent to-black/80">
        <div className={theme.layout.container}>
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-45 grayscale hover:opacity-75 transition-opacity duration-300">
            {siteConfig.partners.map((partner) => (
              <span 
                key={partner.name}
                className={`text-base sm:text-lg text-white ${
                  partner.special 
                    ? "font-sans font-bold tracking-tight lowercase" 
                    : partner.uppercase 
                    ? "font-sans font-extrabold tracking-widest uppercase"
                    : partner.italic
                    ? "font-serif italic font-semibold tracking-normal lowercase"
                    : "font-sans font-semibold tracking-wider lowercase"
                }`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
