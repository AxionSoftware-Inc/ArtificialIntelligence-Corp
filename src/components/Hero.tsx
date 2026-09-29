import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Copy, 
  Check, 
  Play,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  currentTheme: 'cyan' | 'indigo' | 'amber';
}

export const Hero: React.FC<HeroProps> = ({ currentTheme }) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'math' | 'code'>('agent');
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);

  // Dynamic Theme Styling
  const styles = {
    cyan: {
      glowRadial: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      heroAccentText: 'from-cyan-400 via-teal-300 to-blue-500',
      badgeBorder: 'border-cyan-500/30 bg-cyan-950/30 text-cyan-300',
      badgeDot: 'bg-cyan-400 shadow-cyan-400/50',
      btnPrimary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/25',
      terminalBorder: 'border-cyan-500/20 shadow-cyan-950/50',
      tagActive: 'border-cyan-500/50 bg-cyan-950/50 text-cyan-300',
      metricText: 'text-cyan-400',
      pulseHighlight: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30'
    },
    indigo: {
      glowRadial: 'from-purple-500/20 via-violet-600/10 to-transparent',
      heroAccentText: 'from-purple-400 via-violet-300 to-indigo-400',
      badgeBorder: 'border-purple-500/30 bg-purple-950/30 text-purple-300',
      badgeDot: 'bg-purple-400 shadow-purple-400/50',
      btnPrimary: 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-violet-500/25',
      terminalBorder: 'border-purple-500/20 shadow-purple-950/50',
      tagActive: 'border-purple-500/50 bg-purple-950/50 text-purple-300',
      metricText: 'text-purple-400',
      pulseHighlight: 'border-purple-500/40 text-purple-300 bg-purple-950/30'
    },
    amber: {
      glowRadial: 'from-amber-500/20 via-orange-600/10 to-transparent',
      heroAccentText: 'from-amber-400 via-yellow-200 to-orange-400',
      badgeBorder: 'border-amber-500/30 bg-amber-950/30 text-amber-300',
      badgeDot: 'bg-amber-400 shadow-amber-400/50',
      btnPrimary: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/25',
      terminalBorder: 'border-amber-500/20 shadow-amber-950/50',
      tagActive: 'border-amber-500/50 bg-amber-950/50 text-amber-300',
      metricText: 'text-amber-400',
      pulseHighlight: 'border-amber-500/40 text-amber-300 bg-amber-950/30'
    }
  }[currentTheme];

  const handleCopyCode = () => {
    navigator.clipboard.writeText('pip install syntheta-core && python -m syntheta.agent --verify');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
    }, 1200);
  };

  const terminalSnippets = {
    agent: [
      { sender: 'consensus_orchestrator', msg: 'Formulating multi-agent hypothesis tree for ARC-AGI reasoning task #841...' },
      { sender: 'prover_node_alpha', msg: 'Inductive bias verified. Invariant condition established in O(log n).' },
      { sender: 'verifier_oracle', msg: 'Formal Z3 SAT validation: SUCCESS. Counterexample search returned NULL.' },
      { sender: 'syntheta_core', msg: 'Synthesis complete: 99.8% theorem certainty. Self-calibrating weight delta saved.' },
    ],
    math: [
      { sender: 'euler_engine', msg: 'Decomposing non-linear manifold into symplectic topology representation...' },
      { sender: 'metric_tensor', msg: 'Ricci curvature scalar evaluated: R = 4.291e-4 across 12-dimensional subspace.' },
      { sender: 'lean4_verifier', msg: 'Lean 4 kernel certified: theorem no_ghost_anomaly proven without axioms.' },
      { sender: 'solution_matrix', msg: 'Analytical solution converged in 14 iterations (residuals < 1e-12).' },
    ],
    code: [
      { sender: 'codegen_daemon', msg: 'Generating distributed async memory allocator with zero lock-contention...' },
      { sender: 'fuzz_tester', msg: 'Executed 1,000,000 randomized concurrency mutations: 0 races detected.' },
      { sender: 'llvm_optimizer', msg: 'Vectorized with AVX-512 & NEON intrinsics. Throughput: 14.8 GB/sec.' },
      { sender: 'kernel_ready', msg: 'Distributed tensor core pipeline deployed to 512x H100 clusters.' },
    ]
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b ${styles.glowRadial} blur-[120px] rounded-full pointer-events-none opacity-70 animate-pulse-glow`}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-release Chip */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium backdrop-blur-md transition-all duration-300 shadow-sm ${styles.badgeBorder}`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.badgeDot}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${styles.badgeDot}`}></span>
            </span>
            <span className="text-slate-300">FRONTIER FOUNDATION RESEARCH</span>
            <span className="text-slate-500">•</span>
            <span className="font-semibold">SYNTHETA-3 ALPHA</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Architecting{' '}
            <span className={`bg-gradient-to-r ${styles.heroAccentText} bg-clip-text text-transparent`}>
              Autonomous Cognitive
            </span>{' '}
            Intelligence
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            We are an independent scientific laboratory pioneering mathematical reasoning, 
            emergent multi-agent consensus, and verifiable self-improving neural systems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg flex items-center gap-2 group cursor-pointer ${styles.btnPrimary}`}>
              <span>Read Technical Whitepaper</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#sandbox" 
              className="px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Explore Benchmark Suites</span>
            </a>
          </div>

          {/* Install command quick-copy pill */}
          <div className="mt-6 inline-flex items-center gap-2 bg-slate-900/80 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 backdrop-blur-sm">
            <span className="text-slate-500">$</span>
            <span>pip install syntheta-core</span>
            <button 
              onClick={handleCopyCode}
              className="ml-2 text-slate-400 hover:text-white transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Live Interactive Research Architecture Preview / Terminal Widget */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className={`rounded-2xl bg-slate-950/90 border backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 ${styles.terminalBorder}`}>
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  syntheta-agent-runtime // v3.0-rc2
                </span>
              </div>

              {/* Sub-Tabs: Switching agent modalities */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${activeTab === 'agent' ? styles.tagActive : 'text-slate-400 hover:text-white'}`}
                >
                  agent_consensus.py
                </button>
                <button
                  onClick={() => setActiveTab('math')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${activeTab === 'math' ? styles.tagActive : 'text-slate-400 hover:text-white'}`}
                >
                  lean4_kernel.thm
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${activeTab === 'code' ? styles.tagActive : 'text-slate-400 hover:text-white'}`}
                >
                  h100_cluster.rs
                </button>
              </div>

              {/* Run action button */}
              <button
                onClick={handleRunSimulation}
                disabled={executing}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              >
                {executing ? (
                  <>
                    <RotateCcw className="w-3 h-3 animate-spin text-slate-400" />
                    <span>executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Run Verification</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-sm space-y-3 min-h-[190px] bg-[#02050c]">
              <div className="text-slate-500 flex items-center justify-between pb-2 border-b border-white/5 text-[11px]">
                <span>CLUSTER: us-central-syntheta-04 [512x H100 SXM5 80GB]</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" /> CLUSTER HEALTHY
                </span>
              </div>

              {terminalSnippets[activeTab].map((row, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 leading-relaxed">
                  <span className="text-slate-500 shrink-0 font-medium sm:w-44 text-[12px]">
                    [{row.sender}]
                  </span>
                  <span className={`${index === terminalSnippets[activeTab].length - 1 ? 'text-slate-100 font-semibold' : 'text-slate-300'}`}>
                    {row.msg}
                  </span>
                </div>
              ))}

              {executing && (
                <div className="flex items-center gap-2 text-slate-400 pt-2 text-xs italic animate-pulse">
                  <span>Evaluating mathematical constraints across 64 neural nodes...</span>
                </div>
              )}
            </div>

            {/* Terminal Live Telemetry Footer */}
            <div className="px-5 py-3 bg-slate-900/60 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="block text-slate-500 text-[10px]">REASONING DEPTH</span>
                <span className={`font-semibold ${styles.metricText}`}>64 Steps Lookahead</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px]">CONSENSUS ACCURACY</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 99.4% SAT
                </span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px]">CONTEXT HORIZON</span>
                <span className="font-semibold text-slate-200">2,048,000 Tokens</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px]">INFERENCE ENGINE</span>
                <span className="font-semibold text-slate-200 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> Flash-FP8 Core
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Metrics / Scientific Benchmarks Showcase */}
        <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${styles.metricText}`}>
              94.8%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-400">MATH-500 Benchmark (Zero-shot)</div>
          </div>
          <div>
            <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${styles.metricText}`}>
              87.3%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-400">SWE-bench Verified (Resolved)</div>
          </div>
          <div>
            <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${styles.metricText}`}>
              4.8x
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-400">Inference Energy Efficiency</div>
          </div>
          <div>
            <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${styles.metricText}`}>
              100%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-400">Open Proof Artifacts</div>
          </div>
        </div>

        {/* Backed By & Partner Labs Marquee */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono">
            Research Compute & Infrastructure Partners
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-mono text-sm tracking-widest font-bold text-slate-300">NVIDIA INCEPTION</span>
            <span className="font-mono text-sm tracking-widest font-bold text-slate-300">NEO-COMPUTE LABS</span>
            <span className="font-mono text-sm tracking-widest font-bold text-slate-300">HUGGING FACE PARTNER</span>
            <span className="font-mono text-sm tracking-widest font-bold text-slate-300">OXFORD AI ALIGNMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
