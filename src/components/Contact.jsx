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
    'Divyam Eye care, Plot no 109,Shop no 1, Aaikrupa building, Udyamnagar, near Ajmera and, opp. to Swapnanagari, Nehru Nagar, Pimpri Colony, Pune, Maharashtra 411018'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-10 sm:py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Details on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 cards-grid lg:flex lg:flex-col lg:space-y-5">
            
            {/* Address Card (Full width on mobile) */}
            <div className="col-span-2 card-compact p-4 xs:p-5 sm:p-6 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-dark-accent">
                    Clinic Address
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-brand-text leading-relaxed font-medium">
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

            {/* Phone Card with Clickable Links */}
            <div className="col-span-1 card-compact p-3 sm:p-6 rounded-[14px] sm:rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex flex-col justify-between h-full">
              <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-secondary-light text-dark-accent flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="font-display font-bold text-xs sm:text-base text-dark-accent">
                    Phone & WhatsApp
                  </h3>
                  <div className="mt-1 sm:mt-1.5 space-y-0.5 sm:space-y-1">
                    <a
                      href={`tel:${clinicData.placeholders.phone}`}
                      className="block text-xs sm:text-sm text-primary font-semibold hover:underline truncate"
                    >
                      {clinicData.placeholders.phone}
                    </a>
                    {clinicData.placeholders.phoneSecondary && (
                      <a
                        href={`tel:${clinicData.placeholders.phoneSecondary}`}
                        className="block text-[11px] sm:text-sm text-primary font-semibold hover:underline truncate"
                      >
                        {clinicData.placeholders.phoneSecondary}
                      </a>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-brand-muted mt-1 line-clamp-2">
                    Call for prior booking
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Placeholder Card */}
            <div className="col-span-1 card-compact p-3 sm:p-6 rounded-[14px] sm:rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm flex flex-col justify-between h-full">
              <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-secondary-light text-dark-accent flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="font-display font-bold text-xs sm:text-base text-dark-accent">
                    Consultation Hours
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-dark-accent font-semibold leading-tight">
                    {clinicData.placeholders.openingHours}
                  </p>
                  <p className="text-[10px] sm:text-xs text-brand-muted mt-1 line-clamp-2">
                    Prior appointment request
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-dark-accent hover:bg-dark-deep text-white text-xs sm:text-sm font-semibold shadow-warm-sm hover:shadow-warm-md transition-all group text-center"
              >
                <Navigation className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={scrollToAppointment}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-brand-border p-2.5 sm:p-3 shadow-warm-md overflow-hidden">
              <div className="relative w-full h-[280px] xs:h-[350px] sm:h-[460px] rounded-2xl overflow-hidden bg-brand-bg">
                <iframe
                  title="Divyam Eye Care Clinic Location Google Maps"
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
