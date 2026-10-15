import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ShieldCheck, FileText, Clock, Sparkles, Calendar, Award, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from './LogoIcon';

const doctorImg = '/Dr-priyanka-murgude.jpeg';

export default function AboutDoctor({ onBookClick }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const scrollToAppointment = () => {
    if (onBookClick) onBookClick();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (award) => {
    setSelectedAward(award);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedAward(null);
  };

  return (
    <section id="about" className="py-6 sm:py-10 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Visual & Verified Placeholders */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Soft decorative backdrop glow */}
              <div className="absolute -inset-2 rounded-3xl bg-primary/15 blur-xl -z-10" />

              {/* Main Card */}
              <div className="rounded-3xl bg-white border border-brand-border shadow-warm-lg p-4 xs:p-6 sm:p-8 flex flex-col items-center text-center">
                
                {/* Available Badge - Top Right Corner */}
                <div className="relative w-full mb-3">
                  <span className="absolute top-0 right-0 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500 text-white shadow-md z-10">
                    Available for Consultation
                  </span>
                </div>

                {/* Doctor Photo Container - No text overlay */}
                <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-warm-md border-2 border-primary/20 group">
                  <img
                    src={doctorImg}
                    alt={`${clinicData.doctor.name} - ${clinicData.doctor.specialization}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Doctor Name & Title - Below Photo */}
                <div className="mt-4 text-center">
                  <h3 className="font-display font-bold text-base sm:text-lg text-dark-accent">
                    {clinicData.doctor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {clinicData.doctor.specialization}
                  </p>
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
              
              {/* Highlight Badges */}
              {clinicData.doctor.highlights && clinicData.doctor.highlights.length > 0 && (
                <div className="cards-grid sm:flex sm:flex-wrap w-full">
                  {clinicData.doctor.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="card-compact inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[14px] sm:rounded-full text-[10px] sm:text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 truncate"
                    >
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-2">
                  About Dr. Priyanka Murgude
                </h3>
                <div className="text-dark-accent leading-relaxed text-sm sm:text-base space-y-3">
                  {clinicData.doctor.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
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
            <div className="cards-grid sm:grid-cols-2 w-full pt-2">
              <div className="card-compact flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-[14px] sm:rounded-xl bg-white border border-brand-border/70 h-full">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-dark-accent truncate">Evidence-Based Care</h3>
                  <p className="text-[10px] sm:text-xs text-brand-muted mt-0.5 line-clamp-3 sm:line-clamp-none">Accurate ophthalmic assessments and transparent treatment plans.</p>
                </div>
              </div>

              <div className="card-compact flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-[14px] sm:rounded-xl bg-white border border-brand-border/70 h-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-dark-accent truncate">Direct Consultation</h3>
                  <p className="text-[10px] sm:text-xs text-brand-muted mt-0.5 line-clamp-3 sm:line-clamp-none">Dedicated one-on-one time to address your questions thoroughly.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-semibold text-sm shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <LogoIcon className="w-5 h-5" />
                <span>Book Consultation with Dr. Murgude</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Awards & Recognitions Section */}
        {clinicData.awards && clinicData.awards.length > 0 && (
          <div className="mt-12 pt-10 border-t border-brand-border/50">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Recognition & Excellence</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent">
                Awards & Recognitions
              </h2>
            </div>

            <div className="cards-grid md:grid-cols-3 lg:grid-cols-4">
              {clinicData.awards.map((award) => (
                <div
                  key={award.id}
                  onClick={() => openLightbox(award)}
                  className="card-compact group relative rounded-[14px] sm:rounded-xl overflow-hidden bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all cursor-pointer h-full flex flex-col justify-between"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 sm:p-3">
                    <p className="text-[11px] sm:text-xs font-semibold text-dark-accent text-center line-clamp-2">
                      {award.caption}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-primary bg-white px-3 py-1.5 rounded-full shadow-md">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxOpen && selectedAward && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 font-semibold">
                {selectedAward.caption}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
