import React from 'react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Insurance() {
  return (
    <section id="insurance" className="py-16 sm:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cashless Facility</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Cashless Insurance Support
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            We work with selected insurance partners to facilitate a smooth experience. Please confirm eligibility and coverage with the clinic before your visit.
          </p>
        </div>

        {/* 6 Partners Elegant Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {clinicData.insurancePartners.map((partner) => (
            <div
              key={partner.name}
              className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-warm-sm hover:shadow-warm-md hover:border-secondary transition-all flex flex-col items-center text-center justify-between min-h-[140px] group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-light/60 flex items-center justify-center text-dark-accent mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-dark-accent group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <span className="text-[11px] text-brand-muted block mt-1">
                  {partner.type}
                </span>
              </div>
              <div className="mt-2 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Partner
              </div>
            </div>
          ))}
        </div>

        {/* Informational Disclaimer Notice */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-secondary/40 shadow-warm-sm flex items-start gap-3.5">
          <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            <span className="font-semibold text-dark-accent">Important Note: </span>
            Insurance coverage, pre-authorization guidelines, and cashless availability are subject to applicable policy terms, policy limits, and final clinic confirmation. Patients are advised to carry their insurance card and photo ID during consultation.
          </div>
        </div>

      </div>
    </section>
  );
}
