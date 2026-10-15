import React, { useState } from 'react';
import { Camera, Building, Stethoscope, Eye, Sparkles, MapPin, Play, Star, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const categoryIcons = {
  interior: Building,
  consultation: Stethoscope,
  equipment: Eye,
  exterior: MapPin,
};

// Video Review Card Component with Template
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
      {/* Video Player */}
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
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full bg-secondary text-white shadow-warm-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>
            <p className="font-display font-bold text-base text-white text-center mb-1">
              {review.title}
            </p>
            <div className="flex items-center gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-xs text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              Click to Play Review
            </span>
          </div>
        )}
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
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
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
          <div className="cards-grid md:grid-cols-2">
            {filteredItems.map((item) => {
              const CategoryIcon = categoryIcons[item.type] || Building;
              const photoSrc = item.image || '/Interior.jpg';
              
              return (
                <div
                  key={item.id || item.title}
                  onClick={() => setSelectedPhoto(item)}
                  className="card-compact group relative rounded-[14px] sm:rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                >
                  {/* Actual Image */}
                  <div className="relative h-36 sm:h-76 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={photoSrc} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/80 via-dark-accent/20 to-transparent" />
                    
                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                        Click to view
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                      <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-white shadow-warm-md border border-brand-border flex items-center justify-center text-primary mb-1 sm:mb-2.5">
                        <CategoryIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-display font-bold text-xs sm:text-lg text-white line-clamp-1 sm:line-clamp-none">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description Footer */}
                  <div className="p-2 sm:p-5 bg-white border-t border-brand-border">
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                      <div className="min-w-0">
                        <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-secondary block truncate">
                          {item.category}
                        </span>
                        <p className="text-[10px] sm:text-sm text-brand-muted mt-0.5 line-clamp-2 sm:line-clamp-none">
                          {item.description}
                        </p>
                      </div>
                      <span className="hidden sm:inline-block text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-lg bg-brand-bg border border-brand-border text-brand-muted shrink-0">
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
              <div className="cards-grid md:grid-cols-2 lg:grid-cols-3">
                {clinicData.reviewVideos.map((review) => (
                  <VideoReviewCard key={review.id} review={review} />
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

        {/* Photo Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
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
                className="w-auto h-auto max-h-[75vh] max-w-full rounded-2xl shadow-2xl object-contain"
              />
              <div className="text-center mt-4 px-4 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-secondary">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-lg">
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
