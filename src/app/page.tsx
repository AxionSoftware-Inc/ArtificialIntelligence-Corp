import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0c] text-[#ececed]">
      {/* Institutional Top Navbar */}
      <Navbar />

      {/* Main Landing / Hero Content */}
      <main className="flex-1">
        <Hero />
      </main>

      {/* Understated Institutional Research Footer */}
      <footer className="border-t border-white/[0.08] bg-[#070809] py-12 text-xs text-neutral-500">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <span>Syntheta Artificial Intelligence Laboratory</span>
            </div>
            <p className="text-neutral-500">
              Dedicated to open scientific inquiry, formal mathematical verification, and safe foundation intelligence.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-neutral-400">
            <Link href="#ethics" className="hover:text-white transition-colors">
              Research Ethics
            </Link>
            <Link href="#safety" className="hover:text-white transition-colors">
              Safety Charter
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact / Media
            </Link>
            <span className="text-neutral-600">© 2026 Syntheta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
