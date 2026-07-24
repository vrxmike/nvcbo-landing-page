"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface ResourcesGalleryProps {
  galleryImages: GalleryImage[];
  photoCaptions: string[];
}

export default function ResourcesGallery({
  galleryImages,
  photoCaptions,
}: ResourcesGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Limit to exactly 6 images
  const displayImages = (
    galleryImages.length > 0
      ? galleryImages.slice(0, 6)
      : photoCaptions.slice(0, 6).map((caption) => ({
          src: "",
          alt: caption,
          caption: caption,
        }))
  );

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % displayImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + displayImages.length) % displayImages.length
      );
    }
  };

  // Keyboard navigation listener (Esc to close, Left/Right arrows to cycle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % displayImages.length : null));
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + displayImages.length) % displayImages.length : null
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, displayImages.length]);

  return (
    <>
      {/* 6-Image Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openModal(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-muted bg-brand-espresso/5 shadow-sm hover:shadow-xl transition-all duration-300 transform-gpu cursor-pointer"
          >
            {img.src ? (
              <img
                src={img.src}
                alt={photoCaptions[idx] || img.alt || `Gallery Image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-brand-espresso/10 flex items-center justify-center p-6 text-center">
                <p className="text-sm font-bold text-brand-espresso/80">
                  {photoCaptions[idx] || `Training Photo ${idx + 1}`}
                </p>
              </div>
            )}

            {/* Hover overlay with icon */}
            <div className="absolute inset-0 bg-brand-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Lightbox Modal (Clean preview: no captions, titles, or counter tags) */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-espresso/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Image Box */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {displayImages[selectedIndex]?.src ? (
              <img
                src={displayImages[selectedIndex].src}
                alt=""
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            ) : (
              <div className="p-12 text-white text-center bg-white/10 rounded-2xl">
                Photo preview unavailable
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
