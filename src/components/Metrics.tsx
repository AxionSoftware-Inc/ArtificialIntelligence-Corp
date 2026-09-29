"use client";

import React from "react";
import { theme } from "@/lib/design-system";

export function Metrics() {
  const metrics = [
    {
      value: "99.4%",
      label: "Invariant Verification Rate",
      description: "Autonomous reasoning tasks formally validated via Lean 4 & Z3 SMT solvers with zero ungrounded axioms.",
    },
    {
      value: "4.2×",
      label: "Compute Efficiency Gain",
      description: "Distilled MoE architectures outperform generalist frontier APIs in domain accuracy while reducing inference cost.",
    },
    {
      value: "<18ms",
      label: "Time-To-First-Token",
      description: "Low-latency deterministic execution enabled by dedicated private GPU clusters and FP8 Flash kernels.",
    },
  ];

  return (
    <section id="impact" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
      <div className={theme.layout.container}>
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span>Empirical Proof</span>
            </div>
            <h2 className={theme.typography.h2}>
              Measurable impact across <br />
              <span className={theme.typography.gradientText}>production deployments.</span>
            </h2>
          </div>
          <p className={`${theme.typography.bodyMedium} max-w-md`}>
            Rigorous benchmarking validated across high-stakes scientific, mathematical, and enterprise production environments.
          </p>
        </div>

        {/* Metrics Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="border-t border-white/[0.14] pt-8 space-y-4 group hover:border-white/40 transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans">
                {item.value}
              </div>
              <h3 className="text-base font-semibold text-neutral-200 tracking-tight">
                {item.label}
              </h3>
              <p className={theme.typography.bodySmall}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
