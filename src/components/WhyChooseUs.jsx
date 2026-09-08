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
    <section className="py-16 sm:py-24 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>Clinical Standards & Trust</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Why Choose Divyam Eye Care
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
            Every consultation is guided by dedicated one-on-one attention, high-precision diagnostics, and transparent patient care in Pimpri, Pune.
          </p>
        </div>

        {/* 4 Confirmed Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {clinicData.whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="group relative p-5 xs:p-6 sm:p-7 rounded-3xl bg-brand-bg hover:bg-white border border-brand-border hover:border-primary/50 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-primary group-hover:text-white text-primary border border-brand-border flex items-center justify-center transition-colors duration-200 shadow-sm">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>

                    {(item.tag || item.metric) && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20 truncate max-w-[130px]">
                        {item.tag || item.metric}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-dark-accent group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border flex items-center text-xs font-semibold text-secondary group-hover:text-primary transition-colors">
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
