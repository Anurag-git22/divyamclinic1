import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Contact({ onBookClick }) {
  const scrollToAppointment = () => {
    if (onBookClick) onBookClick();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Google Maps embed URL using the verified location query
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Divyang Eye care, Plot no 109,Shop no 1, Aaikrupa building, Udyamnagar, near Ajmera and, opp. to Swapnanagari, Nehru Nagar, Pimpri Colony, Pune, Maharashtra 411018'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Location & Reach</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Visit Divyang Eye Care
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Conveniently located in Nehru Nagar, Pimpri Colony, easily accessible from New Telco Road and nearby areas.
          </p>
        </div>

        {/* Main Grid: Details on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-dark-accent">
                    Clinic Address
                  </h3>
                  <p className="mt-2 text-sm text-brand-text leading-relaxed font-medium">
                    {clinicData.address.line1},
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-relaxed">
                    {clinicData.address.line2},
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-relaxed">
                    {clinicData.address.landmark},
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-dark-accent mt-1">
                    {clinicData.address.cityStateZip}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Placeholder Card */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary-light text-dark-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-dark-accent">
                    Phone & WhatsApp
                  </h3>
                  <p className="mt-1.5 text-sm text-primary font-semibold">
                    {clinicData.placeholders.phone}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Please use the online appointment form for coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Placeholder Card */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary-light text-dark-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-dark-accent">
                    Consultation Hours
                  </h3>
                  <p className="mt-1.5 text-sm text-dark-accent font-semibold">
                    {clinicData.placeholders.openingHours}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Consultations are scheduled via prior appointment request.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-dark-accent hover:bg-dark-deep text-white text-sm font-semibold shadow-warm-sm hover:shadow-warm-md transition-all group"
              >
                <Navigation className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={scrollToAppointment}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-brand-border p-3 shadow-warm-md overflow-hidden">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-brand-bg">
                <iframe
                  title="Divyang Eye Care Clinic Location Google Maps"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.02]"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-3 flex items-center justify-between text-xs text-brand-muted">
                <span>Near Vital Multispeciality Hospital, Nehru Nagar</span>
                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
