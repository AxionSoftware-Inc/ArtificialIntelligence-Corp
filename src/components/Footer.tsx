"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, theme } from "@/lib/design-system";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-black py-16 text-neutral-400">
      <div className={theme.layout.container}>
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-base font-bold tracking-[0.14em] text-white uppercase font-sans">
                {siteConfig.brand.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm font-normal">
              An independent scientific laboratory advancing verifiable foundation intelligence, 
              mathematical reasoning, and sovereign compute infrastructure.
            </p>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Solutions
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href="#solutions" className="hover:text-white transition-colors">Autonomous Agents</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">Model Distillation</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">Formal Verification</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">Private Compute</Link></li>
            </ul>
          </div>

          {/* Column 2: Research */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Science
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href="#research" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="#research" className="hover:text-white transition-colors">Lean 4 Kernel</Link></li>
              <li><Link href="#research" className="hover:text-white transition-colors">Safety Charter</Link></li>
              <li><Link href="#research" className="hover:text-white transition-colors">Benchmarks</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Lab */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Lab
            </span>
            <ul className="space-y-2 text-neutral-500">
              <li><Link href="#contact" className="hover:text-white transition-colors">Lab Inquiries</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Fellowships</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition-colors">Security Audits</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <p>© 2026 {siteConfig.brand.name} Labs. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Supercluster: 1,024× H100 SXM5 Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
