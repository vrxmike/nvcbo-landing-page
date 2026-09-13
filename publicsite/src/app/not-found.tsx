"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2, Home, Compass, Wrench, Sparkles } from "lucide-react";

export default function NotFound() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    // Simulate brief network submission delay
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-brand-espresso text-white relative overflow-hidden flex flex-col justify-between pt-28 pb-16">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-brand-rust/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="container max-w-5xl mx-auto px-6 relative z-10 my-auto">
        
        {/* 404 Hero Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-12 md:p-16 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden my-8">
          
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-6">
            <Wrench className="w-4 h-4 animate-bounce" /> Under Active Development
          </div>

          {/* Large Gradient 404 Display */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-brand-gold via-amber-300 to-brand-rust bg-clip-text text-transparent block mb-4 tracking-tight">
            404
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            This Page is Coming Soon
          </h2>

          {/* Custom Message */}
          <p className="text-base sm:text-lg md:text-xl text-brand-cream/80 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            This page is currently being crafted and refined by our digital team to bring you the best experience. It will be available soon as we expand our platform across Northern Kenya.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/our-impact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold uppercase tracking-wider bg-gradient-to-r from-brand-gold to-brand-rust text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center text-xs sm:text-sm"
            >
              <Compass className="w-4 h-4" /> Explore Our Impact
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-espresso hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center text-xs sm:text-sm"
            >
              <Home className="w-4 h-4" /> Return to Homepage
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            Newsletter Subscription Form (Before Footer)
            ════════════════════════════════════════════════ */}
        <section className="mt-12 mb-6">
          <div className="backdrop-blur-lg bg-white/[0.04] border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Stay Updated on Our Progress
            </h3>
            <p className="text-brand-cream/70 text-sm mb-6 max-w-lg mx-auto">
              Subscribe to receive instant updates, new project reports, and notifications as new features launch.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing! We&apos;ll notify you as new features & reports launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-black/40 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-rust text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
