import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info, MessageSquare, TrendingUp, ShoppingBag, Link as LinkIcon, Utensils } from 'lucide-react';

export function ProjectCard({ project, onOpenDetails }) {
  const safeUrl = (url) => typeof url === 'string' && /^https:\/\/[^/]+/i.test(url);

  // Render illustrative preview graphic matching each project theme
  const renderPreviewGraphic = () => {
    switch (project.previewType) {
      case 'ecommerce':
        return (
          <div className="w-full h-full bg-[#121411] p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-[#c3f36b]" /> E-Commerce Marketplace
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono-code font-bold">RBAC + JWT</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="p-1.5 rounded bg-[#1e221b] text-center border border-[#262a23]">
                <p className="text-[7px] text-[#666a61] uppercase">Panels</p>
                <p className="text-[9px] font-bold text-white">User / Seller / Admin</p>
              </div>
              <div className="p-1.5 rounded bg-[#1e221b] text-center border border-[#262a23]">
                <p className="text-[7px] text-[#666a61] uppercase">Shipping</p>
                <p className="text-[9px] font-bold text-[#c3f36b]">Pincode Fee</p>
              </div>
              <div className="p-1.5 rounded bg-[#1e221b] text-center border border-[#262a23]">
                <p className="text-[7px] text-[#666a61] uppercase">Mail Alerts</p>
                <p className="text-[9px] font-bold text-amber-300">Nodemailer</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-[#181a17] border border-[#262a23] text-[9px] text-[#9da196] font-mono-code flex justify-between items-center">
              <span>CloudRegex Production App</span>
              <span className="text-[#c3f36b]">Internship Project</span>
            </div>
          </div>
        );

      case 'royaleseva':
        return (
          <div className="w-full h-full bg-[#121411] p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#c3f36b]" /> RoyalESeva Portal Hub
              </span>
              <span className="px-2 py-0.5 rounded bg-[#c3f36b] text-[#11120f] text-[9px] font-mono-code font-bold">MERN Hub</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="p-2 rounded bg-[#1d201c] border border-[#282d24]">
                <p className="text-[8px] text-[#666a61]">Workflows</p>
                <p className="text-[9px] font-bold text-white truncate">Vendor & Admin Verification</p>
              </div>
              <div className="p-2 rounded bg-[#1d201c] border border-[#282d24]">
                <p className="text-[8px] text-[#666a61]">Wallet Billing</p>
                <p className="text-[9px] font-bold text-[#c3f36b]">Balance Ledger</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-[#181a17] border border-[#262a23] text-[9px] text-[#9da196] font-mono-code flex justify-between items-center">
              <span>Document Submission Hub</span>
              <span className="text-[#c3f36b]">Verified ✓</span>
            </div>
          </div>
        );
      case 'chatsphere':
        return (
          <div className="w-full h-full bg-[#121411] flex flex-col justify-between p-4 relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#c3f36b]" />
                <span className="font-mono-code text-[11px] text-white">ChatSphere App</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="space-y-2 py-2">
              <div className="max-w-[70%] p-2 rounded-lg bg-[#20231e] text-[10px] text-[#9da196]">
                Hey Manoj, real-time Socket.IO connected!
              </div>
              <div className="max-w-[75%] ml-auto p-2 rounded-lg bg-[#c3f36b] text-[#11120f] font-medium text-[10px]">
                Authentication verified via JWT token ✓
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#181a17] border border-[#262a23] text-[10px] text-[#666a61] font-mono-code flex justify-between items-center">
              <span>Type a message...</span>
              <span className="px-2 py-0.5 rounded bg-[#c3f36b] text-[#11120f] font-bold text-[9px]">Send</span>
            </div>
          </div>
        );

      case 'income':
        return (
          <div className="w-full h-full bg-[#121411] p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#c3f36b]" /> Financial Overview
              </span>
              <span className="text-[10px] font-mono-code text-[#c3f36b] font-bold">+$4,280.00</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-[#1e221b] text-center">
                <p className="text-[8px] text-[#666a61] uppercase">Income</p>
                <p className="text-[10px] font-bold text-emerald-400 font-mono-code">$4,280</p>
              </div>
              <div className="p-2 rounded bg-[#1e221b] text-center">
                <p className="text-[8px] text-[#666a61] uppercase">Expenses</p>
                <p className="text-[10px] font-bold text-rose-400 font-mono-code">$1,640</p>
              </div>
              <div className="p-2 rounded bg-[#1e221b] text-center">
                <p className="text-[8px] text-[#666a61] uppercase">Savings</p>
                <p className="text-[10px] font-bold text-[#c3f36b] font-mono-code">$2,640</p>
              </div>
            </div>
            <div className="h-10 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 300 40" preserveAspectRatio="none">
                <path d="M0 30 C50 10 100 25 150 8 S250 20 300 5 V40 H0Z" fill="rgba(195, 243, 107, 0.12)" />
                <path d="M0 30 C50 10 100 25 150 8 S250 20 300 5" fill="none" stroke="#c3f36b" strokeWidth="2" />
              </svg>
            </div>
          </div>
        );

      case 'shopverse':
        return (
          <div className="w-full h-full bg-[#121411] p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-[#c3f36b]" /> ShopVerse Store
              </span>
              <span className="px-2 py-0.5 rounded bg-[#c3f36b] text-[#11120f] text-[9px] font-bold">3 items</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-[#1d201c] border border-[#282d24] flex gap-2 items-center">
                <div className="w-6 h-6 rounded bg-[#2a2e27] grid place-items-center text-[#c3f36b] text-[9px]">🛍</div>
                <div>
                  <p className="text-[9px] text-white font-medium">Headphones</p>
                  <p className="text-[8px] text-[#c3f36b] font-mono-code">$129.99</p>
                </div>
              </div>
              <div className="p-2 rounded bg-[#1d201c] border border-[#282d24] flex gap-2 items-center">
                <div className="w-6 h-6 rounded bg-[#2a2e27] grid place-items-center text-[#c3f36b] text-[9px]">⌚</div>
                <div>
                  <p className="text-[9px] text-white font-medium">Smartwatch</p>
                  <p className="text-[8px] text-[#c3f36b] font-mono-code">$249.00</p>
                </div>
              </div>
            </div>
            <div className="p-1.5 rounded bg-[#1e221b] text-[9px] text-[#9da196] flex justify-between font-mono-code">
              <span>Redux Cart State Active</span>
              <span className="text-[#c3f36b]">Checkout →</span>
            </div>
          </div>
        );

      case 'short':
        return (
          <div className="w-full h-full bg-[#121411] p-5 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-[#c3f36b] text-[#11120f] grid place-items-center mb-2 font-mono-code font-bold text-sm">
              ↗
            </div>
            <p className="text-xs font-bold text-white mb-1">Make links simpler.</p>
            <div className="w-full max-w-[240px] px-3 py-1.5 rounded-lg bg-[#1e221b] border border-[#2e3428] text-[9px] font-mono-code text-[#9da196] flex justify-between items-center mt-1">
              <span className="truncate max-w-[140px]">shrt.ly/x9k2m1</span>
              <span className="px-2 py-0.5 rounded bg-[#c3f36b] text-[#11120f] font-bold text-[8px]">Copy</span>
            </div>
          </div>
        );

      default: // Mess management
        return (
          <div className="w-full h-full bg-[#121411] p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#232720]">
              <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#c3f36b]" /> Mess Admin Panel
              </span>
              <span className="text-[9px] font-mono-code text-[#9da196]">Role: Admin</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-[#1e221b]">
                <p className="text-[8px] text-[#666a61]">Total Meals</p>
                <p className="text-[10px] font-bold text-white font-mono-code">1,420 Served</p>
              </div>
              <div className="p-2 rounded bg-[#1e221b]">
                <p className="text-[8px] text-[#666a61]">Active Members</p>
                <p className="text-[10px] font-bold text-[#c3f36b] font-mono-code">86 Accounts</p>
              </div>
            </div>
            <div className="h-6 w-full rounded bg-[#181a17] border border-[#262a23] p-1 flex items-center justify-between text-[8px] text-[#9da196] font-mono-code">
              <span>Today's Lunch Menu: Dal Tadka, Rice</span>
              <span className="text-emerald-400">Ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#c3f36b]/40 shadow-lg transition-all"
    >
      {/* Visual Top Preview Bar with Realistic Dark Browser Window Frame */}
      <div className="w-full border-b border-[#232720] relative bg-[#111310]">
        {/* Browser Top Window Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#161815] border-b border-[#232720]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-[#11120f] border border-[#232720] text-[9px] font-mono-code text-[#666a61] truncate max-w-[170px]">
            https://{project.id}.manoj.dev
          </div>
          <span className="text-[9px] font-mono-code text-[#c3f36b]">{project.category}</span>
        </div>

        {/* Graphic Container */}
        <div className="h-44 w-full relative">
          {renderPreviewGraphic()}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#c3f36b] dark:group-hover:text-[#c3f36b] light:group-hover:text-emerald-700 transition-colors">
              {project.name}
            </h3>
            <span className="font-mono-code text-xs text-[#666a61] dark:text-[#666a61] light:text-slate-400">{project.number}</span>
          </div>

          <p className="text-xs text-[#c3f36b] dark:text-[#c3f36b] light:text-[#3f6212] font-semibold font-mono-code mb-2">{project.tagline}</p>
          <p className="text-xs text-[#9da196] dark:text-[#9da196] light:text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-100 border border-[#282d24] dark:border-[#282d24] light:border-slate-300 text-[10px] font-mono-code text-[#9da196] dark:text-[#9da196] light:text-slate-800 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              {safeUrl(project.liveUrl) ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 font-medium transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[#666a61] dark:text-[#666a61] light:text-slate-400 cursor-not-allowed text-[11px]" title="Live demo link configured in portfolioData.js">
                  Demo Pending
                </span>
              )}

              {safeUrl(project.sourceUrl) ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#9da196] dark:text-[#9da196] light:text-slate-700 hover:text-[#c3f36b] dark:hover:text-[#c3f36b] light:hover:text-emerald-700 font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              ) : (
                <span className="text-[#666a61] dark:text-[#666a61] light:text-slate-400 cursor-not-allowed text-[11px]" title="Repository link pending">
                  Source Pending
                </span>
              )}
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="flex items-center gap-1 text-[#c3f36b] dark:text-[#c3f36b] light:text-emerald-700 font-bold hover:underline focus:outline-none"
            >
              <span>Details</span>
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
