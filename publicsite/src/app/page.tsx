import Link from "next/link";
import { Leaf, GraduationCap, Heart, Users, MessageSquare, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section 
        className="relative flex items-center pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-32 lg:pb-16 min-h-[70vh] lg:min-h-[60vh] justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 93, 116, 0.85), rgba(29, 128, 159, 0.7)), url('https://fra.cloud.appwrite.io/v1/storage/buckets/nvcbo_bucket/files/6a5fd5630003209fc638/view?project=692a34ec001f1efc9002')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 px-6 mx-auto text-center">
          <div className="max-w-6xl mx-auto animate-up delay-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 lg:mb-6 leading-tight tracking-tight animate-brand-gradient">
               Community Transformation Begins with Healing
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-10 lg:mb-8 max-w-4xl mx-auto leading-relaxed animate-up delay-2">
               At Northern Vision, Healing Circles are the foundation of our community engagement. Through safe, community-led spaces, we initiate dialogue, strengthen leadership, preserve indigenous knowledge and support communities to co-create solutions for climate resilience, peacebuilding, education and sustainable livelihoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-up delay-3">
              <Link href="/healing-circles" className="inline-flex items-center justify-center px-9 py-4 rounded-full font-bold uppercase tracking-wider bg-gradient-to-br from-brand-gold to-brand-rust text-white shadow-[0_4px_15px_rgba(204,85,0,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,140,0,0.4)] transition-all duration-300 w-full sm:w-auto text-center">
                Experience Healing Circles
              </Link>
              <Link href="/our-impact" className="inline-flex items-center justify-center px-9 py-4 rounded-full font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-brand-espresso hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full sm:w-auto text-center">
                Explore Areas of Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">About Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">Community-Rooted Action</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-rust mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl text-brand-espresso leading-loose mb-12">
              Northern Vision CBO is a community-rooted organization grounded in indigenous knowledge, integrity and community leadership. We design and implement locally led solutions in climate adaptation, education and culture, sexual and reproductive health and rights (SRHR) and peacebuilding. Healing circles and storytelling are core tools that guide our community engagement, learning, and organizational reflection.
            </p>
            
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold hover:bg-brand-rust text-white shadow-md hover:shadow-lg rounded-full font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Who We Are
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-20 md:py-28 bg-brand-cream relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-brand-rust mb-3 block">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-4">Our Areas of Impact</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-rust mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Program 1 */}
            <div className="bento-card p-5 sm:p-6 lg:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white rounded-3xl border border-brand-espresso/10 hover:border-brand-gold/40">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-espresso text-brand-gold shrink-0 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-espresso leading-snug group-hover:text-brand-rust transition-colors">
                    Climate Adaptation & Food Security
                  </h4>
                </div>
                <p className="text-xs lg:text-[13px] text-brand-espresso/80 leading-relaxed font-medium">
                  Strengthening resilience through sustainable agriculture, renewable energy, ecosystem restoration and climate-smart livelihoods.
                </p>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bento-card p-5 sm:p-6 lg:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white rounded-3xl border border-brand-espresso/10 hover:border-brand-gold/40">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-espresso text-brand-gold shrink-0 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-espresso leading-snug group-hover:text-brand-rust transition-colors">
                    Education & Culture
                  </h4>
                </div>
                <p className="text-xs lg:text-[13px] text-brand-espresso/80 leading-relaxed font-medium">
                  Expanding access to education, mentorship, and cultural knowledge while strengthening identity and intergenerational learning.
                </p>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bento-card p-5 sm:p-6 lg:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white rounded-3xl border border-brand-espresso/10 hover:border-brand-gold/40">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-espresso text-brand-gold shrink-0 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-espresso leading-snug group-hover:text-brand-rust transition-colors">
                    Gender Equality and Social Inclusion
                  </h4>
                </div>
                <p className="text-xs lg:text-[13px] text-brand-espresso/80 leading-relaxed font-medium">
                  Promoting dignity, health, and informed decision-making among adolescents and women.
                </p>
              </div>
            </div>

            {/* Program 4 */}
            <div className="bento-card p-5 sm:p-6 lg:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white rounded-3xl border border-brand-espresso/10 hover:border-brand-gold/40">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-espresso text-brand-gold shrink-0 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-espresso leading-snug group-hover:text-brand-rust transition-colors">
                    Peace & Security
                  </h4>
                </div>
                <p className="text-xs lg:text-[13px] text-brand-espresso/80 leading-relaxed font-medium">
                  Promoting peaceful coexistence through dialogue, media literacy and youth digital engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/our-impact" className="inline-flex items-center justify-center px-9 py-4 rounded-full font-bold uppercase tracking-wider bg-gradient-to-br from-brand-gold to-brand-rust text-white shadow-[0_4px_15px_rgba(204,85,0,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,140,0,0.4)] transition-all duration-300">
              Explore Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section 
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(43, 17, 0, 0.94) 0%, rgba(21, 93, 116, 0.90) 100%), url('https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-10 max-w-4xl mx-auto">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[4px] text-brand-gold mb-3 block">Our Methodology</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Explore Healing Circles
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-rust mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore how Healing Circles create safe spaces for dialogue and collective action across our areas of impact.
            </p>
          </div>

          {/* 3 Glassmorphism Cards with Brand Espresso styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14 text-left">
            
            {/* Card 1: Circle Keeper Training */}
            <div className="bg-brand-espresso/80 backdrop-blur-xl border border-brand-gold/25 hover:border-brand-gold/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-2 hover:bg-brand-espresso/95 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all duration-300">
                  <Users className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                  Circle Keeper Training
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
                  Building local facilitators who lead restorative dialogue and community transformation. We equip community leaders, youth and institutions with the skills to facilitate Healing Circles and strengthen community-led leadership.
                </p>
              </div>
              <div>
                <Link 
                  href="/healing-circles/circle-keepers" 
                  className="inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-rust text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Community Healing Dialogues */}
            <div className="bg-brand-espresso/80 backdrop-blur-xl border border-brand-gold/25 hover:border-brand-gold/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-2 hover:bg-brand-espresso/95 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all duration-300">
                  <MessageSquare className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                  Community Healing Dialogues
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
                  Explore how Healing Circles bring communities together to listen, build trust, and take collective action. Discover how restorative dialogue strengthens climate resilience, advances gender equality, promotes peacebuilding, preserves indigenous knowledge, and addresses other community priorities.
                </p>
              </div>
              <div>
                <Link 
                  href="/healing-circles/community-dialogues" 
                  className="inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-rust text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Resources & Learning */}
            <div className="bg-brand-espresso/80 backdrop-blur-xl border border-brand-gold/25 hover:border-brand-gold/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-2 hover:bg-brand-espresso/95 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                  Resources & Learning
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
                  Access guides, toolkits, and case studies on Healing Circles.
                </p>
              </div>
              <div>
                <Link 
                  href="/resources" 
                  className="inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-rust text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Resources <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section id="donate" className="py-32 bg-gradient-to-br from-brand-gold to-brand-rust relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white text-brand-espresso p-12 md:p-16 rounded-[2rem] text-center shadow-2xl border border-white/20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-espresso mb-6">Support Grassroots Action</h2>
              <p className="text-xl text-brand-espresso/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                We welcome partnerships, volunteers, donors, and collaborators who share our commitment to grassroots-led climate action and community empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/shop" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-brand-rust text-white rounded-full font-bold uppercase tracking-wider transition-all shadow hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Invest in Our Impact
                </Link>
                <Link href="/become-a-partner" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full font-bold uppercase tracking-wider bg-transparent border-2 border-brand-espresso/20 text-brand-espresso hover:border-brand-espresso hover:text-brand-rust hover:-translate-y-1 hover:shadow-sm transition-all duration-300 w-full sm:w-auto">
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section id="contact" className="h-[450px] w-full">
        <iframe 
          title="NVCBO Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Isiolo,+Kenya&aq=0&ie=UTF8&t=m&z=12&iwloc=A&output=embed"
          className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}
