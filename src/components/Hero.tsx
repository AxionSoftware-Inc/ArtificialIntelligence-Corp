import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Academic / Mission Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
            <span className="text-[12px] font-mono uppercase tracking-widest text-neutral-400">
              Frontier Research Agenda
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-[1.12]">
            Developing verifiable autonomous reasoning and safe foundation intelligence.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-3xl font-normal">
            Syntheta Research is an independent scientific laboratory exploring the fundamental
            frontiers of artificial intelligence. We investigate neural-symbolic theorem proving,
            emergent multi-agent consensus, and mechanistic interpretability to build systems that
            are reliable, mathematically verifiable, and safe.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#publications"
              className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-xs font-semibold tracking-wide text-[#090a0c] hover:bg-neutral-200 transition-colors"
            >
              Explore Publications
            </Link>

            <Link
              href="#safety"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-300 hover:text-white transition-colors"
            >
              <span>Our Alignment & Safety Protocol</span>
              <ArrowRight className="h-3.5 w-3.5 text-neutral-400" />
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-24 border-t border-white/[0.08]" />

        {/* Core Research Disciplines */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Scientific Disciplines
              </span>
              <h2 className="text-xl font-medium tracking-tight text-white mt-1">
                Core Research Vectors
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
            <div className="border border-white/[0.08] bg-white/[0.015] p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.16] transition-colors">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-4">
                  01 / THEOREM PROVING
                </span>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5">
                  Formal Reasoning & Verification
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Integrating interactive theorem provers (Lean 4, Isabelle) with generative architectures
                  to synthesize deterministic proofs and eliminate epistemic hallucinations in mathematical logic.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Domain: Symbolic Logic</span>
                <span>Active Track</span>
              </div>
            </div>

            {/* Vector 2 */}
            <div className="border border-white/[0.08] bg-white/[0.015] p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.16] transition-colors">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-4">
                  02 / INTERPRETABILITY
                </span>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5">
                  Mechanistic Alignment & Steering
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Deconstructing high-dimensional latent activations into discrete monosemantic features.
                  Developing mathematical bounds on model alignment, deception detection, and goal drift.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Domain: Safety Science</span>
                <span>Active Track</span>
              </div>
            </div>

            {/* Vector 3 */}
            <div className="border border-white/[0.08] bg-white/[0.015] p-7 rounded-sm flex flex-col justify-between hover:border-white/[0.16] transition-colors">
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
                <span>Domain: Agent Systems</span>
                <span>Active Track</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Recent Papers Preview */}
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
