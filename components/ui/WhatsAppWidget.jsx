'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen]     = useState(false);
  const [message, setMessage]   = useState('');
  const [name, setName]         = useState('');
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef                = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!message.trim() || status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setMessage('');
      setName('');
      setTimeout(() => {
        setStatus('idle');
        setIsOpen(false);
      }, 2500);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[320px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/10"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                    <path d="M16 1C7.73 1 1 7.73 1 16c0 2.61.67 5.15 1.95 7.4L1 31l7.82-1.93A14.94 14.94 0 0016 31c8.27 0 15-6.73 15-15S24.27 1 16 1zm0 27.5c-2.3 0-4.55-.62-6.52-1.8l-.47-.28-4.63 1.15 1.18-4.51-.31-.49A12.43 12.43 0 013.5 16C3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28.5 16 28.5zm6.9-9.28c-.38-.19-2.24-1.1-2.59-1.23-.35-.12-.6-.19-.86.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65-.22-.01-.47-.01-.72-.01s-.66.09-.1.47c-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.89.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.24-.91 2.55-1.8.32-.88.32-1.64.22-1.8-.09-.16-.35-.25-.73-.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Setu Architects</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-white/80 rounded-full animate-pulse" />
                    <p className="text-white/85 text-xs">Send us a WhatsApp message</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] px-4 py-5">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white">
                    <path d="M16 1C7.73 1 1 7.73 1 16c0 2.61.67 5.15 1.95 7.4L1 31l7.82-1.93A14.94 14.94 0 0016 31c8.27 0 15-6.73 15-15S24.27 1 16 1zm0 27.5c-2.3 0-4.55-.62-6.52-1.8l-.47-.28-4.63 1.15 1.18-4.51-.31-.49A12.43 12.43 0 013.5 16C3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28.5 16 28.5zm6.9-9.28c-.38-.19-2.24-1.1-2.59-1.23-.35-.12-.6-.19-.86.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65-.22-.01-.47-.01-.72-.01s-.66.09-.1.47c-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.89.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.24-.91 2.55-1.8.32-.88.32-1.64.22-1.8-.09-.16-.35-.25-.73-.44z"/>
                  </svg>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[220px]">
                  <p className="text-[#111] text-sm leading-relaxed">
                    👋 Hello! Welcome to <strong>Setu Architects</strong>.<br /><br />
                    Fill in your details below and we&apos;ll receive your message on WhatsApp instantly!
                  </p>
                  <p className="text-[#999] text-[10px] mt-1 text-right">Just now</p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-white px-3 py-3 flex flex-col gap-2 border-t border-neutral-100">
              {/* Success State */}
              {status === 'success' && (
                <div className="flex flex-col items-center gap-2 py-4">
                  <CheckCircle className="w-10 h-10 text-[#25D366]" />
                  <p className="text-sm font-semibold text-neutral-800">Message Sent!</p>
                  <p className="text-xs text-neutral-500 text-center">We received your message on WhatsApp and will reply shortly.</p>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-red-600">{errorMsg}</p>
                </div>
              )}

              {/* Form */}
              {status !== 'success' && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    disabled={status === 'sending'}
                    className="w-full text-xs px-3 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 outline-none focus:border-[#25D366] transition-colors disabled:opacity-50"
                  />
                  <div className="flex gap-2 items-end">
                    <textarea
                      ref={inputRef}
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      disabled={status === 'sending'}
                      className="flex-1 text-sm px-3 py-2 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 outline-none resize-none focus:border-[#25D366] transition-colors disabled:opacity-50"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!message.trim() || status === 'sending'}
                      className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 hover:bg-[#20b85b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                      aria-label="Send message"
                    >
                      {status === 'sending'
                        ? <Loader2 className="w-4 h-4 text-white animate-spin" />
                        : <Send className="w-4 h-4 text-white" />
                      }
                    </button>
                  </div>
                  <p className="text-[10px] text-neutral-400 text-center">
                    Sends directly to WhatsApp · <span className="text-[#25D366]">+91 9428873366</span>
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
                <path d="M16 1C7.73 1 1 7.73 1 16c0 2.61.67 5.15 1.95 7.4L1 31l7.82-1.93A14.94 14.94 0 0016 31c8.27 0 15-6.73 15-15S24.27 1 16 1zm0 27.5c-2.3 0-4.55-.62-6.52-1.8l-.47-.28-4.63 1.15 1.18-4.51-.31-.49A12.43 12.43 0 013.5 16C3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28.5 16 28.5zm6.9-9.28c-.38-.19-2.24-1.1-2.59-1.23-.35-.12-.6-.19-.86.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65-.22-.01-.47-.01-.72-.01s-.66.09-.1.47c-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.89.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.24-.91 2.55-1.8.32-.88.32-1.64.22-1.8-.09-.16-.35-.25-.73-.44z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
