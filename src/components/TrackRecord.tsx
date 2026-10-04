"use client";

import React from "react";
import { theme } from "@/lib/design-system";
import { Building2, Handshake, CheckCircle2, Shield, ArrowUpRight, Cpu } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface TrackRecordProps {
  dict: Dictionary["trackRecord"];
  lang: Locale;
}

export function TrackRecord({ dict }: TrackRecordProps) {
  return (
    <section className="relative w-full bg-black py-20 border-b border-white/[0.08] overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />

      <div className={theme.layout.container}>
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.eyebrow}</span>
          </div>
          <h2 className={theme.typography.h2}>
            {dict.headline.split(" ")[0]} <br className="hidden sm:inline" />
            <span className={theme.typography.gradientText}>
              {dict.headline.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        {/* 4 Core Quantitative Proof Stats (20+ Projects, 5 Clients, 3 Partners, 99.2% SLA) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-7 backdrop-blur-md hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* 5 Enterprise Clients Showcase */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/[0.08]">
            <Building2 className="h-4 w-4 text-cyan-400" />
            <h3 className="font-mono text-xs text-neutral-300 uppercase tracking-widest font-semibold">
              {dict.clientsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dict.clients.map((client, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-base font-bold text-white tracking-tight flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
                      {client.name}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 border border-white/[0.08] px-2 py-0.5 rounded-full bg-white/[0.02]">
                      {client.sector}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {client.project}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>In Production</span>
                  </span>
                  <span className="text-neutral-600">Enterprise SLA</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Strategic Ecosystem & Research Partners */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/[0.08]">
            <Handshake className="h-4 w-4 text-emerald-400" />
            <h3 className="font-mono text-xs text-neutral-300 uppercase tracking-widest font-semibold">
              {dict.partnersTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dict.partners.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-semibold text-white">
                    {partner.name}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full bg-emerald-500/[0.05]">
                    {partner.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {partner.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
