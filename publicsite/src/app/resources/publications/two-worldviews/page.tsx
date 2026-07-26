import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ArrowLeft,
  Quote,
  MapPin,
  Users,
  Calendar,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import PublicationInteractive, { ImageFrame, PublicationImage } from './PublicationInteractive';

export const metadata: Metadata = {
  title: 'Embracing the Best of Two Worldviews | Dr. Jo Bauen | Northern Vision CBO',
  description:
    'Practicing Restorative Justice in Tribal Kenya: Field report and reflection by Jo Bauen, Ed.D. on Healing Circle facilitator training in Isiolo.',
  openGraph: {
    title: 'Embracing the Best of Two Worldviews: Practicing Restorative Justice in Tribal Kenya',
    description:
      'Field report by Jo Bauen, Ed.D. detailing the 7-Step Healing Circle method and cultural exchange with 27 youth leaders in Isiolo, Kenya.',
    type: 'article',
  },
};

// ──────────────────────────────────────────────────────
// 1. Immutable Publication Metadata Schema
// ──────────────────────────────────────────────────────

export const PUBLICATION_META = {
  title: 'Embracing the Best of Two Worldviews: Practicing Restorative Justice in Tribal Kenya',
  author: 'Jo Bauen, Ed.D.',
  pdfUrl: 'https://drive.google.com/file/d/1gSi06RWFWFvs763pDfN46pzsPC5R8R6S/view?usp=sharing',
  category: 'FEATURED PUBLICATION | RESTORATIVE JUSTICE',
  participantsCount: 27,
  location: 'Isiolo, Kenya',
  date: 'Early 2024',
  tribes: ['Borana', 'Rendille', 'Sakhuye', 'Somali', 'Luhya'],
} as const;

// ──────────────────────────────────────────────────────
// 2. Publication Image Slots (Raw Appwrite Cloud File CDN)
// ──────────────────────────────────────────────────────

export const PUBLICATION_IMAGES: Record<string, PublicationImage> = {
  hero1: {
    id: 'hero1',
    appwriteId: '6a656650001786462894',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a656650001786462894/view?project=692a34ec001f1efc9002',
    caption: 'Jo Bauen and Zamzam Bonaya co-facilitating the Healing Circle training in Isiolo.',
    alt: 'Jo and Zamzam co-facilitating',
  },
  hero2: {
    id: 'hero2',
    appwriteId: '6a6552590022615ff7f4',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a6552590022615ff7f4/view?project=692a34ec001f1efc9002',
    caption: 'Group photo of the 27 tribal youth leaders and facilitators representing multi-sector organizations.',
    alt: 'The training participants group photo',
  },
  context1: {
    id: 'context1',
    appwriteId: '6a65525c001407933217',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a65525c001407933217/view?project=692a34ec001f1efc9002',
    caption: 'Dr. Jo Bauen in dialogue with Saadia Boru of the Borana Council of Elders.',
    alt: 'Jo and Saadia Boru of the Borana Council of Elders',
  },
  morning1: {
    id: 'morning1',
    appwriteId: '6a65525e0035dc39b8cb',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a65525e0035dc39b8cb/view?project=692a34ec001f1efc9002',
    caption: 'Participants passing and holding the Talking Piece during the worldview reflection.',
    alt: 'Participants using the Talking Piece',
  },
  morning2: {
    id: 'morning2',
    appwriteId: '6a65526000317727e343',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a65526000317727e343/view?project=692a34ec001f1efc9002',
    caption: 'The whole group session seated in circle around tables at the Isiolo cultural center.',
    alt: 'The whole group session in circle',
  },
  practice1: {
    id: 'practice1',
    appwriteId: '6a6552620001dd7caa75',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a6552620001dd7caa75/view?project=692a34ec001f1efc9002',
    caption: 'Small group break-out session practicing the 7-step Healing Circle method.',
    alt: 'A practice Healing Circle in small groups',
  },
  conclusion1: {
    id: 'conclusion1',
    appwriteId: '6a6568cc003cd98ff9ce',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a6568cc003cd98ff9ce/view?project=692a34ec001f1efc9002',
    caption: 'Hussein, Jillo and Shampi of the Northern Vision CBO core organizing team.',
    alt: 'Hussein, Jillo and Shampi of Northern Vision',
  },
  conclusion2: {
    id: 'conclusion2',
    appwriteId: '6a65526d00326e42f8de',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a65526d00326e42f8de/view?project=692a34ec001f1efc9002',
    caption: 'The Northern Vision team together with Dr. Jo Bauen and Rebecca.',
    alt: 'The Northern Vision team plus Jo and Rebecca',
  },
  conclusion3: {
    id: 'conclusion3',
    appwriteId: '6a65526f0013ede889d7',
    url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a65526f0013ede889d7/view?project=692a34ec001f1efc9002',
    caption: 'Celebratory community dance and songs at the completion of the Circle Keeper training.',
    alt: 'A dance to celebrate the end of the training',
  },
};

