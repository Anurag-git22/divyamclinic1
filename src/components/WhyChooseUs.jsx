import React from 'react';
import { Award, HeartHandshake, Sparkles, ShieldCheck, Smile, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const iconMap = {
  Award: Award,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
  MapPin: MapPin,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary-light/60 text-dark-accent mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Patient-Centered Eye Care in Pimpri
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            At Divyang Eye Care, every consultation is guided by medical diligence, clear communication, and thoughtful patient support.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicData.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl bg-brand-bg/50 hover:bg-white border border-brand-border/80 hover:border-secondary/70 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-primary group-hover:text-white text-primary border border-secondary/30 flex items-center justify-center transition-colors duration-200 mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-dark-accent group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center text-xs font-semibold text-secondary-dark group-hover:text-primary transition-colors">
                  <span>Verified Clinic Standard</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
