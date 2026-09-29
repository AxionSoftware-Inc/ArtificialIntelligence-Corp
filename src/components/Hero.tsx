import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";
import { ArchitectureGraph } from "./ArchitectureGraph";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-36">
      {/* Ambient Neural Particle Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0c]/40 via-transparent to-[#090a0c]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Top Research Badge */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-md mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
              Frontier Model Track
            </span>
            <span className="text-neutral-600 font-mono">•</span>
            <span className="text-[11px] font-mono text-neutral-400">
              Syntheta-1 Cognitive Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08]">
            Verifiable autonomous reasoning beyond next-token prediction.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-3xl font-normal">
            Syntheta is an independent scientific laboratory investigating the convergence of 
            high-dimensional neural representations and formal mathematical logic. We build 
            autonomous systems that discover hypotheses, verify formal proofs, and safely execute 
            across complex frontiers.
          </p>

          {/* Action Row */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="#publications"
              className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-xs font-semibold tracking-wide text-[#090a0c] hover:bg-neutral-200 transition-colors"
            >
              Explore Research Papers
            </Link>

            <Link
              href="#models"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-300 hover:text-white transition-colors"
            >
              <span>Model Architecture & Weights</span>
              <ArrowRight className="h-3.5 w-3.5 text-neutral-400" />
            </Link>
          </div>
        </div>

        {/* Technical Centerpiece: System Architecture Visualizer */}
        <div className="mt-14">
          <ArchitectureGraph />
        </div>

        {/* Verification & Compute Benchmark Band */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-neutral-500 block text-[10px] uppercase">Reasoning Benchmark</span>
            <span className="text-base text-white font-semibold mt-0.5 block">94.8% IMO-500</span>
            <span className="text-neutral-500 text-[11px]">Lean 4 kernel certified</span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[10px] uppercase">Sparse Architecture</span>
            <span className="text-base text-white font-semibold mt-0.5 block">67B MoE (14B Active)</span>
            <span className="text-neutral-500 text-[11px]">Top-2 routing gating</span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[10px] uppercase">Context Horizon</span>
            <span className="text-base text-white font-semibold mt-0.5 block">1,000,000 Tokens</span>
            <span className="text-neutral-500 text-[11px]">Sparse linear attention</span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[10px] uppercase">Epistemic Hallucination</span>
            <span className="text-base text-emerald-400 font-semibold mt-0.5 block">0.00% in Proofs</span>
            <span className="text-neutral-500 text-[11px]">Bounded oracle verification</span>
          </div>
        </div>

        {/* Core Research Disciplines */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Scientific Programs
              </span>
              <h2 className="text-xl font-medium tracking-tight text-white mt-1">
                Active Research Vectors
              </h2>
            </div>
            <Link
              href="#agenda"
              className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <span>View Full Research Roadmap</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vector 1 */}
            <div className="border border-white/[0.08] bg-[#0c0d11]/50 backdrop-blur-sm p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.18] transition-colors">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-4">
                  01 / FORMAL VERIFICATION
                </span>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5">
                  Neural-Symbolic Theorem Proving
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Integrating interactive theorem provers (Lean 4, Isabelle) with generative foundation models
                  to synthesize deterministic proofs and eliminate hallucinations in scientific mathematics.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Discipline: Mathematical Logic</span>
                <span className="text-emerald-400">Active</span>
              </div>
            </div>

            {/* Vector 2 */}
            <div className="border border-white/[0.08] bg-[#0c0d11]/50 backdrop-blur-sm p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.18] transition-colors">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-4">
                  02 / INTERPRETABILITY
                </span>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5">
                  Mechanistic Alignment & Circuits
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Deconstructing high-dimensional latent activations into discrete monosemantic features.
                  Developing mathematical bounds on model alignment, deception detection, and goal drift.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Discipline: Safety Science</span>
                <span className="text-emerald-400">Active</span>
              </div>
            </div>

            {/* Vector 3 */}
            <div className="border border-white/[0.08] bg-[#0c0d11]/50 backdrop-blur-sm p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.18] transition-colors">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-4">
                  03 / AUTONOMOUS DYNAMICS
                </span>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5">
                  Multi-Agent Consensus Networks
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Investigating decentralized agent coordination protocols where heterogeneous model instances
                  critique, verify, and iteratively converge on rigorous solutions to scientific problems.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Discipline: Distributed Cognition</span>
                <span className="text-emerald-400">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Preprints */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Selected Preprints
              </span>
              <h2 className="text-xl font-medium tracking-tight text-white mt-1">
                Recent Scientific Papers
              </h2>
            </div>
            <Link
              href="#publications"
              className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <span>View All 24 Publications</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {/* Paper 1 */}
            <div className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 group">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-2">
                  <span>arXiv:2609.14820</span>
                  <span>•</span>
                  <span>September 2026</span>
                  <span>•</span>
                  <span className="text-neutral-400">Formal Verification</span>
                </div>
                <h4 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">
                  On the Soundness and Verification Bounds of Neural Autoformalization in Lean 4
                </h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  We present a formal framework evaluating inductive soundness guarantees in autoformalized
                  mathematical corpora, demonstrating a 3.4× reduction in ungrounded premise leaps.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 shrink-0 self-start md:self-center">
                <a href="#pdf" className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4">
                  <FileText className="w-3.5 h-3.5" /> PDF
                </a>
                <a href="#bibtex" className="hover:text-white">BibTeX</a>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 group">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-2">
                  <span>arXiv:2608.09312</span>
                  <span>•</span>
                  <span>August 2026</span>
                  <span>•</span>
                  <span className="text-neutral-400">Interpretability</span>
                </div>
                <h4 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">
                  Sparse Autoencoder Feature Discovery in Transformer Reasoning Circuits
                </h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Analyzing 16 million cross-entropy latent representations across deep multi-hop inference
                  layers to isolate invariant sub-circuits responsible for logical deductions.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 shrink-0 self-start md:self-center">
                <a href="#pdf" className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4">
                  <FileText className="w-3.5 h-3.5" /> PDF
                </a>
                <a href="#bibtex" className="hover:text-white">BibTeX</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
