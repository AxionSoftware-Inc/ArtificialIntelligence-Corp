import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export function App() {
  const [currentTheme, setCurrentTheme] = useState<'cyan' | 'indigo' | 'amber'>('cyan');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar currentTheme={currentTheme} setTheme={setCurrentTheme} />

      {/* Main Landing Page Hero Section */}
      <main className="flex-grow">
        <Hero currentTheme={currentTheme} />
      </main>

      {/* Minimal Aesthetic Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Syntheta AI Research Lab. All mathematical proofs and model weights open-sourced under Apache 2.0.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Research Ethics</span>
            <span className="hover:text-white cursor-pointer">Alignment Protocol</span>
            <span className="hover:text-white cursor-pointer">Security Audits</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
