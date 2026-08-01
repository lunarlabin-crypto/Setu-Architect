"use client";

import { useEffect, useState } from 'react';

export default function Lightbox({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % project.images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project.images]);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 text-3xl leading-none text-white"
        onClick={onClose}
        aria-label="Close project preview"
      >
        ×
      </button>

      <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative overflow-hidden rounded-2xl bg-black/40">
          <img
            src={project.images[activeIndex]}
            alt={`${project.name} preview ${activeIndex + 1}`}
            className="max-h-[70vh] w-full object-contain"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-2xl text-white"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-2xl text-white"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="mt-6 text-center text-white">
          <h3 className="text-xl font-display font-bold uppercase tracking-[0.18em]">{project.name}</h3>
          <p className="mt-1 text-sm text-white/75">{project.location}</p>
          <p className="mt-2 text-sm text-white/75">
            {[project.type, project.developer, project.architect].filter(Boolean).join(' · ')}
          </p>
          {project.images.length > 1 && (
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/50">
              {activeIndex + 1} / {project.images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
