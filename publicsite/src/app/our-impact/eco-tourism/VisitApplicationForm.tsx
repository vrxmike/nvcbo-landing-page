"use client";

import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  groupSize: number;
  requestedDate: string;
  focus: string;
}

export function VisitApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    groupSize: 1,
    requestedDate: "",
    focus: "Education",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "groupSize" ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.requestedDate) {
      return;
    }
    
    setStatus("loading");
    
    // Simulate API call processing the application
    setTimeout(() => {
      if (formData.email.includes("@")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="bg-brand-cream border border-brand-gold/30 rounded-2xl p-8 md:p-12 text-center animate-up">
        <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">Application Received</h3>
        <p className="text-lg text-body max-w-lg mx-auto leading-relaxed">
          Thank you, {formData.fullName.split(' ')[0]}. We have received your visitation request for {formData.requestedDate}. Our local team will review the details and get back to you shortly to finalize your itinerary.
        </p>
        <button 
          onClick={() => {
            setStatus("idle");
            setFormData({ ...formData, requestedDate: "", fullName: "", email: "" });
          }}
          className="mt-8 px-6 py-2.5 rounded-lg border border-muted text-heading font-semibold hover:border-primary transition-colors bg-white shadow-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <label htmlFor="fullName" className="block text-sm font-bold text-heading mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-xl border border-muted bg-neutral-light text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* Email Address */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <label htmlFor="email" className="block text-sm font-bold text-heading mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-xl border border-muted bg-neutral-light text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* Requested Date */}
        <div className="col-span-1">
          <label htmlFor="requestedDate" className="block text-sm font-bold text-heading mb-2">
            Requested Date *
          </label>
          <input
            id="requestedDate"
            name="requestedDate"
            type="date"
            value={formData.requestedDate}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-xl border border-muted bg-neutral-light text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* Group Size */}
        <div className="col-span-1">
          <label htmlFor="groupSize" className="block text-sm font-bold text-heading mb-2">
            Group Size *
          </label>
          <input
            id="groupSize"
            name="groupSize"
            type="number"
            min="1"
            max="50"
            value={formData.groupSize}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-xl border border-muted bg-neutral-light text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* Focus of Visit */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="focus" className="block text-sm font-bold text-heading mb-2">
            Primary Visit Focus
          </label>
          <div className="relative">
            <select
              id="focus"
              name="focus"
              value={formData.focus}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-xl border border-muted bg-neutral-light text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm appearance-none"
            >
              <option value="Education">Education & School Groups</option>
              <option value="Research">Research & Partnership</option>
              <option value="Tourism">Leisure & Day Pass Tourism</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg border border-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:translate-y-0 flex justify-center items-center"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
          
          {status === "error" && (
            <p className="mt-4 text-red-500 font-medium text-sm text-center md:text-left">
              There was an issue processing your request. Please ensure all fields are valid.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
