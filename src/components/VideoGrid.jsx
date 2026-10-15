import React from 'react';
import VideoCard from './VideoCard';

export default function VideoGrid({ videos, limit = null }) {
  // Filter videos if limit is specified
  const displayVideos = limit ? videos.slice(0, limit) : videos;

  // Don't render anything if there are no videos
  if (!displayVideos || displayVideos.length === 0) {
    return null;
  }

  // Determine grid centering class based on number of videos
  const centerClass = displayVideos.length < 3 ? 'justify-center' : '';

  return (
    <div 
      className={`cards-grid md:grid-cols-2 lg:grid-cols-3 ${centerClass}`}
      role="list"
    >
      {displayVideos.map((video) => (
        <div key={video.id} role="listitem" className="min-w-0">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}
