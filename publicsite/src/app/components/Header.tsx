"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center font-black text-nvcbo-orange group-hover:bg-white group-hover:text-nvcbo-dark-orange transition-colors">
            NV
          </div>
          <span className={`text-xl font-black ${scrolled ? 'text-nvcbo-stone' : 'text-white'} tracking-tight`}>
            Northern Vision <sup className="text-nvcbo-orange cbo-breathe font-black animate-pulse">CBO</sup>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className={`font-semibold text-sm uppercase tracking-wider transition-colors ${scrolled ? 'text-nvcbo-stone hover:text-nvcbo-orange' : 'text-white/90 hover:text-white'}`}>About Us</Link>
          <Link href="#programs" className={`font-semibold text-sm uppercase tracking-wider transition-colors ${scrolled ? 'text-nvcbo-stone hover:text-nvcbo-orange' : 'text-white/90 hover:text-white'}`}>Programs</Link>
          <Link href="#healing" className={`font-semibold text-sm uppercase tracking-wider transition-colors ${scrolled ? 'text-nvcbo-stone hover:text-nvcbo-orange' : 'text-white/90 hover:text-white'}`}>Healing Circles</Link>
          <Link href="#donate" className={`font-semibold text-sm uppercase tracking-wider transition-colors ${scrolled ? 'text-nvcbo-stone hover:text-nvcbo-orange' : 'text-white/90 hover:text-white'}`}>Donate</Link>
          <Link href="#contact" className="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold uppercase tracking-wider bg-gradient-to-br from-nvcbo-orange to-nvcbo-dark-orange text-white shadow-[0_4px_15px_rgba(204,85,0,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,140,0,0.4)] transition-all duration-300 text-sm">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={`w-8 h-8 ${scrolled ? 'text-nvcbo-stone' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Menu (Glass Sidebar) */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-nvcbo-orange/95 backdrop-blur-xl border-l border-white/20 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 glass rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-8 mt-4">
          <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="text-white font-bold text-lg">About Us</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="text-white font-bold text-lg">Programs</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#healing" className="text-white font-bold text-lg">Healing Circles</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="text-white font-bold text-lg">Donate</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-white font-bold text-lg">Contact</Link>
        </div>
      </div>
    </header>
  );
}
