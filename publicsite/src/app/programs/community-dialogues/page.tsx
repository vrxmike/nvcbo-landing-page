// src/app/programs/community-dialogues/page.tsx
"use client";
// Using standard img tags for external Appwrite CDN images (next/image rewrites URLs)


import { CloudRain, Users, Shield, Sun, Flag, Leaf, Megaphone, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Typed data structures for the page – immutable for fast RSC rendering.
 */
export interface DialogueTheme {
  id: string;
  icon: typeof CloudRain; // Lucide icon component
  title: string;
  description: string;
}

export const dialogueThemes: readonly DialogueTheme[] = [
  {
    id: "climate-resilience",
    icon: CloudRain,
    title: "Climate Resilience",
    description:
      "Communities explore the impacts of climate change, share indigenous knowledge, and identify locally led strategies to strengthen resilience and environmental stewardship.",
  },
  {
    id: "gender-equality",
    icon: Users,
    title: "Gender Equality",
    description:
      "Creating space for honest conversations on gender norms, women's leadership, shared decision‑making, and equal opportunities.",
  },
  {
    id: "ending-fgm",
    icon: Shield,
    title: "Ending FGM & Gender‑Based Violence",
    description:
      "Supporting respectful dialogue that challenges harmful practices, promotes dignity, and strengthens community commitment to protecting women and girls.",
  },
  {
    id: "peacebuilding",
    icon: Sun,
    title: "Peacebuilding & Social Cohesion",
    description:
      "Building trust, strengthening relationships, and fostering peaceful coexistence through restorative dialogue and mutual understanding.",
  },
  {
    id: "youth-leadership",
    icon: Flag,
    title: "Youth Leadership",
    description:
      "Empowering young people to share their perspectives, strengthen leadership skills, and actively shape community solutions.",
  },
  {
    id: "indigenous-knowledge",
    icon: Leaf,
    title: "Indigenous Knowledge",
    description:
      "Honouring cultural knowledge and intergenerational learning as foundations for resilience, identity, and sustainable development.",
  },
  {
    id: "media-literacy",
    icon: Megaphone,
    title: "Media & Information Literacy",
    description:
      "Helping communities navigate information critically, counter misinformation, and make informed decisions.",
  },
  {
    id: "womens-land-rights",
    icon: Flag,
    title: "Women's Land Rights",
    description:
      "Facilitating conversations on land governance, women's rights, and equitable access to land and natural resources.",
  },
  {
    id: "sustainable-livelihoods",
    icon: DollarSign,
    title: "Sustainable Livelihoods",
    description:
      "Exploring locally driven opportunities to strengthen household resilience, economic inclusion, and sustainable livelihoods.",
  },
] as const;

// galleryImages will be fetched inside the component
import CircleGalleryModal from "@/app/components/CircleGalleryModal";

export const testimonials = [
  {
    quote:
      "Participating in the dialogues helped our village plan a water‑harvesting project that everyone now owns.",
    author: "Amina, Kajiado",
  },
  {
    quote:
      "The safe space allowed us to talk about gender‑based violence openly – a first for our community.",
    author: "John, Turkana",
  },
];



export default function CommunityDialoguesPage() {
  const [displayImages, setDisplayImages] = useState<Array<{ src: string; alt: string; caption: string }>>([]);

  useEffect(() => {
    fetch('/api/gallery-images')
      .then(res => res.json())
      .then((imgs) => {
        setDisplayImages(imgs.slice(0, 6));
      })
      .catch((e) => {
        console.error('Failed to load gallery images', e);
      });
  }, []);

  const handleError = (idx: number) => {
    setDisplayImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <main className="flex flex-col gap-12">
      {/* Hero & Introduction */}
      <section className="flex flex-col items-center text-center py-16 px-4 bg-primary text-primary">
        <h1 className="text-4xl md:text-5xl font-black">Community Healing Dialogues</h1>
        <h2 className="text-xl md:text-2xl font-medium mt-2">Conversations That Matter</h2>
        <p className="text-body leading-relaxed max-w-3xl mx-auto mt-6">
          Healing Circles are adapted to the priorities of each community, creating safe spaces where people
          listen, reflect, and take collective action. While every dialogue is unique, our work commonly
          focuses on the following interconnected themes.
        </p>
      </section>

      {/* Theme Grid */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-heading mb-6 text-center">
          Conversations That Matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dialogueThemes.map((theme) => {
            const Icon = theme.icon;
            return (
              <article
                key={theme.id}
                className="bg-neutral-light border border-muted p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-heading">{theme.title}</h3>
                <p className="text-body">{theme.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-brand-espresso rounded-[24px] shadow-2xl border border-white/10 p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-rust/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            {/* Section Header */}
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
                Healing Circles in Action
              </h2>
            </div>

            {/* Gallery Grid Modal */}
            <div className="relative z-10">
              <CircleGalleryModal images={displayImages.map((img) => img.src)} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-12 pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-espresso mb-8 text-center">
            Community Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-brand-cream/60 border border-brand-gold/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-brand-espresso/90 italic mb-6 text-base sm:text-lg leading-relaxed font-medium">“{t.quote}”</p>
                <footer className="text-right font-bold text-brand-rust text-sm sm:text-base">– {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
