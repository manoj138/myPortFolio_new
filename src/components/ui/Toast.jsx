import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const iconMap = {
    success: <CheckCircle2 className="w-4 h-4 text-[#c3f36b]" />,
    error: <AlertCircle className="w-4 h-4 text-red-400" />,
    info: <Info className="w-4 h-4 text-sky-400" />
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-white text-white dark:text-white light:text-slate-900 border border-[#c3f36b]/30 shadow-2xl backdrop-blur-md"
      >
        {iconMap[type]}
        <span className="text-xs font-medium font-mono-code tracking-wide">{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}
