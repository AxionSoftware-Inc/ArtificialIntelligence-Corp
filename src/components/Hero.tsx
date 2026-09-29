"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 w-full my-auto">
        <div className="max-w-2xl space-y-9">
          
          {/* Jewel Top Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all hover:border-white/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            </span>
            <span className="text-xs font-medium text-neutral-300 tracking-wide">
              GrowAgent for Enterprise & Labs
            </span>
          </div>

          {/* Master Headline (Optical Kerning + Silver Sheen) */}
          <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-bold tracking-[-0.035em] text-white leading-[1.05]">
            Turn Intelligence <br className="hidden sm:inline" />
            <span className="bg-gradient-to-b from-white via-white/95 to-neutral-400 bg-clip-text text-transparent">
              Into Growth Infrastructure.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-xl">
            We help startups and enterprises integrate foundational AI into 
            marketing, operations, and product, without complexity, without chaos.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <span>Start AI Journey</span>
            </Link>

            <Link
              href="#cases"
              className="group inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <span>View Case Studies</span>
              <ChevronRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Partner / Client Logos Bar (Exact Match to Reference Image) */}
      <div className="relative z-10 w-full border-t border-white/[0.08] pt-9 mt-14 bg-gradient-to-b from-transparent to-black/80">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-45 grayscale hover:opacity-75 transition-opacity duration-300">
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white lowercase">
              attentive<span className="text-[10px] align-top ml-0.5">®</span>
            </span>
            <span className="font-sans font-semibold text-base sm:text-lg tracking-wider text-white lowercase">
              coinbase
            </span>
            <span className="font-sans font-medium text-base sm:text-lg tracking-tight text-white lowercase">
              upwork
            </span>
            <span className="font-sans font-bold text-base sm:text-lg tracking-normal text-white">
              DocuSign
            </span>
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white lowercase">
              drips
            </span>
            <span className="font-sans font-extrabold text-base sm:text-lg tracking-widest text-white uppercase">
              NETFLIX
            </span>
            <span className="font-serif italic font-semibold text-base sm:text-lg tracking-normal text-white lowercase">
              braze
            </span>
            <span className="font-sans font-semibold text-base sm:text-lg tracking-tight text-white lowercase">
              zapier
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
