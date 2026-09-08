import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ShieldCheck, Award, HeartHandshake, Sparkles, Calendar, CheckCircle2, Star } from 'lucide-react';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import LogoIcon from '../components/LogoIcon';
import { clinicData } from '../data/clinicData';

export default function AboutPage() {
  return (
    <div className="pt-4 pb-16 space-y-6">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <LogoIcon className="w-4 h-4" />
          <span>About Divyam Eye Care</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Experienced Eye Care, Patient-First Approach
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Learn more about Dr. Priyanka Murgude and our commitment to clear, compassionate ophthalmology in Pimpri, Pune.
        </p>
      </section>

      {/* Main Doctor & Clinic Overview Component */}
      <AboutDoctor />

      {/* Why Choose Us Principles */}
      <WhyChooseUs />

      {/* Patient Reviews / Testimonials */}
      <Reviews />

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-accent text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-lg border border-dark-deep relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Schedule Your Consultation with Dr. Murgude
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              Accurate diagnostics, clear explanations, and thoughtful ophthalmic treatment tailored to you.
            </p>
          </div>
          <Link
            to="/appointment"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-bold text-sm shadow-lg shadow-secondary/30 hover:shadow-xl transition-all shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
