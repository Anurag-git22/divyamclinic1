import React from 'react';
import { Eye, ShieldAlert, Activity, Glasses, Stethoscope, SmilePlus, ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const serviceIcons = {
  Eye: Eye,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Glasses: Glasses,
  Stethoscope: Stethoscope,
  SmilePlus: SmilePlus,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2,
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
    <section id="services" className="py-12 sm:py-16 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Clinical Specialties & Procedures</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Comprehensive Ophthalmology Services
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Professional ophthalmic consultations, clear diagnostic evaluations, and compassionate treatment guidance tailored to your visual wellbeing in Nehru Nagar, Pimpri.
          </p>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicData.services.map((service) => {
            const Icon = serviceIcons[service.icon] || Eye;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-5 bg-brand-bg hover:bg-white border border-brand-border hover:border-primary/50 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Service Icon with vibrant hover */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>

                    {service.category && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/20 truncate max-w-[120px]">
                        {service.category}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-dark-accent group-hover:text-primary transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between">
                  <button
                    onClick={() => handleBookService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary-hover group-hover:underline transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-brand-subtle font-medium">Nehru Nagar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Healthcare Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-subtle max-w-xl mx-auto">
            Note: All treatments and surgical guidance begin with a thorough in-person clinical consultation with Dr. Priyanka Murgude to determine individual medical suitability.
          </p>
        </div>

      </div>
    </section>
  );
}
