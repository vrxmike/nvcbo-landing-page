'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-rust text-white shadow-xl hover:bg-brand-espresso hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border border-white/20 backdrop-blur-md group"
      title="Scroll to Top"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
