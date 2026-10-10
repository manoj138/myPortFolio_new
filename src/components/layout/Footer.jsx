import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#232720] dark:border-[#232720] light:border-slate-200 bg-[#0c0d0b] dark:bg-[#0c0d0b] light:bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Copyright */}
        <div className="flex items-center gap-4 text-xs text-[#9da196]">
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#181a17] dark:bg-[#181a17] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 grid place-items-center text-[#c3f36b] font-mono-code font-bold hover:border-[#c3f36b] transition-colors"
            aria-label="Back to Top"
          >
            {PERSONAL_INFO.monogram}
          </button>
          <span>© {currentYear} {PERSONAL_INFO.name}</span>
          <span className="hidden sm:inline text-[#666a61]">•</span>
          <span className="hidden sm:inline text-[#666a61]">Crafted with precision & intention.</span>
        </div>

        {/* Center: Quick Links */}
        <nav className="flex items-center gap-6 text-xs text-[#9da196]">
          {['about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="capitalize hover:text-[#c3f36b] transition-colors focus:outline-none focus-visible:underline"
            >
              {id}
            </button>
          ))}
        </nav>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#181a17] dark:bg-[#181a17] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-300 text-xs text-[#9da196] hover:text-white hover:border-[#c3f36b] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
          aria-label="Scroll Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#c3f36b] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
