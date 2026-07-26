import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indigenous Knowledge, Culture & Heritage | NVCBO',
  description: 'Preserving indigenous knowledge and cultural heritage while strengthening identity, storytelling, and intergenerational learning.',
};

const PRESERVATION_TRACKS = [
  {
    id: "mentorship",
    title: "Intergenerational Mentorship",
    description: "Connecting elders and youth to ensure traditional systems of water management and animal tracking are actively recorded and remembered.",
    span: "md:col-span-1"
  },
  {
    id: "media",
    title: "Community-Led Media",
    description: "Empowering local youth to document community histories through photography, audio recording, and visual storytelling.",
    span: "md:col-span-1"
  },
  {
    id: "governance",
    title: "Traditional Governance",
    description: "Reviewing generational, restorative legal frameworks and community governance structures with our policy leads.",
    span: "md:col-span-1"
  }
];

export default function IndigenousKnowledgePage() {
  return (
    <main className="min-h-screen bg-brand-cream pb-24 relative flex flex-col">
      {/* SECTION 1: Heritage Hero Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-cream border-b border-muted">
        {/* Abstract Background Texture */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--color-heading) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container relative z-10 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2 shadow-sm">
                Preserving Our Ancestral Systems for the Future
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight">
                Indigenous Knowledge, Culture & Heritage
              </h1>
              <p className="text-lg text-body leading-relaxed font-medium">
                Preserving indigenous knowledge and cultural heritage while strengthening identity, storytelling, and intergenerational learning. This programme safeguards the knowledge systems—oral history, land and water wisdom, cultural practice—that Northern Kenya's communities have carried for generations, treating them as living resources for today's climate and social challenges rather than relics of the past.
              </p>
              <p className="text-lg text-body leading-relaxed">
                Safeguarding oral histories, land and water wisdom, and intergenerational storytelling, treating traditional practices as living tools for modern ecological challenges.
              </p>
            </div>
            
            {/* Visual Asset Placeholder */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-muted shadow-2xl bg-white flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-heading/5 group-hover:bg-heading/10 transition-colors"></div>
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-white border border-muted shadow-sm flex items-center justify-center mx-auto mb-4 text-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                 </div>
                 <p className="text-sm font-semibold text-heading tracking-wide uppercase">Intergenerational Mentorship Circle: Elder and Youth Dialogue</p>
                 <p className="text-xs text-body mt-2">Visual Asset Rendering Placeholder</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Oral Histories & Storytelling Grid */}
      <section className="py-20 bg-white border-b border-muted/50">
        <div className="container">
          <div className="mb-16 animate-up delay-1 text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">Storytelling Archives</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Preservation Tracks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-up delay-2 max-w-6xl mx-auto">
            {PRESERVATION_TRACKS.map((track) => (
              <div 
                key={track.id} 
                className={`bento-card p-8 md:p-10 flex flex-col bg-neutral-light border border-muted shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ${track.span}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4 leading-tight border-b border-muted/30 pb-4">
                  {track.title}
                </h3>
                <p className="text-lg text-body leading-relaxed flex-1">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact & Engagement Call-to-Action */}
      <section className="py-24 bg-white flex-1">
        <div className="container">
          <div className="bento-card bg-brand-cream border border-muted p-12 md:p-16 rounded-[2rem] text-center shadow-lg animate-up delay-3 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 tracking-tight">
                Engage With Our Cultural Archives
              </h2>
              <p className="text-lg text-body leading-relaxed mb-10">
                Partner with us to document, preserve, and integrate traditional knowledge structures into modern developmental workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-heading text-white font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                  Review the Archives
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-heading font-semibold border border-muted shadow-sm hover:border-heading hover:-translate-y-0.5 transition-all duration-200">
                  Contact the Cultural Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Stakeholder Review Notification Badge */}
      <div className="w-full bg-heading text-white border-t border-black/20 py-4 mt-auto">
        <div className="container text-center">
          <p className="text-xs md:text-sm font-medium opacity-90 tracking-wide">
            Programme draft under continuous development in collaboration with community advocates. For editorial inquiries or contributions, contact <a href="mailto:anna.shampi@gmail.com" className="font-bold underline hover:text-brand-gold transition-colors">anna.shampi@gmail.com</a>.
          </p>
        </div>
      </div>
      
    </main>
  );
}
