import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#0e100e]/85 dark:bg-[#0e100e]/85 light:bg-white/85 backdrop-blur-xl border-b border-[#232720] dark:border-[#232720] light:border-slate-200 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b] rounded-lg p-1"
          aria-label="Navigate to Home"
        >
          <span className="w-9 h-9 grid place-items-center rounded-xl bg-[#181a17] dark:bg-[#181a17] light:bg-slate-100 border border-[#262a23] dark:border-[#262a23] light:border-slate-300 text-[#c3f36b] font-mono-code font-bold text-sm group-hover:border-[#c3f36b] transition-colors">
            {PERSONAL_INFO.monogram}
          </span>
          <span className="font-bold text-sm tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-[#c3f36b] transition-colors">
            {PERSONAL_INFO.shortName}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161815]/60 dark:bg-[#161815]/60 light:bg-slate-100/70 p-1.5 rounded-full border border-[#232720] dark:border-[#232720] light:border-slate-200 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b] ${
                  isActive
                    ? 'text-white dark:text-white light:text-slate-900 font-semibold'
                    : 'text-[#9da196] hover:text-white dark:text-[#9da196] dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-[#252a22] dark:bg-[#252a22] light:bg-white border border-[#353c30] dark:border-[#353c30] light:border-slate-300 shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Actions: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[#181a17] dark:bg-[#181a17] light:bg-slate-100 border border-[#262a23] dark:border-[#262a23] light:border-slate-300 grid place-items-center text-[#9da196] hover:text-[#c3f36b] hover:border-[#c3f36b] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#c3f36b]" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#181a17] dark:bg-[#181a17] light:bg-slate-100 border border-[#262a23] dark:border-[#262a23] light:border-slate-300 grid place-items-center text-[#9da196] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111310] dark:bg-[#111310] light:bg-white border-b border-[#232720] dark:border-[#232720] light:border-slate-200 px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                    activeSection === item.id
                      ? 'bg-[#1e221b] text-[#c3f36b] font-semibold border border-[#30372b]'
                      : 'text-[#9da196] hover:text-white hover:bg-[#181a17]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <div className="w-2 h-2 rounded-full bg-[#c3f36b]" />}
                </button>
              ))}
              
              <div className="pt-3 mt-2 border-t border-[#232720] flex items-center justify-between text-xs text-[#9da196]">
                <span>Manoj Chougule</span>
                <span className="font-mono-code text-[#c3f36b]">MERN Developer</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
