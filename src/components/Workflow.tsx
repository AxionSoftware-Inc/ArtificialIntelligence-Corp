"use client";

import React from "react";
import { theme } from "@/lib/design-system";

export function Workflow() {
  const steps = [
    {
      num: "01",
      phase: "PHASE ONE // EVALUATION",
      title: "Architecture & Domain Audit",
      description:
        "We dissect your existing data topologies, throughput constraints, and accuracy requirements to architect the optimal cognitive model blueprint.",
      bullets: [
        "Proprietary schema analysis",
        "Reasoning latency profiling",
        "Security & compliance boundaries",
      ],
    },
    {
      num: "02",
      phase: "PHASE TWO // SYNTHESIS",
      title: "Custom Distillation & Formal Alignment",
      description:
        "Training specialist foundation weights using reinforcement learning grounded in formal mathematical verification, eliminating hallucination risks.",
      bullets: [
        "Domain-specific dataset synthesis",
        "Deterministic guardrail calibration",
        "Formal Z3 / Lean 4 verification checks",
      ],
    },
    {
      num: "03",
      phase: "PHASE THREE // ROLLOUT",
      title: "Sovereign Cluster Deployment",
      description:
        "Seamless production release on dedicated air-gapped hardware or private cloud superclusters with real-time telemetry and monitoring.",
      bullets: [
        "Air-gapped on-premise integration",
        "Zero-telemetry data isolation",
        "Sub-20ms distributed inference",
      ],
    },
  ];

  return (
    <section id="process" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
      <div className={theme.layout.container}>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>Deployment Protocol</span>
          </div>
          <h2 className={theme.typography.h2}>
            From architecture audit to <br />
            <span className={theme.typography.gradientText}>sovereign production.</span>
          </h2>
          <p className={theme.typography.bodyLarge}>
            A rigorous, engineering-first engagement model designed for enterprise reliability and zero operational chaos.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`${theme.components.card} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tighter">
                    {step.num}
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
