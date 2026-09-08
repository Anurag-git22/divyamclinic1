import React from 'react';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary mb-3">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span>Verified Patient Experience</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Trusted by Patients Across Pimpri-Chinchwad
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Real feedback from verified patients who visited Divyam Eye Care for consultations, cataract guidance, and precision vision care.
          </p>
        </div>

        {/* Top Trust Summary Banner */}
        <div className="rounded-3xl bg-brand-bg border border-brand-border p-6 sm:p-10 mb-12 shadow-warm-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Big Number */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-brand-border pb-6 md:pb-0 md:pr-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-5xl sm:text-6xl text-dark-accent">
                  {clinicData.reputation.rating}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-xs text-brand-muted mt-1 font-semibold">
                    Overall Satisfaction Rating
                  </p>
                </div>
              </div>
              <p className="text-xs text-brand-muted mt-3">
                Based on <span className="font-bold text-dark-accent">{clinicData.reputation.reviewCount}</span> documented patient ratings on {clinicData.reputation.source} & Google Listings.
              </p>
            </div>

            {/* Middle Feature Highlights */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-2xl bg-white border border-brand-border">
                <div className="flex items-center gap-1.5 text-primary font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>100% Attentive</span>
                </div>
                <p className="text-xs text-brand-muted mt-1">
                  Dr. Priyanka personally conducts all diagnostic exams.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-brand-border">
                <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Hi-Tech Care</span>
                </div>
                <p className="text-xs text-brand-muted mt-1">
                  Modern slit-lamp & precision optical equipment.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-accent hover:bg-dark-deep text-white text-xs font-semibold shadow-warm-sm hover:shadow-warm-md transition-all group"
              >
                <span>View Google Listing</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* 4 Real Patient Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {clinicData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md hover:border-primary/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
                    {rev.service}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-brand-text leading-relaxed font-medium">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-dark-accent">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-brand-muted">
                    {rev.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Local Verification Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-brand-subtle">
            *Reviews verified from Justdial & Google Business listings for Divyam Eye Care (Dr. Priyanka Murgude, Pimpri Colony, Pune).
          </p>
        </div>

      </div>
    </section>
  );
}
