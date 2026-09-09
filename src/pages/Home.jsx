import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  MapPin, 
  UserCheck, 
  Eye, 
  Sparkles,
  Camera
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import doctorImg from '../assets/dr-priyanka-murgude.jpg';
import LogoIcon from '../components/LogoIcon';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden warm-mesh-gradient border-b border-brand-border">
        {/* Decorative teal-toned blur orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 right-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-brand-border shadow-warm-sm text-xs sm:text-sm font-semibold text-primary flex-wrap justify-center">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="whitespace-nowrap">{clinicData.badgeText}</span>
                <span className="text-brand-subtle hidden xs:inline">|</span>
                <span className="text-brand-text font-semibold whitespace-nowrap">Nehru Nagar, Pimpri</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="font-display font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-dark-accent tracking-tight leading-[1.15]">
                  Clear Vision. <br />
                  <span className="text-primary relative inline-block">
                    Better Living.
                    <svg className="absolute left-0 -bottom-2 w-full h-3 text-secondary/50 -z-10" viewBox="0 0 250 12" fill="none">
                      <path d="M2 9C50 3 150 2 248 8" stroke="#FD7401" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-brand-muted max-w-xl leading-relaxed">
                {clinicData.heroSubtitle}
              </p>

              {/* Doctor Highlight Banner */}
              <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-brand-border shadow-warm-sm w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h2 className="font-display font-bold text-sm sm:text-base text-dark-accent">
                      {clinicData.doctor.name}
                    </h2>
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-primary-light text-primary border border-primary/20 whitespace-nowrap shrink-0">
                      Verified Specialist
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-tight">
                    {clinicData.doctor.specialization} &bull; Pimpri, Pune
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-semibold text-sm sm:text-base shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <LogoIcon className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-primary-light text-dark-accent font-semibold text-sm sm:text-base border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all duration-200 group text-center"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators Pill Row */}
              <div className="pt-4 border-t border-brand-border w-full">
                <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 text-left">
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-0.5 sm:gap-1 text-dark-accent font-bold text-sm xs:text-base sm:text-xl">
                      <span>{clinicData.reputation.rating}</span>
                      <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 fill-secondary text-secondary shrink-0" />
                    </div>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs text-brand-muted leading-tight">Average Rating</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="text-dark-accent font-bold text-sm xs:text-base sm:text-xl">
                      {clinicData.reputation.reviewCount}
                    </div>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs text-brand-muted leading-tight">Patient Reviews</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-0.5 sm:gap-1 text-primary font-bold text-xs xs:text-sm sm:text-base">
                      <ShieldCheck className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                      <span className="truncate">Cashless</span>
                    </div>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs text-brand-muted leading-tight">6 Insurers</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Doctor Profile Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center w-full">
              <div className="relative w-full max-w-md">
                
                {/* Ambient glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-xl opacity-70" />
                
                <div className="relative rounded-3xl bg-white border border-brand-border shadow-warm-lg p-4 xs:p-6 sm:p-7 overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-brand-border">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                        <LogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xs sm:text-sm text-dark-accent">Divyam Eye Care</h3>
                        <p className="text-[10px] sm:text-[11px] text-brand-muted">Ophthalmology Practice</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      Open for Bookings
                    </span>
                  </div>

                  {/* Doctor Visual Card */}
                  <div className="my-3.5 sm:my-4 relative py-3.5 sm:py-4 px-3 sm:px-4 rounded-2xl bg-gradient-to-b from-brand-bg to-primary-light/30 border border-brand-border flex flex-col items-center justify-center text-center">
                    <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/40 mb-3 group">
                      <img
                        src={doctorImg}
                        alt={clinicData.doctor.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/40 via-transparent to-transparent" />
                    </div>

                    <h4 className="font-display font-bold text-sm xs:text-base text-dark-accent">
                      {clinicData.doctor.name}
                    </h4>
                    <p className="text-xs font-semibold text-secondary mt-0.5">
                      {clinicData.doctor.specialization}
                    </p>
                    <p className="text-xs text-brand-muted max-w-xs mt-1.5 leading-relaxed">
                      Specialized diagnostics, cataract surgery guidance, and vision care in Nehru Nagar, Pimpri.
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 text-xs text-brand-text">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg border border-brand-border">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">Near Vital Multispeciality Hospital, Pimpri</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg border border-brand-border">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">6 Cashless Insurance Partners Accepted</span>
                    </div>
                  </div>

                </div>

                {/* Floating Badge 1: Top Right */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-warm-md border border-brand-border items-center gap-2 animate-bounce duration-1000">
                  <div className="w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-dark-accent">4.8 / 5 Rating</p>
                    <p className="text-[10px] text-brand-muted">107+ Justdial Reviews</p>
                  </div>
                </div>

                {/* TODO: add real qualifications once confirmed by clinic */}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (4 confirmed core pillars, replaces duplicate stats strip) */}
      <WhyChooseUs />

      {/* 3. SERVICES TEASER */}
      <section className="py-10 sm:py-12 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Specialized Eye Care</span>
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent tracking-tight">
            Comprehensive Clinical Services
          </h2>
          <p className="mt-2 text-sm text-brand-muted max-w-xl mx-auto">
            From cataract guidance to vision correction, explore our full range of ophthalmology services.
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold shadow-md shadow-secondary/25 transition-all"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. CLINIC GALLERY TEASER */}
      <section className="py-10 sm:py-12 bg-brand-bg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Environment</span>
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent tracking-tight">
            Modern Diagnostics & Caring Environment
          </h2>
          <p className="mt-2 text-sm text-brand-muted max-w-xl mx-auto">
            Take a look inside Divyam Eye Care — equipped with high-precision diagnostics and a calm patient setting.
          </p>
          <Link
            to="/gallery"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-primary-light text-dark-accent text-sm font-semibold border border-brand-border shadow-warm-sm transition-all"
          >
            <span>View Full Clinic Gallery</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </section>

      {/* 8. HIGH-CONVERTING APPOINTMENT CTA BANNER */}
      <section className="py-12 sm:py-16 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-dark-accent p-6 sm:p-10 md:p-12 text-white shadow-warm-lg relative overflow-hidden text-center sm:text-left border border-dark-deep">
            
            {/* Soft decorative glow */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-secondary/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-primary border border-white/15">
                  <LogoIcon className="w-3.5 h-3.5" />
                  <span>Consultations Available</span>
                </div>
                <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-white tracking-tight">
                  Prioritize Your Vision Today
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
                  Every visit includes thorough testing with modern equipment and a clear, detailed explanation of your results with Dr. Priyanka Murgude.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3 w-full">
                <Link
                  to="/appointment"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-semibold text-sm sm:text-base shadow-lg shadow-secondary/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book Appointment Now</span>
                </Link>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-all text-center"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>View Location & Hours</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
