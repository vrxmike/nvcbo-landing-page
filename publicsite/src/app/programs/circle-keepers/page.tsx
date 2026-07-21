import Link from "next/link";
import { Leaf, Users, ShieldAlert, HeartHandshake, GraduationCap, MapPin, ArrowRight, Download, UsersRound } from "lucide-react";
import { Client, TablesDB, Query } from 'node-appwrite';

export const metadata = {
  title: "Circle Keeper Training | Northern Vision CBO",
  description: "Strengthening Local Leadership Through Healing Circles rooted in restorative justice and community leadership.",
};

export const dynamic = 'force-dynamic';

// 1. Data Schema Array for Bento Card Matrix
interface FocusTrack {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const FOCUS_TRACKS: FocusTrack[] = [
  {
    id: "climate-resilience",
    title: "Climate Resilience",
    description: "Preparing facilitators to coordinate community dialogue regarding local climate adaptation and environmental preservation patterns.",
    icon: Leaf,
  },
  {
    id: "gender-equality",
    title: "Gender Equality",
    description: "Advancing inclusive leadership platforms where women, girls, and youth actively drive local development choices.",
    icon: Users,
  },
  {
    id: "ending-fgm-gbv",
    title: "Ending FGM & GBV",
    description: "Cultivating safe, survivor-centered dialogue setups to shift harmful social norms and advance bodily autonomy.",
    icon: ShieldAlert,
  },
  {
    id: "peacebuilding",
    title: "Peacebuilding",
    description: "Mitigating resource-driven tensions across pastoral networks using structured restorative mediation processes.",
    icon: HeartHandshake,
  },
  {
    id: "youth-leadership",
    title: "Youth Leadership",
    description: "Equipping a new generation of local facilitators with active community governance and communication tools.",
    icon: GraduationCap,
  },
  {
    id: "indigenous-knowledge",
    title: "Indigenous Knowledge",
    description: "Treating generational oral histories, land wisdom, and traditional water systems as living community assets.",
    icon: MapPin,
  }
];

async function getProgramData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const response = await tablesDB.listRows(dbId, 'programs', [
      Query.equal('slug', 'circle-keepers')
    ]);
    return response.rows[0] || null;
  } catch (error) {
    console.error('Error fetching program data:', error);
    return null;
  }
}

export default async function CircleKeepersPage() {
  const program = await getProgramData();
  const pageTitle = program?.title || "Circle Keeper Training";

  return (
    <div className="flex flex-col bg-white min-h-screen pt-24 pb-32">

      {/* 1. Page Hero Component */}
      <section className="pt-16 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Copy Container */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <Link href="/programs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-rust hover:text-brand-gold transition-colors mb-6 w-fit">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Programs
              </Link>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-6">
                {pageTitle}
              </h1>

              <h2 className="text-xl md:text-2xl text-brand-espresso/90 font-bold mb-8 leading-snug">
                Strengthening Local Leadership Through <span className="text-brand-gold">Healing Circles</span>
              </h2>

              <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-8"></div>

              <p className="text-base sm:text-lg text-brand-espresso/80 leading-relaxed font-medium">
                Communities thrive when people have the skills to facilitate dialogue, restore trust, and create spaces where every voice is heard. Through Circle Keeper Training, Northern Vision equips community leaders, youth, women, and local institutions with the knowledge and practical skills to facilitate Healing Circles rooted in restorative justice and community leadership.
              </p>
            </div>

            {/* Image Frame */}
            <div className="order-1 lg:order-2 w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-brand-cream border border-black/5 relative group">
              <div className="absolute inset-0 bg-brand-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Circle Keeper Training Session"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Gallery Section - Dark Theme Bento Glassmorphism */}
      <section className="py-20 bg-brand-espresso text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c81a9c368/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c81a9c368/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 1" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c851af5a1/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c851af5a1/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 2" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c83da7c50/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c83da7c50/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 3" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c88ff9c47/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c88ff9c47/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 4" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c8994c3a0/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c8994c3a0/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 5" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c8d0e56fb/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" target="_blank" rel="noopener noreferrer">
                <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a597ed3000c8d0e56fb/preview?width=1200&output=webp&project=692a34ec001f1efc9002&impersonateuserid=" alt="Gallery 6" className="w-full h-full object-cover"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Our Latest Training" Analytics Tracker */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-brand-espresso rounded-[24px] shadow-xl border border-black/5 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">

            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none transform transform-gpu will-change-transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="shrink-0 text-center md:text-left z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-rust/20 border border-brand-rust/30 text-brand-gold mb-4 mx-auto md:mx-0">
                <UsersRound className="w-10 h-10" />
              </div>
              <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2">30</div>
              <div className="text-sm font-bold uppercase tracking-wider text-brand-gold">Cohort Members</div>
            </div>

            <div className="flex-1 text-center md:text-left z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Our Latest Training</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
                Our recent Circle Keeper Training brought together 30 community leaders, youth, and government representatives to strengthen community-led approaches to healing and restorative justice. Participants developed advanced facilitation skills, explored restorative justice principles, and exchanged lived experiences and cultural knowledge that will continue shaping their work in their communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Learning Report Download Component */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bento-card bg-brand-cream p-10 md:p-12 text-center flex flex-col items-center shadow-lg border border-brand-gold/20 relative overflow-hidden">

            {/* Subtle Top Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-brand-rust"></div>

            <span className="text-xs font-black uppercase tracking-[3px] text-brand-rust mb-4 block">Featured Resource</span>

            <h3 className="text-2xl md:text-4xl font-black text-brand-espresso mb-6 max-w-2xl leading-tight">
              Building Community Leadership Through Circle Keeper Training
            </h3>

            <p className="text-base md:text-lg text-brand-espresso/80 leading-relaxed font-medium max-w-2xl mb-10">
              Explore the learning report documenting the training, participant experiences, key lessons, and recommendations for strengthening restorative leadership.
            </p>

            <a
              href="https://drive.google.com/file/d/1gSi06RWFWFvs763pDfN46pzsPC5R8R6S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold text-white rounded-full font-black uppercase tracking-wider hover:bg-brand-rust active:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
            >
              <Download className="w-5 h-5" /> Download Full Report
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
