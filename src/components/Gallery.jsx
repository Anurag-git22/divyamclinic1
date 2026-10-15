import React, { useState } from 'react';
import { Camera, Building, Stethoscope, Eye, MapPin, Play, Star, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const categoryIcons = {
  interior: Building,
  consultation: Stethoscope,
  equipment: Eye,
  exterior: MapPin,
};

// Video Review Card Component
function VideoReviewCard({ review }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handleStart = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="card-compact rounded-[14px] sm:rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all overflow-hidden flex flex-col group h-full">
      {/* Video Player Container */}
      <div 
        className="relative aspect-video bg-black overflow-hidden cursor-pointer"
        onClick={handleStart}
      >
        <video
          ref={videoRef}
          controls={isPlaying}
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
          aria-label={review.title}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={review.videoUrl || review.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Template Overlay - shows before video starts */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-slate-900/80 to-secondary/20 text-white z-10 transition-opacity p-4">
            <div className="relative mb-2 sm:mb-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary text-white shadow-warm-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white ml-0.5 sm:ml-1" />
              </div>
            </div>
            <p className="font-display font-bold text-xs sm:text-base text-white text-center mb-1 line-clamp-1">
              {review.title}
            </p>
            <div className="flex items-center gap-0.5 sm:gap-1 justify-center mb-1.5 sm:mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs text-white/90 bg-white/20 backdrop-blur-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
              Click to Play Review
            </span>
          </div>
        )}
      </div>

      {/* Review Details */}
      <div className="p-3 sm:p-4 space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-secondary mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
          <h3 className="font-display font-semibold text-xs sm:text-base text-dark-accent line-clamp-1">
            {review.title}
          </h3>
          {review.description && (
            <p className="text-[10px] sm:text-xs text-brand-muted mt-0.5 line-clamp-2">
              {review.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const filteredItems = clinicData.gallery || [];
  const reviewVideos = clinicData.reviewVideos || [];

  return (
    <section id="gallery" className="py-6 sm:py-10 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
            <Camera className="w-4 h-4" />
            <span>Clinic Spaces & Patient Experiences</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-dark-accent tracking-tight">
            Clinic Gallery & Patient Reviews
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Explore our clinic environment, facilities, and patient experiences at Divyam Eye Care.
          </p>
        </div>

        {/* Hospital Tour Video (if enabled) */}
        {clinicData.hospitalVideo && clinicData.hospitalVideo.enabled && clinicData.hospitalVideo.url && (
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
                  <p className="font-semibold text-dark-accent flex items-center gap-2 text-sm">
                    <Play className="w-4 h-4 text-primary" />
                    {clinicData.hospitalVideo.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 1. Clinic Photos Section (Directly displayed, no toggles) */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-brand-border/60">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" />
              <h2 className="font-display font-bold text-lg sm:text-xl text-dark-accent">
                Clinic Facilities & Spaces
              </h2>
            </div>
            <span className="text-xs text-brand-muted font-medium">
              {filteredItems.length} Verified Photos
            </span>
          </div>

          <div className="cards-grid md:grid-cols-2">
            {filteredItems.map((item) => {
              const CategoryIcon = categoryIcons[item.type] || Building;
              const photoSrc = item.image || '/Interior.jpg';
              
              return (
                <div
                  key={item.id || item.title}
                  onClick={() => setSelectedPhoto(item)}
                  className="card-compact group relative rounded-[14px] sm:rounded-2xl bg-white border border-brand-border hover:border-primary/40 shadow-warm-sm hover:shadow-warm-md overflow-hidden transition-all duration-200 flex flex-col justify-between cursor-pointer h-full"
                >
                  {/* Photo Container - Neatly adjusted with ambient background and full uncropped photo */}
                  <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-slate-900/90 flex items-center justify-center border-b border-brand-border/60">
                    {/* Ambient blurred backdrop matching photo tones */}
                    <img 
                      src={photoSrc} 
                      alt="" 
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md scale-125 opacity-40 pointer-events-none"
                    />
                    {/* Complete uncropped photo */}
                    <img 
                      src={photoSrc} 
                      alt={item.title}
                      className="relative z-10 w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Description Footer */}
                  <div className="p-2.5 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-secondary">
                          <CategoryIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{item.category}</span>
                        </span>
                        <span className="hidden sm:inline-block text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-brand-bg border border-brand-border text-brand-muted shrink-0">
                          Pimpri, Pune
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xs sm:text-base text-dark-accent leading-snug line-clamp-1 sm:line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Patient Reviews Section - ONLY Video Reviews, NO text reviews */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-brand-border/70">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary mb-2.5">
              <Star className="w-3.5 h-3.5 fill-secondary" />
              <span>Patient Feedback</span>
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent tracking-tight">
              Patient Video Reviews
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-brand-muted">
              Watch real video testimonials from patients treated at Divyam Eye Care
            </p>
          </div>

          {/* Video Reviews Grid */}
          {reviewVideos && reviewVideos.length > 0 ? (
            <div className="cards-grid md:grid-cols-2 lg:grid-cols-3">
              {reviewVideos.map((video, idx) => (
                <VideoReviewCard key={video.id || idx} review={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-brand-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-3">
                <Star className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-sm font-semibold text-dark-accent">
                Patient Video Reviews
              </p>
              <p className="text-xs text-brand-muted mt-1">
                Video testimonials will appear here soon.
              </p>
            </div>
          )}

        </div>

        {/* Photo Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-4xl max-h-[90vh] overflow-auto flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image || '/Interior.jpg'}
                alt={selectedPhoto.title}
                className="w-auto h-auto max-h-[72vh] max-w-full rounded-2xl shadow-2xl object-contain border border-white/10"
              />
              <div className="text-center mt-4 px-4 text-white max-w-2xl">
                <span className="inline-block text-xs uppercase font-bold tracking-wider text-secondary bg-secondary/15 px-3 py-1 rounded-full border border-secondary/30 mb-2">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-display font-bold text-base sm:text-2xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
