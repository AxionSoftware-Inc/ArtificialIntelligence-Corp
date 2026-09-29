"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, Terminal, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050608]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white shadow-inner group-hover:border-white/40 transition-colors">
            {/* Geometric Neural Core Symbol */}
            <span className="font-mono text-sm font-extrabold tracking-tighter">
              ∑
            </span>
            <div className="absolute inset-0 rounded-md bg-cyan-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
              SYNTHETA
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-neutral-300 font-normal">
                AI LAB
              </span>
            </span>
            <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-400">
              Frontier Cognitive Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
          <Link
            href="#models"
            className="hover:text-white transition-colors duration-150 flex items-center gap-1"
          >
            <span>Foundation Models</span>
          </Link>
          <Link
            href="#reasoning"
            className="hover:text-white transition-colors duration-150"
          >
            Reasoning Engine
          </Link>
          <Link
            href="#research"
            className="hover:text-white transition-colors duration-150"
          >
            Research Papers
          </Link>
          <Link
            href="#compute"
            className="hover:text-white transition-colors duration-150 flex items-center gap-1"
          >
            <span>Supercomputing</span>
          </Link>
          <Link
            href="#safety"
            className="hover:text-white transition-colors duration-150"
          >
            Safety Charter
          </Link>
        </nav>

        {/* Cluster Telemetry & Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cluster Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-mono text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Cluster: 1,024× H100</span>
          </div>

          {/* Playground / Weights CTA */}
          <Link
            href="#playground"
            className="inline-flex items-center gap-1.5 rounded bg-white px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>Console Access</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-700" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#050608] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm text-neutral-300">
            <Link href="#models" onClick={() => setIsOpen(false)}>Foundation Models</Link>
            <Link href="#reasoning" onClick={() => setIsOpen(false)}>Reasoning Engine</Link>
            <Link href="#research" onClick={() => setIsOpen(false)}>Research Papers</Link>
            <Link href="#compute" onClick={() => setIsOpen(false)}>Supercomputing</Link>
            <Link href="#safety" onClick={() => setIsOpen(false)}>Safety Charter</Link>
          </div>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>1,024× H100 SXM5 Online</span>
            </div>
            <Link
              href="#playground"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 rounded bg-white px-3 py-1.5 text-xs font-semibold text-black"
            >
              <span>Console Access</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
