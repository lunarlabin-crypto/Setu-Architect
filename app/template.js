'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <>
      {/* ─── PAGE TRANSITION LOADER ─── */}
      {/* White Background Wipe */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-white pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{ originY: 0 }}
      >
        {/* Vertical Grid Lines */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-40">
          <div className="w-px h-full bg-neutral-200" />
          <div className="w-px h-full bg-neutral-200" />
          <div className="w-px h-full bg-neutral-200" />
        </div>
      </motion.div>

      {/* SETU Text Fade */}
      <motion.div 
        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none tracking-[0.15em] font-display text-2xl md:text-3xl font-medium"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
      >
        <span className="text-[#e3dacf]">S</span>
        <span className="text-[#7d7d7d]">E</span>
        <span className="text-[#7d7d7d]">T</span>
        <span className="text-[#e3dacf]">U</span>
      </motion.div>

      {/* ─── PAGE CONTENT ANIMATION ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
