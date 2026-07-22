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
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4" onClick={close}>
          <div
            className="relative max-w-screen-lg w-full max-h-[calc(100vh-64px)] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
            <img
                src={images[current]}
                alt={`Gallery ${current + 1}`}
                width={1200}
                height={800}
                className="object-contain"
                loading="eager"
              />
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
              onClick={prev}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
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
