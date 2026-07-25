'use client';

import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Share2, Check, Download, ArrowUp, BookOpen, Sparkles } from 'lucide-react';

export interface PublicationImage {
  id: string;
  appwriteId: string;
  url: string;
  caption: string;
  alt: string;
  aspect?: string;
}

interface PublicationInteractiveProps {
  images: Record<string, PublicationImage>;
  pdfUrl: string;
  children?: React.ReactNode;
}

export default function PublicationInteractive({
  images,
  pdfUrl,
}: PublicationInteractiveProps) {
  const [activeImage, setActiveImage] = useState<PublicationImage | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      // Track active section
      const sections = ['invitation', 'context', 'morning', 'method', 'practice', 'conclusions', 'citations'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Embracing the Best of Two Worldviews: Practicing Restorative Justice in Tribal Kenya",
          text: "Read Dr. Jo Bauen's publication on Restorative Justice and Healing Circles in Isiolo, Kenya.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-brand-gold via-primary to-brand-rust transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Quick Actions Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={handleShare}
          className="tactile-btn flex items-center gap-2 px-4 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-xl text-heading text-xs font-bold hover:text-primary transition-all border border-muted"
          title="Share Article"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Share Article</span>
            </>
          )}
        </button>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tactile-btn flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-white shadow-xl text-xs font-bold hover:bg-primary/90 transition-all"
          title="Download PDF"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Original PDF</span>
        </a>

        {scrollProgress > 15 && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-heading text-white flex items-center justify-center shadow-xl hover:bg-primary transition-all"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Sticky Section Jump Pill Bar */}
      <nav className="sticky top-20 z-30 py-3 bg-white/90 backdrop-blur-md border-y border-muted shadow-xs transition-all duration-300">
        <div className="container max-w-5xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max text-xs font-semibold">
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] mr-2 flex items-center gap-1 shrink-0">
              <BookOpen className="w-3.5 h-3.5" /> Jump to:
            </span>

            {[
              { id: 'invitation', label: '1. An Invitation' },
              { id: 'context', label: '2. The Context' },
              { id: 'morning', label: '3. Two Worldviews' },
              { id: 'method', label: '4. 7-Step Method' },
              { id: 'practice', label: '5. Practice Circles' },
              { id: 'conclusions', label: '6. Conclusions' },
              { id: 'citations', label: '7. Sources' },
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === sec.id
                    ? 'bg-heading text-white font-bold shadow-xs scale-105'
                    : 'bg-neutral-light text-body hover:bg-white hover:text-heading hover:border-muted border border-transparent'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Global Image Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-espresso/90 backdrop-blur-xl animate-up"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-muted bg-neutral-light">
              <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                <Sparkles className="w-4 h-4" /> Appwrite WebP Media Frame
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="w-9 h-9 rounded-full bg-neutral-light hover:bg-muted text-heading flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-h-[75vh] min-h-[300px] bg-neutral-900 flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white border-t border-muted">
              <p className="text-heading text-base font-semibold leading-relaxed">
                {activeImage.caption}
              </p>
              <p className="text-xs text-body/60 mt-1 font-mono">
                ID: {activeImage.appwriteId}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Sub-component for interactive image frames
export function ImageFrame({
  image,
  aspect = 'aspect-[16/10]',
  priority = false,
}: {
  image: PublicationImage;
  aspect?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <figure className="group relative rounded-2xl overflow-hidden bento-card border border-muted bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <div
          onClick={() => setModalOpen(true)}
          className={`relative ${aspect} w-full bg-neutral-100 overflow-hidden cursor-zoom-in`}
        >
          <div className="absolute inset-0 bg-neutral-light/60 animate-pulse pointer-events-none" />

          <img
            src={image.url}
            alt={image.alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <span className="text-xs font-semibold text-white/90 line-clamp-1">
              {image.caption}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 ml-2">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </div>

        <figcaption className="p-4 bg-white border-t border-muted flex items-start justify-between gap-3">
          <p className="text-xs font-medium text-body leading-normal">
            {image.caption}
          </p>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full shrink-0">
            Field Photo
          </span>
        </figcaption>
      </figure>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-espresso/90 backdrop-blur-xl"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-muted bg-neutral-light">
              <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                <Sparkles className="w-4 h-4" /> Appwrite WebP Media Frame
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-neutral-light hover:bg-muted text-heading flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full max-h-[75vh] min-h-[300px] bg-neutral-900 flex items-center justify-center">
              <img
                src={image.url}
                alt={image.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-6 bg-white border-t border-muted">
              <p className="text-heading text-base font-semibold leading-relaxed">
                {image.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
