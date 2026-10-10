import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Code2, AlertCircle } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const safeUrl = (url) => typeof url === 'string' && /^https:\/\/[^/]+/i.test(url);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#2b3027] dark:border-[#2b3027] light:border-slate-300 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-white dark:text-white light:text-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1e221b] border border-[#2e3428] grid place-items-center text-[#9da196] hover:text-white hover:border-[#c3f36b] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="font-mono-code text-xs text-[#c3f36b] uppercase tracking-widest block mb-1">
              Project Specification • {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-2">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600">
              {project.overview}
            </p>
          </div>

          {/* Body Sections */}
          <div className="space-y-6 text-xs sm:text-sm">
            {/* Problem & Approach */}
            <div className="p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200">
              <h3 className="font-mono-code text-xs font-bold text-[#c3f36b] uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Problem & Approach
              </h3>
              <p className="text-[#9da196] dark:text-[#9da196] light:text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h3 className="font-mono-code text-xs font-bold text-[#c3f36b] uppercase tracking-wider mb-3">
                Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#9da196] dark:text-[#9da196] light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c3f36b] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-mono-code text-xs font-bold text-[#c3f36b] uppercase tracking-wider mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[#1e221b] border border-[#2e3428] font-mono-code text-xs text-[#c3f36b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div>
              <h3 className="font-mono-code text-xs font-bold text-[#c3f36b] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> My Contribution
              </h3>
              <p className="text-[#9da196] dark:text-[#9da196] light:text-slate-700 leading-relaxed">
                {project.contribution}
              </p>
            </div>
          </div>

          {/* Actions Footer */}
          <div className="mt-8 pt-6 border-t border-[#232720] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {safeUrl(project.liveUrl) ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#c3f36b] text-[#11120f] font-bold text-xs flex items-center gap-2 hover:bg-[#b0e653] transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs text-[#666a61] font-mono-code">Live Demo Pending</span>
              )}

              {safeUrl(project.sourceUrl) ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1e221b] text-white border border-[#2e3428] font-semibold text-xs flex items-center gap-2 hover:border-[#c3f36b] hover:text-[#c3f36b] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              ) : (
                <span className="text-xs text-[#666a61] font-mono-code">Source Pending</span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-[#9da196] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
