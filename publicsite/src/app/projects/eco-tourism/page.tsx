import React from 'react';
import { Metadata } from 'next';
import { VisitApplicationForm } from './VisitApplicationForm';

export const metadata: Metadata = {
  title: 'Eco-Tourism Hub | Experience Gotu Firsthand | NVCBO',
  description: 'Community-Hosted Eco-Tours & Cultural Exchanges. Visit Gotu Gamachu Farm and experience Gotu\'s landscapes firsthand.',
};

// 1. Immutable Static Schema: Guided Walking Trails
const ITINERARY_TRACKS = [
  {
    id: "aquaculture",
    title: "The Aquaculture Trails",
    description: "A guided walk through our operational aquaculture ponds. Guests learn the circular flow model that routes nutrient-dense water straight from tilapia farming into agricultural fields.",
    span: "md:col-span-2 lg:col-span-1"
  },
  {
    id: "kitchen-gardens",
    title: "Resilient Kitchen Gardens",
    description: "Step inside the kitchen gardens managed by local women groups. Discover the heat-tolerant crop varieties and organic soil strategies securing community food pathways.",
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "asal-landscape",
    title: "ASAL Landscape & Conservation Wisdom",
    description: "A wider trek through Gotu's surrounding drylands. Guided by local hosts sharing indigenous land, water, and generational oral storytelling traditions.",
    span: "md:col-span-3 lg:col-span-1"
  }
];

// 2. Immutable Static Schema: Visit Tiers
const PRICING_TIERS = [
  {
    id: "local-edu",
    title: "Local Educational Track",
    audience: "School & Youth Groups",
    description: "Tailored for local school clusters, institutions, and youth. Includes basic agricultural training and aligns with our digital camp methodologies."
  },
  {
    id: "research",
    title: "Research & Partner Track",
    audience: "Researchers & Global Partners",
    description: "Deep technical itinerary for academic researchers, international delegations, and global policy advocates (e.g. PACJA, Landesa)."
  },
  {
    id: "leisure",
    title: "Day Pass / Leisure Track",
    audience: "Leisure Travelers",
    description: "Includes a guided farm excursion, direct interaction with keepers, and a community-hosted organic lunch."
  }
];

export default function EcoTourismPage() {
  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      
      {/* SECTION 1: Eco-Tourism Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-cream border-b border-muted">
        {/* Soft Tactile Canvas Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-muted) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container relative z-10 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2 shadow-sm">
                Eco-Tourism Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight">
                Experience Gotu Firsthand
              </h1>
              <p className="text-xl md:text-2xl text-heading font-medium opacity-90 pb-2">
                Community-Hosted Eco-Tours & Cultural Exchanges
              </p>
              <p className="text-lg text-body leading-relaxed">
                Visit Gotu Gamachu Farm and experience Gotu's landscapes firsthand. Guided visits take guests through the farm and the surrounding land—from the aquaculture ponds to the kitchen gardens to the wider ASAL landscape—hosted by the people who work it every day.
              </p>
            </div>
            
            {/* Visual Asset Placeholder (Aspect Ratio Protected) */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-muted shadow-2xl bg-white flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-white border border-muted shadow-sm flex items-center justify-center mx-auto mb-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                 </div>
                 <p className="text-sm font-semibold text-heading tracking-wide uppercase">Panoramic View of Gotu Drylands and Aquaculture Ponds</p>
                 <p className="text-xs text-body mt-2">Visual Asset Rendering Placeholder</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Tour Itinerary (Asymmetrical Bento Matrix) */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12 animate-up delay-1">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">Guided Walking Trails</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Interactive Itinerary</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-up delay-2">
            {ITINERARY_TRACKS.map((track, index) => (
              <div 
                key={track.id} 
                className={`bento-card p-8 md:p-10 flex flex-col justify-between bg-neutral-light border border-muted group hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md ${track.span}`}
              >
                <div>
                  <span className="w-10 h-10 rounded-full bg-white border border-muted flex items-center justify-center text-primary font-bold mb-6 text-sm">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-lg text-body leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Visit Pricing & Duration Grid */}
      <section className="py-20 bg-neutral-light border-y border-muted/50">
        <div className="container">
          <div className="text-center mb-16 animate-up delay-1 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">Visit Tiers & Pricing Structures</h2>
            <p className="text-lg text-body">
              Flexible structured pathways tailored to match the specific focus of your organization, institution, or group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-up delay-2">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} className="bento-card bg-white p-8 flex flex-col border border-muted shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {tier.audience}
                </span>
                <h3 className="text-xl font-bold text-heading mb-4 pb-4 border-b border-muted/30">
                  {tier.title}
                </h3>
                <p className="text-body leading-relaxed flex-1">
                  {tier.description}
                </p>
                <div className="mt-8 pt-4 border-t border-muted/30 flex items-center text-sm font-semibold text-heading">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Available via application
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: "Apply to Visit" Interactive Intake Portal */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container">
          <div className="bento-card bg-brand-cream border border-muted p-8 md:p-12 lg:p-16 animate-up delay-3 max-w-5xl mx-auto shadow-2xl relative z-10 overflow-hidden">
            {/* Matte texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            <div className="relative z-10 mb-10 text-center max-w-2xl mx-auto border-b border-muted/30 pb-10">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Plan Your Visit</h2>
              <p className="text-lg text-body">
                Applications to visit are processed individually by NVCBO team members to ensure the best possible community-led experience. Please submit your details to register interest.
              </p>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-muted/50">
              <VisitApplicationForm />
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
