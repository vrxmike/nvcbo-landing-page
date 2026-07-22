import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indigenous Knowledge, Culture & Heritage | NVCBO',
  description: 'Preserving indigenous knowledge and cultural heritage while strengthening identity, storytelling, and intergenerational learning across Northern Kenya communities.',
};

// ──────────────────────────────────────────────────────
// 1. Immutable Static Schema: Programme Narrative Copy
// ──────────────────────────────────────────────────────

const HERO_CONTENT = {
  badge: "Culture & Heritage",
  title: "Indigenous Knowledge, Culture & Heritage",
  subtitle: "Preserving indigenous knowledge and cultural heritage while strengthening identity, storytelling, and intergenerational learning.",
  narrative: "This programme safeguards the knowledge systems — oral history, land and water wisdom, cultural practice — that Northern Kenya's communities have carried for generations, honoring them as living resources for today's climate and social challenges rather than relics of the past. It works through storytelling and documentation, intergenerational mentorship between elders and youth, and community-led media that puts local voices at the center of how these stories are recorded, shared, and passed on.",
} as const;

// ──────────────────────────────────────────────────────
// 2. Immutable Static Schema: Holiday Camp Module
// ──────────────────────────────────────────────────────

const CAMP_MODULE = {
  title: "Digital & Media Literacy Holiday Camp, Gotu",
  lead: "Every school holiday, NVCBO opens a short, hands-on camp for children in Gotu to build the digital skills they'll need for school, communication and life while giving them space to simply be kids. Over six days, children move between playful grounding circles and guided digital learning led by our resource person, ensuring every child leaves not just tech-savvy, but centered and safe.",
  graduation: "The camp closes with a Showcase & Graduation Day, where children present what they've created to parents or community members and receive a certificate marking their achievement — a proud, public moment that turns a short course into a lasting milestone.",
  tagline: "Rooted in Gotu, built for the realities of life in Isiolo, this is digital inclusion the NVCBO way: practical, safe, and deeply human.",
} as const;

const CAMP_COMPETENCIES: readonly { id: string; label: string; span: string }[] = [
  {
    id: "01",
    label: "Handle a phone or computer safely and confidently",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "02",
    label: "Understand what the internet is, and how to use it wisely",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "03",
    label: "Recognize online risks and know exactly who to turn to if something feels wrong",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "04",
    label: "Spot rumors and misinformation before believing or sharing them",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "05",
    label: "Tell their own story, capturing photos and short videos of their environment and community",
    span: "md:col-span-1 lg:col-span-2",
  },
] as const;

// ──────────────────────────────────────────────────────
// 3. Immutable Static Schema: Supporting Pillar
// ──────────────────────────────────────────────────────

const RESEARCH_PILLAR = {
  title: "Research and Documentation",
  description: "As a supporting activity within this programme, we conduct ongoing field research, oral history archiving, and community documentation to preserve ancestral wisdom and inform localized climate adaptation policies.",
} as const;

// ──────────────────────────────────────────────────────
// 4. Intergenerational Pillars
// ──────────────────────────────────────────────────────

const INTERGENERATIONAL_PILLARS: readonly { id: string; title: string; copy: string; span: string }[] = [
  {
    id: "storytelling",
    title: "Storytelling & Oral Documentation",
    copy: "Recording and preserving oral histories, proverbs, and ecological knowledge through community-led media and participatory research.",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "mentorship",
    title: "Intergenerational Mentorship",
    copy: "Structured exchanges between elders and youth that keep ancestral knowledge alive — passing on land stewardship, water wisdom, and cultural practice to new generations.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "community-media",
    title: "Community-Led Media",
    copy: "Empowering local voices to control how their stories are recorded, shared, and amplified — from mobile journalism to participatory video production.",
    span: "md:col-span-1 lg:col-span-1",
  },
] as const;


// ──────────────────────────────────────────────────────
// 5. Page Component
// ──────────────────────────────────────────────────────

