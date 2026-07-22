import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSpecificBucketImages } from '@/app/lib/getSpecificBucketImages';
import { BookOpen, Newspaper, ImageIcon, ArrowRight, Download, FileText, Quote, Sparkles } from 'lucide-react';
import ResourcesGallery from './ResourcesGallery';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Resources & Learning | Northern Vision CBO',
  description: "Discover Northern Vision's publications, reports, toolkits, stories, videos, and insights from Healing Circle practice.",
};

// ──────────────────────────────────────────────────────
// 1. Immutable Static Schema: Resource Taxonomy Array
// ──────────────────────────────────────────────────────

const TAXONOMY_TAGS: readonly string[] = [
  "Jo Bauen's Training Report",
  "Articles",
  "Videos",
  "Testimonials",
  "Photo essays",
  "Learning resources",
  "Future publications",
] as const;

// ──────────────────────────────────────────────────────
// 2. Immutable Static Schema: Featured Publication Data
// ──────────────────────────────────────────────────────

const FEATURED_PUBLICATION = {
  badge: "FEATURED PUBLICATION",
  title: "Building Community Leadership Through Circle Keeper Training",
  author: "Jo Bauen's Training Report",
  description: "Explore the learning report documenting the training, participant experiences, key lessons, and recommendations for strengthening restorative leadership.",
  pdfUrl: "https://drive.google.com/file/d/1gSi06RWFWFvs763pDfN46pzsPC5R8R6S/view?usp=sharing",
  buttonText: "Read the Report (PDF) ➔",
} as const;

// ──────────────────────────────────────────────────────
// 3. Page Component
// ──────────────────────────────────────────────────────

