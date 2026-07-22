import Link from "next/link";
import { ArrowRight, Leaf, Laptop, Map, ScrollText, HeartHandshake, ShieldCheck, GraduationCap, Users, Heart } from "lucide-react";
import { Client, TablesDB } from 'node-appwrite';

export const metadata = {
  title: "Our Impact | Northern Vision CBO",
  description: "Explore our interconnected areas of impact in Northern Kenya, strengthening climate resilience, advancing equity, and fostering community wellbeing.",
};

export const dynamic = 'force-dynamic';

interface ProjectTrack {
  id: string;
  title: string;
  href: string;
  description: React.ReactNode;
  icon: React.ElementType;
  highlight?: string;
  colSpan?: string;
  badge?: string;
}

const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "gotu-farm",
    title: "Gotu Gamachu Farm",
    href: "/our-impact/gotu-farm",
    icon: Leaf,
    highlight: "Flagship Site",
    description: "Explore the physical heart of Northern Vision's climate-smart interventions: integrated dryland agriculture, aquaculture scaling, and localized community training models.",
    colSpan: "lg:col-span-1"
  },
  {
    id: "climate-resilience",
    title: "Climate Resilience & Livelihoods",
    href: "/our-impact/climate-resilience",
    icon: Leaf,
    highlight: "Active Field Initiative",
    description: "Transforming ASAL landscapes through climate-smart aquaculture, women-led kitchen gardens, and integrated farming at Gotu Gamachu Farm.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "circle-keepers",
    title: "Circle Keeper Training",
    href: "/healing-circles/circle-keepers",
    icon: Users,
    description: "Building local facilitators who lead restorative dialogue and community transformation by equipping community leaders, youth, and institutions.",
    colSpan: "lg:col-span-1"
  },
  {
    id: "gender-equality",
    title: "Gender Equality & Social Inclusion",
    href: "/our-impact/gender-equality",
    icon: HeartHandshake,
    description: "Advancing inclusive communities where women, girls, and youth thrive, spanning crucial tracks across SRHR, Menstrual Dignity, Bodily Autonomy, and Women's Land Rights.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "peace-security",
    title: "Peace and Security",
    href: "/our-impact/peace-security",
    icon: ShieldCheck,
    highlight: "130+ Documented Healing Circles Sessions",
    description: "Strengthening trust and peaceful coexistence in Northern Kenya. Combating misinformation through dedicated Media and Digital Information Literacy (MIL/DIL) safety work.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "education-youth",
    title: "Education, Youth & Digital Inclusion",
    href: "/our-impact/education-youth",
    icon: GraduationCap,
    description: "Equipping young people with knowledge, leadership, and technical skills to shape resilient futures, featuring advanced computing structures like our Wolfram STEM program tracks.",
    colSpan: "lg:col-span-1"
  },
  {
    id: "healing-circles",
    title: "Healing Circles",
    href: "/healing-circles",
    icon: Heart,
    description: "Community-driven restorative dialogue practice fostering transformation and healing.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "holiday-camp",
    title: "Digital Literacy Holiday Camp",
    href: "/our-impact/holiday-camp",
    icon: Laptop,
    highlight: "School Holidays Track",
    description: "A hands-on, 6-day program in Gotu equipping children with core computing skills, internet safety, and digital storytelling.",
    colSpan: "lg:col-span-1"
  },
  {
    id: "eco-tourism",
    title: "Eco-Tourism Hub",
    href: "/our-impact/eco-tourism",
    icon: Map,
    highlight: "Community-Hosted Experience",
    description: "Visit Gotu Gamachu Farm and experience the landscapes firsthand through guided walking trails, aquaculture tours, and interactive learning.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "indigenous-knowledge",
    title: "Culture & Heritage",
    href: "#",
    icon: ScrollText,
    badge: "Coming Soon",
    description: "Preserving intergenerational storytelling, land wisdom, and indigenous water management systems.",
    colSpan: "lg:col-span-1"
  }
];

async function getProjectsData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const response = await tablesDB.listRows(dbId, 'projects');
    return response.rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function ProjectsDirectoryPage() {
  const dynamicProjects = await getProjectsData();

  const mergedProjects = PROJECT_TRACKS.map(staticProject => {
    const dynamicMatch = dynamicProjects.find((p: any) => p.slug === staticProject.id);
    if (dynamicMatch) {
      return {
        ...staticProject,
        title: dynamicMatch.title || staticProject.title,
        description: dynamicMatch.description || staticProject.description,
      };
    }
    return staticProject;
  });

  return (
    <div className="flex flex-col bg-brand-light-bg min-h-screen pt-24 pb-32">

      {/* Top Hero Header Block */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-4 block">Areas of Action</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-6">
            Our Areas of Impact
          </h1>

          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-8"></div>

          <h2 className="text-xl md:text-2xl text-brand-espresso font-bold mb-6 max-w-3xl mx-auto leading-snug">
            We work across interconnected areas that strengthen climate resilience and advance equity through Participatory Community Engagement.
          </h2>

          <p className="text-base md:text-lg text-brand-espresso/80 leading-relaxed font-medium">
            As a trusted community partner and facilitator of Healing Circles, Northern Vision CBO acts as a systemic learning hub. We are dedicated to bridging the lived grassroots realities of indigenous communities in Isiolo County directly to dynamic, actionable policy frameworks.
          </p>
        </div>
      </section>

      {/* Bento Grid Array Execution */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {mergedProjects.map((track) => {
              const isComingSoon = track.badge === "Coming Soon";

              const CardContent = (
                <div className={`bento-card bg-white p-8 md:p-10 flex flex-col items-start group transition-all duration-300 ease-in-out h-full ${
                  isComingSoon ? 'opacity-90 cursor-default' : 'hover:border-brand-gold hover:-translate-y-1 hover:shadow-lg cursor-pointer'
                }`}>
                  <div className="w-14 h-14 rounded-xl bg-brand-cream flex items-center justify-center text-brand-rust mb-6 border border-brand-espresso/5 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                    <track.icon className="w-7 h-7" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="text-2xl font-black text-brand-espresso group-hover:text-brand-rust transition-colors duration-300">
                      {track.title}
                    </h3>
                  </div>

                  {track.highlight && (
                    <div className="inline-block px-3 py-1.5 bg-brand-gold/10 text-brand-rust text-xs font-bold uppercase tracking-wider rounded-lg mb-4 border border-brand-gold/20">
                      {track.highlight}
                    </div>
                  )}

                  {track.badge && (
                    <div className="inline-block px-3 py-1.5 bg-brand-espresso/5 text-brand-espresso text-xs font-bold uppercase tracking-wider rounded-lg mb-4 border border-brand-espresso/10">
                      {track.badge}
                    </div>
                  )}

                  <p className="text-base text-brand-espresso/80 leading-relaxed font-medium mb-8 flex-grow">
                    {track.description}
                  </p>

                  {!isComingSoon && (
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold group-hover:text-brand-rust transition-colors duration-300">
                      Explore Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </div>
              );

              return isComingSoon ? (
                <div key={track.id} className={track.colSpan || ''}>
                  {CardContent}
                </div>
              ) : (
                <Link key={track.id} href={track.href} className={track.colSpan || ''}>
                  {CardContent}
                </Link>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}
