"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    about: false,
    programs: false,
    projects: false,
    media: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-nvcbo-orange/10 py-4 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo Wrapper */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md p-1 border border-nvcbo-orange/10 transition-all group-hover:scale-105">
            <img 
              src="/nvcbo-logo.webp" 
              alt="Northern Vision Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none text-nvcbo-stone tracking-tight">
              NVCBO
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-nvcbo-orange mt-0.5">
              Northern Vision
            </span>
          </div>
        </Link>

        {/* Desktop Nav with Refined Dropdowns (Always dark text for readability against sticky glass backdrop) */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-nvcbo-stone/5 border border-nvcbo-stone/10 px-2 lg:px-3 py-1.5 rounded-full shadow-inner">
          <Link href="/" className="font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-2 rounded-full text-nvcbo-stone hover:bg-nvcbo-stone/5 hover:text-nvcbo-orange transition-all duration-300">Home</Link>
          
          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-2 rounded-full text-nvcbo-stone hover:bg-nvcbo-stone/5 hover:text-nvcbo-orange transition-all duration-300 focus:outline-none">
              About Us <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 rounded-2xl glass border border-white/20 p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="#about" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Our Story</Link>
              <Link href="#about" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">What We Believe</Link>
              <Link href="#about" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">How We Work</Link>
              <Link href="#about" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Our Partners</Link>
              <Link href="#about" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">2025 Review</Link>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-2 rounded-full text-nvcbo-stone hover:bg-nvcbo-stone/5 hover:text-nvcbo-orange transition-all duration-300 focus:outline-none">
              Programs <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl glass border border-white/20 p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Circle Keeper Training</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Gender & Social Inclusion</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Peace and Security</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Education & Youth Leadership</Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-2 rounded-full text-nvcbo-stone hover:bg-nvcbo-stone/5 hover:text-nvcbo-orange transition-all duration-300 focus:outline-none">
              Projects <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl glass border border-white/20 p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Climate Resilience</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Gotu Gamachu Farm</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Eco-Tourism Hub</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Digital Literacy Camp</Link>
              <Link href="#programs" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-nvcbo-stone hover:bg-nvcbo-orange/10 hover:text-nvcbo-orange rounded-xl transition-all">Indigenous Knowledge</Link>
            </div>
          </div>

          <Link href="#donate" className="flex items-center gap-1.5 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-2 rounded-full text-nvcbo-stone hover:bg-nvcbo-stone/5 hover:text-nvcbo-orange transition-all duration-300">
            Shop <span className="bg-nvcbo-orange text-white text-[9px] font-black px-1.5 py-0.5 rounded-full">New</span>
          </Link>
          
          <Link href="#contact" className="inline-flex items-center justify-center px-4 lg:px-5 py-2 rounded-full font-extrabold uppercase tracking-widest bg-gradient-to-br from-nvcbo-orange to-nvcbo-dark-orange text-white shadow-[0_4px_10px_rgba(204,85,0,0.25)] hover:scale-105 transition-all duration-300 text-[10px] lg:text-xs ml-1">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-nvcbo-stone font-bold p-2 bg-nvcbo-stone/5 rounded-full hover:bg-nvcbo-stone/10 transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu (Glass Sidebar Drawer) */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-nvcbo-orange/95 backdrop-blur-xl border-l border-white/20 transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full bg-white p-1 shadow-sm">
              <img src="/nvcbo-logo.webp" alt="Northern Vision Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-black text-white tracking-wide">NVCBO</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 glass rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-6 text-white text-md font-bold overflow-y-auto max-h-[calc(100vh-100px)]">
          <Link onClick={() => setMobileMenuOpen(false)} href="/" className="hover:text-orange-100 transition py-1">Home</Link>

          {/* About Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-orange-100 transition focus:outline-none" onClick={() => toggleAccordion('about')}>
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.about ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/20 transition-all duration-300 overflow-hidden ${openAccordions.about ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-sm py-1 hover:text-orange-200">Our Story</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-sm py-1 hover:text-orange-200">What We Believe</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-sm py-1 hover:text-orange-200">How We Work</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-sm py-1 hover:text-orange-200">Our Partners</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-sm py-1 hover:text-orange-200">2025 Review</Link>
            </div>
          </div>

          {/* Programs Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-orange-100 transition focus:outline-none" onClick={() => toggleAccordion('programs')}>
              <span>Programs</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.programs ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/20 transition-all duration-300 overflow-hidden ${openAccordions.programs ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Circle Keeper Training</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Gender & Social Inclusion</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Peace and Security</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Education & Youth Leadership</Link>
            </div>
          </div>

          {/* Projects Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-orange-100 transition focus:outline-none" onClick={() => toggleAccordion('projects')}>
              <span>Projects</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.projects ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/20 transition-all duration-300 overflow-hidden ${openAccordions.projects ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Climate Resilience</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Gotu Gamachu Farm</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Eco-Tourism Hub</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Digital Literacy Camp</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#programs" className="block text-sm py-1 hover:text-orange-200">Indigenous Knowledge</Link>
            </div>
          </div>

          {/* Media Hub Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-orange-100 transition focus:outline-none" onClick={() => toggleAccordion('media')}>
              <span>Media Hub</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.media ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/20 transition-all duration-300 overflow-hidden ${openAccordions.media ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="#healing" className="block text-sm py-1 hover:text-orange-200">Stories & News</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#healing" className="block text-sm py-1 hover:text-orange-200">Media Gallery</Link>
            </div>
          </div>

          <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="flex items-center justify-between py-1 hover:text-orange-100 transition">
            <span>Shop</span>
            <span className="bg-white text-nvcbo-dark-orange text-[9px] uppercase font-black px-2 py-0.5 rounded-full">New</span>
          </Link>

          <Link onClick={() => setMobileMenuOpen(false)} href="#contact" className="hover:text-orange-100 transition py-1">Contact</Link>

          {/* Bottom Actions */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="block w-full text-center border border-white/70 text-white text-sm font-semibold py-2 px-4 rounded-xl hover:bg-white/10 transition">
              Explore Shop
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="block w-full text-center bg-white text-nvcbo-dark-orange font-black py-2.5 px-4 rounded-xl shadow-md hover:bg-orange-50 transition active:scale-[0.98]">
              Donate Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
