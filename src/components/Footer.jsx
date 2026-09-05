import React from 'react';
import { Eye, MapPin, Phone, Clock, ExternalLink, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-accent text-white pt-16 pb-12 border-t border-dark-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Divyam Eye Care
                </span>
                <p className="text-xs text-secondary font-medium">
                  {clinicData.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-secondary-light/80 leading-relaxed max-w-sm">
              Dedicated ophthalmology consultations, cataract evaluation, and eye care services under the leadership of Dr. Priyanka Murgude in Pimpri, Pune.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={clinicData.socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={clinicData.socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              <span className="text-xs text-secondary-light/60 ml-2">
                {clinicData.socialMedia.instagram.handle}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-secondary-light/80">
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-primary transition-colors">
                  About Doctor
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')} className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#insurance" onClick={(e) => scrollTo(e, '#insurance')} className="hover:text-primary transition-colors">
                  Cashless Insurance
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollTo(e, '#reviews')} className="hover:text-primary transition-colors">
                  Justdial Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')} className="hover:text-primary transition-colors">
                  Clinic Preview
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="hover:text-primary transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
              Eye Care Services
            </h4>
            <ul className="space-y-2 text-sm text-secondary-light/80">
              {clinicData.services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, '#services')}
                    className="hover:text-primary transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Clinic Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
              Clinic Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-secondary-light/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Shop 1, Plot 109, Aaikrupa Building, Udyamnagar, New Telco Rd, Pimpri Colony, Pune 411018
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-secondary-light/90 italic">{clinicData.placeholders.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-secondary-light/90 italic">{clinicData.placeholders.openingHours}</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-light/60">
          <p>
            &copy; 2026 Divyam Eye Care. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Dr. Priyanka Murgude &bull; Ophthalmologist</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
