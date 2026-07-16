import Link from "next/link";
import { ArrowRight, Users, HeartHandshake, ShieldCheck, GraduationCap } from "lucide-react";
import { Client, TablesDB } from 'node-appwrite';

export const metadata = {
  title: "Our Programs | Northern Vision CBO",
  description: "Explore our interconnected areas of impact, strengthening climate resilience and advancing equity through participatory community engagement in Northern Kenya.",
};

export const dynamic = 'force-dynamic';

interface ProgramTrack {
  id: string;
  title: string;
  href: string;
  description: React.ReactNode;
  icon: React.ElementType;
  highlight?: string;
  colSpan?: string;
}

const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: "circle-keepers",
    title: "Circle Keeper Training",
    href: "/programs/circle-keepers",
    icon: Users,
    description: "Building local facilitators who lead restorative dialogue and community transformation by equipping community leaders, youth, and institutions.",
    colSpan: "lg:col-span-1"
  },
  {
    id: "gender-equality",
    title: "Gender Equality & Social Inclusion",
    href: "/programs/gender-equality",
    icon: HeartHandshake,
    description: "Advancing inclusive communities where women, girls, and youth thrive, spanning crucial tracks across SRHR, Menstrual Dignity, Bodily Autonomy, and Women's Land Rights.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "peace-security",
    title: "Peace and Security",
    href: "/programs/peace-security",
    icon: ShieldCheck,
    highlight: "130+ Documented Healing Circles Sessions",
    description: "Strengthening trust and peaceful coexistence in Northern Kenya. Combating misinformation through dedicated Media and Digital Information Literacy (MIL/DIL) safety work.",
    colSpan: "lg:col-span-2"
  },
  {
    id: "education-youth",
    title: "Education, Youth & Digital Inclusion",
    href: "/programs/education-youth",
    icon: GraduationCap,
    description: "Equipping young people with knowledge, leadership, and technical skills to shape resilient futures, featuring advanced computing structures like our Wolfram STEM program tracks.",
    colSpan: "lg:col-span-1"
  }
];

async function getProgramsData() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const response = await tablesDB.listRows(dbId, 'programs');
    return response.rows;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export default async function ProgramsDirectoryPage() {
  const dynamicPrograms = await getProgramsData();

  const mergedPrograms = PROGRAM_TRACKS.map(staticProgram => {
    const dynamicMatch = dynamicPrograms.find((p: any) => p.slug === staticProgram.id);
    if (dynamicMatch) {
      return {
        ...staticProgram,
        title: dynamicMatch.title || staticProgram.title,
        description: dynamicMatch.description || staticProgram.description,
      };
    }
    return staticProgram;
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

            {mergedPrograms.map((track) => (
              <Link
                key={track.id}
                href={track.href}
                className={`bento-card bg-white p-8 md:p-10 flex flex-col items-start group hover:border-brand-gold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${track.colSpan || ''}`}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-cream flex items-center justify-center text-brand-rust mb-6 border border-brand-espresso/5 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                  <track.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-brand-espresso mb-4 group-hover:text-brand-rust transition-colors duration-300">
                  {track.title}
                </h3>

                {track.highlight && (
                  <div className="inline-block px-3 py-1.5 bg-brand-gold/10 text-brand-rust text-xs font-bold uppercase tracking-wider rounded-lg mb-4 border border-brand-gold/20">
                    {track.highlight}
                  </div>
                )}

                <p className="text-base text-brand-espresso/80 leading-relaxed font-medium mb-8 flex-grow">
                  {track.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold group-hover:text-brand-rust transition-colors duration-300">
                  Explore Track <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
