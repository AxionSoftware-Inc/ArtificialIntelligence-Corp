"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold tracking-wider text-white uppercase font-sans">
            SYNTHETA AI
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-[13px] font-normal text-neutral-400">
          <Link
            href="#solutions"
            className="hover:text-white transition-colors duration-200"
          >
            Solutions
          </Link>
          <Link
            href="#research"
            className="hover:text-white transition-colors duration-200"
          >
            Research
          </Link>
          <Link
            href="#models"
            className="hover:text-white transition-colors duration-200"
          >
            Models
          </Link>
          <Link
            href="#insights"
            className="hover:text-white transition-colors duration-200"
          >
            Insights
          </Link>
          <Link
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-medium text-white hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Contact Lab
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm text-neutral-300">
            <Link href="#solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="#research" onClick={() => setIsOpen(false)}>Research</Link>
            <Link href="#models" onClick={() => setIsOpen(false)}>Models</Link>
            <Link href="#insights" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block rounded-full border border-white/30 px-5 py-2 text-xs font-medium text-white"
            >
              Contact Lab
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
