# Video Sources & Recommendations

## Current Fallback Videos

The Hero component uses these Pexels videos as fallbacks (royalty-free, no attribution required):

1. **Primary Fallback**: Industrial Robotics in Action
   - URL: `https://videos.pexels.com/video-files/32386518/32386518-hd_1920_1080_25fps.mp4`
   - Theme: Modern industrial robotics, automation
   - Perfect for: Research company, technology focus

2. **Secondary Fallback**: Advanced Robotics in Automated Factory
   - URL: `https://videos.pexels.com/video-files/32386590/32386590-hd_1920_1080_25fps.mp4`
   - Theme: Advanced robotics, factory automation
   - Perfect for: Innovation, industrial applications

## Recommended Video Themes for MATTER VISION MECHANICS

### Hero Video (Homepage)
- **Theme**: Technology, Innovation, Research, Robotics
- **Style**: Modern, professional, futuristic
- **Duration**: 10-30 seconds (looping)
- **Suggested Search Terms**: 
  - "robotics technology"
  - "innovation research"
  - "industrial automation"
  - "future technology"
  - "scientific research"

### Research Page Videos
Each research area can have its own video:

1. **Robotics**: `/assets/videos/robotics-video.mp4`
   - Search: "industrial robotics", "robot arm", "automation"

2. **AI**: `/assets/videos/ai-video.mp4`
   - Search: "artificial intelligence", "neural network", "data visualization"

3. **Rural Engineering**: `/assets/videos/rural-engineering-video.mp4`
   - Search: "rural development", "infrastructure", "sustainable engineering"

4. **Sustainable Ceramics**: `/assets/videos/sustainable-ceramics-video.mp4`
   - Search: "ceramics", "manufacturing", "industrial process"

5. **Bio Remediation**: `/assets/videos/bio-remediation-video.mp4`
   - Search: "environment", "nature", "sustainability", "green technology"

6. **Agrotech**: `/assets/videos/agrotech-video.mp4`
   - Search: "agriculture technology", "farming", "hydroponics"

7. **Consumer Products**: `/assets/videos/consumer-products-video.mp4`
   - Search: "product design", "innovation", "technology products"

8. **Healthcare Technology**: `/assets/videos/healthcare-technology-video.mp4`
   - Search: "medical technology", "healthcare innovation", "medical devices"

9. **Assistive Technology**: `/assets/videos/assistive-technology-video.mp4`
   - Search: "accessibility", "assistive devices", "inclusive technology"

10. **Industrial Design**: `/assets/videos/industrial-design-video.mp4`
    - Search: "product design", "industrial design", "manufacturing"

## Free Video Sources

### Pexels (https://www.pexels.com/videos/)
- **License**: Free for commercial use, no attribution required
- **Quality**: HD and 4K available
- **Best for**: Professional, high-quality videos

### Pixabay (https://pixabay.com/videos/)
- **License**: Free for commercial use, no attribution required
- **Quality**: HD and 4K available
- **Best for**: Wide variety of technology videos

### Coverr (https://coverr.co/)
- **License**: Free for commercial use
- **Best for**: Background videos, hero sections

## Video Optimization

1. **Download the video** from the source
2. **Compress if needed** using HandBrake or FFmpeg
3. **Place in** `/public/assets/videos/` folder
4. **Name appropriately** (e.g., `hero-video.mp4`)
5. **Update component** to use local path

## Example Download Command (using yt-dlp or similar)

```bash
# Download from Pexels (if direct download available)
# Or use browser to download and place in assets/videos folder
```

## Current Setup

The Hero component will:
1. First try to load `/assets/videos/hero-video.mp4` (local file)
2. If not found, use the Pexels fallback videos
3. If videos fail, show gradient background

To use your own video:
1. Download a video matching the theme
2. Place it in `public/assets/videos/hero-video.mp4`
3. The component will automatically use it
