import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from './LogoIcon';

export default function Footer() {
  return (
    <footer className="bg-dark-accent text-white pt-10 pb-8 border-t border-dark-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-8 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/eye-logo.png" alt="Divyam Eye Care" className="h-9 w-auto object-contain" />
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Divyam Eye Care
                </span>
                <p className="text-xs text-primary font-medium">
                  {clinicData.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated ophthalmology consultations, cataract evaluation, and comprehensive vision care under the leadership of Dr. Priyanka Murgude in Pimpri, Pune.
            </p>

            {/* Social Links */}
            <div className="pt-1 flex items-center gap-3">
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

              <span className="text-xs text-slate-400 ml-2">
                {clinicData.socialMedia.instagram.handle}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation + Key Services (Two columns side-by-side) */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 lg:gap-10">
            {/* Navigation */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="hover:text-primary transition-colors">
                    Cashless Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-primary transition-colors">
                    Clinic Preview
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact & Location
                  </Link>
                </li>
                <li>
                  <Link to="/appointment" className="hover:text-primary font-semibold transition-colors flex items-center gap-1 text-primary">
                    <span>Book Visit</span>
                    <LogoIcon className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Key Services */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
                Key Services
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {clinicData.services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services#${service.id}`}
                      className="hover:text-primary transition-colors block truncate"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="text-xs text-primary hover:underline font-medium">
                    View all services &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Address & Practical Clinic Info */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">
              Clinic Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <span className="font-medium text-white block">Divyam Eye Care</span>
                  {clinicData.address.line1}, {clinicData.address.line2}, {clinicData.address.landmark}, {clinicData.address.cityStateZip}
                </address>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>{clinicData.placeholders.openingHours}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{clinicData.placeholders.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-primary text-xs font-semibold text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Divyam Eye Care. All rights reserved. Dr. Priyanka Murgude.
          </p>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Verified Clinic Practice &bull; Nehru Nagar, Pimpri</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
