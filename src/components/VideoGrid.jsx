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
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${centerClass}`}
      role="list"
    >
      {displayVideos.map((video) => (
        <div key={video.id} role="listitem">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}
