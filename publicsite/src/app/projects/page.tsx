import Link from "next/link";
import { ArrowRight, Leaf, Laptop, ScrollText } from "lucide-react";
import { Client, TablesDB } from 'node-appwrite';

export const metadata = {
  title: "Our Projects | Northern Vision CBO",
  description: "Explore our active grassroots initiatives in Northern Kenya, from climate-smart agriculture at Gotu Gamachu Farm to youth digital literacy.",
};

// Strongly typed project schema
interface ProjectTrack {
  id: string;
  title: string;
  metadataTag: string;
  description: string;
  href: string;
  colSpan: string;
  badge?: string;
  icon: React.ElementType;
  image?: string;
}

const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "gotu-farm",
    title: "Gotu Gamachu Farm",
    metadataTag: "Flagship Site",
    description: "Explore the physical heart of Northern Vision's climate-smart interventions: integrated dryland agriculture, aquaculture scaling, and localized community training models.",
    href: "/projects/gotu-farm",
    colSpan: "md:col-span-1",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1592982537447-6f23f11d1377?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "climate-resilience",
    title: "Climate Resilience & Sustainable Livelihoods",
    metadataTag: "Active Field Initiative",
    description: "Transforming ASAL landscapes through climate-smart aquaculture, women-led kitchen gardens, and integrated farming at Gotu Gamachu Farm.",
    href: "/projects/climate-resilience",
    colSpan: "md:col-span-1",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1592982537447-6f23f11d1377?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "holiday-camp",
    title: "Digital Literacy Holiday Camp",
    metadataTag: "School Holidays Track",
    description: "A hands-on, 6-day program in Gotu equipping children with core computing skills, internet safety, and digital storytelling.",
    href: "/projects/holiday-camp",
    colSpan: "md:col-span-1",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  },
  {
    id: "indigenous-knowledge",
    title: "Indigenous Knowledge, Culture & Heritage",
    metadataTag: "Program Development Stage",
    badge: "Coming Soon",
    description: "Preserving intergenerational storytelling, land-and-water wisdom, and oral histories of Northern Kenya's pastoralist communities.",
    href: "#", // Non-clickable or anchor until ready
    colSpan: "md:col-span-3",
    icon: ScrollText
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
      };
    }
    return staticProject;
  });

  return (
    <div className="flex flex-col bg-brand-cream min-h-screen pt-24 pb-32">

      {/* 1. Master Projects Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-4 block">Our Projects</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-espresso leading-[1.1] tracking-tight mb-6">
            Grassroots Interventions in Action
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-gold to-brand-rust mx-auto rounded-full mb-8"></div>

          <p className="text-base sm:text-lg md:text-xl text-brand-espresso/80 leading-relaxed font-medium max-w-3xl mx-auto">
            We design and implement targeted, time-bound initiatives designed to address the specific social, climate, and technological realities of Isiolo County. Explore our active projects on the ground.
          </p>
        </div>
      </section>

      {/* 2. Asymmetrical Directory Grid Showcase */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {mergedProjects.map((project) => {
              // Condition to handle "Coming Soon" unclickable cards vs standard routing cards
              const isComingSoon = project.badge === "Coming Soon";

              const CardContent = (
                <div className={`bento-card flex flex-col h-full bg-white overflow-hidden group ${isComingSoon ? 'opacity-90' : 'hover:border-brand-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer'}`}>

                  {/* Image Header Block (If image exists) */}
                  {project.image && (
                    <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-brand-cream">
                      <div className="absolute inset-0 bg-brand-espresso/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}

                  <div className="p-8 md:p-10 flex flex-col flex-1 relative">

                    {/* Top Meta Data row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-espresso/60">
                        <project.icon className="w-4 h-4 text-brand-rust" /> {project.metadataTag}
                      </div>

                      {project.badge && (
                        <div className="inline-block px-3 py-1 bg-brand-espresso/5 text-brand-espresso text-[10px] font-black uppercase tracking-widest rounded-md border border-brand-espresso/10">
                          {project.badge}
                        </div>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-brand-espresso mb-4 leading-tight group-hover:text-brand-rust transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-base text-brand-espresso/80 leading-relaxed font-medium mb-8 flex-grow">
                      {project.description}
                    </p>

                    {!isComingSoon && (
                      <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold group-hover:text-brand-rust transition-colors duration-300">
                        Explore Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}

                  </div>
                </div>
              );

              return isComingSoon ? (
                <div key={project.id} className={project.colSpan}>
                  {CardContent}
                </div>
              ) : (
                <Link href={project.href} key={project.id} className={project.colSpan}>
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
