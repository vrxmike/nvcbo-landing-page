"use client";

import { useState } from "react";
// Using standard img tag for external CDN images

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

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden cursor-pointer"
            onClick={() => open(idx)}
          >
            <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md z-50 p-4 sm:p-8 md:p-12"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-black/40 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white text-xl rounded-full border border-white/20 transition-all cursor-pointer"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={images[current]}
              alt={`Gallery ${current + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
              loading="eager"
            />
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white text-2xl rounded-full border border-white/20 transition-all cursor-pointer"
              onClick={prev}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white text-2xl rounded-full border border-white/20 transition-all cursor-pointer"
              onClick={next}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
