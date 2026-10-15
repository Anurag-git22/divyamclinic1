import React, { useState } from 'react';
import { Play, MapPin, Calendar } from 'lucide-react';
import VideoModal from './VideoModal';

export default function VideoCard({ video }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posterError, setPosterError] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Play video: ${video.title}`}
        className="card-compact group relative rounded-[14px] sm:rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all overflow-hidden cursor-pointer flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
          {!posterError && video.poster ? (
            <img
              src={video.poster}
              alt={video.title}
              onError={() => setPosterError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            // Fallback gradient with eye icon
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-brand-bg to-primary/5">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white/80 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-8 sm:h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-primary shadow-warm-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all">
              <Play className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
            </div>
          </div>

          {/* Watch Label */}
          <div className="hidden sm:block absolute top-3 right-3">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary text-white shadow-md">
              Watch
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
          <h3 className="font-display font-bold text-xs sm:text-base text-dark-accent mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-2">
            {video.title}
          </h3>

          <div className="space-y-0.5 sm:space-y-1 mt-auto">
            {video.location && (
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-brand-muted">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                <span className="truncate">{video.location}</span>
              </div>
            )}

            {video.date && (
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-brand-muted">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                <span>{video.date}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal video={video} onClose={handleCloseModal} />
      )}
    </>
  );
}
