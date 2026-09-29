import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050608] text-[#ececed] selection:bg-white/20 selection:text-white">
      {/* Precision AI Research Header */}
      <Navbar />

      {/* Hero Showcase (First Impression Core) */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
    </div>
  );
}
