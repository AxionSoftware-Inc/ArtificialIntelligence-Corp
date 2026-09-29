import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentTheme: 'cyan' | 'indigo' | 'amber';
  setTheme: (theme: 'cyan' | 'indigo' | 'amber') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme accent mappings
  const themeAccents = {
    cyan: {
      badge: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
      logoGlow: 'from-cyan-400 to-blue-500',
      activeTab: 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30',
      btnPrimary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20',
      borderGlow: 'hover:border-cyan-500/40'
    },
    indigo: {
      badge: 'border-purple-500/30 bg-purple-950/40 text-purple-300',
      logoGlow: 'from-violet-400 to-fuchsia-500',
      activeTab: 'text-purple-300 bg-purple-950/50 border-purple-500/30',
      btnPrimary: 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-500/25',
      borderGlow: 'hover:border-purple-500/40'
    },
    amber: {
      badge: 'border-amber-500/30 bg-amber-950/40 text-amber-300',
      logoGlow: 'from-amber-400 to-orange-500',
      activeTab: 'text-amber-300 bg-amber-950/50 border-amber-500/30',
      btnPrimary: 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20',
      borderGlow: 'hover:border-amber-500/40'
    }
  }[currentTheme];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#030712]/80 border-b border-white/5 transition-colors duration-500">
      {/* Top Research Announcement Banner */}
      <div className="w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent py-1.5 px-4 text-center text-xs text-slate-400 border-b border-white/[0.04] flex items-center justify-center gap-2">
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium ${themeAccents.badge}`}>
          <Sparkles className="w-3 h-3" /> Research Release
        </span>
        <span>Paper published: <strong className="text-slate-200">"Autonomous Cognitive Synergy in Multi-Agent Reasoning"</strong></span>
        <a href="#papers" className="inline-flex items-center text-slate-300 hover:text-white underline underline-offset-2 ml-1 text-xs">
          Read arXiv PDF <ChevronRight className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-white/10 shadow-lg group cursor-pointer overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${themeAccents.logoGlow} opacity-30 group-hover:opacity-60 transition-opacity blur-sm`}></div>
            <div className="relative font-bold text-lg tracking-tighter text-white flex items-center">
              <span className="font-mono text-xl">∑</span>
              <span className="text-xs ml-0.5 text-slate-400 font-mono">ai</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              SYNTHETA
              <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 uppercase">
                Research
              </span>
            </span>
            <span className="block text-[10px] text-slate-500 tracking-wider uppercase font-mono">
              Frontier Intelligence Labs
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <a 
            href="#research" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            Publications
          </a>
          <a 
            href="#models" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            Foundation Models
          </a>
          <a 
            href="#compute" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Cpu className="w-4 h-4 text-slate-400" />
            Supercluster
          </a>
          <a 
            href="#safety" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            AI Alignment & Safety
          </a>
        </div>

        {/* Right Section: Theme Style Picker & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live Design Style Selector */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-white/10 p-1 rounded-lg text-xs">
            <span className="px-2 text-slate-500 font-mono text-[11px]">Style:</span>
            <button
              onClick={() => setTheme('cyan')}
              className={`px-2 py-0.5 rounded text-xs transition-all ${currentTheme === 'cyan' ? themeAccents.activeTab : 'text-slate-400 hover:text-white'}`}
              title="Quantum Cyber Cyan (Sakana / OpenAI style)"
            >
              Cyan
            </button>
            <button
              onClick={() => setTheme('indigo')}
              className={`px-2 py-0.5 rounded text-xs transition-all ${currentTheme === 'indigo' ? themeAccents.activeTab : 'text-slate-400 hover:text-white'}`}
              title="Deep Cosmic Indigo (DeepMind style)"
            >
              Indigo
            </button>
            <button
              onClick={() => setTheme('amber')}
              className={`px-2 py-0.5 rounded text-xs transition-all ${currentTheme === 'amber' ? themeAccents.activeTab : 'text-slate-400 hover:text-white'}`}
              title="Matrix Monolith Amber (Cognition / xAI style)"
            >
              Amber
            </button>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Open Source Repositories"
          >
            <Terminal className="w-4 h-4" />
          </a>

          <button 
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-md flex items-center gap-1.5 ${themeAccents.btnPrimary}`}
          >
            <span>Request API Key</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-6 space-y-3 bg-[#030712] border-b border-white/10">
          <div className="flex flex-col space-y-2">
            <a href="#research" className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5">Publications</a>
            <a href="#models" className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5">Foundation Models</a>
            <a href="#compute" className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5">Supercluster</a>
            <a href="#safety" className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5">AI Alignment</a>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">Design Theme:</span>
            <div className="flex gap-1">
              <button 
                onClick={() => setTheme('cyan')} 
                className={`px-2 py-1 rounded text-xs ${currentTheme === 'cyan' ? 'bg-cyan-500 text-black font-medium' : 'text-slate-400'}`}
              >
                Cyan
              </button>
              <button 
                onClick={() => setTheme('indigo')} 
                className={`px-2 py-1 rounded text-xs ${currentTheme === 'indigo' ? 'bg-purple-600 text-white font-medium' : 'text-slate-400'}`}
              >
                Indigo
              </button>
              <button 
                onClick={() => setTheme('amber')} 
                className={`px-2 py-1 rounded text-xs ${currentTheme === 'amber' ? 'bg-amber-500 text-black font-medium' : 'text-slate-400'}`}
              >
                Amber
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
