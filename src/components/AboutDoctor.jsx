import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ShieldCheck, FileText, Clock, Sparkles, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import doctorImg from '../assets/dr-priyanka-murgude.jpg';
import LogoIcon from './LogoIcon';

export default function AboutDoctor({ onBookClick }) {
  const scrollToAppointment = () => {
    if (onBookClick) onBookClick();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-8 sm:py-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Visual & Verified Placeholders */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Soft decorative backdrop glow */}
              <div className="absolute -inset-2 rounded-3xl bg-primary/15 blur-xl -z-10" />

              {/* Main Card */}
              <div className="rounded-3xl bg-white border border-brand-border shadow-warm-lg p-4 xs:p-6 sm:p-8 flex flex-col items-center text-center">
                
                {/* Doctor Photo Container */}
                <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/20 group">
                  <img
                    src={doctorImg}
                    alt={`${clinicData.doctor.name} - ${clinicData.doctor.specialization}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/90 text-white shadow-sm mb-1">
                      Available for Consultation
                    </span>
                    <p className="font-display font-bold text-sm leading-tight text-white drop-shadow-sm">
                      {clinicData.doctor.name}
                    </p>
                    <p className="text-[11px] text-white/90">
                      {clinicData.doctor.specialization}
                    </p>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="mt-6 w-full space-y-3 text-left">
                  {/* Credentials */}
                  <div className="p-3 rounded-xl bg-brand-bg/80 border border-brand-border/60 flex items-start gap-3">
                    <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-dark-accent">Patient-First Care</p>
                      <p className="text-[11px] text-brand-muted">
                        Thorough testing with clear explanations of your results.
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="p-3 rounded-xl bg-brand-bg/80 border border-brand-border/60 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-dark-accent">Comprehensive Eye Care</p>
                      <p className="text-[11px] text-brand-muted">
                        From routine eye check-ups to cataract surgery & vision care.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Doctor Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Meet Your Eye Care Specialist</span>
            </div>

            <div className="space-y-1">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
                {clinicData.doctor.name}
              </h2>
              <p className="text-lg font-medium text-primary">
                {clinicData.doctor.specialization} &bull; Divyam Eye Care
              </p>
            </div>

            {/* Biography & Clinic Description section */}
            <div className="space-y-4 text-brand-muted text-base leading-relaxed">
              <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-2">
                  About Dr. Priyanka Murgude
                </h3>
                <p className="text-dark-accent leading-relaxed text-sm sm:text-base">
                  {clinicData.doctor.bio}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-brand-border/80 shadow-warm-sm">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-2">
                  About Divyam Eye Care
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                  {clinicData.description}
                </p>
              </div>
            </div>

            {/* Clinical Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-brand-border/70">
                <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-dark-accent">Evidence-Based Care</h3>
                  <p className="text-xs text-brand-muted mt-0.5">Accurate ophthalmic assessments and transparent treatment plans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-brand-border/70">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-dark-accent">Direct Consultation</h3>
                  <p className="text-xs text-brand-muted mt-0.5">Dedicated one-on-one time to address your questions thoroughly.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-semibold text-sm shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <LogoIcon className="w-4 h-4" />
                <span>Book Consultation with Dr. Murgude</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
