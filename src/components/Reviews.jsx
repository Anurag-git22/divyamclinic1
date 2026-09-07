import React from 'react';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MessageSquare } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Trust Highlight Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-bg via-white to-primary-light/30 border border-brand-border p-8 sm:p-12 lg:p-16 shadow-warm-md overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Big Stats */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Patient Trust & Feedback</span>
              </span>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-5xl sm:text-6xl text-dark-accent">
                  {clinicData.reputation.rating}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    Average Rating on {clinicData.reputation.source}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-brand-border/80 shadow-warm-sm w-full">
                <p className="text-xl sm:text-2xl font-bold text-dark-accent">
                  {clinicData.reputation.reviewCount}
                </p>
                <p className="text-xs text-brand-muted">
                  Documented ratings on Justdial from patients in Pimpri-Chinchwad
                </p>
              </div>

              {/* View Reviews CTA */}
              <a
                href="https://www.justdial.com/Pune/Divyang-Eye-Care-Near-Vital-Multispeciality-Hospital-Nehru-Nagar-Pimpri/020PXX20-XX20-220718163625-L9D7_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-accent hover:bg-dark-deep text-white text-sm font-semibold shadow-warm-sm hover:shadow-warm-md transition-all group"
              >
                <span>View Justdial Profile</span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Right Column: Ethical Neutral Trust Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent tracking-tight">
                  {clinicData.reputation.trustMessage}
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  We believe in transparency and honest clinical ethics. Rather than displaying unverified testimonial quotes, we encourage our patients to explore verified public feedback on Justdial.
                </p>
              </div>

              {/* Trust Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-warm-sm">
                  <ThumbsUp className="w-5 h-5 text-primary mb-2" />
                  <h4 className="text-xs font-bold text-dark-accent">Patient Comfort</h4>
                  <p className="text-[11px] text-brand-muted mt-1">
                    Calm, respectful clinic atmosphere with personal time for every question.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-warm-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                  <h4 className="text-xs font-bold text-dark-accent">Clear Guidance</h4>
                  <p className="text-[11px] text-brand-muted mt-1">
                    Straightforward explanations of diagnoses, remedies, and treatment options.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-warm-sm">
                  <MessageSquare className="w-5 h-5 text-primary mb-2" />
                  <h4 className="text-xs font-bold text-dark-accent">Local Reputation</h4>
                  <p className="text-[11px] text-brand-muted mt-1">
                    Recognized eye care practice in Nehru Nagar, Pimpri Colony.
                  </p>
                </div>
              </div>

              {/* Notice */}
              <p className="text-[11px] text-brand-subtle italic">
                *Verified rating statistics sourced directly from Justdial business listing for Divyang Eye Care (Dr. Priyanka Murgude).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
