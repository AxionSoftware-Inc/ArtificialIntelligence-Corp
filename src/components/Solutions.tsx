"use client";

import React from "react";
import { theme } from "@/lib/design-system";
import { Bot, Cpu, ShieldCheck, Server, ArrowUpRight } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      span: "lg:col-span-8",
      icon: Bot,
      category: "AUTONOMOUS REASONING",
      title: "Self-Orchestrating Agent Collectives",
      description:
        "Multi-agent reasoning pipelines that decompose complex enterprise goals, cross-validate hypotheses, and execute verified workflows without human bottleneck.",
      tag: "Multi-Agent Protocol",
      metric: "99.4% Task Success",
    },
    {
      span: "lg:col-span-4",
      icon: Cpu,
      category: "MODEL DISTILLATION",
      title: "Domain-Specific Foundation Models",
      description:
        "Distill frontier cognitive capabilities into proprietary 8B–70B parameter models fine-tuned strictly on your private corporate corpus.",
      tag: "Private Weights",
      metric: "4.2× Cost Reduction",
    },
    {
      span: "lg:col-span-4",
      icon: ShieldCheck,
      category: "ALIGNMENT & SAFETY",
      title: "Deterministic Verification Engine",
      description:
        "Formal mathematical verification layers that evaluate candidate outputs against strict logic constraints before execution — eliminating hallucinations.",
      tag: "Lean 4 Certified",
      metric: "0.00% Axiom Leaks",
    },
    {
      span: "lg:col-span-8",
      icon: Server,
      category: "INFRASTRUCTURE",
      title: "Sovereign On-Premise & Private Cloud Compute",
      description:
        "Deploy on air-gapped data centers or dedicated private VPC superclusters. Your intellectual property and data never exit your security boundary.",
      tag: "Air-Gapped Ready",
      metric: "100% Data Sovereignty",
    },
  ];

  return (
    <section id="solutions" className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}>
      <div className={theme.layout.container}>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className={theme.typography.h2}>
            Engineered for sovereign <br />
            <span className={theme.typography.gradientText}>mission-critical intelligence.</span>
          </h2>
          <p className={theme.typography.bodyLarge}>
            We replace brittle prompt engineering with robust mathematical architectures, 
            providing verified foundation systems tailored to your industry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`${item.span} ${theme.components.card} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                      {item.tag}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">
                    {item.category}
                  </span>
                  <h3 className={`${theme.typography.h3} mb-3 group-hover:text-white transition-colors`}>
                    {item.title}
                  </h3>
                  <p className={theme.typography.bodyMedium}>
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-500">Benchmark Guarantee</span>
                  <span className="text-neutral-200 font-semibold flex items-center gap-1">
                    {item.metric}
                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
