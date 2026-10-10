import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { Search, X, Filter } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract all unique tags dynamically
  const allCategories = useMemo(() => {
    const tags = new Set(['All']);
    PROJECTS.forEach((p) => {
      p.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter projects based on search query and category tag
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.tags.includes(activeFilter) || project.category === activeFilter;
      const haystack = `${project.name} ${project.description} ${project.tags.join(' ')} ${project.overview}`.toLowerCase();
      const matchesSearch = haystack.includes(searchTerm.toLowerCase().trim());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section id="projects" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-[#3f6212]" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Projects with purpose.
            </h2>
          </div>
          <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-md">
            Full stack web applications, frontends, and utility systems engineered with the MERN stack.
          </p>
        </div>

        {/* Toolbar: Filters & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-300 shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <Filter className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 shrink-0 mr-1 hidden sm:block" />
            {allCategories.slice(0, 7).map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all focus:outline-none ${
                    isSelected
                      ? 'bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-slate-900 text-[#11120f] dark:text-[#11120f] light:text-white font-bold shadow-sm'
                      : 'bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#2b3027] dark:border-[#2b3027] light:border-slate-300'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#666a61] dark:text-[#666a61] light:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-10 pr-9 rounded-xl bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-50 border border-[#2b3027] dark:border-[#2b3027] light:border-slate-300 text-xs text-white dark:text-white light:text-slate-900 placeholder-[#666a61] dark:placeholder-[#666a61] light:placeholder-slate-400 focus:outline-none focus:border-[#c3f36b] dark:focus:border-[#c3f36b] light:focus:border-slate-900 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666a61] dark:text-[#666a61] light:text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Counter & Active Status */}
        <div className="flex items-center justify-between text-xs font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 mb-6">
          <span>
            Showing <strong className="text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212]">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          {(activeFilter !== 'All' || searchTerm) && (
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
              }}
              className="text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center rounded-2xl border border-dashed border-[#2b3027] p-8">
            <p className="text-base font-semibold text-white mb-2">No projects found matching that query.</p>
            <p className="text-xs text-[#9da196] mb-6">Try searching for different keywords or reset your tech category filter.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
              }}
              className="px-4 py-2 rounded-xl bg-[#c3f36b] text-[#11120f] font-bold text-xs"
            >
              Clear Search Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
