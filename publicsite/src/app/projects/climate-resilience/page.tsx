import Link from "next/link";
import { ArrowRight, Leaf, Sprout, SunMedium, Globe, Landmark, Scale, Network, Users } from "lucide-react";

export const metadata = {
  title: "Climate Resilience & Sustainable Livelihoods | Northern Vision CBO",
  description: "Adaptive Systems for Arid Landscapes. Turning climate adaptation into daily, tangible practice across Northern Kenya.",
};

// --- STATIC COPY CONSTANTS ---
const PAGE_HERO = {
  title: "Climate Resilience & Sustainable Livelihoods",
  subtitle: "Adaptive Systems for Arid Landscapes",
  copy: "Set against the realities of drought, floods and shrinking pastoral systems across Isiolo's ASAL landscape, this programme turns climate adaptation into daily, tangible practice. Every project is designed alongside communities to reflect their priorities, knowledge, and lived experiences."
};

interface Intervention {
  id: string;
  title: string;
  copy: string;
  icon: React.ElementType;
  colSpan?: string;
  featured?: boolean;
}

const INTERVENTIONS: Intervention[] = [
  {
    id: "regenerative-ag",
    title: "Regenerative Agriculture Systems",
    copy: "Building resilient community networks through modern climate adaptation, regenerative crop practices, and sustainable livelihood systems designed for arid environments.",
    icon: Leaf,
    colSpan: "lg:col-span-1"
  },
  {
    id: "kitchen-gardens",
    title: "Women-Led Kitchen Gardens",
    copy: "Putting food security directly in the hands of local households through adaptive, small-scale kitchen gardens managed by women groups.",
    icon: Sprout,
    colSpan: "lg:col-span-2",
    featured: true
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Integration",
    copy: "Deploying renewable energy infrastructures and green tech assets to power local agricultural systems reliably.",
    icon: SunMedium,
    colSpan: "lg:col-span-3"
  }
];

interface PolicyNetwork {
  id: string;
  name: string;
  icon: React.ElementType;
}

const POLICY_NETWORKS: PolicyNetwork[] = [
  { id: "climate-working-group", name: "Climate Sector Working Group", icon: Globe },
  { id: "acepa-alignment", name: "Parliament - ACEPA Alignment", icon: Landmark },
  { id: "landesa-wlr", name: "WLR - Landesa Conference Networks", icon: Scale },
  { id: "stand4herland", name: "S4HL (Stand4HerLand) Policy Matrix", icon: Users },
  { id: "pacja-global", name: "PACJA Global Policy Engagement", icon: Network },
];

export default function ClimateResiliencePage() {
  return (
    <div className="flex flex-col bg-white min-h-screen pt-24 pb-32">

      {/* 1. Isolated Page Hero */}
      <section className="pt-16 pb-20 px-6 relative overflow-hidden bg-brand-cream border-b border-black/5">
        {/* Subtle Tactile Micro-texture Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-rust hover:text-brand-gold transition-colors mb-8 w-fit mx-auto">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Projects Directory
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-6">
            {PAGE_HERO.title}
          </h1>

          <h2 className="text-xl md:text-2xl text-brand-espresso/90 font-bold mb-8 leading-snug max-w-2xl mx-auto">
            {PAGE_HERO.subtitle}
          </h2>

          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-10"></div>

          <p className="text-base sm:text-lg md:text-xl text-brand-espresso/80 leading-relaxed font-medium">
            {PAGE_HERO.copy}
          </p>
        </div>
      </section>

      {/* 2. Core Adaptive Interventions Matrix (Bento Grid) */}
      <section className="pt-20 pb-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">

          <div className="text-center mb-16">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">Adaptive Models</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-espresso mb-6">Core Adaptive Interventions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERVENTIONS.map((intervention) => (
              <div
                key={intervention.id}
                className={`bento-card bg-brand-cream p-8 md:p-10 flex flex-col ${intervention.colSpan || ''} ${intervention.featured ? 'border-brand-gold/30 shadow-md' : ''}`}
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-brand-rust mb-6 border border-brand-espresso/5 shadow-sm">
                  <intervention.icon className="w-7 h-7" />
                </div>

                <h3 className={`font-black text-brand-espresso mb-4 leading-tight ${intervention.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                  {intervention.title}
                </h3>

                <p className="text-base text-brand-espresso/80 leading-relaxed font-medium mb-0">
                  {intervention.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Policy Bridge & Global Engagements Repository */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-brand-espresso rounded-[24px] shadow-lg border border-black/10 p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center gap-12">

            {/* Minimalist Graphic Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 flex-1 lg:max-w-md">
              <span className="text-xs font-black uppercase tracking-[3px] text-brand-gold mb-4 block">Grassroots Policy Portal</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Policy Bridge & Global Engagements
              </h2>
              <p className="text-base text-white/80 leading-relaxed font-medium mb-0">
                Bridging local climate adaptation work with structured global networks and regional legislative frameworks to secure sustainable land tenure and climate justice.
              </p>
            </div>

            <div className="relative z-10 flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {POLICY_NETWORKS.map((network) => (
                  <div key={network.id} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300">
                    <network.icon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-white/90 leading-snug">{network.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
