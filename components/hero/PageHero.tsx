"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  gradient?: string;
}

export default function PageHero({ 
  title, 
  description, 
  imageUrl, 
  videoUrl,
  gradient = "from-primary-600 via-primary-700 to-primary-800"
}: PageHeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background - Video or Image */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isVideoPlaying ? "opacity-100" : "opacity-50"
              }`}
            >
              <source src={videoUrl} type="video/mp4" />
              {/* Fallback gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
            </video>
            {/* Video Control */}
            <button
              onClick={toggleVideo}
              className="absolute bottom-8 left-8 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-white transition-all duration-200 hover:scale-110"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
          </>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
