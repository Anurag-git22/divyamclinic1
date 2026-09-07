import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import Gallery from '../components/Gallery';
import CoralEyeIcon from '../components/CoralEyeIcon';
import { clinicData } from '../data/clinicData';

export default function GalleryPage() {
  return (
    <div className="pt-6 pb-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <Camera className="w-4 h-4" />
          <span>Visual Walkthrough</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Clinic Spaces & Environment
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Designed for calm patient comfort, hygiene, and focused ophthalmology consultations on New Telco Road, Pimpri.
        </p>
      </section>

      {/* Main Gallery Component */}
      <Gallery />

      {/* Location & Visit Guidance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-border shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Easy Accessibility</span>
            </div>
            <h3 className="font-display font-bold text-xl text-dark-accent">
              Visit Divyam Eye Care in Pimpri
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted max-w-lg leading-relaxed">
              Located at Shop No. 1, Aaikrupa Building, near Vital Multispeciality Hospital and opposite Swapnanagari, Nehru Nagar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover text-white text-xs font-semibold shadow-sm transition-all"
            >
              <CoralEyeIcon className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-brand-bg hover:bg-brand-border/60 text-dark-accent text-xs font-semibold border border-brand-border transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Get Directions</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
