import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Sprout, Home, Waves, Users, Target, Snowflake, Beaker, ShieldAlert } from 'lucide-react';
import FarmGallery from './FarmGallery';
import { Client, TablesDB, Query } from 'node-appwrite';

export const metadata = {
  title: "Gotu Gamachu Farm | Northern Vision CBO",
  description: "Explore the physical heart of Northern Vision's climate-smart interventions at our flagship demonstration site.",
};

// --- STATIC COPY CONSTANTS ---
const PAGE_HERO = {
  title: "Gotu Gamachu Farm",
  subtitle: "NVCBO's Flagship Demonstration Site",
  copy: "This section introduces the farm itself: its layout, what's grown and raised, the people who run it day to day, and the story of how it came to be—giving visitors and partners a clear picture of the model before they explore the wider Climate Resilience programme."
};

interface FarmSystem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const FARM_SYSTEMS: FarmSystem[] = [
  {
    id: "grown-raised",
    title: "Integrated Crop Systems",
    description: "Showcasing the dryland layout, soil management, and crop varieties currently grown and raised on-site. We focus on resilient food crops, integrated dryland varieties, and everyday field tracking metrics managed by local community members.",
    icon: Sprout,
  },
  {
    id: "aquaculture",
    title: "Circular Water Systems",
    description: "Detailing the physical installation of the operational aquaculture ponds, describing the circular water loop that links fish farming directly into women-led kitchen gardens.",
    icon: Waves,
  }
];

interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  icon: React.ElementType;
}

const IMPACT_METRICS: ImpactMetric[] = [
  { id: "ponds", value: "1 to 6 Ponds", label: "System Expansion Status", icon: Home },
  { id: "families", value: "50 Families", label: "Direct Livelihoods Supported", icon: Users },
  { id: "income", value: "+30%", label: "Average Target Household Income Increase", icon: Target },
];

interface GalleryAsset {
  src: string;
  alt: string;
  caption: string;
}

const GALLERY_ASSETS: GalleryAsset[] = [
  { src: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/6a5584e100306fc44f56/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`, alt: 'Active Aquaculture Ponds & Tilapia Harvesting', caption: 'Climate-smart aquaculture infrastructure.' },
  { src: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/6a5584e1002d80a187d8/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`, alt: 'Women-Led Resilient Kitchen Gardens Setup', caption: 'Women-managed household food security plots.' },
  { src: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/6a5584e100306a35c9ce/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`, alt: 'GSSCR Children Educational Excursions on Field', caption: 'Intergenerational learning on the farm.' }
];

async function getFarmData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const projectsResponse = await tablesDB.listRows(dbId, 'projects', [
      Query.equal('slug', 'gotu-farm')
    ]);
    const project = projectsResponse.rows[0];

    const galleryResponse = await tablesDB.listRows(dbId, 'media_gallery', [
      Query.equal('category', 'gotu-farm'),
      Query.orderAsc('sort_order')
    ]);

    return { project, gallery: galleryResponse.rows };
  } catch (error) {
    console.error('Error fetching farm data:', error);
    return { project: null, gallery: [] };
  }
}

export default async function GotuFarmPage() {
  const { project, gallery } = await getFarmData();

  const pageTitle = project?.title || PAGE_HERO.title;

  const dynamicGalleryAssets = gallery && gallery.length > 0 ? gallery.map((item: any) => ({
    src: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${item.file_id}/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`,
    alt: item.title,
    caption: item.caption
  })) : GALLERY_ASSETS;

  const challengesList = project?.challenges?.length ? project.challenges : [
    { title: "Cold Storage Limitations", desc: "Post-harvest loss mitigation requirements to safely store and transport yields.", icon: Snowflake },
    { title: "Commercial Feed Access", desc: "Localized alternative resource optimization needs for sustainable aquaculture feeding.", icon: Beaker },
    { title: "Open Perimeter Fencing", desc: "Critical requirements for crop security and wildlife preservation barriers around the farm perimeter.", icon: Home }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen pt-24 pb-32">

      {/* 1. Flagship Farm Hero Layout */}
      <section className="pt-16 pb-20 px-6 relative overflow-hidden bg-brand-cream border-b border-black/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-rust hover:text-brand-gold transition-colors mb-8 w-fit">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Projects Directory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-4">
                {pageTitle}
              </h1>
              <h2 className="text-xl md:text-2xl text-brand-espresso/90 font-bold mb-6 leading-snug">
                {PAGE_HERO.subtitle}
              </h2>
              <div className="w-16 h-1.5 bg-brand-gold rounded-full mb-8"></div>
              <p className="text-base sm:text-lg text-brand-espresso/80 leading-relaxed font-medium">
                {PAGE_HERO.copy}
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-brand-espresso/10 shadow-xl bg-brand-espresso/5 flex items-center justify-center">
               <img src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/6a5584e100306d1ff8ef/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`} alt="Gotu Gamachu Farm Aerial Layout & Fields" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Farm Layout & Systems + Dashboard (Bento Grid) */}
      <section className="pt-20 pb-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Bento Cards: Farm Systems */}
            {FARM_SYSTEMS.map((system) => (
              <div key={system.id} className="bento-card bg-brand-cream p-8 flex flex-col h-full border-brand-espresso/10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-rust mb-6 shadow-sm border border-brand-espresso/5">
                  <system.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-brand-espresso mb-3 leading-tight">{system.title}</h3>
                <p className="text-brand-espresso/80 leading-relaxed text-sm font-medium">{system.description}</p>
              </div>
            ))}

            {/* Dashboard: Aquaculture Scaling Analytics */}
            <div className="bento-card bg-brand-espresso p-8 lg:col-span-1 flex flex-col justify-center border-brand-gold/30">
              <span className="text-xs font-black uppercase tracking-[3px] text-brand-gold mb-6 block">Aquaculture Scaling</span>
              <div className="space-y-6">
                {IMPACT_METRICS.map((metric) => (
                  <div key={metric.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <metric.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white leading-none mb-1">{metric.value}</div>
                      <div className="text-xs font-bold text-white/70 uppercase tracking-wider">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Farm Production Gallery (Col Span 3) */}
            <div className="lg:col-span-3 pt-8 mt-4 border-t border-brand-espresso/5">
              <FarmGallery assets={dynamicGalleryAssets} />
            </div>

            {/* Operational Challenges & Open Matches Panel */}
            <div className="lg:col-span-3 bento-card bg-brand-rust/5 p-8 border border-brand-rust/20 mt-4">
               <h3 className="text-2xl font-black text-brand-espresso mb-6 flex items-center gap-3">
                 <ShieldAlert className="w-6 h-6 text-brand-rust" />
                 Current Structural Challenges
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {challengesList.map((challenge: any, i: number) => {
                    const isDynamic = typeof challenge === 'string';
                    const title = isDynamic ? challenge : challenge.title;
                    const desc = isDynamic ? "Strategic intervention required to optimize this area." : challenge.desc;
                    const Icon = isDynamic ? ShieldAlert : challenge.icon;

                    return (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-brand-espresso/10 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-brand-rust/10 flex items-center justify-center text-brand-rust mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-brand-espresso mb-2">{title}</h4>
                        <p className="text-sm text-brand-espresso/70 font-medium leading-relaxed">{desc}</p>
                      </div>
                    );
                  })}

                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
