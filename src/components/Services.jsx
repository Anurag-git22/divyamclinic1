import React from 'react';
import { Eye, ShieldAlert, Activity, Glasses, Stethoscope, SmilePlus, ArrowRight, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const serviceIcons = {
  Eye: Eye,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Glasses: Glasses,
  Stethoscope: Stethoscope,
  SmilePlus: SmilePlus,
};

export default function Services({ onSelectService }) {
  const handleBookService = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const target = document.querySelector('#appointment');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            Clinical Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Comprehensive Ophthalmology Services
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Professional ophthalmic consultations, clear diagnostic evaluations, and compassionate treatment guidance tailored to your visual wellbeing.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicData.services.map((service) => {
            const Icon = serviceIcons[service.icon] || Eye;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 bg-brand-bg/40 hover:bg-white border border-brand-border/80 hover:border-primary/40 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon with subtle warm hover animation */}
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-white border border-secondary/40 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm mb-5">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-dark-accent group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="mt-2.5 text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-5 border-t border-brand-border/50 flex items-center justify-between">
                  <button
                    onClick={() => handleBookService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover group-hover:underline transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-brand-subtle font-medium">Nehru Nagar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Healthcare Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-subtle max-w-xl mx-auto">
            Note: All treatments and procedures begin with a comprehensive clinical consultation with Dr. Priyanka Murgude to determine individual medical suitability.
          </p>
        </div>

      </div>
    </section>
  );
}
