"use client";

import React, { useState } from "react";
import { GitBranch, Layers, Cpu, ShieldCheck } from "lucide-react";

export function ArchitectureGraph() {
  const [activeMode, setActiveMode] = useState<"tree" | "moe" | "verifier">("tree");

  return (
    <div className="w-full border border-white/[0.12] bg-[#0c0d11]/90 rounded-sm backdrop-blur-xl overflow-hidden shadow-2xl">
      {/* Schematic Top Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-medium text-neutral-300">
            SYSTEM ARCHITECTURE // SYNTHETA-1 COGNITIVE ENGINE
          </span>
        </div>

        {/* Mode selector */}
        <div className="flex items-center gap-1 mt-2 sm:mt-0 font-mono text-[11px]">
          <button
            onClick={() => setActiveMode("tree")}
            className={`px-2.5 py-1 rounded-sm transition-colors ${
              activeMode === "tree"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            MCTS Proof Tree
          </button>
          <button
            onClick={() => setActiveMode("moe")}
            className={`px-2.5 py-1 rounded-sm transition-colors ${
              activeMode === "moe"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Sparse Router
          </button>
          <button
            onClick={() => setActiveMode("verifier")}
            className={`px-2.5 py-1 rounded-sm transition-colors ${
              activeMode === "verifier"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Formal Verifier
          </button>
        </div>
      </div>

      {/* Schematic Interactive Canvas Area */}
      <div className="p-6 sm:p-8">
        {activeMode === "tree" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-white/[0.06] pb-3">
              <span>EXPLORATION DEPTH: 16 BRANCHES</span>
              <span>TEST-TIME COMPUTE: DYNAMIC ALLOCATION</span>
            </div>

            {/* Tree Nodes Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {/* Root Problem Node */}
              <div className="border border-white/[0.16] bg-white/[0.03] p-3.5 rounded-sm">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">NODE 0 // ROOT</span>
                <p className="text-xs font-medium text-white">Problem Representation</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Prior P(S)</span>
                  <span className="text-neutral-200">1.000</span>
                </div>
              </div>

              {/* Branch 1: Invariant Hypothesis */}
              <div className="border border-white/[0.16] bg-white/[0.03] p-3.5 rounded-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-neutral-400">BRANCH α // LOGIC</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-emerald-500/20 text-emerald-400">VERIFIED</span>
                </div>
                <p className="text-xs font-medium text-white">Inductive Step Synthesis</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Q-Value</span>
                  <span className="text-emerald-400">+0.942</span>
                </div>
              </div>

              {/* Branch 2: Counterexample Check */}
              <div className="border border-white/[0.1] bg-white/[0.015] p-3.5 rounded-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-neutral-500">BRANCH β // PRUNED</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-rose-500/20 text-rose-400">REFUTED</span>
                </div>
                <p className="text-xs font-medium text-neutral-300">Tautological Premise</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Residual</span>
                  <span>0.001</span>
                </div>
              </div>

              {/* Branch 3: Formal Lean 4 Kernel */}
              <div className="border border-white/[0.25] bg-white/[0.06] p-3.5 rounded-sm relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-white">TERMINAL // CERT</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-white text-black font-semibold">Q.E.D.</span>
                </div>
                <p className="text-xs font-semibold text-white">Deterministic Proof</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                  <span>Certainty</span>
                  <span className="text-white font-bold">100.0%</span>
                </div>
              </div>
            </div>

            {/* Tree Flow Line Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="h-3.5 w-3.5 text-neutral-400" />
                <span>Search Policy: Latent Monte Carlo Value Guidance</span>
              </span>
              <span className="text-neutral-300">Pruning Efficiency: 91.4%</span>
            </div>
          </div>
        )}

        {activeMode === "moe" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-white/[0.06] pb-3">
              <span>ACTIVE PARAMETERS: 67B TOTAL // 14B PER TOKEN</span>
              <span>SPECIALIST ROUTING: TOP-2 OF 32 EXPERTS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="border border-white/20 bg-white/[0.05] p-3 rounded-sm">
                <span className="text-[10px] text-emerald-400 block mb-1">● EXPERT #04 [ACTIVE]</span>
                <p className="text-white text-xs">Symbolic Algebra & Group Theory</p>
                <span className="text-[10px] text-neutral-400 mt-2 block">Routing Softmax: 0.628</span>
              </div>
              <div className="border border-white/20 bg-white/[0.05] p-3 rounded-sm">
                <span className="text-[10px] text-emerald-400 block mb-1">● EXPERT #19 [ACTIVE]</span>
                <p className="text-white text-xs">First-Order Predicate Logic</p>
                <span className="text-[10px] text-neutral-400 mt-2 block">Routing Softmax: 0.314</span>
              </div>
              <div className="border border-white/[0.08] bg-white/[0.015] p-3 rounded-sm opacity-60">
                <span className="text-[10px] text-neutral-500 block mb-1">○ EXPERT #08 [DORMANT]</span>
                <p className="text-neutral-400 text-xs">Empirical Natural Language</p>
                <span className="text-[10px] text-neutral-500 mt-2 block">Routing Softmax: 0.012</span>
              </div>
              <div className="border border-white/[0.08] bg-white/[0.015] p-3 rounded-sm opacity-60">
                <span className="text-[10px] text-neutral-500 block mb-1">○ EXPERT #27 [DORMANT]</span>
                <p className="text-neutral-400 text-xs">Algorithmic Complexity</p>
                <span className="text-[10px] text-neutral-500 mt-2 block">Routing Softmax: 0.009</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-neutral-400" />
                <span>Router: Load-Balanced Gating with Auxiliary Loss L_aux</span>
              </span>
              <span className="text-neutral-300">Throughput: 8,400 tokens/sec</span>
            </div>
          </div>
        )}

        {activeMode === "verifier" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-white/[0.06] pb-3">
              <span>KERNEL: LEAN 4 FORMAL LOGIC VERIFIER</span>
              <span>GUARANTEE: SOUNDNESS IN THE LIMIT</span>
            </div>

            <div className="bg-[#050608] border border-white/[0.08] p-4 rounded font-mono text-xs text-neutral-300 space-y-2 overflow-x-auto">
              <div className="text-neutral-500">// Formal specification checked by Syntheta Oracle</div>
              <div>
                <span className="text-indigo-400">theorem</span>{" "}
                <span className="text-white">autonomous_convergence</span>{" "}
                (M : AgentNetwork) (h : InvariantHolds M) :
              </div>
              <div className="pl-4 text-neutral-400">
                ∀ (p : Problem), Solvable p → ∃ (proof : ProofChain), Validates proof p :=
              </div>
              <div>
                <span className="text-indigo-400">by</span>{" "}
                <span className="text-emerald-400">exact</span>{" "}
                <span className="text-neutral-300">oracle_induction h</span>
              </div>
              <div className="pt-2 text-emerald-400 text-[11px] flex items-center gap-1.5 border-t border-white/[0.06]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified: Lean 4 kernel exited with status 0 (Zero unproved axioms)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-neutral-400" />
                <span>Compiler Integration: Z3 SMT Solver + Lean 4 Language Server</span>
              </span>
              <span className="text-neutral-300">Hallucination Rate: 0.00%</span>
            </div>
          </div>
        )}
      </div>

      {/* Schematic Footer Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06] border-t border-white/[0.08] bg-white/[0.01] px-4 py-2.5 text-[11px] font-mono text-neutral-400">
        <div className="px-2">
          <span className="text-neutral-500 block text-[9px] uppercase">Base Architecture</span>
          <span className="text-neutral-200">Sparse MoE + MCTS</span>
        </div>
        <div className="px-2">
          <span className="text-neutral-500 block text-[9px] uppercase">Context Window</span>
          <span className="text-neutral-200">1,000,000 Tokens</span>
        </div>
        <div className="px-2">
          <span className="text-neutral-500 block text-[9px] uppercase">Inference Hardware</span>
          <span className="text-neutral-200">NVIDIA H100 SXM5</span>
        </div>
        <div className="px-2">
          <span className="text-neutral-500 block text-[9px] uppercase">License</span>
          <span className="text-neutral-200">Open Science / Apache 2.0</span>
        </div>
      </div>
    </div>
  );
}
