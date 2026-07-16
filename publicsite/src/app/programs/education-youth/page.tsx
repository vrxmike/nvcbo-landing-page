import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Education, Youth Leadership & Digital Inclusion | NVCBO',
  description: 'Equipping young people with knowledge, leadership and skills to shape resilient futures.',
};

const STEM_INITIATIVES = [
  {
    id: "wolfram-stem",
    title: "NVCBO STEM Program with Wolfram",
    description: "Partnering with Wolfram to bring computational thinking, coding foundations, and mathematics to local classrooms.",
    linkUrl: "https://drive.google.com/drive/folders/1aNNfDtWUcRtWFSxK54RUj3_kw8SheNDd",
    linkText: "View Documentation Repository"
  },
  {
    id: "healing-circles-edu",
    title: "Healing Circles for Education",
    description: "Injecting reflective communication structures and peer conflict-resolution frameworks into high school environments.",
    linkUrl: null,
    linkText: null
  }
];

const RESEARCH_PUBLICATIONS = [
  "Research on the Grassroots Handbook",
  "Guide to Grassroots Partnerships",
  "Funding Grantees Dispositions on Climate Resilience",
  "Success and Failure Models in Grassroots Partnerships"
];

export default function EducationYouthPage() {
  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* SECTION 1: Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white border-b border-muted">
        <div className="container relative z-10 animate-up max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-brand-cream text-sm font-semibold tracking-wider text-primary uppercase mb-6 shadow-sm">
            Equipping the Next Generation of Leaders
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight mb-6">
            Education, Youth Leadership & Digital Inclusion
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed font-medium">
            Equipping young people with knowledge, leadership and skills to shape resilient futures. Empowering youth across Isiolo with advanced leadership training, digital inclusion tools, and technical competencies to build highly resilient futures.
          </p>
        </div>
      </section>

      {/* SECTION 2: STEM & Wolfram Repository Integration (Asymmetrical Bento Matrix) */}
      <section className="py-20 bg-neutral-light border-b border-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-up delay-1 max-w-6xl mx-auto">
            {STEM_INITIATIVES.map((initiative) => (
              <div 
                key={initiative.id} 
                className="bento-card p-8 md:p-12 flex flex-col bg-white border border-muted shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-muted flex items-center justify-center text-primary mb-8 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 leading-tight">
                  {initiative.title}
                </h3>
                <p className="text-lg text-body leading-relaxed mb-8 flex-1">
                  {initiative.description}
                </p>
                {initiative.linkUrl && (
                  <a 
                    href={initiative.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md mt-auto"
                  >
                    {initiative.linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Grassroots Research & Documentation Center */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-heading p-10 md:p-16 rounded-[2rem] text-left border border-muted shadow-2xl relative overflow-hidden animate-up delay-2 max-w-5xl mx-auto transform-gpu">
            {/* Abstract Graphic Element */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                  Documentation Center
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Grassroots Research & Publications
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Exploring structural partnerships, climate resilience frameworks, and the empirical modeling behind successful grassroots interventions.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-inner">
                <ul className="space-y-4">
                  {RESEARCH_PUBLICATIONS.map((pub, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-base md:text-lg font-medium text-white/90 leading-tight">
                        {pub}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
