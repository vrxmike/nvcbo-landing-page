import Link from "next/link";
import { ArrowRight, Leaf, Map, SunMedium, ExternalLink, Compass } from "lucide-react";

export const metadata = {
  title: "Climate Resilience | Northern Vision CBO",
  description: "Turning Climate Adaptation into Daily, Tangible Practice in Isiolo's Drylands.",
};

// --- STATIC COPY CONSTANTS ---
const PAGE_DATA = {
  hero: {
    title: "Climate Resilience & Sustainable Livelihoods",
    subtitle: "Adaptive Systems for Arid Landscapes",
    copy: "Set against the realities of drought, floods and shrinking pastoral systems across Isiolo's ASAL landscape, this programme turns climate adaptation into daily, tangible practice from climate-smart aquaculture and integrated farming at Gotu Gamachu Farm, to women-led kitchen gardens that put food security directly in the hands of households, to a new generation of children learning resilience through story, art, and land."
  },
  bentoBlocks: {
    farm: {
      title: "Gotu Gamachu Farm",
      badge: "Flagship Site",
      text: "Gotu Gamachu Farm is Northern Vision's flagship demonstration site for climate-smart aquaculture and integrated farming. It serves as the physical model for the Gotu Summer School on Climate Resilience (GSSCR) and the kitchen garden work with local women."
    },
    gsscr: {
      title: "GSSCR for Children",
      text: "A space where children learn resilience through creative writing, composition, poetry, art, and hands-on farm excursions."
    },
    stand4herland: {
      title: "Women's Land Rights",
      text: "Advancing sustainable land justice and secure tenure for women farmers. Supporting global actions in collaboration with Landesa and PACJA.",
      href: "https://www.linkedin.com/posts/shampi-anna-2386592a9"
    },
    ecotourism: {
      title: "Eco-Tourism Visitor Portal",
      text: "Experience Gotu's landscapes firsthand. Guided visits take guests through the farm, aquaculture ponds, kitchen gardens, and the surrounding drylands.",
      href: "/contact" // Linking to contact page to apply for a visit
    }
  }
};

export default function ClimateResiliencePage() {
  return (
    <div className="flex flex-col bg-brand-light-bg min-h-screen pt-24 pb-32">

      {/* 1. Page Hero Component */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 px-6 relative overflow-hidden">
        {/* Subtle Tactile Micro-texture Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-rust hover:text-brand-gold transition-colors mb-8 w-fit mx-auto">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Directory
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-6">
            {PAGE_DATA.hero.title}
          </h1>

          <h2 className="text-xl md:text-2xl text-brand-espresso/90 font-bold mb-8 leading-snug">
            {PAGE_DATA.hero.subtitle}
          </h2>

          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-8"></div>

          <p className="text-base sm:text-lg text-brand-espresso/80 leading-relaxed font-medium">
            {PAGE_DATA.hero.copy}
          </p>
        </div>
      </section>

      {/* 2. Asymmetrical Bento Grid Showcase Container */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Bento Cell A (Gotu Gamachu Farm - Col Span 2) */}
            <div className="bento-card md:col-span-2 bg-white flex flex-col md:flex-row overflow-hidden group">
              <div className="p-8 md:p-10 flex flex-col flex-1 order-2 md:order-1 justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-espresso/60 mb-6">
                  <Leaf className="w-4 h-4 text-brand-rust" /> {PAGE_DATA.bentoBlocks.farm.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-espresso mb-4 leading-tight">
                  {PAGE_DATA.bentoBlocks.farm.title}
                </h3>
                <p className="text-base text-brand-espresso/80 leading-relaxed font-medium mb-0">
                  {PAGE_DATA.bentoBlocks.farm.text}
                </p>
              </div>
              <div className="w-full md:w-2/5 aspect-video md:aspect-auto relative bg-brand-cream order-1 md:order-2 overflow-hidden">
                <div className="absolute inset-0 bg-brand-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
                  alt="Gotu Gamachu Farm Layout and Aquaculture Ponds"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bento Cell B (Summer School GSSCR) */}
            <div className="bento-card bg-brand-cream p-8 md:p-10 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-brand-espresso mb-4 leading-tight">
                {PAGE_DATA.bentoBlocks.gsscr.title}
              </h3>
              <p className="text-sm text-brand-espresso/80 leading-relaxed font-medium mb-6">
                {PAGE_DATA.bentoBlocks.gsscr.text}
              </p>
              <div className="mt-auto inline-flex items-center px-3 py-1.5 bg-brand-gold/10 text-brand-rust text-[10px] font-black uppercase tracking-widest rounded border border-brand-gold/20">
                PACJA Storybook Integration
              </div>
            </div>

            {/* Bento Cell C (Stand4HerLand Partnership) */}
            <div className="bento-card bg-white p-8 md:p-10 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-rust mb-6 border border-brand-espresso/5">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-brand-espresso mb-4 leading-tight">
                {PAGE_DATA.bentoBlocks.stand4herland.title}
              </h3>
              <p className="text-sm text-brand-espresso/80 leading-relaxed font-medium mb-8 flex-grow">
                {PAGE_DATA.bentoBlocks.stand4herland.text}
              </p>
              <a
                href={PAGE_DATA.bentoBlocks.stand4herland.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-rust transition-colors duration-300"
              >
                View LinkedIn Post <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Bento Cell D (Eco-Tourism Visitor Portal) - Col Span 2 */}
            <div className="bento-card md:col-span-2 bg-brand-espresso p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>

              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
                  <Compass className="w-4 h-4" /> Eco-Tourism
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  {PAGE_DATA.bentoBlocks.ecotourism.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-medium mb-0 max-w-xl">
                  {PAGE_DATA.bentoBlocks.ecotourism.text}
                </p>
              </div>

              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Link
                  href={PAGE_DATA.bentoBlocks.ecotourism.href}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold text-white rounded-xl font-black uppercase tracking-wider shadow-[0_8px_20px_rgba(243,156,18,0.3)] hover:-translate-y-1 hover:bg-brand-rust hover:shadow-[0_12px_25px_rgba(211,84,0,0.4)] active:scale-[0.98] transition-all duration-300 w-full"
                >
                  Apply to Visit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
