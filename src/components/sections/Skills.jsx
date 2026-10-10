import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Code2,
  Palette,
  FileCode,
  Atom,
  Wind,
  Layers,
  Cpu,
  Zap,
  Network,
  FileSpreadsheet,
  GitBranch,
  Github,
  Terminal,
  Send,
  Flame
} from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Code2: Code2,
  Palette: Palette,
  FileCode: FileCode,
  Atom: Atom,
  Wind: Wind,
  Layers: Layers,
  Cpu: Cpu,
  Zap: Zap,
  Network: Network,
  FileSpreadsheet: FileSpreadsheet,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
  Send: Send,
  Flame: Flame
};

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-[#3f6212]" />
              <span>Tools of the trade</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              My Tech Stack.
            </h2>
          </div>
          <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-md">
            A battle-tested set of technologies I use to architect, build, and deploy high-performance web applications.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const CategoryIcon = iconMap[category.icon] || Layout;
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -3 }}
                className="p-8 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 transition-all hover:border-[#c3f36b]/40 shadow-md"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232720] dark:border-[#232720] light:border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] grid place-items-center">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">{category.title}</h3>
                  </div>
                  <span className="font-mono-code text-xs text-[#666a61] dark:text-[#666a61] light:text-slate-400">0{catIdx + 1}</span>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 text-xs font-medium text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-[#c3f36b] dark:hover:border-[#c3f36b] light:hover:border-slate-400 transition-all hover:scale-[1.02]"
                      >
                        <SkillIcon className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 group-hover:scale-110 transition-transform" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
