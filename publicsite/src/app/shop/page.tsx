import React from 'react';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const shopEnabled = process.env.NEXT_PUBLIC_ENABLE_SHOP === 'true';
  return {
    title: 'Shop NVCBO Merchandise | Support Our Work',
    description: 'Purchase NVCBO merchandise to support our community-led development programmes. 100% of proceeds go directly to funding our local initiatives.',
    robots: shopEnabled ? 'index, follow' : 'noindex, nofollow',
  };
}

const PRODUCT_CATALOG = [
  {
    id: "copper-bottle",
    title: "Copper Water Bottle",
    description: "Durable, high-grade copper bottles etched with our core logo.",
    price: "Kes 2,500",
    span: "sm:col-span-2 lg:col-span-2",
    featured: true
  },
  {
    id: "hoodie-tshirt",
    title: "NVCBO Brand Hoodies / T-Shirts",
    description: "Comfy organic-cotton apparel featuring our official tagline.",
    price: "Kes 3,000",
    span: "sm:col-span-1 lg:col-span-1"
  },
  {
    id: "journal",
    title: "Plain Paper Journal",
    description: "Plain paper journals designed for personal tracking and reflection.",
    price: "Kes 800",
    span: "sm:col-span-1 lg:col-span-1"
  },
  {
    id: "coloring-books",
    title: "Educational Coloring Books / Crayons",
    description: "Creative notebooks and crayons supporting children's early digital literacy and art sessions.",
    price: "Kes 500",
    span: "sm:col-span-1 lg:col-span-2"
  },
  {
    id: "exercise-books",
    title: "Exercise Books",
    description: "Ruled and squared, in A4 and A5 formats for student support.",
    price: "Kes 300",
    span: "sm:col-span-1 lg:col-span-2"
  }
];

export default function ShopPage() {
  const shopEnabled = process.env.NEXT_PUBLIC_ENABLE_SHOP === 'true';

  if (!shopEnabled) {
    return (
      <main className="min-h-[80vh] bg-brand-cream flex items-center justify-center p-6">
        <div className="bento-card p-12 md:p-16 text-center max-w-2xl w-full border border-muted bg-white shadow-xl animate-up">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4 tracking-tight">Shop Coming Soon</h1>
          <p className="text-lg text-body leading-relaxed max-w-lg mx-auto">
            We are currently finalizing our merchandise inventory and secure checkout pathways. Stay tuned for the official launch to support NVCBO directly.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* SECTION 1: Shop Welcome Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 bg-white border-b border-muted text-center relative overflow-hidden">
        {/* Soft abstract graphic background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[60px] pointer-events-none transform -translate-x-1/3 translate-y-1/2"></div>
        
        <div className="container relative z-10 animate-up max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-muted bg-brand-cream text-sm font-semibold tracking-wider text-primary uppercase mb-6 shadow-sm">
            Shop NVCBO Merchandise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight leading-tight mb-6">
            Support Our Work
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed font-medium">
            Purchase NVCBO merchandise to support our community-led development programmes. 100% of proceeds go directly to funding our local Healing Circles, schools, and climate initiatives.
          </p>
          <p className="text-md text-body leading-relaxed mt-4 italic opacity-80">
            A dedicated Shop section where visitors can purchase NVCBO merchandise, with proceeds supporting the organisation's community programmes.
          </p>
        </div>
      </section>

      {/* SECTION 2: Asymmetrical Product Catalog Bento Grid */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-up delay-1 max-w-7xl mx-auto">
            {PRODUCT_CATALOG.map((product) => (
              <div 
                key={product.id} 
                className={`bento-card bg-white border border-muted flex flex-col p-8 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform-gpu ${product.span}`}
              >
                <div className="w-full aspect-[4/3] bg-neutral-light border border-muted/50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative group">
                   <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted">
                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                     <line x1="12" y1="22.08" x2="12" y2="12"></line>
                   </svg>
                </div>
                
                <h3 className={`font-bold text-heading mb-3 ${product.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                  {product.title}
                </h3>
                <p className="text-body leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-muted/30">
                  <span className="font-black text-lg tracking-tight text-primary">{product.price}</span>
                  <button className="px-4 py-2 bg-heading text-white text-sm font-bold rounded-lg hover:bg-primary transition-colors active:scale-95 shadow-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Safe Payment & Impact Destination Banner */}
      <section className="py-16 bg-neutral-light border-b border-muted/50">
        <div className="container">
          <div className="bg-heading text-white p-10 md:p-12 rounded-[2rem] shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 animate-up delay-2">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold mb-2 block">Secured Local Checkouts</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Local Transactions Secured</h3>
              <p className="text-white/80 leading-relaxed font-medium">
                Checkouts integrate safely with mobile payment infrastructure, verifying transfers immediately via automatic webhook callbacks. All checkout systems are processed locally via secure pathways, with instant mobile confirmation. Thank you for standing with Northern Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
