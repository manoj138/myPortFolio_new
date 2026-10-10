import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, HIGHLIGHTS } from '../../data/portfolioData';
import { MapPin, Sparkles, Layers, Cpu, Code2, Award, ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-[#3f6212]" />
              <span>A little about me</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
              Thoughtful by nature.<br />
              <span className="text-[#9da196] dark:text-[#9da196] light:text-slate-500">Builder by practice.</span>
            </h2>
          </div>
          <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-md">
            A developer who enjoys connecting the details — from a clear interface to a dependable backend API.
          </p>
        </div>

        {/* Asymmetric Bento Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Bento Item 1: Official Profile Photo Card (5 Cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-5 rounded-3xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#282d24] dark:border-[#282d24] light:border-slate-300 overflow-hidden shadow-2xl transition-all hover:border-[#c3f36b]/50 group flex flex-col justify-between"
          >
            <div className="relative aspect-[4/4] w-full overflow-hidden bg-[#111310] border-b border-[#232720]">
              <img
                src="/profile.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161815] dark:from-[#161815] light:from-white/40 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#11120f]/80 dark:bg-[#11120f]/80 light:bg-slate-900/80 backdrop-blur-md text-[10px] font-mono-code text-[#c3f36b] border border-[#282d24] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#c3f36b]" />
                  <span>Pune, MH • India</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#c3f36b] text-[#11120f] font-mono-code text-[10px] font-bold">
                  MERN Developer
                </span>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-white dark:text-white light:text-slate-900">{PERSONAL_INFO.name}</p>
                <p className="text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-500 font-mono-code">Full Stack Engineer</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 border border-[#2e3428] dark:border-[#2e3428] light:border-slate-300 text-xs text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code font-bold">
                11 Months Exp
              </span>
            </div>
          </motion.div>

          {/* Bento Item 2: Executive Mindset & Overview (7 Cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-7 rounded-3xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#282d24] dark:border-[#282d24] light:border-slate-300 p-8 sm:p-10 shadow-2xl flex flex-col justify-between hover:border-[#c3f36b]/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary & Mindset</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-6 leading-snug">
                "I care about creating web software that feels <span className="text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] italic font-serif">useful, intuitive, and built to last.</span>"
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#9da196] dark:text-[#9da196] light:text-slate-600 leading-relaxed mb-8">
                <p>{PERSONAL_INFO.aboutSummary}</p>
                <p>{PERSONAL_INFO.aboutMindset}</p>
              </div>
            </div>

            {/* Micro Badge Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#232720] dark:border-[#232720] light:border-slate-200">
              <div className="p-3 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200">
                <span className="block text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase">Education</span>
                <span className="text-xs font-bold text-white dark:text-white light:text-slate-900 font-mono-code">B.Tech CSE (7.53 CGPA)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200">
                <span className="block text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase">Internship</span>
                <span className="text-xs font-bold text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code">CloudRegex Infotech</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase">Core Focus</span>
                <span className="text-xs font-bold text-white dark:text-white light:text-slate-900 font-mono-code">React & Node APIs</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bento Highlights Row (3 Equal Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 transition-all hover:border-[#c3f36b]/40 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] grid place-items-center mb-6 font-mono-code font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code mb-3">{item.subtitle}</p>
                <p className="text-xs sm:text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 flex items-center justify-between text-[11px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-400">
                <span>Quality Verified</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
