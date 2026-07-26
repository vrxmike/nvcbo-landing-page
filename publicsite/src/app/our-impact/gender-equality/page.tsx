import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gender Equality & Social Inclusion | NVCBO',
  description: 'In all our programs, we focus on advancing gender equality and creating inclusive communities where women, girls, youth, and special interest groups can thrive and lead.',
};

const SRHR_PILLARS = [
  {
    id: "ending-fgc",
    title: "Ending Female Genital Cutting",
    description: "Ending Female Genital Cutting (FGC) through community-led, survivor-centered dialogue and youth advocacy that shifts social norms.",
    span: "md:col-span-2 lg:col-span-1"
  },
  {
    id: "menstrual-health",
    title: "Menstrual Health & Dignity",
    description: "Expanding access to menstrual health education and safe spaces to restore community dignity.",
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "bodily-autonomy",
    title: "Bodily Autonomy & Rights",
    description: "Empowering adolescent girls and young women to understand and exercise their rights through informed, community-rooted dialogue.",
    span: "md:col-span-3 lg:col-span-1"
  }
];

export default function GenderEqualityPage() {
  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* SECTION 1: Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-cream border-b border-muted">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-heading) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="container relative z-10 animate-up max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-6 shadow-sm">
            Advancing Equity, Rights, and Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight mb-6">
            Gender Equality & Social Inclusion
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed font-medium">
            In all our programs, we focus on advancing gender equality and creating inclusive communities where women, girls, youth, and special interest groups can thrive and lead.
          </p>
        </div>
      </section>

      {/* SECTION 2: SRHR Action Grid (Asymmetrical Bento Matrix) */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12 animate-up delay-1 text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">SRHR Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Sexual and Reproductive Health & Rights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-up delay-2 max-w-6xl mx-auto">
            {SRHR_PILLARS.map((pillar) => (
              <div 
                key={pillar.id} 
                className={`bento-card p-8 md:p-10 flex flex-col justify-between bg-neutral-light border border-muted shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${pillar.span}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-heading mb-4 leading-tight">{pillar.title}</h3>
                  <p className="text-lg text-body leading-relaxed">{pillar.description}</p>
                </div>
                <div className="mt-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: The "Tusome Jamii" Program Track */}
      <section className="py-20 bg-neutral-light border-y border-muted/50">
        <div className="container">
          <div className="bento-card bg-white border border-muted p-10 md:p-16 rounded-[2rem] text-center shadow-xl animate-up delay-3 max-w-5xl mx-auto relative overflow-hidden transform-gpu">
            {/* Subtle matte texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Educational Framework
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6 leading-tight tracking-tight">
                Tusome Jamii
              </h2>
              <p className="text-lg md:text-xl text-body leading-relaxed mb-8">
                Showcasing our educational initiatives, school greening programs, exchange networks, and community-wide awareness campaigns on the vital importance of educating every single child.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-muted pt-8 mt-8">
                <div className="p-4 rounded-xl hover:bg-neutral-light transition-colors">
                  <h4 className="font-bold text-heading mb-2">School Greening</h4>
                  <p className="text-sm text-body">Integrating environmental stewardship directly into school curriculums.</p>
                </div>
                <div className="p-4 rounded-xl hover:bg-neutral-light transition-colors">
                  <h4 className="font-bold text-heading mb-2">Exchange Networks</h4>
                  <p className="text-sm text-body">Connecting students across regions to share perspectives and methodologies.</p>
                </div>
                <div className="p-4 rounded-xl hover:bg-neutral-light transition-colors">
                  <h4 className="font-bold text-heading mb-2">Advocacy Campaigns</h4>
                  <p className="text-sm text-body">Promoting baseline education access for every child in our communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
