import React from 'react';
import { motion } from 'framer-motion';
import { useGitHubUser } from '../../hooks/useGitHubUser';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Github, Linkedin, ExternalLink, GitBranch, Users, BookOpen, MapPin, Loader2 } from 'lucide-react';

export function GitHubStats() {
  const { userData, loading, error } = useGitHubUser('manoj138');

  return (
    <section id="profiles" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b] dark:bg-[#c3f36b] light:bg-[#3f6212]" />
              <span>Around the Web</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Developer Profiles.
            </h2>
          </div>
          <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 max-w-md">
            Connect with me across developer platforms and inspect public repositories.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* GitHub Live API Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232720] dark:border-[#232720] light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] grid place-items-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">GitHub Profile</h3>
                    <p className="text-xs font-mono-code text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212]">@manoj138</p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 border border-[#2e3428] dark:border-[#2e3428] light:border-slate-300 grid place-items-center text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 transition-all"
                  aria-label="View GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {loading ? (
                <div className="py-8 flex items-center justify-center gap-2 text-xs text-[#9da196] font-mono-code">
                  <Loader2 className="w-4 h-4 animate-spin text-[#c3f36b]" />
                  <span>Fetching live GitHub data...</span>
                </div>
              ) : (
                <>
                  <p className="text-xs sm:text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 mb-8 leading-relaxed">
                    {userData?.bio || PERSONAL_INFO.heroIntro}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 text-center">
                      <BookOpen className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 mx-auto mb-1" />
                      <p className="text-xl font-bold font-mono-code text-white dark:text-white light:text-slate-900">{userData?.publicRepos}</p>
                      <p className="text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase mt-0.5">Repositories</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 text-center">
                      <Users className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 mx-auto mb-1" />
                      <p className="text-xl font-bold font-mono-code text-white dark:text-white light:text-slate-900">{userData?.followers}</p>
                      <p className="text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase mt-0.5">Followers</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 text-center">
                      <MapPin className="w-4 h-4 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 mx-auto mb-1" />
                      <p className="text-xs font-bold font-mono-code text-white dark:text-white light:text-slate-900 mt-2 truncate">{userData?.location}</p>
                      <p className="text-[10px] font-mono-code text-[#666a61] dark:text-[#666a61] light:text-slate-500 uppercase mt-0.5">Location</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 flex items-center justify-between text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-600">
              <span className="font-mono-code text-[11px] text-[#666a61] dark:text-[#666a61] light:text-slate-500">Public API verified</span>
              <a
                href={PERSONAL_INFO.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 hover:underline font-semibold"
              >
                Visit GitHub →
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232720] dark:border-[#232720] light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1e221b] dark:bg-[#1e221b] light:bg-sky-50 text-sky-400 dark:text-sky-400 light:text-sky-600 grid place-items-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">LinkedIn Profile</h3>
                    <p className="text-xs font-mono-code text-sky-400 dark:text-sky-400 light:text-sky-600">in/manoj-chougule-software-developer</p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1e221b] dark:bg-[#1e221b] light:bg-slate-100 border border-[#2e3428] dark:border-[#2e3428] light:border-slate-300 grid place-items-center text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-sky-400 transition-all"
                  aria-label="View LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 mb-6 leading-relaxed">
                Connect professionally on LinkedIn for project inquiries, collaboration, software engineering roles, and networking.
              </p>

              <div className="p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border border-[#282d24] dark:border-[#282d24] light:border-slate-200 mb-6">
                <p className="text-xs font-bold text-white dark:text-white light:text-slate-900 mb-1">MNS / MERN Developer</p>
                <p className="text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-600">Open for Full Stack Engineer & React Developer positions.</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold text-xs grid place-items-center hover:bg-sky-500/20 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