export default function IndigenousKnowledgePage() {
  return (
    <main className="min-h-screen bg-neutral-light pb-24">

      {/* ════════════════════════════════════════════════
          SECTION 1: Programme Hero Layout
          ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F2EB] border-b border-muted">
        {/* Fine-paper matte textured canvas */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Ambient warm blush */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="container relative z-10 animate-up">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2 shadow-sm">
              {HERO_CONTENT.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl text-heading font-medium opacity-90 pb-2">
              {HERO_CONTENT.subtitle}
            </p>
            <p className="text-lg text-body leading-relaxed max-w-3xl mx-auto">
              {HERO_CONTENT.narrative}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2: Intergenerational Framework (Bento Grid)
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-muted/50">
        <div className="container">
          <div className="mb-12 animate-up delay-1 max-w-3xl">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
              Living Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Intergenerational Knowledge Transmission
            </h2>
            <p className="text-lg text-body leading-relaxed mt-4 max-w-2xl">
              Three interconnected pillars that ensure indigenous wisdom flows between generations — not as museum artefacts, but as active, evolving resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-up delay-2">
            {INTERGENERATIONAL_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`bento-card p-8 md:p-10 lg:p-12 flex flex-col bg-neutral-light border border-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 transform-gpu backface-hidden ${pillar.span}`}
              >
                <h3 className="text-2xl font-bold text-heading mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-lg text-body leading-relaxed">
                  {pillar.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3: Digital & Media Literacy Holiday Camp
          (Full-Width Featured Bento Card)
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-neutral-light relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/2" />

        <div className="container relative z-10">
          <div className="mb-12 animate-up delay-1 max-w-3xl">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
              Embedded Programme
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              {CAMP_MODULE.title}
            </h2>
          </div>

          {/* Lead Narrative Bento Card */}
          <div className="bento-card p-8 md:p-12 bg-white border border-muted shadow-sm animate-up delay-2 relative overflow-hidden max-w-5xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-bl-[100%] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xl md:text-2xl leading-relaxed text-body font-medium italic">
                &ldquo;{CAMP_MODULE.lead}&rdquo;
              </p>
            </div>
          </div>

          {/* Competencies: "Children learn to:" */}
          <div className="mt-12">
            <div className="mb-8 animate-up delay-2">
              <h3 className="text-2xl md:text-3xl font-bold text-heading tracking-tight mb-2">
                What Children Learn
              </h3>
              <p className="text-body text-lg">
                Five core competencies — from hardware confidence to community storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-up delay-3 max-w-6xl">
              {CAMP_COMPETENCIES.map((item) => (
                <div
                  key={item.id}
                  className={`bento-card p-8 md:p-10 flex flex-col justify-between bg-white border border-muted group hover:border-primary/40 transition-all duration-300 transform-gpu backface-hidden ${item.span}`}
                >
                  <div className="mb-10">
                    <span className="text-sm font-mono text-primary font-bold mb-4 block tracking-wide">
                      {item.id}
                    </span>
                    <h4 className="text-xl md:text-2xl font-semibold text-heading group-hover:text-primary transition-colors leading-tight">
                      {item.label}
                    </h4>
                  </div>

                  <div className="mt-auto w-10 h-10 rounded-full border border-muted flex items-center justify-center text-body group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4: Showcase & Graduation Day Banner
          ════════════════════════════════════════════════ */}
      <section className="py-12 pb-20">
        <div className="container">
          <div className="bg-primary rounded-[24px] shadow-xl border border-black/5 text-white p-8 md:p-12 lg:p-16 animate-up delay-3 overflow-hidden relative max-w-6xl mx-auto transform-gpu backface-hidden">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ik-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ik-grid)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                The Culmination
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Showcase & Graduation Day
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium mb-8">
                {CAMP_MODULE.graduation}
              </p>
              <div className="h-px bg-white/20 my-8 max-w-md mx-auto" />
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic font-medium">
                &ldquo;{CAMP_MODULE.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5: Research & Documentation (Supporting Pillar)
          ════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center animate-up delay-1 max-w-5xl mx-auto">
            {/* Left: Icon & Section Label */}
            <div className="lg:col-span-2 flex flex-col items-start space-y-4">
              <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase block">
                Supporting Pillar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight leading-snug">
                {RESEARCH_PILLAR.title}
              </h2>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
            </div>

            {/* Right: Description Card */}
            <div className="lg:col-span-3">
              <div className="bento-card p-6 md:p-8 bg-neutral-light border border-muted shadow-sm">
                <p className="text-lg text-body leading-relaxed">
                  {RESEARCH_PILLAR.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6: Community Call-to-Action
          ════════════════════════════════════════════════ */}
      <section className="py-24 bg-neutral-light">
        <div className="container">
          <div className="bg-heading p-10 md:p-16 rounded-[2rem] text-center border border-muted shadow-2xl relative overflow-hidden animate-up delay-3 max-w-5xl mx-auto transform-gpu backface-hidden">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                Preserve Heritage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Help Us Keep These Stories Alive
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Partner with NVCBO to support community-led documentation, elder-youth exchanges, and digital skills training that preserves indigenous knowledge for generations to come.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold tracking-wide active:scale-[0.98] hover:shadow-[0_8px_16px_rgba(211,84,0,0.3)] hover:-translate-y-1 transition-all duration-200">
                  Partner With Us
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold tracking-wide border border-white/20 active:scale-[0.98] hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm">
                  Explore Media Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