// ──────────────────────────────────────────────────────
// 3. Main Page Component (RSC)
// ──────────────────────────────────────────────────────

export default function TwoWorldviewsPage() {
  return (
    <main className="min-h-screen bg-neutral-light pb-24">
      {/* Interactive Client Wrapper (Progress, Lightbox, Sticky Jump Bar) */}
      <PublicationInteractive
        images={PUBLICATION_IMAGES}
        pdfUrl={PUBLICATION_META.pdfUrl}
      />

      {/* ════════════════════════════════════════════════
          ARTICLE HERO & METADATA HEADER
          ════════════════════════════════════════════════ */}
      <header id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#F5F2EB] border-b border-muted overflow-hidden">
        {/* Fine paper background texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Ambient warm glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 relative z-10 animate-up">
          {/* Back Navigation */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-heading uppercase tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources & Learning
          </Link>

          <div className="space-y-6">
            {/* Category Tag */}
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase">
                {PUBLICATION_META.category}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-heading tracking-tight leading-[1.15]">
              {PUBLICATION_META.title}
            </h1>

            {/* Author Line */}
            <div className="text-lg sm:text-xl font-bold text-primary tracking-wide">
              --{PUBLICATION_META.author}
            </div>

            {/* Author & Context Bar */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-muted/60 text-sm font-medium text-body">
              <div className="flex items-center gap-1.5 text-body">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{PUBLICATION_META.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-body">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <span>{PUBLICATION_META.participantsCount} Youth Leaders</span>
              </div>

              <div className="flex items-center gap-1.5 text-body">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <span>{PUBLICATION_META.date}</span>
              </div>
            </div>

            {/* Tribes Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-heading/70 mr-1">
                Participating Tribes:
              </span>
              {PUBLICATION_META.tribes.map((tribe) => (
                <span
                  key={tribe}
                  className="px-2.5 py-0.5 rounded-md bg-white border border-muted text-xs font-semibold text-heading shadow-xs"
                >
                  {tribe}
                </span>
              ))}
            </div>

            {/* Download CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={PUBLICATION_META.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-rust text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg hover:bg-brand-rust/90 active:scale-[0.98] transition-all duration-200 border border-brand-rust"
              >
                <Download className="w-5 h-5 text-white" /> <span className="text-white font-bold">Download Original PDF</span>
              </a>
              <span className="text-xs text-body font-medium">
                Official field publication document (Google Drive PDF)
              </span>
            </div>
          </div>

          {/* Hero Media Grid (2 Frames) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageFrame image={PUBLICATION_IMAGES.hero1} priority aspect="aspect-[4/3]" />
            <ImageFrame image={PUBLICATION_IMAGES.hero2} priority aspect="aspect-[4/3]" />
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════════
          ARTICLE CONTENT CONTAINER (PURE EDITORIAL PROSE)
          ════════════════════════════════════════════════ */}
      <article className="container max-w-4xl mx-auto px-4 pt-16 space-y-16">

        {/* ──────────────────────────────────────────────
            SECTION 1: AN INVITATION
            ────────────────────────────────────────────── */}
        <section id="invitation" className="space-y-6 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight border-b border-muted pb-3">
            An Invitation
          </h2>

          <div className="prose prose-lg max-w-none text-body leading-relaxed space-y-6 text-base sm:text-lg font-normal">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              I have just had the honor of holding a Healing Circle facilitator training for a group of 27 youth leaders from several tribes in Northern Kenya. I was invited by Zamzam Bonaya, a 23-year-old human rights activist from the Borana tribe in northern-Kenyan. In late 2023 Zamzam interned with a non-profit here in Oakland, California, and she lived with my wife and me. During her stay, Zamzam attended my weekly Healing Circles, a community-building process that is based on the principles of Restorative Justice. She quickly embraced the Circle process, and invited me to lead a Healing Circle facilitator training in her village of Isiolo, Kenya.
            </p>

            <p>
              This invitation meant that I was asked to teach a circle method that is based on global indigenous principles and practices to a tribal community grounded in the same principles and practices. I was thrilled by this challenge, and knew I had to own the irony of the potential appropriation of tribal practice, and then of teaching it back to the tribe. The training would have to confront this paradox right away. So, in our email preparations, Zamzam and I decided to open the day with a reflection on two contrasting paradigms or worldviews, namely the Western/Scientific/Modern and the Traditional/Tribal/Indigenous. We wanted to validate the tribal values, to acknowledge the roots of Restorative Justice, and to explore what the two paradigms might offer each other. After this opening reflection I was to teach the seven-step Healing Circle method to the tribal youth participants.
            </p>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            SECTION 2: THE CONTEXT THAT MADE THIS POSSIBLE
            ────────────────────────────────────────────── */}
        <section id="context" className="space-y-6 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight border-b border-muted pb-3">
            The Context that Made this Possible
          </h2>

          <div className="prose prose-lg max-w-none text-body leading-relaxed space-y-6 text-base sm:text-lg font-normal">
            <p>
              While still an undergraduate in Nairobi, Zamzam founded Northern Vision, a community based organization focused on environmental justice, women’s rights, and youth development in the northern region of Kenya. Since graduating, she has invited her brother and two close friends to join her to organize for environmental and social justice. While the community based organization has no funding, and the team earns no salary, they are collaborating on the issues most important to each of them and having an impact. When the team saw the opportunity for me to hold a Healing Circle training, they recruited 27 young leaders, ages 20-40, mostly from the Borana tribe, plus others from Rendille, Sakhuye, Somali and Luhya tribes. The participants represented a range of community organizations including Peace Link, a regional pastoralist organization promoting peaceful tribal relationships; EcoRafiki, an environmental justice group; anti-Female Genital Cutting activists and survivors; staff from the Kenya’s gender inclusivity office; the Office of the Isiolo Ombudsman and several other human rights activists. In addition, Zamzam invited Saddia Boru, a woman from the Elder Council, and asked her to speak about the Council’s conflict resolution and decision-making process, which is held in circle!
            </p>
          </div>

          {/* Section 2 Inline Media Frame */}
          <div className="pt-4">
            <ImageFrame image={PUBLICATION_IMAGES.context1} aspect="aspect-[16/9]" />
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            SECTION 3: ON THE MORNING OF THE TRAINING
            ────────────────────────────────────────────── */}
        <section id="morning" className="space-y-8 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight border-b border-muted pb-3">
            On the Morning of the Training
          </h2>

          <div className="prose prose-lg max-w-none text-body leading-relaxed space-y-6 text-base sm:text-lg font-normal">
            <p>
              Everyone dressed in traditional clothing for the day’s event—this was Zamzam’s idea to emphasize the significance of the tribes represented. The training was held at a cultural center that housed several human rights offices, including Northern Vision. The space was quiet and beautiful with shade trees and birdsong. Several aging buildings circled an open courtyard, the metal walls of our classroom rolled upward to open, and the day was warm. Zamzam’s team had miraculously provided swag: notepads, pens and cloth bags all with the Northern Vision logo. Sitting in a big circle around folding tables, we began by introducing ourselves and named the tribes, and organizations we were from. Next up was tea break! Chai tea, plantain and fried dough was ready for us upstairs in an airy dining hall where we all got the chance to meet informally, eat and chat.
            </p>

            <p>
              After the tea break, Zamzam and I led a reflection on the two worldviews. I shared a list of the major ideas attributed to the Western/Modern paradigm, openly naming my culture’s value of autonomy and objectivity, our prioritization of material wealth, and our limited connection to the planet and all living things. Zamzam shared the attributes of Tribal/Traditional/ cultures, highlighting community over autonomy, and noting the values of people over profit, and honoring ancestral values. Then we passed the ‘talking piece’, an object used in circles that allows each person to speak as it is passed from hand to hand. We asked, &quot;Which worldview do you associate with?&quot; Or, &quot;What are your thoughts about these examples of the two contrasting worldviews?&quot; This freed the room to validate and honor their deep-seated, unbroken connection to tribal values, to each other and to the earth. The vast majority spoke about the positives of their traditional cultural worldview. They named their love of their families and community. They saw their connection to tradition, earth, and all living things. They shared that they are not materialists, stating that, &quot;Money isn’t everything.&quot; A few people voiced the negative impact of Western capitalism on the globe. And a couple of men defended the prescribed role of women in tribal communities saying, &quot;There are reasons for the status of women.&quot; Explaining that, &quot;We men protect our women and they care for our children.&quot;
            </p>

            <p>
              I appreciated their comments and praised their cultural strengths. Then Jillo, a staff member of of Northern Vision spoke up, &quot;But tell me, who in this room can live a day without their cell phone?&quot; He prompted thoughts about the limitations of traditional culture, and the yearning for modern life. Another young man spoke up, saying, &quot;I love the Western lifestyle.&quot; Some women stated that they wanted their voices heard and they wanted the right to own land. Both women and men expressed their desire to end female genital cutting. Someone added that children need to be heard as well, and ‘mainstreamed’ into important conversations. As individuals voiced differing views, they sometimes disagreed, and yet they seemed to accept the contrasting opinions, or at least nobody left the room. Then Jillo proposed, &quot;Can we create a hybrid worldview?
            </p>
          </div>

          {/* Pull-Quote Callout Card */}
          <div className="my-8 bg-brand-espresso text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl pointer-events-none" />
            <Quote className="w-12 h-12 text-brand-gold/40 mb-4" />
            <blockquote className="text-2xl sm:text-3xl font-black text-brand-cream leading-tight tracking-tight">
              &quot;Can we create a hybrid worldview?&quot;
            </blockquote>
            <cite className="block mt-4 text-sm font-bold text-brand-gold not-italic tracking-wider uppercase">
              — Jillo, Northern Vision Team Member
            </cite>
          </div>

          {/* Morning Section Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <ImageFrame image={PUBLICATION_IMAGES.morning1} aspect="aspect-[4/3]" />
            <ImageFrame image={PUBLICATION_IMAGES.morning2} aspect="aspect-[4/3]" />
          </div>

          {/* Continuation of Training Narrative (Method, Practice, Report-backs) */}
          <div className="prose prose-lg max-w-none text-body leading-relaxed space-y-6 text-base sm:text-lg font-normal pt-4">
            <p>
              I believe we did just that. Our honest discussion of the two paradigms noted strengths and weaknesses in both. The fact that we did not rank one as better or worse made it possible for me to teach an indigenous-based concept to indigenous people, knowing that I was not imposing my worldview on them, but rather, we were all able to choose the strengths and reject the weaknesses from either paradigm. Encouraged by the open-mindedness of this community, I offered the definition of a Restorative Justice, acknowledging its indigenous roots, and its uses in the US and globally. I defined the Healing Circle as a community building process that creates a safe space, honors each participant and recognizes our interconnectedness. I briefly explained how to use a Circle method I’ve adapted from multiple sources, with many communities, over many years (see sources). The seven-step Healing Circle process involves 1) an opening such as a poem, somatic exercise, or breathing, 2) introducing the &quot;Talking Piece&quot;, to create an equitable environment for speaking and listening, 3) a check-in to see how each person is doing, 4) a values round, allowing participants to name and agree on personal and shared group values, 5) a discussion round, based on a theme or question prepared in advance, that invites people to speak from their hearts, 6) a check out question, usually, ‘what is your take-away?’, and 7) a closing such as a poem or a guided breathing exercise.
            </p>

            <p>
              The final component of the training was practice: to break into small groups to plan and each hold their own Healing Circle. We counted off into four groups, each with a Northern Vision staff member or myself facilitating. I instructed each group to start by choosing a theme for the discussion round for their Circle—encouraging them to choose without too much deliberation. The groups each chose as themes: 1) Who do you look up to? 2) What inspires your work? 3) How can we address trauma? And, 4) How to overcome fear of vulnerability? I instructed them to divide up the leadership of the seven Healing Circle steps, according to the desires of each person in their group. Leaning together in hushed conversations with big smiles, each team went to work.
            </p>

            {/* Practice Image Frame */}
            <div className="py-4 not-prose">
              <ImageFrame image={PUBLICATION_IMAGES.practice1} aspect="aspect-[16/9]" />
            </div>

            <p>
              After the time for the small groups ended, their report-backs told us that the circles worked. Each group had allowed participants to share deeply, and to strengthen bonds among each other. Everyone clearly grasped the method, and all agreed that it gave egalitarian voice and value to each participant. Many said they can and will use this method in their projects. One participant added, &quot;We need to hold circles with our youth, our single mothers, and our formerly incarcerated.&quot; They noted that circles uncover individual needs, needs that will have to be addressed by the community. They commented on the potential application in Kenya’s criminal justice system and beyond. I shared that my small circle included two of the youngest participants, both of whom seemed too shy to speak, but with encouragement, managed to do so. The youngest member chose to open and close the circle with an Arabic prayer, which was translated for me as blessings, gratitude and abundance to all. After the report-back, Jillo concluded, &quot;We should all know that a community that does not sit in Circle, is doomed!&quot;
            </p>

            <p>
              The Healing Circle creates safe space, and honors all voices. While based on indigenous principles, it is not embedded in any particular tradition, and is thus unencumbered by cultural restrictions. Our Healing Circle training lifted up the fundamental tribal value of interconnectedness, then introduced a circle method that is free from constraints of tribal culture (i.e. gender inequality, and ageism to name two), and placed it back down in a fully indigenous setting. I saw how the training provided a way for the participants to embrace their tribal values, to challenge traditional norms when necessary, and to implement a new way to address community dialogue, conflicts and decision making with a fresh commitment to non-authoritarian, non-sexist, inclusive methods. The 27 youth leaders embraced the Healing Circle as something, &quot;We thought we didn’t understand, but in the end, we always have understood.&quot;
            </p>

            {/* Northern Vision Team Media Frame */}
            <div className="py-4 not-prose">
              <ImageFrame image={PUBLICATION_IMAGES.conclusion1} aspect="aspect-[16/9]" />
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            SECTION 4: CONCLUSIONS/OUTCOMES
            ────────────────────────────────────────────── */}
        <section id="conclusions" className="space-y-8 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight border-b border-muted pb-3">
            Conclusions/Outcomes
          </h2>

          <div className="prose prose-lg max-w-none text-body leading-relaxed space-y-6 text-base sm:text-lg font-normal">
            <p>
              I learned that these differing worldviews are potent--they define us, and also challenge us to move beyond their confining elements. They are important as we reflect on what it means to be human, and to deal with our inherent human conflicts. But these two paradigms are not singular, stand-alone truths. It helps to demystify them, to depolarize them so that we can learn who we are in the midst of them. I am grateful to witness the strengths and capabilities of the Northern Vision leaders, plus the participating leaders from other community-based organizations. They are unafraid to explore their truths in search of the best solutions to life at this moment.
            </p>

            <p>
              I learned that we can’t completely deny either paradigm in favor of the other, though in many ways the West still tries to deny our fundamental interconnectedness in favor of objectivity, or modern science. Nor, of course, can we deny the devastation caused by modern capitalist greed. And my new tribal friends in Kenya can’t deny their attraction to, and the steady growth of modernity.
            </p>

            <p>
              Zamzam’s experience with Healing Circles in the US and her vision for their application in her home village created a profound cultural exchange for myself and 27 others.
            </p>

            <p className="text-lg sm:text-xl font-medium text-heading leading-relaxed bg-white border border-muted p-8 rounded-2xl shadow-xs">
              We waded in the unknown zone between two worldviews. We stirred the water that usually is left unexplored, rife with uncontested stories, rich with mythos, full of unexamined cosmologies and identities. In this mix, the young activists bravely claimed their own unique truths, both the deeply traditional, and those that lie between the two worldviews. Exploring the region between the paradigms we found the possibility of a combined strength. And through the Healing Circle practice, we found a means to embrace the best of both worldviews.
            </p>
          </div>

          {/* Section 4 Media Grid (2 Frames) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <ImageFrame image={PUBLICATION_IMAGES.conclusion2} aspect="aspect-[4/3]" />
            <ImageFrame image={PUBLICATION_IMAGES.conclusion3} aspect="aspect-[4/3]" />
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            SECTION 5: SOURCES
            ────────────────────────────────────────────── */}
        <section id="citations" className="space-y-6 scroll-mt-28 pt-8 border-t border-muted">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading tracking-tight border-b border-muted pb-3">
            Sources
          </h2>

          <div className="bg-white border border-muted p-8 rounded-2xl space-y-4 shadow-xs">
            <ul className="space-y-4 divide-y divide-muted/50 text-base font-medium">
              <li className="pt-2 flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-bold text-heading">Restorative Justice for Oakland Youth</span>,{' '}
                  <a
                    href="https://rjoyoakland.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-heading font-mono"
                  >
                    https://rjoyoakland.org/
                  </a>
                </div>
              </li>

              <li className="pt-3 flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-bold text-heading">Kay Pranis’ Circle Keepers Handbook</span>, Living Justice Press
                </div>
              </li>

              <li className="pt-3 flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-bold text-heading">Renjitham Alfred of Restorative Justice Training Institute</span>{' '}
                  <a
                    href="https://www.facebook.com/RJTI.training/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-heading font-mono block mt-1"
                  >
                    https://www.facebook.com/RJTI.training/
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </article>
    </main>
  );
}
