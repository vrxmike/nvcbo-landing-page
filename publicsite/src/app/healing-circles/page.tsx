// src/app/healing-circles/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// ----- Static Data -----
interface Pillar {
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  { title: 'Climate Resilience', description: 'Co-creating localized ASAL adaptation and environmental solutions.' },
  { title: 'Gender Equality', description: 'Advancing inclusive decision‑making and dignity for women and youth.' },
  { title: 'Ending FGM & GBV', description: 'Shifting social norms through survivor‑centered dialogue.' },
  { title: 'Peacebuilding', description: 'Resolving resource‑driven pastoral tensions through restorative mediation.' },
  { title: 'Youth Leadership', description: 'Empowering young voices in community governance.' },
  { title: 'Indigenous Knowledge', description: 'Preserving oral histories, land, and water wisdom.' },
];

export default function HealingCirclesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-32 lg:pb-16 min-h-[70vh] lg:min-h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21,93,116,0.85), rgba(29,128,159,0.7)), url('/assets/healing-circles-hero.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container relative z-10 px-6 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 lg:mb-6 leading-tight tracking-tight">Healing Circles</h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 md:mb-10 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
            At Northern Vision, Healing Circles are the foundation of our community engagement. Through safe, community‑led spaces, we initiate dialogue, strengthen leadership, preserve indigenous knowledge and support communities to co‑create solutions for climate resilience, peacebuilding, education and sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* Philosophy Card */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-neutral-light border border-muted p-8 rounded-2xl">
            <h2 className="text-3xl font-black mb-4 text-heading">What are Healing Circles?</h2>
            <h3 className="text-xl font-semibold mb-6 text-body">Creating Spaces for Dialogue, Healing and Collective Action</h3>
            <p className="text-body leading-relaxed mb-4">
              Healing Circles are facilitated community gatherings where people come together in safe, inclusive spaces to listen deeply, share lived experiences and engage in meaningful dialogue.
            </p>
            <p className="text-body leading-relaxed mb-4">
              Rather than focusing only on problems, Healing Circles help communities uncover their own strengths, reconnect with cultural knowledge and build shared solutions. Every participant contributes to shaping conversations that strengthen trust, restore relationships and inspire collective action.
            </p>
            <p className="text-body leading-relaxed">
              Guided by restorative justice principles, Healing Circles encourage respect, empathy and shared responsibility—creating the foundation for sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Matrix */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-2 text-heading">Why It Matters</h2>
          <h3 className="text-xl text-center mb-8 text-body">Strengthening Communities Through Shared Understanding</h3>
          <p className="text-center text-body mb-12 max-w-3xl mx-auto">
            Healing Circles create safe, inclusive spaces that strengthen relationships and support collective action on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-neutral-light border border-muted p-6 rounded-2xl text-center">
                <h4 className="text-xl font-bold mb-3 text-heading">{p.title}</h4>
                <p className="text-body leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Explore Healing Circles Section */}
       <section className="py-16 bg-neutral-light">
         <div className="container mx-auto px-6 max-w-5xl">
           <h2 className="text-3xl font-black text-center mb-4 text-heading">Explore Healing Circles</h2>
           <p className="text-center text-body mb-8 max-w-3xl mx-auto">Explore how Healing Circles create safe spaces for dialogue and collective action across our areas of impact.</p>
           <div className="grid md:grid-cols-3 gap-6">
             {/* Card 1 */}
             <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-heading">
               <h3 className="text-xl font-bold mb-3 text-heading">Circle Keeper Training</h3>
               <p className="mb-4 text-body">Become a facilitator and lead restorative dialogue in your community.</p>
               <Link href="/programs/circle-keepers" className="inline-block px-4 py-2 bg-brand-gold hover:bg-brand-rust text-white rounded-md font-semibold transition-colors">Learn More</Link>
             </div>
             {/* Card 2 */}
             <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-heading">
               <h3 className="text-xl font-bold mb-3 text-heading">Community Healing Dialogues</h3>
               <p className="mb-4 text-body">Participate in collective healing sessions across our pillars.</p>
               <Link href="/healing-circles#dialogues" className="inline-block px-4 py-2 bg-brand-gold hover:bg-brand-rust text-white rounded-md font-semibold transition-colors">Explore</Link>
             </div>
             {/* Card 3 */}
             <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-heading">
               <h3 className="text-xl font-bold mb-3 text-heading">Resources &amp; Learning</h3>
               <p className="mb-4 text-body">Access guides, toolkits, and case studies on Healing Circles.</p>
               <Link href="/resources/healing-circles" className="inline-block px-4 py-2 bg-brand-gold hover:bg-brand-rust text-white rounded-md font-semibold transition-colors">View Resources</Link>
             </div>
           </div>
         </div>
       </section>

      {/* Metrics & Training Link */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Metrics Card */}
            <div className="bg-primary text-white p-8 rounded-2xl text-center">
              <div className="text-5xl font-extrabold mb-2">130+</div>
              <div className="text-lg font-medium">Completed Healing Circles Sessions across Northern Vision's communities</div>
            </div>
            {/* Training Card */}
            <div className="bg-neutral-light border border-muted p-8 rounded-2xl text-center">
              <h4 className="text-2xl font-bold mb-4 text-heading">Become a Facilitator</h4>
              <p className="mb-6 text-body">Building local facilitators who lead restorative dialogue and community transformation.</p>
              <Link href="/programs/circle-keepers" className="inline-block px-6 py-3 bg-brand-gold hover:bg-brand-rust text-white rounded-full font-bold transition-transform active:scale-[0.98]">
                Discover Circle Keeper Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Placeholder Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-700 rounded-lg" />
            ))}
          </div>
          {/* CTA Card */}
          <div className="bg-neutral-light border border-muted p-10 rounded-2xl text-center">
            <h3 className="text-3xl font-black mb-4 text-heading">Bring a Healing Circle to Your Community</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button className="px-8 py-3 bg-brand-gold text-white rounded-full font-bold transition-transform active:scale-[0.98]">Request a Circle Session</button>
              <button className="px-8 py-3 bg-brand-rust text-white rounded-full font-bold transition-transform active:scale-[0.98]">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
