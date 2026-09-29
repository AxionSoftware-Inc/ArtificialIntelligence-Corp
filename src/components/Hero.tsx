"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  ChevronDown, 
  ChevronUp,
  Terminal,
  Activity
} from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTask, setActiveTask] = useState<"math" | "agent" | "circuit">("math");
  const [isThinkingOpen, setIsThinkingOpen] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [runCount, setRunCount] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install syntheta-core && python -m syntheta.reason --verify");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setRunCount((prev) => prev + 1);
    }, 1100);
  };

  const tasks = {
    math: {
      title: "Non-Linear Operator Continuity Proof",
      prompt: "Prove that the non-linear reaction-diffusion operator T(u) = -Δu + u³ has a unique weak solution in H¹₀(Ω).",
      thoughts: [
        "Constructing variational formulation over Sobolev space H¹₀(Ω)...",
        "Checking coercivity: ⟨T(u), u⟩ ≥ C‖u‖²_H¹ + ‖u‖⁴_L⁴ > 0 via Poincaré inequality.",
        "Establishing strict monotonicity: ⟨T(u) - T(v), u - v⟩ ≥ ‖∇(u - v)‖²_L² ≥ 0.",
        "Minty-Browder theorem conditions verified without contradiction.",
      ],
      code: `theorem unique_weak_solution (u v : H1_0 Ω) (h : T u = T v) : u = v := by
  have mono : inner (T u - T v) (u - v) ≥ ‖∇(u - v)‖^2 := by exact strict_monotonicity u v
  have zero_diff : ‖∇(u - v)‖ = 0 := by linarith [h, mono]
  exact poincare_injectivity zero_diff`,
      cert: "LEAN 4 KERNEL: 0 UNPROVEN AXIOMS • SOUNDNESS CERTIFIED",
    },
    agent: {
      title: "Byzantine Fault Tolerant Consensus Protocol",
      prompt: "Synthesize a crash-fault-tolerant quorum consensus algorithm across 128 distributed nodes under 20% packet drop.",
      thoughts: [
        "Initializing Raft-extended state-machine replication topology...",
        "Formulating safety invariant: No two committed logs differ at index k.",
        "Executing model-checking trace across 10,000 randomized split-brain partitions.",
        "TLA+ invariant verification passed: Linearizability confirmed.",
      ],
      code: `pub async fn verify_quorum_commit(log_idx: u64, quorum: &[NodeId]) -> Result<Proof, ConsensusError> {
    assert!(quorum.len() >= 2 * FAULT_TOLERANCE + 1, "Quorum size invariant violated");
    let state_hash = hash_replicated_states(quorum, log_idx).await?;
    oracle::verify_linearizable_commit(state_hash, log_idx)
}`,
      cert: "TLA+ FORMAL MODEL CHECK: 0 DEADLOCKS • 0 SAFETY VIOLATIONS",
    },
    circuit: {
      title: "Sparse Autoencoder Feature Attribution",
      prompt: "Deconstruct layer 32 attention head #14 to isolate the monosemantic feature corresponding to inductive logic.",
      thoughts: [
        "Applying 16x overcomplete Dictionary Learning to activation residual stream...",
        "Measuring feature activation sparsity: L0 norm = 14.2 active latents.",
        "Ablating identified circuit node: Inductive reasoning accuracy drops from 99.4% to 12.1%.",
        "Mechanistic causal attribution established with 99.8% statistical significance.",
      ],
      code: `feature_circuit = SAE.extract_subgraph(layer=32, head=14, target="inductive_logic")
steering_vector = feature_circuit.compute_intervention_vector(alpha=2.5)
model.steer_activation_stream(intervention=steering_vector, verify_faithfulness=True)`,
      cert: "CIRCUIT DISCOVERY: 99.8% CAUSAL INTERVENTION FAITHFULNESS",
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-12 lg:py-20">
      {/* Background Neural Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050608]/70 to-[#050608]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Vision, Mission & Scientific Foundation */}
          <div className="lg:col-span-6 space-y-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
                Frontier Release
              </span>
              <span className="text-neutral-600 font-mono">•</span>
              <span className="text-[11px] font-mono text-neutral-400">
                Syntheta-2.5 Reasoner
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-[1.08]">
              Autonomous intelligence.{" "}
              <span className="font-serif italic text-neutral-300">
                Formulated in logic.
              </span>{" "}
              Verified by proof.
            </h1>

            {/* Core Abstract */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              We train foundational cognitive models that reason beyond statistical approximation. 
              By coupling deep neural representations with interactive theorem provers and 
              test-time compute search, Syntheta builds systems that independently formulate, 
              verify, and prove scientific knowledge.
            </p>

            {/* Quick CLI Copy & Primary Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#playground"
                  className="inline-flex items-center justify-center rounded bg-white px-5 py-3 text-xs font-semibold tracking-wide text-black hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <span>Launch Neural Playground</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>

                <Link
                  href="#publications"
                  className="inline-flex items-center gap-2 rounded border border-white/[0.16] bg-white/[0.02] px-5 py-3 text-xs font-medium tracking-wide text-neutral-300 hover:text-white hover:border-white/[0.3] transition-all"
                >
                  <span>Read Technical Whitepaper</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
                </Link>
              </div>

              {/* Install CLI snippet */}
              <div className="inline-flex items-center gap-2 bg-[#0c0d11] border border-white/[0.1] px-3.5 py-1.5 rounded text-xs font-mono text-neutral-300">
                <Terminal className="h-3.5 w-3.5 text-neutral-500" />
                <span className="text-neutral-500">$</span>
                <span>pip install syntheta-core</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-neutral-400 hover:text-white transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* Scientific Benchmarks Row */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase">Formal Soundness</span>
                <span className="text-base text-white font-semibold mt-0.5 block">99.4% Lean 4</span>
                <span className="text-neutral-500 text-[10px]">Zero axiom hallucinations</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase">Reasoning Horizon</span>
                <span className="text-base text-white font-semibold mt-0.5 block">1M Tokens</span>
                <span className="text-neutral-500 text-[10px]">Test-time MCTS tree</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase">Weights & Science</span>
                <span className="text-base text-neutral-200 font-semibold mt-0.5 block">Open Weights</span>
                <span className="text-neutral-500 text-[10px]">Apache 2.0 license</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Frontier AI Reasoning Machine */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg border border-white/[0.12] bg-[#090a0d]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-neutral-300 flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                    syntheta-2.5-reasoner // live stream
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                  <span className="text-emerald-400">214 tok/s</span>
                  <span>•</span>
                  <span>FP8 Engine</span>
                </div>
              </div>

              {/* Task Selector Tabs */}
              <div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0c0d12] text-xs font-mono">
                <button
                  onClick={() => setActiveTask("math")}
                  className={`py-2 px-3 text-center transition-colors border-r border-white/[0.08] ${
                    activeTask === "math"
                      ? "bg-white/[0.06] text-white font-medium border-b-2 border-b-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Theorem Proving
                </button>
                <button
                  onClick={() => setActiveTask("agent")}
                  className={`py-2 px-3 text-center transition-colors border-r border-white/[0.08] ${
                    activeTask === "agent"
                      ? "bg-white/[0.06] text-white font-medium border-b-2 border-b-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Agent Consensus
                </button>
                <button
                  onClick={() => setActiveTask("circuit")}
                  className={`py-2 px-3 text-center transition-colors ${
                    activeTask === "circuit"
                      ? "bg-white/[0.06] text-white font-medium border-b-2 border-b-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Neural Circuits
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-4 font-mono text-xs">
                
                {/* Input Problem Statement */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500">
                    <span>OBJECTIVE FUNCTION:</span>
                    <span>SEED: #841029</span>
                  </div>
                  <p className="text-white text-xs bg-white/[0.02] border border-white/[0.06] p-2.5 rounded font-mono leading-relaxed">
                    {tasks[activeTask].prompt}
                  </p>
                </div>

                {/* Collapsible Chain-of-Thought Search Tree */}
                <div className="border border-white/[0.08] rounded bg-[#06070a] overflow-hidden">
                  <button
                    onClick={() => setIsThinkingOpen(!isThinkingOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 bg-white/[0.02] text-neutral-400 hover:text-white text-[11px]"
                  >
                    <span className="flex items-center gap-1.5">
                      <GitBranch className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Reasoning Trace (MCTS Search Steps)</span>
                    </span>
                    {isThinkingOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  {isThinkingOpen && (
                    <div className="p-3 space-y-2 border-t border-white/[0.06] text-[11px] text-neutral-400">
                      {tasks[activeTask].thoughts.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-600 shrink-0">[{idx + 1}]</span>
                          <span className="text-neutral-300">{step}</span>
                        </div>
                      ))}
                      {isRunning && (
                        <div className="flex items-center gap-2 text-emerald-400 pt-1 animate-pulse">
                          <RotateCcw className="h-3 w-3 animate-spin" />
                          <span>Searching latent proof paths across 16 parallel branches...</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Verified Output & Formal Verification Proof */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500">
                    <span>FORMAL PROOF SYNTHESIS:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" /> VERIFIED
                    </span>
                  </div>
                  <pre className="p-3 bg-[#030406] border border-white/[0.08] rounded text-emerald-300 text-[11px] overflow-x-auto leading-relaxed">
                    <code>{tasks[activeTask].code}</code>
                  </pre>
                </div>

                {/* Certification Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-neutral-400">
                  <span className="text-emerald-400 font-semibold">{tasks[activeTask].cert}</span>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono transition-colors"
                  >
                    {isRunning ? (
                      <RotateCcw className="h-3 w-3 animate-spin" />
                    ) : (
                      <Play className="h-3 w-3 fill-white" />
                    )}
                    <span>Re-Verify</span>
                  </button>
                </div>
              </div>

              {/* Console Live Telemetry Footer */}
              <div className="grid grid-cols-4 divide-x divide-white/[0.06] border-t border-white/[0.08] bg-[#0c0d12] px-4 py-2.5 text-[10px] font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-600 block text-[9px]">ENGINE</span>
                  <span className="text-neutral-200">Syntheta-2.5</span>
                </div>
                <div className="pl-3">
                  <span className="text-neutral-600 block text-[9px]">LATENCY</span>
                  <span className="text-neutral-200">18ms to token</span>
                </div>
                <div className="pl-3">
                  <span className="text-neutral-600 block text-[9px]">MEMORY</span>
                  <span className="text-neutral-200">48GB HBM3e</span>
                </div>
                <div className="pl-3">
                  <span className="text-neutral-600 block text-[9px]">STATUS</span>
                  <span className="text-emerald-400 font-semibold">100% Sound</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
