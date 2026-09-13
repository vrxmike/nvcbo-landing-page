"use client";

import React, { useState } from "react";

export function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    }, 800);
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Parent's email address"
            required
            disabled={status === "loading" || status === "success"}
            className="w-full px-4 py-3 rounded-xl border border-muted bg-white text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 rounded-xl bg-primary text-white font-medium border border-black/10 shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Registering..." : status === "success" ? "Registered!" : "Register Interest"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-sm mt-3 text-primary font-medium">Thank you! We will be in touch about the next cohort.</p>
      )}
      {status === "error" && (
        <p className="text-sm mt-3 text-red-500 font-medium">Please enter a valid email address.</p>
      )}
    </div>
  );
}
