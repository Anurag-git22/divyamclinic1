import React from 'react';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';
import { clinicData } from '../data/clinicData';
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
          Divyam Eye Care is committed to serving the community through free eye screening camps, awareness programs, and accessible eye care initiatives in Pimpri and surrounding areas.
        </p>
      </section>

      {/* Camps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {clinicData.camps && clinicData.camps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicData.camps.map((camp) => (
              <div
                key={camp.id}
                className="rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all overflow-hidden"
              >
                {/* Camp Images */}
                {camp.images && camp.images.length > 0 && (
                  <div className="relative h-48 w-full bg-brand-bg">
                    <img
                      src={camp.images[0]}
                      alt={camp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Camp Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-lg text-dark-accent">
                    {camp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{camp.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{camp.location}</span>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {camp.description}
                  </p>

                  {/* Video Embed */}
                  {camp.videoUrl && (
                    <div className="pt-2">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <iframe
                          src={camp.videoUrl}
                          title={camp.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Placeholder when no camps data
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
            href={`tel:${clinicData.placeholders.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-sm shadow-md transition-all"
          >
            <LogoIcon className="w-5 h-5" />
            <span>Contact for Camps: {clinicData.placeholders.phone}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
