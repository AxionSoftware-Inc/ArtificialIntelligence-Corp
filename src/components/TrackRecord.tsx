"use client";

import React from "react";
import { theme } from "@/lib/design-system";
import { Building2, Handshake, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface TrackRecordProps {
  dict: Dictionary["trackRecord"];
  lang: Locale;
}

export function TrackRecord({ dict }: TrackRecordProps) {
  return (
    <section id="track-record" className="relative w-full bg-black py-20 border-b border-white/[0.08] overflow-hidden">
      {/* Subtle ambient background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.02] blur-[140px] pointer-events-none" />

      <div className={theme.layout.container}>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.eyebrow}</span>
          </div>
          <h2 className={theme.typography.h2}>
            {dict.headline}
          </h2>
        </div>

        {/* 4 Core Quantitative Proof Stats (20+, 5, 3, 99.2%) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {dict.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-neutral-200 mb-1 font-sans">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 font-normal leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 50% Reduced & Sleek Enterprise Clients Strip */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
            <Building2 className="h-4 w-4 text-cyan-400" />
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
              {dict.clientsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {dict.clients.map((client, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 hover:border-white/20 hover:bg-white/[0.03] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="font-mono text-sm font-bold text-white tracking-tight">
                      {client.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 block mb-2">
                    {client.sector}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>SLA Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 50% Reduced Strategic Partners Strip */}
        <div>
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
            <Handshake className="h-4 w-4 text-emerald-400" />
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
              {dict.partnersTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {dict.partners.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 hover:border-white/20 hover:bg-white/[0.03] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-white block">
                    {partner.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-normal">
                    {partner.role}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/[0.05] shrink-0 ml-3">
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
