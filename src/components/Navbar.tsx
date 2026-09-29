"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, theme } from "@/lib/design-system";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.08] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-base sm:text-lg font-bold tracking-[0.14em] text-white uppercase font-sans">
            {siteConfig.brand.name}
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-neutral-400 border border-white/15 px-1.5 py-0.5 rounded uppercase">
            {siteConfig.brand.subName}
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-wide font-normal text-neutral-400">
          {siteConfig.links.nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={siteConfig.links.ctaAction.href}
            className={theme.components.buttonOutline}
          >
            <span>{siteConfig.links.ctaAction.label}</span>
            <ArrowUpRight className="h-3 w-3 text-neutral-400 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white p-1.5"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3.5 text-sm text-neutral-300">
            {siteConfig.links.nav.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <Link
              href={siteConfig.links.ctaAction.href}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-full border border-white/30 bg-white/[0.05] py-2.5 text-xs font-medium text-white"
            >
              {siteConfig.links.ctaAction.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
