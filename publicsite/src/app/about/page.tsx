import Link from "next/link";
import { Users, HeartPulse, TreePine, Scale, MessageSquare, Handshake, Network, Newspaper, Megaphone, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Northern Vision CBO",
  description: "Learn about Northern Vision CBO's story, core beliefs, and how we work alongside grassroots communities in Northern Kenya.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white pt-24">

      {/* SECTION 1: #story (Hero) */}
      <section id="story" className="py-16 md:py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Frame Placeholder */}
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-brand-cream border border-black/5">
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply z-10"></div>
              {/* Note: This is an aspect-ratio protected container element serving as an image frame placeholder */}
              <img
                src="https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a617d140002da812a7f/view?project=692a34ec001f1efc9002"
                alt="Healing Circles Featured Photo"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bento-card bg-white/90 backdrop-blur p-4 text-brand-espresso text-sm font-semibold rounded-2xl border border-white">
                Healing Circles Featured Photo
              </div>
            </div>

            {/* Typography Stack */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-4 block">Our Story</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-8">
                Rooted in Community. <br className="hidden md:block"/>
                <span className="text-brand-gold">Driven by Transformation.</span>
              </h1>

              <div className="w-20 h-1.5 bg-gradient-to-r from-brand-gold to-brand-rust rounded-full mb-8"></div>

              <p className="text-lg md:text-xl text-brand-espresso/80 leading-relaxed font-medium">
                Northern Vision is a community-based organization in Northern Kenya that works alongside indigenous and grassroots communities to strengthen resilience, amplify local leadership, and advance community-led transformation.
              </p>
              <br/>
              <p className="text-lg md:text-xl text-brand-espresso/80 leading-relaxed font-medium">
                Set against the unique social and environmental dynamics of Isiolo County, we act as a trusted local facilitator, dedicated to building a future that bridges traditional wisdom with technical advancement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: #beliefs (Core Principles) */}
      <section id="beliefs" className="py-24 bg-brand-cream relative">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">What We Believe</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">The Principles that Shape Our Work and Partnerships</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Communities Lead</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Communities hold the knowledge, leadership, and capacity needed to shape their own futures.</p>
            </div>

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Healing Creates Transformation</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Trust, dialogue, and restoration are the foundation of resilient communities.</p>
            </div>

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <TreePine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Indigenous Knowledge Matters</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Traditional knowledge systems are essential to sustainable development and climate resilience.</p>
            </div>

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Equity Drives Progress</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Inclusive participation strengthens communities and creates opportunities for everyone to thrive.</p>
            </div>

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Stories Inspire Action</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Storytelling preserves knowledge, amplifies voices, and connects local experiences to global conversations.</p>
            </div>

            <div className="bento-card p-10 flex flex-col items-start bg-brand-cream group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-espresso/5 group-hover:scale-110 transition-transform">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-espresso mb-3">Partnerships Multiply Impact</h3>
              <p className="text-brand-espresso/70 leading-relaxed text-sm md:text-base font-medium">Sustainable change is built through collaboration, shared learning, and mutual respect.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: #how-we-work (Execution Pillars) */}
      <section id="how-we-work" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">How We Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">Guided by Participation, Trust, and Local Leadership</h2>
            <p className="text-lg text-brand-espresso/80 font-medium">
              Every programme is designed alongside communities to reflect their priorities, knowledge, and lived experiences. We turn our core beliefs into action across five active execution pillars:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-6 relative">
            {/* Connector Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-brand-cream/60 -z-10"></div>

            {/* Pillar 1 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 group">
              <div className="w-20 h-20 shrink-0 rounded-full bg-brand-cream flex items-center justify-center text-brand-rust border-4 border-white shadow-sm z-10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-espresso mb-2">1. Healing Circles</h4>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-medium">Restorative, safe, and culturally rooted dialogue spaces that foster local trust and conflict resolution.</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 group">
              <div className="w-20 h-20 shrink-0 rounded-full bg-brand-cream flex items-center justify-center text-brand-rust border-4 border-white shadow-sm z-10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <Newspaper className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-espresso mb-2">2. Storytelling</h4>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-medium">Preserving oral histories, water/land wisdom, and local experiences to elevate community voices.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 group">
              <div className="w-20 h-20 shrink-0 rounded-full bg-brand-cream flex items-center justify-center text-brand-rust border-4 border-white shadow-sm z-10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-espresso mb-2">3. Community Leadership</h4>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-medium">Equipping youth, women, and local institutions with active facilitation and governance tools.</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 group">
              <div className="w-20 h-20 shrink-0 rounded-full bg-brand-cream flex items-center justify-center text-brand-rust border-4 border-white shadow-sm z-10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <Megaphone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-espresso mb-2">4. Advocacy</h4>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-medium">Linking grassroots needs directly to policy dialogue, ensuring the community has a seat at decision-making tables.</p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 group">
              <div className="w-20 h-20 shrink-0 rounded-full bg-brand-cream flex items-center justify-center text-brand-rust border-4 border-white shadow-sm z-10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <Handshake className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-espresso mb-2">5. Partnerships</h4>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-medium">Building mutually respectful alliances with international bodies, research groups, and local stakeholders.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: #partners (Trust Grid) */}
      <section id="partners" className="py-24 bg-brand-cream relative border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">Ecosystem Trust Grid</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">Alliances for Sustainable Change</h2>
            <p className="text-lg text-brand-espresso/80 font-medium max-w-2xl mx-auto">
              We collaborate with global and regional organizations to scale our impact, expand structural learning networks, and bring specialized resources directly to grassroots teams.
            </p>
          </div>

          {/* Auto-looping Marquee Carousel */}
          <div className="relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-brand-cream before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-brand-cream after:to-transparent">
            <div className="animate-marquee flex gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300 py-4">

              {/* Set 1 */}
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">PACJA</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">WFP</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">Landesa</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">USAID</span>
              </div>

              {/* Set 2 (Duplicated for seamless loop) */}
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">PACJA</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">WFP</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">Landesa</span>
              </div>
              <div className="h-24 w-48 shrink-0 flex items-center justify-center border-2 border-brand-espresso/10 rounded-2xl grayscale hover:grayscale-0 hover:border-brand-gold transition-all duration-300 bg-white shadow-sm">
                 <span className="font-black text-2xl tracking-tighter text-brand-espresso">USAID</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: #review-2025 (Publication Archive) */}
      <section id="review-2025" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl">

          <div className="text-center mb-16">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">Publication Archive Hub</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">Knowledge Share & Evidence of Impact</h2>
            <p className="text-lg text-brand-espresso/80 font-medium max-w-3xl mx-auto">
              As a central learning hub, we systematically document field insights, training outcomes, and policy recommendations to bridge grassroots realities with larger global frameworks.
            </p>
          </div>

          {/* Bento Card Layout Box */}
          <div className="bg-brand-espresso rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Background Graphic */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"></div>

            <div className="relative z-10 flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider mb-6">
                 <Newspaper className="w-4 h-4" /> Featured Resource
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                 Building Community Leadership Through Circle Keeper Training
               </h3>
               <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium mb-0">
                 An in-depth learning report documenting our recent facilitator training layout, detailed participant case studies, key lessons, and systemic recommendations for scaling restorative community leadership.
               </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link href="/healing-circles/circle-keepers" className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-gold text-white rounded-xl font-black uppercase tracking-wider shadow-[0_8px_20px_rgba(243,156,18,0.3)] hover:-translate-y-1 hover:bg-brand-rust hover:shadow-[0_12px_25px_rgba(211,84,0,0.4)] transition-all duration-300 w-full">
                Read full article
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
