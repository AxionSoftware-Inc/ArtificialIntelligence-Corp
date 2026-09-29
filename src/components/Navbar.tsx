"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090a0c]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#090a0c] font-mono text-xs font-bold tracking-tighter">
            ∑
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight text-white">
              Syntheta
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              Research
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-neutral-400">
          <Link
            href="#research"
            className="hover:text-white transition-colors duration-150"
          >
            Research
          </Link>
          <Link
            href="#publications"
            className="hover:text-white transition-colors duration-150"
          >
            Publications
          </Link>
          <Link
            href="#models"
            className="hover:text-white transition-colors duration-150"
          >
            Models
          </Link>
          <Link
            href="#safety"
            className="hover:text-white transition-colors duration-150"
          >
            Safety & Alignment
          </Link>
          <Link
            href="#about"
            className="hover:text-white transition-colors duration-150"
          >
            About
          </Link>
        </nav>

        {/* Secondary Action */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <span>Lab Inquiries</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
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
        <div className="md:hidden border-b border-white/[0.08] bg-[#090a0c] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm text-neutral-300">
            <Link href="#research" onClick={() => setIsOpen(false)}>Research</Link>
            <Link href="#publications" onClick={() => setIsOpen(false)}>Publications</Link>
            <Link href="#models" onClick={() => setIsOpen(false)}>Models</Link>
            <Link href="#safety" onClick={() => setIsOpen(false)}>Safety & Alignment</Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          </div>
          <div className="pt-3 border-t border-white/[0.08]">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 text-sm font-medium text-white"
            >
              <span>Lab Inquiries</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
