import Link from "next/link";
import { Leaf, GraduationCap, Heart, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 93, 116, 0.85), rgba(29, 128, 159, 0.7)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 px-6 py-32 mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-up delay-1">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Grassroots-Led <span className="text-nvcbo-orange">Climate</span>, <span className="text-nvcbo-orange">Gender</span> and <span className="text-nvcbo-orange">Education</span> Solutions in Northern Kenya
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-up delay-2">
              Northern Vision Community-Based Organization (NVCBO) is a grassroots organization working with indigenous and pastoralist communities to strengthen climate resilience, gender justice, education and community wellbeing in Northern Kenya’s Arid and Semi-Arid Lands (ASALs).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-up delay-3">
              <Link href="#about" className="btn-primary-nv w-full sm:w-auto text-center">
                Learn More About Us
              </Link>
              <Link href="#programs" className="btn-outline-nv w-full sm:w-auto text-center">
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <span className="text-sm font-extrabold uppercase tracking-[4px] text-nvcbo-dark-orange mb-3 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-nvcbo-stone mb-6">Community-Rooted Action</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-nvcbo-orange to-nvcbo-dark-orange mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-700 leading-loose mb-12">
              Northern Vision CBO is a community-rooted organization grounded in indigenous knowledge, integrity and community leadership. We design and implement locally led solutions in climate adaptation, education and culture, sexual and reproductive health and rights (SRHR) and peacebuilding. Healing circles and storytelling are core tools that guide our community engagement, learning, and organizational reflection.
            </p>
            
            <Link href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-nvcbo-dark-orange hover:bg-nvcbo-orange text-white rounded-full font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Who We Are
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-32 bg-nvcbo-light-bg relative">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-nvcbo-dark-orange mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-nvcbo-stone mb-6">Our Core Programs</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-nvcbo-orange to-nvcbo-dark-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program 1 */}
            <div className="glass-card p-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nvcbo-blue to-nvcbo-dark-blue text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Leaf className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-nvcbo-stone mb-4">Climate Adaptation & Food Security</h4>
              <p className="text-gray-600 leading-relaxed">
                Strengthening resilience through sustainable agriculture, renewable energy, ecosystem restoration and climate-smart livelihoods.
              </p>
            </div>

            {/* Program 2 */}
            <div className="glass-card p-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nvcbo-blue to-nvcbo-dark-blue text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-nvcbo-stone mb-4">Education & Culture</h4>
              <p className="text-gray-600 leading-relaxed">
                Expanding access to education, mentorship, and cultural knowledge while strengthening identity and intergenerational learning.
              </p>
            </div>

            {/* Program 3 */}
            <div className="glass-card p-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nvcbo-blue to-nvcbo-dark-blue text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-nvcbo-stone mb-4">Sexual & Reproductive Health and Rights</h4>
              <p className="text-gray-600 leading-relaxed">
                Promoting dignity, health, and informed decision-making among adolescents and women.
              </p>
            </div>

            {/* Program 4 */}
            <div className="glass-card p-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nvcbo-blue to-nvcbo-dark-blue text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-nvcbo-stone mb-4">Peace & Security</h4>
              <p className="text-gray-600 leading-relaxed">
                Promoting peaceful coexistence through dialogue, media literacy and youth digital engagement.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="#programs" className="btn-primary-nv">
              Explore Details
            </Link>
          </div>
        </div>
      </section>

      {/* HEALING CIRCLES SECTION */}
      <section 
        id="healing" 
        className="py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 93, 116, 0.95), rgba(29, 128, 159, 0.9)), url('https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-12">
            <span className="text-sm font-extrabold uppercase tracking-[4px] text-nvcbo-cream mb-3 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Healing Circles</h2>
            <div className="w-16 h-1 bg-nvcbo-cream mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 leading-loose max-w-4xl mx-auto mb-12">
            Healing circles are a core methodology across all Northern Vision programs. They are used for community dialogue, participatory planning, conflict resolution, youth mentorship and internal organizational reflection.
          </p>
          
          <Link href="#healing" className="btn-primary-nv">
            Our Approach
          </Link>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section id="donate" className="py-32 bg-gradient-to-br from-nvcbo-orange to-nvcbo-dark-orange relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-orange p-12 md:p-16 rounded-[2rem] text-center shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Support Grassroots Action</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                We welcome partnerships, volunteers, donors, and collaborators who share our commitment to grassroots-led climate action and community empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#donate" className="inline-flex items-center justify-center px-8 py-4 bg-white text-nvcbo-dark-orange rounded-full font-bold uppercase tracking-wider transition-all shadow hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Donate Now
                </Link>
                <Link href="#contact" className="btn-outline-nv w-full sm:w-auto">
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
