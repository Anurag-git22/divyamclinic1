import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Focus trap - focus on modal
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    // Pause and reset video before closing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      tabIndex={-1}
    >
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 sm:-top-14 sm:-right-14 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close video"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Video Container */}
        <div className="relative rounded-lg sm:rounded-2xl overflow-hidden bg-black shadow-2xl">
          
          {/* Video Title (Screen Reader) */}
          <h2 id="video-modal-title" className="sr-only">
            {video.title}
          </h2>

          {!videoError ? (
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-auto max-h-[80vh] object-contain"
              onError={() => setVideoError(true)}
            >
              <source src={video.video || video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Error State
            <div className="aspect-video w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-brand-bg to-primary/5 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-dark-accent mb-2">
                Video Coming Soon
              </h3>
              <p className="text-sm text-brand-muted max-w-md">
                This video is not yet available. Please check back later.
              </p>
            </div>
          )}

          {/* Video Info Below */}
          {!videoError && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
              <h3 className="font-display font-semibold text-white text-sm sm:text-base">
                {video.title}
              </h3>
              {video.location && (
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  {video.location}
                  {video.date && ` • ${video.date}`}
                </p>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
