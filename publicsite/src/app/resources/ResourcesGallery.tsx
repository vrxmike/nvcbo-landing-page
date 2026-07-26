'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface ResourcesGalleryProps {
  galleryImages: GalleryImage[];
  photoCaptions?: string[];
}

export default function ResourcesGallery({ galleryImages }: ResourcesGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split 12 images into 2 balanced rows of 6 images each
  const row1 = galleryImages.slice(0, 6);
  const row2 = galleryImages.slice(6, 12);

  const openModal = (absoluteIndex: number) => {
    setSelectedIndex(absoluteIndex);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && galleryImages.length > 0) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && galleryImages.length > 0) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Lock body & document scroll & listen for keyboard events while modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, galleryImages.length]);

  // Touch Swipe Gesture Handlers for Lightbox Modal
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    // Threshold of |deltaX| > 50px
    if (deltaX > 50) {
      showPrev();
    } else if (deltaX < -50) {
      showNext();
    }

    touchStartX.current = null;
  };

  return (
    <>
      {/* ════════════════════════════════════════════════
          DOUBLE-TRACK SEAMLESS MARQUEE CONTAINER
          ════════════════════════════════════════════════ */}
      <div
        className="space-y-6 overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ROW 1: Scrolls Left (Images 0 to 5) */}
        <div className="overflow-hidden w-full flex">
          <div
            className={`animate-marquee-left-seamless ${
              isPaused ? 'pause-animation' : ''
            }`}
          >
            {/* Track 1 */}
            <div className="flex gap-6 pr-6">
              {row1.map((img, idx) => {
                const absoluteIndex = idx;
                return (
                  <MarqueeCard
                    key={`r1-t1-${idx}`}
                    img={img}
                    indexLabel={absoluteIndex + 1}
                    onClick={() => openModal(absoluteIndex)}
                  />
                );
              })}
            </div>

            {/* Track 2 (Identical Duplicate for 100% Seamless 0% to -50% Loop) */}
            <div className="flex gap-6 pr-6">
              {row1.map((img, idx) => {
                const absoluteIndex = idx;
                return (
                  <MarqueeCard
                    key={`r1-t2-${idx}`}
                    img={img}
                    indexLabel={absoluteIndex + 1}
                    onClick={() => openModal(absoluteIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ROW 2: Scrolls Right (Images 6 to 11) */}
        <div className="overflow-hidden w-full flex">
          <div
            className={`animate-marquee-right-seamless ${
              isPaused ? 'pause-animation' : ''
            }`}
          >
            {/* Track 1 */}
            <div className="flex gap-6 pr-6">
              {row2.map((img, idx) => {
                const absoluteIndex = 6 + idx;
                return (
                  <MarqueeCard
                    key={`r2-t1-${idx}`}
                    img={img}
                    indexLabel={absoluteIndex + 1}
                    onClick={() => openModal(absoluteIndex)}
                  />
                );
              })}
            </div>

            {/* Track 2 (Identical Duplicate for 100% Seamless -50% to 0% Loop) */}
            <div className="flex gap-6 pr-6">
              {row2.map((img, idx) => {
                const absoluteIndex = 6 + idx;
                return (
                  <MarqueeCard
                    key={`r2-t2-${idx}`}
                    img={img}
                    indexLabel={absoluteIndex + 1}
                    onClick={() => openModal(absoluteIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          FULL-SCREEN INTERACTIVE LIGHTBOX MODAL (React Portal -> document.body)
          ════════════════════════════════════════════════ */}
      {mounted && selectedIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 h-[100dvh] w-screen flex flex-col justify-between items-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar (Counter Badge & Prominent Close Button) */}
          <div className="w-full flex items-center justify-between z-20 shrink-0 max-w-6xl mx-auto pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>

            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-full bg-brand-rust hover:bg-brand-espresso text-white font-bold text-xs flex items-center gap-1.5 border border-white/30 shadow-2xl transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 text-white" />
              <span className="hidden sm:inline text-white font-bold">Close (Esc)</span>
            </button>
          </div>

          {/* Floating Navigation Arrows */}
          <button
            onClick={showPrev}
            className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 shadow-2xl transition-all cursor-pointer focus:outline-none"
            aria-label="Previous image"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          <button
            onClick={showNext}
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 shadow-2xl transition-all cursor-pointer focus:outline-none"
            aria-label="Next image"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          {/* Main Modal Media Stage */}
          <div
            className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center p-2 min-h-0 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages[selectedIndex]?.src ? (
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt || `Photo ${selectedIndex + 1}`}
                className="max-h-[55vh] sm:max-h-[64vh] md:max-h-[68vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/15"
              />
            ) : (
              <div className="p-12 text-white text-center bg-white/10 rounded-2xl">
                Photo preview unavailable
              </div>
            )}

            {/* Refined Compact Image Caption */}
            {galleryImages[selectedIndex]?.caption && (
              <div className="mt-3 max-w-xl text-center px-3">
                <p className="text-xs sm:text-sm font-normal text-brand-cream/90 leading-snug bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-md">
                  {galleryImages[selectedIndex].caption}
                </p>
              </div>
            )}
          </div>

          {/* Dedicated Isolated Footer for Control Instructions */}
          <div className="w-full shrink-0 border-t border-white/10 bg-black/50 backdrop-blur-md py-2.5 px-4 text-center z-30 mt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-[11px] sm:text-xs text-white/70 font-medium max-w-4xl mx-auto">
              <div className="flex items-center gap-1.5">
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-white font-mono text-[9px] sm:text-[10px] border border-white/30">ESC</kbd> or tap <span className="text-white font-bold">Close</span> at top right</span>
              </div>

              <span className="hidden sm:inline text-white/30">•</span>

              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline">Tap backdrop outside to exit</span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-brand-gold font-semibold">Swipe ← →</span>
                <span>or use arrow keys to navigate</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// ──────────────────────────────────────────────────────
// Helper Component: Individual Marquee Item Card
// ──────────────────────────────────────────────────────

interface MarqueeCardProps {
  img: GalleryImage;
  indexLabel: number;
  onClick: () => void;
}

function MarqueeCard({ img, onClick }: MarqueeCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-72 sm:w-80 md:w-96 aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu cursor-pointer"
    >
      <img
        src={img.src}
        alt={img.alt || ''}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Soft gradient bottom overlay for caption readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* Caption text */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug drop-shadow-md">
          {img.caption || img.alt}
        </p>
      </div>

      {/* Hover maximize indicator */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
          <Maximize2 className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
