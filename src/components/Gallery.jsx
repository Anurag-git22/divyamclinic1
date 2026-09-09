import React from 'react';
import { Camera, Building, Stethoscope, Eye, Sparkles, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const categoryIcons = {
  interior: Building,
  consultation: Stethoscope,
  equipment: Eye,
  exterior: MapPin,
};

export default function Gallery() {
  const filteredItems = clinicData.gallery;

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Spaces & Environment</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Clinic Preview & Diagnostics
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Clinical spaces and diagnostic stations at Divyam Eye Care on New Telco Road, Nehru Nagar, Pimpri.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-brand-border text-xs text-brand-muted shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Modern Ophthalmic Practice &bull; Dr. Priyanka Murgude</span>
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            const CategoryIcon = categoryIcons[item.type] || Building;
            return (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                 {/* Visual Image/Graphic Container */}
                 <div className="relative h-56 sm:h-72 w-full bg-gradient-to-br from-primary-light/40 via-brand-bg to-secondary-light/40 p-4 xs:p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                   <div className="absolute inset-0 subtle-grid-pattern opacity-60 pointer-events-none" />
                   <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-warm-md border border-brand-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                     <CategoryIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                   </div>
                   <h3 className="relative font-display font-bold text-base sm:text-lg text-dark-accent mt-3">
                     {item.title}
                   </h3>
                   <p className="relative text-xs sm:text-sm text-brand-muted mt-1 max-w-md">
                     {item.description}
                   </p>
                 </div>

                {/* Card Description Footer */}
                <div className="p-4 sm:p-5 bg-white border-t border-brand-border">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-secondary">
                        {item.category}
                      </span>
                      <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-lg bg-brand-bg border border-brand-border text-brand-muted shrink-0">
                      Pimpri, Pune
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
