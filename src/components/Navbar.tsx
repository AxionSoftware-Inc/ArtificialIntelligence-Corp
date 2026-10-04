"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { siteConfig, theme } from "@/lib/design-system";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface NavbarProps {
  dict: Dictionary["nav"];
  lang: Locale;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.products, href: `/${lang}#products` },
    { label: dict.solutions, href: `/${lang}#solutions` },
    { label: dict.process, href: `/${lang}#process` },
    { label: dict.impact, href: `/${lang}#impact` },
    { label: dict.contact, href: `/${lang}#contact` },
  ];

  // Helper to switch locale while preserving current path (e.g., on product page)
  const getLocalizedPath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments.length >= 2) {
      segments[1] = targetLocale;
      return segments.join("/");
    }
    return `/${targetLocale}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12">
        {/* Brand Logo with Icon */}
        <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
          {/* Bespoke Logo Icon */}
          <div className="h-7 w-7 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent p-1 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.25)] group-hover:border-cyan-400/50 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <polygon points="12,4 19,8 12,12 5,8" stroke="#38bdf8" strokeWidth="1.8" />
              <polygon points="5,8 12,12 12,19 5,15" fill="#1e293b" />
              <polygon points="12,12 19,8 19,15 12,19" fill="#0f172a" />
            </svg>
          </div>

          <span className="text-base sm:text-lg font-bold tracking-[0.14em] text-white uppercase font-sans">
            {siteConfig.brand.name}
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-neutral-400 border border-white/15 px-1.5 py-0.5 rounded uppercase">
            {siteConfig.brand.subName}
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide font-normal text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Switcher + CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-0.5 p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <Globe className="h-3.5 w-3.5 ml-1.5 mr-0.5 text-neutral-400" />
            {locales.map((l) => {
              const isActive = l === lang;
              return (
                <Link
                  key={l}
                  href={getLocalizedPath(l)}
                  className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  aria-label={`Switch to ${localeLabels[l]}`}
                >
                  {localeLabels[l]}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href={`/${lang}#contact`}
            className={theme.components.buttonOutline}
          >
            <span>{dict.cta}</span>
            <ArrowUpRight className="h-3 w-3 text-neutral-400 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* Mobile menu button & quick lang toggle */}
        <div className="flex items-center gap-3 sm:hidden">
          {/* Language Switcher on mobile header */}
          <div className="flex items-center p-0.5 rounded-full border border-white/10 bg-white/[0.03]">
            {locales.map((l) => (
              <Link
                key={l}
                href={getLocalizedPath(l)}
                className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${
                  l === lang
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white p-1.5"
            aria-label={dict.menu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-5 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-4 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href={`/${lang}#contact`}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-full border border-white/30 bg-white/[0.05] py-2.5 text-xs font-medium text-white hover:bg-white hover:text-black transition-all"
            >
              {dict.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
