import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  MapPin, 
  UserCheck, 
  CheckCircle2, 
  Eye, 
  Sparkles,
  Award,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import doctorImg from '../assets/dr-priyanka-murgude.jpg';
import CoralEyeIcon from '../components/CoralEyeIcon';

export default function Home() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden warm-mesh-gradient">
        {/* Decorative blur orbs matching Teal & Orange */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary-light/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 right-[-100px] w-96 h-96 bg-secondary-light/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/30 shadow-warm-sm text-xs sm:text-sm font-semibold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>{clinicData.badgeText}</span>
                <span className="text-brand-muted">|</span>
                <span className="text-brand-muted font-medium">Nehru Nagar</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-dark-accent tracking-tight leading-[1.15]">
                  Clear Vision. <br />
                  <span className="text-primary relative inline-block">
                    Better Living.
                    <svg className="absolute left-0 -bottom-2 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 250 12" fill="none">
                      <path d="M2 9C50 3 150 2 248 8" stroke="#FD7401" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
                {clinicData.heroSubtitle}
              </p>

              {/* Doctor Highlight Banner */}
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-border shadow-warm-sm w-full sm:w-auto">
                <div className="w-13 h-13 w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/40 flex-shrink-0 shadow-sm">
                  <img
                    src={doctorImg}
                    alt={clinicData.doctor.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display font-bold text-base sm:text-lg text-dark-accent">
                      {clinicData.doctor.name}
                    </h2>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                      Verified Specialist
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    {clinicData.doctor.specialization} &bull; Pimpri, Pune
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-base shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <CoralEyeIcon className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-primary-light/40 text-dark-accent font-semibold text-base border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all duration-200 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators Pill Row */}
              <div className="pt-4 border-t border-brand-border/80 w-full">
                <div className="grid grid-cols-3 gap-3 sm:gap-6 text-left">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-dark-accent font-bold text-lg sm:text-xl">
                      <span>{clinicData.reputation.rating}</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs text-brand-muted">Average Rating</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-dark-accent font-bold text-lg sm:text-xl">
                      {clinicData.reputation.reviewCount}
                    </div>
                    <span className="text-xs text-brand-muted">Patient Reviews</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-primary font-bold text-sm sm:text-base">
                      <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Cashless</span>
                    </div>
                    <span className="text-xs text-brand-muted">6 Insurance Partners</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Doctor Profile Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                
                {/* Background ambient glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/15 via-secondary/20 to-transparent blur-xl opacity-70" />
                
                <div className="relative rounded-3xl bg-white border border-brand-border shadow-warm-lg p-6 sm:p-8 overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-brand-border/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                        <CoralEyeIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm text-dark-accent">Divyam Eye Care</h3>
                        <p className="text-[11px] text-brand-muted">Ophthalmology Practice</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      Open for Bookings
                    </span>
                  </div>

                  {/* Doctor Visual Card */}
                  <div className="my-5 relative py-5 px-4 rounded-2xl bg-gradient-to-b from-brand-bg to-primary-light/30 border border-primary/20 flex flex-col items-center justify-center text-center">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/40 mb-3.5 group">
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
                      {clinicData.doctor.specialization} &bull; Pimpri, Pune
                    </p>
                    <p className="text-xs text-brand-muted max-w-xs mt-1.5 leading-relaxed">
                      Specialized diagnostic guidance, vision care, and cataract surgery consultations in Nehru Nagar.
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 text-xs text-brand-text">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg border border-brand-border/80">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="truncate">Near Vital Multispeciality Hospital, Pimpri</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-bg border border-brand-border/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>6 Cashless Insurance Partners Accepted</span>
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

                {/* Floating Badge 2: Bottom Left */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white px-4 py-2.5 rounded-2xl shadow-warm-md border border-brand-border items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/30 flex-shrink-0">
                    <img
                      src={doctorImg}
                      alt={clinicData.doctor.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-dark-accent">{clinicData.doctor.name}</p>
                    <p className="text-[10px] text-brand-muted">{clinicData.doctor.specialization}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK SERVICES TEASER */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
                Core Clinical Specialties
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
                Comprehensive Eye Care Services
              </h2>
              <p className="mt-2 text-base text-brand-muted">
                From routine visual exams to surgical guidance, all treatments begin with thorough diagnostics by Dr. Priyanka Murgude.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover group"
              >
                <span>View All Services & Procedures</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicData.services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-brand-bg/50 hover:bg-white border border-brand-border hover:border-primary/40 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-5 shadow-sm">
                    <CoralEyeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-dark-accent group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.name)}`}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRUST & STATS STRIP */}
      <section className="py-14 bg-gradient-to-r from-primary-light via-brand-bg to-primary-soft/40 border-b border-brand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 flex-shrink-0">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-dark-accent">4.8 / 5.0</p>
                <p className="text-xs text-brand-muted">107+ Justdial Reviews</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-dark-accent">Dr. Priyanka</p>
                <p className="text-xs text-brand-muted">Experienced Ophthalmologist</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-dark-accent">6 Partners</p>
                <p className="text-xs text-brand-muted">Cashless Insurance Support</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-dark-accent">Nehru Nagar</p>
                <p className="text-xs text-brand-muted">Pimpri Colony, Pune</p>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
            >
              <span>Read more about Dr. Priyanka Murgude & Divyam Eye Care Clinic</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. APPOINTMENT CTA BANNER */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-dark-accent via-slate-900 to-dark-deep p-8 sm:p-12 text-white shadow-warm-lg relative overflow-hidden text-center sm:text-left">
            
            {/* Soft decorative background circles */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-primary border border-white/15">
                  <CoralEyeIcon className="w-3.5 h-3.5" />
                  <span>Consultation Available</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Prioritize Your Vision Today
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  Every visit includes thorough testing and a clear, detailed explanation of your results, so you always know exactly what's happening with your eyes.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3.5">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-base shadow-lg shadow-secondary/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all"
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
