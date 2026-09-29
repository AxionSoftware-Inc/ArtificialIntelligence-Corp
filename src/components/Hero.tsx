"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden pt-28 pb-10">
      
      {/* 3D Atmospheric Background Visual (Matching Reference Image) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-0 pointer-events-none select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-3d.jpg"
            alt="Ascending Monoliths with Glowing Halos"
            fill
            priority
            className="object-cover object-center lg:object-right opacity-95"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          {/* Subtle gradient overlays to seamlessly blend into pure black */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent lg:via-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 w-full my-auto">
        <div className="max-w-2xl space-y-8">
          
          {/* Small Top Badge with Amber Dot */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-500 shadow-sm shadow-amber-500/80" />
            <span className="text-xs font-normal text-neutral-300 tracking-wide">
              Frontier Intelligence for Enterprise
            </span>
          </div>

          {/* Master Headline (Punchy, 3-line cadence) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Turn Intelligence Into Growth Infrastructure.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-xl">
            We help startups and enterprises integrate foundational AI into 
            marketing, operations, and product, without complexity, without chaos.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex items-center gap-7">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black hover:bg-neutral-200 transition-all duration-200 shadow-lg shadow-white/10"
            >
              Start AI Journey
            </Link>

            <Link
              href="#cases"
              className="inline-flex items-center text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <span>View Case Studies</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Partner / Client Logos Bar (Exact Match to Reference Image) */}
      <div className="relative z-10 w-full border-t border-white/[0.06] pt-8 mt-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white/90 lowercase">
              attentive<span className="text-xs align-top">®</span>
            </span>
            <span className="font-sans font-semibold text-base sm:text-lg tracking-wider text-white/90 lowercase">
              coinbase
            </span>
            <span className="font-sans font-medium text-base sm:text-lg tracking-tight text-white/90 lowercase">
              upwork
            </span>
            <span className="font-sans font-bold text-base sm:text-lg tracking-normal text-white/90">
              DocuSign
            </span>
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white/90 lowercase">
              drips
            </span>
            <span className="font-sans font-extrabold text-base sm:text-lg tracking-widest text-white/90 uppercase">
              NETFLIX
            </span>
            <span className="font-serif italic font-semibold text-base sm:text-lg tracking-normal text-white/90 lowercase">
              braze
            </span>
            <span className="font-sans font-semibold text-base sm:text-lg tracking-tight text-white/90 lowercase">
              zapier
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