export default async function ResourcesPage() {
  // Fetch training gallery images using Appwrite Storage preview pipeline (&output=webp)
  let galleryImages: { src: string; alt: string; caption: string }[] = [];
  try {
    galleryImages = await getSpecificBucketImages();
  } catch (err) {
    console.error("Failed to fetch gallery images for Resources page:", err);
  }

  // Fallback captions for training photos mosaic
  const photoCaptions = [
    "Circle Keeper Facilitation Workshop — Gotu",
    "Restorative Dialogue & Conflict Resolution Session",
    "Intergenerational Wisdom Exchange with Community Elders",
    "Youth Facilitator Circle Practice in Isiolo",
    "Community Stewardship & Action Planning Gathering",
    "Circle Keeper Certification & Reflection Session",
  ];

  return (
    <main className="min-h-screen bg-neutral-light pb-24">

      {/* ════════════════════════════════════════════════
          SECTION 1: Resources & Learning Hero Workspace
          ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#F5F2EB] border-b border-muted">
        {/* Soft linen / fine-paper matte textured background */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Ambient warm glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="container relative z-10 animate-up">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-white text-sm font-semibold tracking-wider text-primary uppercase mb-2 shadow-sm">
              Knowledge Hub & Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight">
              Resources & Learning
            </h1>
            <p className="text-xl md:text-2xl text-body leading-relaxed max-w-3xl mx-auto font-medium">
              Discover Northern Vision&apos;s publications, reports, toolkits, stories, videos and insights from Healing Circle practice.
            </p>

            {/* Repository Taxonomy List */}
            <div className="pt-6">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-3">
                Repository Taxonomy
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                {TAXONOMY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white border border-muted text-xs font-bold text-heading hover:border-primary/50 hover:text-primary transition-all duration-200 shadow-sm cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* ════════════════════════════════════════════════
            SECTION 2: Quick Navigation Glassmorphism Gateways
            ════════════════════════════════════════════════ */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Gateway Card 1: Stories & News */}
            <div className="relative group backdrop-blur-md bg-brand-espresso/90 text-white border border-white/20 p-8 rounded-2xl transform-gpu transition-all duration-300 hover:scale-[1.01] shadow-xl overflow-hidden isolation-auto backface-hidden flex flex-col justify-between">
              {/* Soft decorative background highlight */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-gold/15 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-gold/25 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/30">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white">
                  Stories & News
                </h2>
                <p className="text-brand-cream/80 text-base leading-relaxed mb-8 font-medium">
                  Read in-depth field stories, community updates, and editorial articles on our ongoing grassroots transformations.
                </p>
              </div>

              <Link
                href="/stories-news"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-rust text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 w-fit"
              >
                Explore Stories & News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Gateway Card 2: Media Gallery */}
            <div className="relative group backdrop-blur-md bg-brand-espresso/90 text-white border border-white/20 p-8 rounded-2xl transform-gpu transition-all duration-300 hover:scale-[1.01] shadow-xl overflow-hidden isolation-auto backface-hidden flex flex-col justify-between">
              {/* Soft decorative background highlight */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/30 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/30">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white">
                  Media Gallery
                </h2>
                <p className="text-brand-cream/80 text-base leading-relaxed mb-8 font-medium">
                  Browse our visual archives featuring high-resolution photo collections and video streams from Gotu Farm, Biolit, Wolfram, and Sweden.
                </p>
              </div>

              <Link
                href="/media-gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white hover:bg-white/25 font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 w-fit backdrop-blur-sm"
              >
                View Media Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 3: Evidence of Impact (Healing Circles Metrics)
            ════════════════════════════════════════════════ */}
        <section className="my-12">
          <div className="bg-white border border-muted p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden transform-gpu backface-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-2">
                  Operational Engine
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight leading-tight">
                  Evidence of Impact
                </h2>
                <p className="text-sm font-semibold text-primary/80 mt-1">
                  Healing Circles in Practice
                </p>
              </div>

              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-muted pt-6 lg:pt-0 lg:pl-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                  <div className="bg-neutral-light border border-muted px-6 py-4 rounded-xl text-center shrink-0 min-w-[140px]">
                    <span className="text-4xl md:text-5xl font-black text-primary block leading-none">
                      130+
                    </span>
                    <span className="text-xs font-bold text-heading uppercase tracking-wider mt-1 block">
                      Sessions Tracked
                    </span>
                  </div>
                  <div className="bg-neutral-light border border-muted px-6 py-4 rounded-xl text-center shrink-0 min-w-[140px]">
                    <span className="text-4xl md:text-5xl font-black text-primary block leading-none">
                      30+
                    </span>
                    <span className="text-xs font-bold text-heading uppercase tracking-wider mt-1 block">
                      Key Leaders
                    </span>
                  </div>
                </div>

                <p className="text-lg text-body leading-relaxed font-medium">
                  Healing Circles serve as our core operational engine. With over 130+ completed sessions well-tracked across Northern Kenya, our dialogue framework has directly engaged 30+ multi-sector leaders, strengthened restorative justice pathways, and built sustainable community solutions for climate adaptation and local governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 4: Featured Publication (Jo Bauen Training Report)
            ════════════════════════════════════════════════ */}
        <section className="my-12">
          <div className="bento-card bg-neutral-light border border-muted p-8 md:p-12 rounded-2xl shadow-sm hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">
                    {FEATURED_PUBLICATION.badge}
                  </span>
                  <span className="text-xs font-semibold text-body">
                    {FEATURED_PUBLICATION.author}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading tracking-tight leading-snug">
                  {FEATURED_PUBLICATION.title}
                </h2>

                <p className="text-lg text-body leading-relaxed font-medium">
                  {FEATURED_PUBLICATION.description}
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 pt-2">
                <a
                  href={FEATURED_PUBLICATION.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
                >
                  <FileText className="w-5 h-5" />
                  {FEATURED_PUBLICATION.buttonText}
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 5: Training Photos Gallery (Appwrite WebP Pipeline)
            ════════════════════════════════════════════════ */}
        <section className="my-16">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-2">
              Visual Archives
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Gallery: Healing Circles & Training in Action
            </h2>
            <p className="text-body text-base mt-2">
              Photographic documentation of facilitators, community circles, and leadership workshops.
            </p>
          </div>

          {/* 6-Image Interactive Mosaic Grid with Lightbox Popup Modal */}
          <ResourcesGallery galleryImages={galleryImages} photoCaptions={photoCaptions} />
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 6: Testimonials Placeholder
            ════════════════════════════════════════════════ */}
        <section className="my-16">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-2">
              Participant Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Community Voices & Testimonials
            </h2>
          </div>

          <div className="border border-dashed border-muted p-12 text-center rounded-2xl bg-white/50 backdrop-blur-sm">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />
            <p className="text-lg font-medium text-body italic max-w-xl mx-auto">
              (Content to follow — participant case stories and circle quotes currently being compiled).
            </p>
            <span className="text-xs font-bold text-primary tracking-widest uppercase block mt-4">
              Coming Soon
            </span>
          </div>
        </section>

      </div>

    </main>
  );
}
