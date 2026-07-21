"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, BookOpen, HeartHandshake, Settings, Users, ArrowRight, TreePine, Leaf, Fish, Laptop, ScrollText, Image as ImageIcon, Video, Newspaper } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-brand-gold/10 py-4 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-3 md:px-4 lg:px-8 flex justify-between items-center">
        {/* Brand Logo Wrapper */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md p-1 border border-brand-gold/10 transition-all group-hover:scale-105">
            <img 
              src="/nvcbo-logo.webp" 
              alt="Northern Vision Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black leading-none text-brand-espresso tracking-tight">
              Northern Vision <sup className="text-brand-gold font-black text-xs">CBO</sup>
            </span>
          </div>
        </Link>

        {/* Desktop Nav with Refined Dropdowns (Always dark text for readability against sticky glass backdrop) */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-brand-espresso/5 border border-brand-espresso/10 px-1.5 lg:px-3 py-1 rounded-full shadow-inner shrink-0">
          <Link href="/" className="whitespace-nowrap font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300">Home</Link>
          
          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="whitespace-nowrap flex items-center gap-0.5 lg:gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300 focus:outline-none">
                About Us <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 w-64 rounded-2xl bg-brand-espresso border border-brand-gold/20 z-[100] p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="/about#story" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <BookOpen className="w-4 h-4 opacity-70" /> Our Story
              </Link>
              <Link href="/about#beliefs" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <HeartHandshake className="w-4 h-4 opacity-70" /> What We Believe
              </Link>
              <Link href="/about#how-we-work" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Settings className="w-4 h-4 opacity-70" /> How We Work
              </Link>
              <Link href="/about#partners" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Users className="w-4 h-4 opacity-70" /> Our Partners
              </Link>
              <Link href="/about#review-2025" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <ArrowRight className="w-4 h-4 opacity-70" /> 2025 Review
              </Link>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <Link href="/healing-circles" className="whitespace-nowrap flex items-center gap-0.5 lg:gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300 focus:outline-none">
              Healing Circles <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-0 pt-2 w-72 rounded-2xl bg-brand-espresso border border-brand-gold/20 z-[100] p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="/programs" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:bg-brand-gold/10 hover:pl-5 rounded-xl transition-all duration-300">
                <ArrowRight className="w-4 h-4" /> All Programs Directory
              </Link>
              <div className="h-px bg-brand-cream/10 my-1 mx-4"></div>
              <Link href="/programs/circle-keepers" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Users className="w-4 h-4 opacity-70" /> Circle Keeper Training
              </Link>
              <Link href="/programs/gender-equality" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <HeartHandshake className="w-4 h-4 opacity-70" /> Gender & Social Inclusion
              </Link>
              <Link href="/programs/peace-security" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <TreePine className="w-4 h-4 opacity-70" /> Peace and Security
              </Link>
              <Link href="/programs/education-youth" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <BookOpen className="w-4 h-4 opacity-70" /> Education & Youth Leadership
              </Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="whitespace-nowrap flex items-center gap-0.5 lg:gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300 focus:outline-none">
                Our Impact <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 rounded-2xl bg-brand-espresso border border-brand-gold/20 z-[100] p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="/projects" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:bg-brand-gold/10 hover:pl-5 rounded-xl transition-all duration-300">
                <ArrowRight className="w-4 h-4" /> All Active Projects
              </Link>
              <div className="h-px bg-brand-cream/10 my-1 mx-4"></div>
              <Link href="/projects/climate-resilience" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Leaf className="w-4 h-4 opacity-70" /> Climate Resilience
              </Link>
              <Link href="/projects/gotu-farm" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Leaf className="w-4 h-4 opacity-70" /> Gotu Gamachu Farm
              </Link>
              <Link href="/projects/eco-tourism" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Leaf className="w-4 h-4 opacity-70" /> Eco-Tourism Hub
              </Link>
              <Link href="/projects/holiday-camp" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Laptop className="w-4 h-4 opacity-70" /> Digital Literacy Camp
              </Link>
              <Link href="/projects" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <ScrollText className="w-4 h-4 opacity-70" /> Indigenous Knowledge
              </Link>
            </div>
          </div>

          {/* Media Hub Dropdown */}
          <div className="relative group">
            <button className="whitespace-nowrap flex items-center gap-0.5 lg:gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300 focus:outline-none">
              Media Hub <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 rounded-2xl bg-brand-espresso border border-brand-gold/20 z-[100] p-2 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href="#healing" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <Newspaper className="w-4 h-4 opacity-70" /> Stories & News
              </Link>
              <Link href="/media-gallery" className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-gold/10 hover:text-brand-gold hover:pl-5 rounded-xl transition-all duration-300">
                <ImageIcon className="w-4 h-4 opacity-70" /> Media Gallery
              </Link>
            </div>
          </div>

          <Link href="#donate" className="whitespace-nowrap flex items-center gap-1 font-bold text-[10px] lg:text-xs uppercase tracking-widest px-2 lg:px-4 py-1.5 rounded-full text-brand-espresso hover:bg-brand-espresso/5 hover:text-brand-gold transition-all duration-300">
            Shop <span className="bg-brand-gold text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shrink-0">New</span>
          </Link>
          
          <Link href="#contact" className="whitespace-nowrap inline-flex items-center justify-center px-3 lg:px-5 py-1.5 rounded-full font-extrabold uppercase tracking-widest bg-gradient-to-br from-brand-gold to-brand-rust text-white shadow-[0_4px_10px_rgba(204,85,0,0.25)] hover:scale-105 transition-all duration-300 text-[10px] lg:text-xs ml-1 shrink-0">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-espresso font-bold p-2 bg-brand-espresso/5 rounded-full hover:bg-brand-espresso/10 transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu (Glass Sidebar Drawer) */}
      <div className={`fixed inset-0 w-full h-[100dvh] bg-brand-espresso transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full bg-white p-1 shadow-sm">
              <img src="/nvcbo-logo.webp" alt="Northern Vision Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-black text-white tracking-wide">Northern Vision <sup className="text-brand-gold font-black text-xs">CBO</sup></span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-6 text-white text-md font-bold overflow-y-auto h-[calc(100dvh-85px)]">
          <Link onClick={() => setMobileMenuOpen(false)} href="/" className="hover:text-brand-gold transition py-1">Home</Link>

          {/* About Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-brand-gold transition focus:outline-none" onClick={() => toggleAccordion('about')}>
                <span>Our Impact</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.about ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/15 transition-all duration-300 overflow-hidden ${openAccordions.about ? 'max-h-56 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about#story" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><BookOpen className="w-4 h-4 opacity-70" /> Our Story</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about#beliefs" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><HeartHandshake className="w-4 h-4 opacity-70" /> What We Believe</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about#how-we-work" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Settings className="w-4 h-4 opacity-70" /> How We Work</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about#partners" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Users className="w-4 h-4 opacity-70" /> Our Partners</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about#review-2025" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><ArrowRight className="w-4 h-4 opacity-70" /> 2025 Review</Link>
            </div>
          </div>

          {/* Programs Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-brand-gold transition focus:outline-none" onClick={() => toggleAccordion('programs')}>
                <span>Healing Circles</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.programs ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/15 transition-all duration-300 overflow-hidden ${openAccordions.programs ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="/programs" className="flex items-center gap-3 text-sm py-2 text-brand-gold font-black"><ArrowRight className="w-4 h-4" /> All Programs Directory</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/programs/circle-keepers" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Users className="w-4 h-4 opacity-70" /> Circle Keeper Training</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/programs/gender-equality" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><HeartHandshake className="w-4 h-4 opacity-70" /> Gender & Social Inclusion</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/programs/peace-security" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><TreePine className="w-4 h-4 opacity-70" /> Peace and Security</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/programs/education-youth" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><BookOpen className="w-4 h-4 opacity-70" /> Education & Youth Leadership</Link>
            </div>
          </div>

          {/* Projects Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-brand-gold transition focus:outline-none" onClick={() => toggleAccordion('projects')}>
                <span>Our Impact</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.projects ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/15 transition-all duration-300 overflow-hidden ${openAccordions.projects ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects" className="flex items-center gap-3 text-sm py-2 text-brand-gold font-black"><ArrowRight className="w-4 h-4" /> All Active Projects</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects/climate-resilience" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Leaf className="w-4 h-4 opacity-70" /> Climate Resilience</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects/gotu-farm" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Leaf className="w-4 h-4 opacity-70" /> Gotu Gamachu Farm</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects/eco-tourism" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Leaf className="w-4 h-4 opacity-70" /> Eco-Tourism Hub</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects/holiday-camp" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Laptop className="w-4 h-4 opacity-70" /> Digital Literacy Camp</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/projects" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><ScrollText className="w-4 h-4 opacity-70" /> Indigenous Knowledge</Link>
            </div>
          </div>

          {/* Media Hub Accordion */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between py-1 hover:text-brand-gold transition focus:outline-none" onClick={() => toggleAccordion('media')}>
              <span>Media Hub</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${openAccordions.media ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1.5 border-l border-white/15 transition-all duration-300 overflow-hidden ${openAccordions.media ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link onClick={() => setMobileMenuOpen(false)} href="#healing" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><Newspaper className="w-4 h-4 opacity-70" /> Stories & News</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/media-gallery" className="flex items-center gap-3 text-sm py-2 hover:text-brand-gold"><ImageIcon className="w-4 h-4 opacity-70" /> Media Gallery</Link>
            </div>
          </div>

          <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="flex items-center justify-between py-1 hover:text-brand-gold transition">
            <span>Shop</span>
            <span className="bg-white text-brand-rust text-[9px] uppercase font-black px-2 py-0.5 rounded-full">New</span>
          </Link>

          <Link onClick={() => setMobileMenuOpen(false)} href="#contact" className="hover:text-brand-gold transition py-1">Contact</Link>

          {/* Bottom Actions */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="block w-full text-center border border-white/70 text-white text-sm font-semibold py-2 px-4 rounded-xl hover:bg-white/10 transition">
              Explore Shop
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#donate" className="block w-full text-center bg-white text-brand-rust font-black py-2.5 px-4 rounded-xl shadow-md hover:bg-orange-50 transition active:scale-[0.98]">
              Invest in Our Impact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
