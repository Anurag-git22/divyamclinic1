import React from 'react';
import { Star, Quote, ExternalLink, Play } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Reviews() {
  const { summary, videos, reviews } = clinicData.testimonials;

  return (
    <section className="py-12 sm:py-16 bg-brand-bg border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Rating Summary */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary mb-3">
            <Star className="w-3.5 h-3.5 fill-secondary" />
            <span>Patient Testimonials</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            What Patients Say About Us
          </h2>
          
          {/* Verified Rating Summary */}
          <div className="mt-6 inline-flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-white border border-brand-border shadow-warm-sm">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(parseFloat(summary.rating))
                      ? 'fill-secondary text-secondary'
                      : 'text-brand-subtle'
                  }`}
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-dark-accent">
                {summary.rating} / 5.0
              </p>
              <p className="text-sm text-brand-muted">
                Based on <span className="font-semibold text-primary">{summary.count}</span> verified reviews on {summary.source}
              </p>
              <a
                href="https://www.justdial.com/Pune/Divyam-Eye-Care-Near-Vital-Multispeciality-Hospital-Nehru-Nagar-Pimpri/020PXX20-XX20-230124181949-R7F4_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Read all reviews on {summary.source}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Testimonials Section */}
        {videos && videos.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display font-bold text-xl text-dark-accent text-center mb-6">
              Video Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all group"
                >
                  <div className="relative aspect-video bg-brand-bg flex items-center justify-center">
                    {video.embedUrl ? (
                      <iframe
                        src={video.embedUrl}
                        title={video.title || `Video testimonial ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-brand-muted">
                        <Play className="w-12 h-12" />
                        <span className="text-sm">Video slot {index + 1}</span>
                      </div>
                    )}
                  </div>
                  {video.title && (
                    <div className="p-4">
                      <p className="text-sm font-semibold text-dark-accent">{video.title}</p>
                      {video.author && (
                        <p className="text-xs text-brand-muted mt-1">{video.author}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Written Reviews Grid */}
        {reviews && reviews.length > 0 && (
          <div>
            <div className="cards-grid md:grid-cols-2">
              {reviews.slice(0, 4).map((review) => (
                <div
                  key={review.id}
                  className="card-compact rounded-[14px] sm:rounded-3xl bg-white border border-brand-border p-3 sm:p-6 shadow-warm-sm hover:shadow-warm-md transition-all relative flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Quote Icon */}
                    <Quote className="absolute top-3 right-3 sm:top-6 sm:right-6 w-5 h-5 sm:w-10 sm:h-10 text-primary/10 pointer-events-none" />

                    {/* Rating Stars */}
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-secondary text-secondary" />
                      ))}
                    </div>

                    {/* Service Badge */}
                    {review.service && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20 mb-3">
                        {review.service}
                      </span>
                    )}

                    {/* Highlight */}
                    {review.highlight && (
                      <p className="font-display font-bold text-[13px] sm:text-base text-dark-accent mb-1.5 sm:mb-2 line-clamp-2">
                        "{review.highlight}"
                      </p>
                    )}

                    {/* Review Text */}
                    <p className="text-[11px] sm:text-sm text-brand-muted leading-relaxed mb-3 line-clamp-4 sm:line-clamp-none">
                      {review.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-2 sm:pt-3 border-t border-brand-border flex items-center justify-between mt-auto">
                    <div className="min-w-0 pr-2">
                      <p className="font-semibold text-xs sm:text-sm text-dark-accent truncate">{review.author}</p>
                      <p className="text-[10px] sm:text-xs text-brand-muted truncate">{review.location}</p>
                    </div>
                    <span className="shrink-0 text-[10px] sm:text-xs font-medium text-primary px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-primary-light border border-primary/20">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
