import React from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, MapPin, Sparkles, UserCheck, Eye, Award } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import doctorImg from '../assets/dr-priyanka-murgude.jpg';

export default function Hero({ onBookClick, onExploreServices }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-14 lg:pb-24 overflow-hidden warm-mesh-gradient">
      {/* Subtle organic background elements matching clinic brand palette */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-[-100px] w-96 h-96 bg-primary-soft/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-secondary/40 shadow-warm-sm text-xs sm:text-sm font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{clinicData.badgeText}</span>
              <span className="text-secondary">|</span>
              <span className="text-brand-muted font-medium">Nehru Nagar</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-dark-accent tracking-tight leading-[1.15]">
                Clear Vision. <br />
                <span className="text-primary relative inline-block">
                  Better Living.
                  <svg className="absolute left-0 -bottom-2 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 250 12" fill="none">
                    <path d="M2 9C50 3 150 2 248 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
              {clinicData.heroSubtitle}
            </p>

            {/* Doctor Highlight Banner */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-brand-border/80 shadow-warm-sm w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h2 className="font-display font-bold text-base sm:text-lg text-dark-accent">
                    {clinicData.doctor.name}
                  </h2>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                    Verified Clinic
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted">
                  {clinicData.doctor.specialization} &bull; Pimpri, Pune
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={() => {
                  if (onBookClick) onBookClick();
                  scrollTo('#appointment');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => {
                  if (onExploreServices) onExploreServices();
                  scrollTo('#services');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-secondary-light/60 text-dark-accent font-semibold text-base border border-secondary/50 shadow-warm-sm hover:shadow-warm-md transition-all duration-200 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators Pill Row */}
            <div className="pt-4 border-t border-brand-border/60 w-full">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-left">
                {/* Stat 1: Justdial Rating */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-dark-accent font-bold text-lg sm:text-xl">
                    <span>{clinicData.reputation.rating}</span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs text-brand-muted">Average Rating</span>
                </div>

                {/* Stat 2: Review Count */}
                <div className="flex flex-col">
                  <div className="text-dark-accent font-bold text-lg sm:text-xl">
                    {clinicData.reputation.reviewCount}
                  </div>
                  <span className="text-xs text-brand-muted">Patient Reviews</span>
                </div>

                {/* Stat 3: Cashless Support */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-primary font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Cashless</span>
                  </div>
                  <span className="text-xs text-brand-muted">Insurance Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Eye Care Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Visual Container */}
            <div className="relative w-full max-w-md">
              {/* Soft decorative background shadow frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/30 to-transparent blur-xl opacity-70" />
              
              <div className="relative rounded-3xl bg-white border border-brand-border shadow-warm-lg p-6 sm:p-8 overflow-hidden">
                
                {/* Card Header with Clinic Brand Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-dark-accent">Divyam Eye Care</h3>
                      <p className="text-[11px] text-brand-muted">Ophthalmology Practice</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    Open for Appointments
                  </span>
                </div>

                {/* Visual Doctor Profile Card */}
                <div className="my-6 relative py-5 px-4 rounded-2xl bg-gradient-to-b from-brand-bg to-secondary-light/40 border border-secondary/30 flex flex-col items-center justify-center text-center">
                  
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/30 mb-3 group">
                    <img
                      src={doctorImg}
                      alt={clinicData.doctor.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/40 via-transparent to-transparent" />
                  </div>

                  <h4 className="font-display font-bold text-base text-dark-accent">
                    {clinicData.doctor.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    {clinicData.doctor.specialization}
                  </p>
                  <p className="text-xs text-brand-muted max-w-xs mt-1.5 leading-relaxed">
                    Specialized diagnostic guidance, vision care, and surgical consultations in Nehru Nagar, Pimpri.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 text-xs text-brand-text">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg/80 border border-brand-border/60">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Near Vital Multispeciality Hospital, Pimpri</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg/80 border border-brand-border/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>4 Cashless Insurance Partners Accepted</span>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-warm-md border border-brand-border items-center gap-2 animate-bounce duration-1000">
                <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-dark-accent">4.8 / 5 Rating</p>
                  <p className="text-[10px] text-brand-muted">Justdial Verified</p>
                </div>
              </div>

              {/* TODO: add real qualifications once confirmed by clinic */}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
