import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Solutions } from "@/components/Solutions";
import { Metrics } from "@/components/Metrics";
import { Workflow } from "@/components/Workflow";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth">
      {/* Precision Sticky AI Research Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. 3D Monolith Parallax Hero Showcase */}
        <Hero />

        {/* 2. Our products */}
        <Products />

        {/* 2. Core Capabilities Bento Grid */}
        <Solutions />

        {/* 3. Empirical Results & Measurable Impact */}
        <Metrics />

        {/* 4. Three-Step Deployment Protocol */}
        <Workflow />

        {/* 5. Final Technical Consultation CTA */}
        <CTA />
      </main>

      {/* 6. Minimalist Institutional Footer */}
      <Footer />
    </div>
  );
}
