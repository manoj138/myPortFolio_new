import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle2, FolderGit2, Layers } from 'lucide-react';

export function Experience() {
  const getIcon = (type) => {
    switch (type) {
      case 'Work Experience':
        return <Briefcase className="w-4 h-4 text-[#c3f36b]" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-[#c3f36b]" />;
      default:
        return <Award className="w-4 h-4 text-[#c3f36b]" />;
    }
  };

  return (
    <section id="experience" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-[#3f6212]" />
              <span>Career Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Experience & Education.
            </h2>
          </div>
          <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-md">
            Hands-on software development internships, specialized technical training, and engineering degree.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 space-y-12 border-l border-[#282d24] dark:border-[#282d24] light:border-slate-300">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-7 h-7 rounded-full bg-[#181a17] dark:bg-[#181a17] light:bg-white border border-[#30372b] dark:border-[#30372b] light:border-slate-300 grid place-items-center group-hover:border-[#c3f36b] dark:group-hover:border-[#c3f36b] light:group-hover:border-emerald-600 transition-colors shadow-md">
                {getIcon(item.type)}
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 hover:border-[#c3f36b]/40 transition-all shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 text-[11px] font-mono-code text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] border border-[#2e3428] dark:border-[#2e3428] light:border-slate-300 font-semibold">
                    {item.type}
                  </span>
                  <span className="font-mono-code text-xs text-[#666a61] dark:text-[#666a61] light:text-slate-500">{item.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] mb-4">{item.company}</p>
                <p className="text-xs sm:text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-4 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Render Internship Sub-Project Cards if present */}
                {item.projects && item.projects.length > 0 && (
                  <div className="pt-6 border-t border-[#232720] dark:border-[#232720] light:border-slate-200">
                    <h4 className="font-mono-code text-xs font-bold text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4" /> Production Projects Built During Internship
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {item.projects.map((proj, pIdx) => (
                        <motion.div
                          key={pIdx}
                          whileHover={{ scale: 1.01 }}
                          className="p-5 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 hover:border-[#c3f36b]/40 transition-all"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h5 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-emerald-600" />
                              {proj.title}
                            </h5>
                          </div>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded bg-[#161815] dark:bg-[#161815] light:bg-slate-200 text-[10px] font-mono-code text-[#c3f36b] dark:text-[#c3f36b] light:text-slate-800 border border-[#282d24] dark:border-[#282d24] light:border-slate-300 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Feature Bullet Points */}
                          <ul className="space-y-1.5 text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-600">
                            {proj.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2">
                                <span className="text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 font-bold select-none">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
