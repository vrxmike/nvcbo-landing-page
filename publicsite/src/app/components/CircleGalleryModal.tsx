"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  images: string[];
}

export default function CircleGalleryModal({ images }: GalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const open = (idx: number) => {
    setCurrent(idx);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  // Keyboard navigation listener (Esc to close, Left/Right arrows to cycle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setCurrent((prevIdx) => (prevIdx + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((prevIdx) => (prevIdx - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden cursor-pointer group relative aspect-[4/3] border border-white/20 hover:border-brand-gold/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            onClick={() => open(idx)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md z-50 p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={close}
        >
          {/* Close button positioned top-right outside the image frame with generous padding */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white rounded-full border border-white/20 transition-all cursor-pointer shadow-lg focus:outline-none"
            onClick={close}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[82vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all cursor-pointer shadow-md focus:outline-none"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Next Arrow */}
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all cursor-pointer shadow-md focus:outline-none"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Image Frame */}
            <img
              src={images[current]}
              alt={`Gallery Image ${current + 1}`}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      )}
    </>
  );
}

