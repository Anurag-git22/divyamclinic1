import React from 'react';
import { UserCheck, Calendar, ShieldCheck, FileText, Clock, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import doctorImg from '../assets/dr-priyanka-murgude.jpg';

export default function AboutDoctor({ onBookClick }) {
  const scrollToAppointment = () => {
    if (onBookClick) onBookClick();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Visual & Verified Placeholders */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Soft decorative backdrop glow */}
              <div className="absolute -inset-2 rounded-3xl bg-secondary/20 blur-xl -z-10" />

              {/* Main Card */}
              <div className="rounded-3xl bg-white border border-brand-border shadow-warm-lg p-6 sm:p-8 flex flex-col items-center text-center">
                
                {/* Doctor Photo Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/20 group">
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
                  {/* Credentials Placeholder */}
                  <div className="p-3 rounded-xl bg-brand-bg/80 border border-brand-border/60 flex items-start gap-3">
                    <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-dark-accent">Verified Credentials</p>
                      <p className="text-[11px] text-brand-muted">
                        {clinicData.doctor.credentialsPlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Experience Placeholder */}
                  <div className="p-3 rounded-xl bg-brand-bg/80 border border-brand-border/60 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-secondary-dark mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-dark-accent">Clinical Experience</p>
                      <p className="text-[11px] text-brand-muted">
                        {clinicData.doctor.experiencePlaceholder}
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

            {/* Biography section using strictly verified instructions */}
            <div className="space-y-4 text-brand-muted text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
                <p className="italic text-brand-text">
                  &ldquo;{clinicData.doctor.bioPlaceholder}&rdquo;
                </p>
                <span className="block text-xs text-brand-subtle mt-2">
                  Official clinical bio and specialized affiliations will be published once fully approved by Dr. Priyanka Murgude.
                </span>
              </div>

              {/* Consultation-focused message */}
              <p>
                Dr. Priyanka Murgude provides thoughtful, individualized ophthalmology consultations at Divyam Eye Care in Pimpri. Each session is structured to give patients comprehensive insight into their eye health, from routine vision checkups and infection care to detailed guidance on cataract and vision correction procedures.
              </p>
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
                <Calendar className="w-5 h-5 text-secondary-dark mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-dark-accent">Direct Consultation</h3>
                  <p className="text-xs text-brand-muted mt-0.5">Dedicated one-on-one time to address your questions thoroughly.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={scrollToAppointment}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md shadow-primary/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Murgude</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
