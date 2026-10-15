# Camp Videos Setup

## Video Files
Place your camp videos in this directory as:
- `camp-1.mp4`
- `camp-2.mp4`
- `camp-3.mp4`
- `camp-4.mp4`
- `camp-5.mp4`
- `camp-6.mp4`

## Poster Images
Place corresponding poster/thumbnail images in the `posters/` subdirectory as:
- `posters/camp-1.jpg`
- `posters/camp-2.jpg`
- `posters/camp-3.jpg`
- `posters/camp-4.jpg`
- `posters/camp-5.jpg`
- `posters/camp-6.jpg`

## Video Specifications
**Recommended settings for optimal performance:**
- **Format**: MP4 (H.264 codec)
- **Resolution**: 720p (1280x720)
- **File Size**: Under 15 MB per video
- **Aspect Ratio**: 16:9

## Compression Tips
If your videos are larger than 15 MB, compress them using:
- **Online**: [HandBrake](https://handbrake.fr/) (free)
- **Command line**: `ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M output.mp4`

## Update Configuration
After adding videos, update the titles, locations, and dates in:
`src/data/campVideos.js`

## Fallback Behavior
- If a poster image is missing, the card will show a teal gradient with an eye icon
- If a video file is missing, clicking the card will show a "Video Coming Soon" message
- The site will build successfully even if files are missing
