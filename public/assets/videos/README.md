# Videos Folder

Place your video files here. Supported formats: MP4, WebM, MOV

## Recommended Video Specifications:
- **Format**: MP4 (H.264 codec) - Best browser compatibility
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9 (recommended for hero sections)
- **File Size**: Optimize for web (consider compression to reduce load time)
- **Duration**: 10-30 seconds for hero videos (will loop)
- **Bitrate**: 2-5 Mbps for good quality/size balance

## Usage in Components:

### Hero Section (Homepage):
- File: `hero-video.mp4`
- Path: `/assets/videos/hero-video.mp4`

### Research Page Videos:
- Robotics: `/assets/videos/robotics-video.mp4`
- AI: `/assets/videos/ai-video.mp4`
- Rural Engineering: `/assets/videos/rural-engineering-video.mp4`
- etc.

## Example Files:
- `hero-video.mp4` - Main homepage hero video
- `robotics-video.mp4` - Robotics research page video
- `ai-video.mp4` - AI research page video
- `sustainability-video.mp4` - Sustainability related videos

## Video Optimization Tips:
1. Use tools like HandBrake or FFmpeg to compress videos
2. Consider creating multiple versions (mobile, desktop) for responsive loading
3. Keep file sizes under 10MB for better performance
4. Use MP4 format with H.264 codec for best compatibility

## Note:
If a video file is not found, the component will fall back to:
- A gradient background (for PageHero)
- The external placeholder video (for Hero component)
