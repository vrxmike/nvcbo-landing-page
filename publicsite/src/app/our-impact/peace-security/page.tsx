import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Client, TablesDB, Query } from 'node-appwrite';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Peace and Security | Restorative Coexistence | NVCBO',
  description: 'Strengthening trust, restorative leadership and peaceful coexistence in Northern Kenya through Healing Circles and community dialogue.',
};

// 1. Immutable Static Schema: Program Engine Data
const ENGINE_METRICS = [
  {
    id: "healing-circles",
    title: "Completed Healing Circles Sessions",
    stat: "130+",
    copy: "Healing Circles are the engine of this programme: a structured, culturally rooted dialogue practice that has already run through 130+ sessions across Northern Vision's communities, opening space for trust-building, restorative justice and locally led resolution in a region where resource-driven tension is common.",
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    id: "mil-digital-safety",
    title: "MIL & Digital Safety",
    stat: null,
    copy: "Paired with media and digital literacy work, it also builds young people's ability to spot misinformation and navigate online spaces safely, so that peacebuilding extends from the community circle to the digital spaces.",
    span: "md:col-span-1 lg:col-span-1"
  }
];

// 2. Immutable Static Schema: Media & Digital Literacy Tracks
const LITERACY_TRACKS = [
  {
    id: "sm4p",
    title: "SM4P (Social Media for Peace)",
    description: "Promoting constructive dialogic guidelines across messaging platforms to counter rumors."
  },
  {
    id: "online-safety",
    title: "Online Safety",
    description: "Protecting young user networks against digital exploitation and online risks."
  },
  {
    id: "community-newsroom",
    title: "Community Newsroom",
    description: "Training youth to utilize basic mobile setups to capture factual, community-led stories."
  }
];

// 3. Video Metadata Configurations
const VIDEO_CONFIG = {
  src: "https://www.youtube.com/embed/7-J-GBKzVQo",
  title: "NVCBO MIL Empowerment Workshop Broadcast",
};

async function getProjectData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    // Fetching from 'programs' table based on the folder structure
    const response = await tablesDB.listRows(dbId, 'programs', [
      Query.equal('slug', 'peace-security')
    ]);
    return response.rows[0] || null;
  } catch (error) {
    console.error('Error fetching program data:', error);
    return null;
  }
}

export default async function PeaceSecurityPage() {
  const program = await getProjectData();
  const pageTitle = program?.title || "Peace and Security";
  const pageSubtitle = program?.subtitle || "Restorative Coexistence & Dialogue";
  const pageCopy = program?.copy || "Strengthening trust, restorative leadership and peaceful coexistence in Northern Kenya through Healing Circles and community dialogue. We co-create locally led resolution pathways that extend from the physical community circle directly to the conversations happening on people's phones.";

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      
      {/* SECTION 1: Program Focus Hero Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F2EB] border-b border-muted">
        {/* Soft linen/fine-grit matte textured canvas grid */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        <div className="container relative z-10 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2 shadow-sm">
                {pageSubtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight">
                {pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-body leading-relaxed font-medium">
                {pageCopy}
              </p>
            </div>
            
            {/* Aspect-Ratio Protected Visual Placeholder Frame */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-muted shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white flex flex-col items-center justify-center p-8 group transform-gpu">
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
               <div className="text-center relative z-10">
                 <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                 </div>
                 <p className="text-sm font-bold text-heading tracking-wide uppercase">Healing Circles Restorative Mediation Session in Isiolo</p>
                 <p className="text-xs text-body mt-2 font-medium">Visual Context Frame Placeholder</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Core Mediation Engine (Asymmetrical Bento Matrix) */}
      <section className="py-20 bg-white border-b border-muted/50">
        <div className="container">
          <div className="mb-12 animate-up delay-1 max-w-3xl">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">The Engine of Peace</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Structured, Culturally Rooted Dialogue</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-up delay-2">
            {ENGINE_METRICS.map((metric) => (
              <div 
                key={metric.id} 
                className={`bento-card p-8 md:p-10 lg:p-12 flex flex-col bg-neutral-light border border-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 transform-gpu backface-hidden ${metric.span}`}
              >
                {metric.stat && (
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black text-primary block leading-none mb-4 tracking-tighter">
                      {metric.stat}
                    </span>
                  </div>
                )}
                <h3 className={`font-bold text-heading mb-4 leading-snug ${metric.stat ? 'text-2xl md:text-3xl' : 'text-2xl mt-auto'}`}>
                  {metric.title}
                </h3>
                <p className={`text-lg text-body leading-relaxed ${!metric.stat ? 'mt-4' : ''}`}>
                  {metric.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Interactive Media & YouTube Video Embed Hub */}
      <section className="py-20 bg-neutral-light relative overflow-hidden">
        {/* Abstract Background Curve */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-up delay-1">
            
            {/* Left: Video Preview Component */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-muted bg-heading/5 transform-gpu backface-hidden">
              <iframe 
                src={VIDEO_CONFIG.src} 
                title={VIDEO_CONFIG.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            
            {/* Right: Competency Subsections */}
            <div className="space-y-8">
              <div className="mb-8">
                <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">Interactive Media</span>
                <h2 className="text-3xl font-bold text-heading tracking-tight">{VIDEO_CONFIG.title}</h2>
              </div>
              
              <div className="space-y-6">
                {LITERACY_TRACKS.map((track) => (
                  <div key={track.id} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-muted shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-heading mb-1">{track.title}</h3>
                      <p className="text-body text-sm leading-relaxed">{track.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: Restorative Community Support Call-to-Action */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-heading p-10 md:p-16 rounded-[2rem] text-center border border-muted shadow-2xl relative overflow-hidden animate-up delay-3 max-w-5xl mx-auto transform-gpu backface-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                Get Involved
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Support Grassroots Peacebuilding
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Learn how you can partner with local facilitators to expand Healing Circles and digital literacy camps to more communities across Northern Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/become-a-partner" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold tracking-wide active:scale-[0.98] hover:shadow-[0_8px_16px_rgba(211,84,0,0.3)] hover:-translate-y-1 transition-all duration-200 text-center">
                  Partner With Us
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold tracking-wide border border-white/20 active:scale-[0.98] hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm">
                  Contact our Facilitation Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
