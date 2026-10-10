import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Mail, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function Hero({ onShowToast }) {
  const roles = [
    "Full Stack Developer.",
    "MERN Stack Developer.",
    "Backend Developer.",
    "Frontend Developer."
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 75);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const resumeWin = window.open('/resume.html', '_blank');
    if (onShowToast) onShowToast('Opening official resume for download/print.', 'success');
  };

  return (
    <section id="home" className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#c3f36b]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#9bcf3d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#282d24] dark:border-[#282d24] light:border-slate-300 bg-[#161815] dark:bg-[#161815] light:bg-slate-100 text-[#9da196] dark:text-[#9da196] light:text-slate-800 text-xs w-fit mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-emerald-600"></span>
            </span>
            <span className="font-mono-code text-[11px] tracking-wide">{PERSONAL_INFO.availability}</span>
          </div>

          {/* Headline with Typewriter */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.08] mb-6 min-h-[140px] sm:min-h-[160px]">
            <span className="block text-[#9da196] dark:text-[#9da196] light:text-slate-500 font-medium text-2xl sm:text-4xl mb-2">
              Hi, I'm Manoj Chougule
            </span>
            <span className="text-[#c3f36b] dark:text-[#c3f36b] light:text-[#4d7c0f] italic font-serif font-normal inline-block">
              {displayText}
              <span className="animate-pulse not-italic font-mono-code text-[#c3f36b] dark:text-[#c3f36b] light:text-[#4d7c0f] ml-1">|</span>
            </span>
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-xl leading-relaxed mb-8">
            {PERSONAL_INFO.heroIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-[#c3f36b] text-[#11120f] font-bold text-xs tracking-wide flex items-center gap-2.5 hover:bg-[#b0e653] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#c3f36b]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            >
              <span>View My Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-5 py-3.5 rounded-xl bg-[#181a17] dark:bg-[#181a17] light:bg-slate-100 text-white dark:text-white light:text-slate-800 border border-[#2b3027] dark:border-[#2b3027] light:border-slate-300 font-semibold text-xs tracking-wide flex items-center gap-2 hover:border-[#c3f36b] dark:hover:border-[#c3f36b] light:hover:border-emerald-600 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            >
              <Download className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3.5 rounded-xl bg-transparent text-[#9da196] dark:text-[#9da196] light:text-slate-700 border border-[#232720] dark:border-[#232720] light:border-slate-300 font-semibold text-xs tracking-wide hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-[#c3f36b] dark:hover:border-[#c3f36b] light:hover:border-emerald-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons Links */}
          <div className="flex items-center gap-6 pt-2 border-t border-[#232720]/60 dark:border-[#232720]/60 light:border-slate-300 text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-700">
            <a
              href={PERSONAL_INFO.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#3b3f36] dark:text-[#3b3f36] light:text-slate-400">•</span>
            <span className="font-mono-code text-[11px] text-[#666a61] dark:text-[#666a61] light:text-slate-500">MERN Stack Architect</span>
          </div>
        </motion.div>

        {/* Right Column: Code Editor Illustration & Orbiting Graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visual Code Window */}
          <div className="relative rounded-2xl bg-[#161815] border border-[#2b3027] shadow-2xl overflow-hidden backdrop-blur-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111310] border-b border-[#232720]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono-code text-[#666a61]">
                <Terminal className="w-3.5 h-3.5 text-[#c3f36b]" />
                <span>manoj.portfolio.js</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono-code text-xs leading-relaxed text-[#9da196] overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">01</span>
                <span><span className="text-purple-400">const</span> <span className="text-[#c3f36b] font-bold">developer</span> = &#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">02</span>
                <span className="pl-4">name: <span className="text-amber-300">"{PERSONAL_INFO.shortName}"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">03</span>
                <span className="pl-4">title: <span className="text-amber-300">"Full Stack Engineer"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">04</span>
                <span className="pl-4">stack: [</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">05</span>
                <span className="pl-8 text-amber-300">"MongoDB" <span className="text-[#9da196]">,</span> "Express" <span className="text-[#9da196]">,</span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">06</span>
                <span className="pl-8 text-amber-300">"React" <span className="text-[#9da196]">,</span> "Node.js"</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">07</span>
                <span className="pl-4">],</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">08</span>
                <span className="pl-4">status: <span className="text-sky-300">"Building real-world web apps"</span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#494d44] select-none">09</span>
                <span>&#125;;</span>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="px-5 py-2.5 bg-[#111310]/80 border-t border-[#232720] flex items-center justify-between text-[10px] font-mono-code text-[#666a61]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c3f36b]" /> UTF-8
              </span>
              <span>JavaScript (JSX)</span>
            </div>
          </div>

          {/* Floating Stack Badges */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-white border border-[#30372b] dark:border-[#30372b] light:border-slate-300 text-white dark:text-white light:text-slate-900 text-xs font-mono-code flex items-center gap-2 shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-emerald-600" />
            <span>React.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-5 -left-4 px-3.5 py-2 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-white border border-[#30372b] dark:border-[#30372b] light:border-slate-300 text-white dark:text-white light:text-slate-900 text-xs font-mono-code flex items-center gap-2 shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600" />
            <span>Node & Express</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-white border border-[#30372b] dark:border-[#30372b] light:border-slate-300 text-white dark:text-white light:text-slate-900 text-[11px] font-mono-code flex items-center gap-2 shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-400 light:bg-purple-600" />
            <span>MongoDB & Redux</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
