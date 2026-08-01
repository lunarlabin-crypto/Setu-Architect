"use client";

import { useEffect } from 'react';

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 text-3xl leading-none text-white hover:text-white/70 transition-colors"
        onClick={onClose}
        aria-label="Close project preview"
      >
        ×
      </button>

      <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
          <img
            src={project.img}
            alt={`${project.name} preview`}
            className="max-h-[70vh] w-full object-contain"
          />
        </div>

        <div className="mt-6 text-center text-white">
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-[0.18em]">{project.name}</h3>
          {project.category && (
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-[#d8c39a]">{project.category}</p>
          )}
          {project.description && (
            <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
