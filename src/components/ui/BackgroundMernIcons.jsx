import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundMernIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. React Atom - Top Right (Hero / About) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{
          y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 25, ease: 'linear' },
          scale: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
        }}
        className="absolute top-[12%] right-[5%] w-72 h-72 text-[#c3f36b]/[0.04] dark:text-[#c3f36b]/[0.05] light:text-slate-900/[0.03]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 2. Node.js Hexagon Node - Mid Left (Skills Section) */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut'
        }}
        className="absolute top-[32%] -left-12 w-80 h-80 text-emerald-400/[0.04] dark:text-emerald-400/[0.05] light:text-slate-900/[0.03]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <polygon points="50,10 90,32 90,78 50,100 10,78 10,32" />
          <polygon points="50,22 80,38 80,72 50,88 20,72 20,38" strokeDasharray="4 4" />
          <path d="M50 10 V 100 M10 32 L 90 78 M90 32 L 10 78" strokeWidth="0.8" opacity="0.4" />
        </svg>
      </motion.div>

      {/* 3. MongoDB Leaf Database - Mid Right (Projects Section) */}
      <motion.div
        animate={{
          y: [0, -22, 0],
          rotate: [0, 12, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-[52%] right-[2%] w-96 h-96 text-[#c3f36b]/[0.035] dark:text-[#c3f36b]/[0.045]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          {/* Cylinder database stack */}
          <ellipse cx="50" cy="25" rx="35" ry="12" />
          <path d="M15 25 V 50 C15 62 85 62 85 50 V 25" />
          <path d="M15 50 V 75 C15 87 85 87 85 75 V 50" />
          {/* Leaf overlay */}
          <path d="M50 10 C30 35 30 65 50 90 C70 65 70 35 50 10 Z" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* 4. Express.js Fast Zap / REST API - Lower Left (Experience Section) */}
      <motion.div
        animate={{
          y: [0, 18, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-[70%] left-[3%] w-72 h-72 text-amber-300/[0.04] dark:text-amber-300/[0.045]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M55 10 L20 55 H50 L45 90 L80 45 H50 L55 10 Z" />
          <circle cx="50" cy="50" r="42" strokeDasharray="5 5" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* 5. JavaScript & Redux Monogram - Bottom Center (Contact Section) */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: 'easeInOut',
          delay: 0.5
        }}
        className="absolute top-[88%] right-[10%] w-80 h-80 text-[#c3f36b]/[0.035] dark:text-[#c3f36b]/0.04"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          <rect x="15" y="15" width="70" height="70" rx="16" />
          <text x="35" y="62" fontFamily="monospace" fontSize="32" fontWeight="bold" fill="currentColor">JS</text>
          <path d="M50 15 V 85 M15 50 H 85" strokeWidth="0.6" opacity="0.3" />
        </svg>
      </motion.div>

    </div>
  );
}
