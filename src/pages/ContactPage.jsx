import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';
import LogoIcon from '../components/LogoIcon';

export default function ContactPage() {
  return (
    <div className="pt-4 pb-16 space-y-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3 sm:mb-4">
          <MapPin className="w-4 h-4" />
          <span>Location & Reach</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark-accent tracking-tight px-4">
          Find & Contact Divyam Eye Care
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed px-4">
          Conveniently located near Vital Multispeciality Hospital, Udyam Nagar and Nehru Nagar, Pimpri Colony, Pune. Get directions or contact our desk.
        </p>
      </section>

      {/* Main Contact & Location Component */}
      <Contact />

    </div>
  );
}
