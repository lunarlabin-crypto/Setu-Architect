'use client';

import { motion } from 'framer-motion';

export function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/919428873366?text=Hi%20Setu%20Architects,%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* FAB Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white relative z-10">
          <path d="M16 1C7.73 1 1 7.73 1 16c0 2.61.67 5.15 1.95 7.4L1 31l7.82-1.93A14.94 14.94 0 0016 31c8.27 0 15-6.73 15-15S24.27 1 16 1zm0 27.5c-2.3 0-4.55-.62-6.52-1.8l-.47-.28-4.63 1.15 1.18-4.51-.31-.49A12.43 12.43 0 013.5 16C3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28.5 16 28.5zm6.9-9.28c-.38-.19-2.24-1.1-2.59-1.23-.35-.12-.6-.19-.86.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65-.22-.01-.47-.01-.72-.01s-.66.09-.1.47c-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.89.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.24-.91 2.55-1.8.32-.88.32-1.64.22-1.8-.09-.16-.35-.25-.73-.44z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </motion.a>
    </div>
  );
}
