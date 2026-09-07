import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';
import CoralEyeIcon from '../components/CoralEyeIcon';

export default function ContactPage() {
  return (
    <div className="pt-6 pb-20 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <MapPin className="w-4 h-4" />
          <span>Location & Reach</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Find & Contact Divyang Eye Care
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Conveniently located on New Telco Road, Nehru Nagar, Pimpri Colony, Pune. Get directions or contact our desk.
        </p>
      </section>

      {/* Main Contact & Location Component */}
      <Contact />

    </div>
  );
}
