import React from 'react';
import { Heart, Calendar, Users } from 'lucide-react';
import { campVideos } from '../data/campVideos';
import VideoGrid from '../components/VideoGrid';
import LogoIcon from '../components/LogoIcon';

export default function SocietyPage() {
  return (
    <div className="pt-4 pb-16 space-y-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <Heart className="w-4 h-4" />
          <span>Community Service</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Service to the Society
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Dr. Priyanka Murgude conducts free eye check-up camps in MIDC factories and at spiritual centres, and runs eye awareness programs in academic institutions and multinational companies, committed to accessible eye care for all.
        </p>
      </section>

      {/* Our Camps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent mb-2">
            Our Camps
          </h2>
          <p className="text-brand-muted">
            Eye screening camps and awareness programs conducted across various organizations
          </p>
        </div>

        <VideoGrid videos={campVideos} />

        {/* Empty State - shown when no videos */}
        {(!campVideos || campVideos.length === 0) && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-dark-accent mb-3">
              Community Eye Care Camps
            </h3>
            <p className="text-brand-muted max-w-lg mx-auto mb-6">
              We regularly organize free eye screening camps and awareness programs. Details of upcoming and past camps will be updated here.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-bg border border-brand-border text-sm text-brand-muted">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Camp information coming soon</span>
            </div>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary-light/50 border border-primary/20 p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-dark-accent mb-3">
            Interested in Organizing a Free Eye Camp?
          </h3>
          <p className="text-brand-muted mb-6 max-w-2xl mx-auto">
            We partner with schools, community centers, and organizations to provide free eye screenings and awareness programs. Contact us to organize a camp in your area.
          </p>
          <a
            href="tel:8446265650"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-sm shadow-md transition-all"
          >
            <LogoIcon className="w-5 h-5" />
            <span>Contact for Camps: 8446265650</span>
          </a>
        </div>
      </section>

    </div>
  );
}
