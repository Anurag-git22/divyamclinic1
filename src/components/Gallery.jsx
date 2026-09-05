import React, { useState } from 'react';
import { Camera, Building, Stethoscope, Eye, Sparkles, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const categoryIcons = {
  interior: Building,
  consultation: Stethoscope,
  equipment: Eye,
  exterior: MapPin,
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'Clinic Interior', label: 'Clinic Interior' },
    { id: 'Consultation Area', label: 'Consultation Area' },
    { id: 'Eye Care Environment', label: 'Eye Care Environment' },
    { id: 'Clinic Exterior', label: 'Clinic Exterior' },
  ];

  const filteredItems = activeCategory === 'all'
    ? clinicData.gallery
    : clinicData.gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary-light/80 text-dark-accent mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Spaces & Environment</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Clinic Preview
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Designed for patient serenity, clean clinical protocols, and attentive eye consultations in Pimpri.
          </p>

          {/* Transparent Notice */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-secondary/40 text-xs text-brand-muted shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Official clinic photographs will be added following Dr. Priyanka Murgude's review.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white hover:bg-secondary-light/50 text-brand-text border border-brand-border/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            const CategoryIcon = categoryIcons[item.type] || Building;
            return (
              <div
                key={item.category}
                className="group relative rounded-3xl bg-white border border-brand-border/80 shadow-warm-sm hover:shadow-warm-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Graphic Container */}
                <div className="relative h-60 sm:h-72 w-full bg-gradient-to-br from-secondary-light/40 via-brand-bg to-primary-soft/30 p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                  
                  {/* Subtle architectural lines */}
                  <div className="absolute inset-0 subtle-grid-pattern opacity-60 pointer-events-none" />

                  {/* Icon illustration */}
                  <div className="relative w-20 h-20 rounded-2xl bg-white/90 shadow-warm-md border border-secondary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <CategoryIcon className="w-10 h-10" />
                  </div>

                  <h3 className="relative font-display font-bold text-lg text-dark-accent mt-4">
                    {item.title}
                  </h3>

                  {/* Placeholder Badge Overlay */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-secondary/60 text-[11px] font-medium text-dark-accent shadow-sm">
                    <Camera className="w-3 h-3 text-primary" />
                    <span>{item.placeholderLabel}</span>
                  </div>

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Card Description Footer */}
                <div className="p-6 bg-white border-t border-brand-border/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <p className="text-sm text-brand-muted mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-brand-bg border border-brand-border text-brand-muted">
                      Nehru Nagar
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
