import React from 'react';
import { RegistrationForm } from './RegistrationForm';
import { Metadata } from 'next';
import { Client, TablesDB, Query } from 'node-appwrite';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Digital Literacy Holiday Camp | NVCBO',
  description: 'Digital inclusion the NVCBO way: practical, safe, and deeply human.',
};

// 1. Static Immutable Data for Learning Competencies
const LEARNING_COMPETENCIES = [
  {
    id: "01",
    title: "Hardware Confidence",
    description: "Handle a phone or computer safely and confidently.",
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    id: "02",
    title: "Wise Exploration",
    description: "Understand what the internet is, and how to use it wisely.",
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "03",
    title: "Risk Awareness",
    description: "Recognize online risks and know exactly who to turn to if something feels wrong.",
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "04",
    title: "Media Literacy",
    description: "Spot rumors and misinformation before believing or sharing them.",
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "05",
    title: "Digital Storytelling",
    description: "Tell their own story, capturing photos and short videos of their environment and community.",
    span: "md:col-span-2 lg:col-span-2" // using col-span-2 to keep the grid unbalanced but clean
  }
];

async function getProjectData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const response = await tablesDB.listRows(dbId, 'projects', [
      Query.equal('slug', 'holiday-camp')
    ]);
    return response.rows[0] || null;
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}

export default async function HolidayCampPage() {
  const project = await getProjectData();
  const pageTitle = project?.title || "Digital Literacy Holiday Camp";
  const pageSubtitle = project?.subtitle || "Gotu Hub";
  const pageCopy = project?.copy || "Every school holiday, NVCBO opens a short, hands-on camp for children in Gotu to build the digital skills they'll need for school, communication and life while giving them space to simply be kids. Rooted in Gotu, built for the realities of life in Isiolo, this is digital inclusion the NVCBO way: practical, safe, and deeply human.";

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* SECTION 1: Camp Focus Hero Layout */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-muted bg-[#F5F2EB]">
        {/* Soft linen/fine-grit matte textured canvas effect */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'%232B1100\'/%3E%3C/svg%3E")', 
            backgroundSize: '24px 24px' 
          }}
        />
        
        <div className="container relative z-10 animate-up">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              {pageSubtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight">
              {pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-heading font-medium opacity-90 pb-4">
              Practical, Safe, and Deeply Human Digital Inclusion
            </p>
            <p className="text-lg text-body leading-relaxed max-w-3xl mx-auto">
              {pageCopy}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: The 6-Day Methodology & Grounding Block */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container">
          <div className="bento-card p-8 md:p-12 animate-up delay-1 bg-white relative overflow-hidden max-w-5xl mx-auto shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-bl-[100%] pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6">The 6-Day Methodology</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-body font-medium italic">
                "Over six days, children move between playful grounding circles and guided digital learning led by our resource person, ensuring every child leaves not just tech-savvy, but centered and safe."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "What Children Learn" Asymmetrical Bento Matrix */}
      <section className="py-12 pb-20">
        <div className="container">
          <div className="mb-12 animate-up delay-1 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">What Children Learn</h2>
            <p className="text-lg text-body">
              Five core competencies designed to build resilience, understanding, and creativity in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-up delay-2 max-w-6xl mx-auto">
            {LEARNING_COMPETENCIES.map((item) => (
              <div 
                key={item.id} 
                className={`bento-card p-8 md:p-10 flex flex-col justify-between bg-neutral-light border border-muted group hover:border-primary/40 transition-all duration-300 ${item.span}`}
              >
                <div className="mb-12">
                  <span className="text-sm font-mono text-primary font-bold mb-4 block tracking-wide">
                    {item.id} / {item.title}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-heading group-hover:text-primary transition-colors leading-tight">
                    {item.description}
                  </h3>
                </div>
                
                <div className="mt-auto w-12 h-12 rounded-full border border-muted flex items-center justify-center text-body group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Showcase & Graduation Day Bento Panel */}
      <section className="py-12 pb-24">
        <div className="container">
          <div className="bento-card bg-primary text-white p-8 md:p-12 lg:p-16 animate-up delay-3 overflow-hidden relative max-w-6xl mx-auto">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
              <div className="flex-1 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                  The Culmination
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Showcase & Graduation Day
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                  The camp closes with a Showcase & Graduation Day, where children present what they've created to parents or community members and receive a certificate marking their achievement—a proud, public moment that turns a short course into a lasting milestone.
                </p>
              </div>
              
              <div className="w-full lg:w-auto bento-card bg-white p-8 md:p-10 border-none shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-heading mb-2">Join the Next Cohort</h3>
                <p className="text-body mb-6 text-base">Register your interest to get notified when applications open.</p>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
