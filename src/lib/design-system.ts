/**
 * Central Global Design System for SYNTHETA AI
 * Modify any token here to dynamically update the entire website.
 */

export const siteConfig = {
  brand: {
    name: "SYNTHETA AI",
    subName: "Labs",
    badgeText: "Frontier Intelligence for Enterprise & Labs",
    tagline: "Turn Intelligence Into Growth Infrastructure.",
    description:
      "We help startups and enterprises integrate foundational AI into marketing, operations, and product, without complexity, without chaos.",
  },
  links: {
    nav: [
      { label: "Solutions", href: "#solutions" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Process", href: "#process" },
      { label: "Impact", href: "#impact" },
      { label: "Contact", href: "#contact" },
    ],
    primaryAction: {
      label: "Start AI Journey",
      href: "#contact",
    },
    secondaryAction: {
      label: "View Case Studies",
      href: "#cases",
    },
    ctaAction: {
      label: "Contact Lab",
      href: "#contact",
    },
  },
  partners: [
    { name: "attentive®", special: true },
    { name: "coinbase" },
    { name: "upwork" },
    { name: "DocuSign" },
    { name: "drips" },
    { name: "NETFLIX", uppercase: true },
    { name: "braze", italic: true },
    { name: "zapier" },
  ],
};

export const theme = {
  // Container & Layout
  layout: {
    container: "mx-auto max-w-7xl px-6 sm:px-12 w-full",
    section: "relative w-full py-24 sm:py-32 overflow-hidden",
    sectionBorder: "border-t border-white/[0.08]",
  },

  // Typography Tokens
  typography: {
    h1: "text-5xl sm:text-6xl lg:text-[74px] font-bold tracking-[-0.035em] text-white leading-[1.05]",
    h2: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-[1.12]",
    h3: "text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-white leading-snug",
    bodyLarge: "text-base sm:text-lg text-neutral-400 leading-relaxed font-normal",
    bodyMedium: "text-sm sm:text-base text-neutral-400 leading-relaxed font-normal",
    bodySmall: "text-xs sm:text-sm text-neutral-500 leading-normal",
    mono: "font-mono text-xs text-neutral-400",
    gradientText:
      "bg-gradient-to-b from-white via-white/95 to-neutral-400 bg-clip-text text-transparent",
  },

  // Component Tokens
  components: {
    // Badges
    badge:
      "inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] text-xs font-medium text-neutral-300 transition-all hover:border-white/25",
    badgeJewel:
      "relative flex h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
    badgePulse:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80",

    // Buttons
    buttonPrimary:
      "inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] cursor-pointer",
    buttonSecondary:
      "group inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer",
    buttonOutline:
      "relative group rounded-full border border-white/20 bg-white/[0.03] px-5 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center gap-1.5 cursor-pointer",

    // Cards & Surfaces
    card: "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
    cardHighlight:
      "group relative rounded-2xl border border-white/[0.16] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.28] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
  },
};
