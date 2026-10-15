import React, { useState } from 'react';
import { Camera, Building, Stethoscope, Eye, Sparkles, MapPin, Play, Star } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const categoryIcons = {
  interior: Building,
  consultation: Stethoscope,
  equipment: Eye,
  exterior: MapPin,
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');
  const filteredItems = clinicData.gallery;

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Spaces & Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Gallery & Patient Reviews
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Clinical spaces at Divyam Eye Care and patient testimonials
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-brand-border text-xs text-brand-muted shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Modern Ophthalmic Practice &bull; Dr. Priyanka Murgude</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white border border-brand-border shadow-warm-sm">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'photos'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-brand-muted hover:text-dark-accent'
              }`}
            >
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Clinic Photos
              </span>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-brand-muted hover:text-dark-accent'
              }`}
            >
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Customer Reviews
              </span>
            </button>
          </div>
        </div>

        {/* Hospital Video Section (if enabled) */}
        {activeTab === 'photos' && clinicData.hospitalVideo && clinicData.hospitalVideo.enabled && clinicData.hospitalVideo.url && (
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-white border border-brand-border shadow-warm-md">
              <div className="relative aspect-video">
                <iframe
                  src={clinicData.hospitalVideo.url}
                  title={clinicData.hospitalVideo.title || "Divyam Eye Care Hospital Tour"}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {clinicData.hospitalVideo.title && (
                <div className="p-4 bg-white border-t border-brand-border">
                  <p className="font-semibold text-dark-accent flex items-center gap-2">
                    <Play className="w-4 h-4 text-primary" />
                    {clinicData.hospitalVideo.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Clinic Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => {
              const CategoryIcon = categoryIcons[item.type] || Building;
              
              // Map each gallery item to the correct image
              const imageMap = {
                'Eye Care Equipment': '/Interior1.jpg',
                'Clinic Interior': '/Interior.jpg', 
                'Doctor Consultation': '/Consultation.jpg',
                'Clinic Exterior': '/Exterior.jpg'
              };
              
              return (
                <div
                  key={item.title}
                  className="group relative rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                   {/* Actual Image */}
                   <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                     <img 
                       src={imageMap[item.category]} 
                       alt={item.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       loading="lazy"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 via-transparent to-transparent" />
                     <div className="absolute bottom-4 left-4 right-4">
                       <div className="w-12 h-12 rounded-2xl bg-white shadow-warm-md border border-brand-border flex items-center justify-center text-primary mb-3">
                         <CategoryIcon className="w-6 h-6" />
                       </div>
                       <h3 className="font-display font-bold text-base sm:text-lg text-white">
                         {item.title}
                       </h3>
                     </div>
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
        )}

        {/* Customer Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            {clinicData.reviewVideos && clinicData.reviewVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinicData.reviewVideos.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all overflow-hidden flex flex-col"
                  >
                    {/* Video Player */}
                    <div className="relative aspect-video bg-black">
                      <video
                        controls
                        preload="none"
                        poster={review.poster}
                        className="w-full h-full object-contain"
                        aria-label={review.title}
                      >
                        <source src={review.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    {/* Review Details */}
                    <div className="p-4 space-y-2 flex-1">
                      <div className="flex items-center gap-1 text-secondary">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <h3 className="font-display font-semibold text-base text-dark-accent">
                        {review.title}
                      </h3>
                      {review.description && (
                        <p className="text-sm text-brand-muted">
                          {review.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-6">
                  <Star className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-dark-accent mb-3">
                  Patient Video Reviews
                </h3>
                <p className="text-brand-muted max-w-lg mx-auto">
                  Video testimonials from our patients will be featured here soon.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
