"use client";

import { useState } from "react";
import { Play, Pause, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoPlaying ? "opacity-100" : "opacity-50"
          }`}
        >
          <source
            src="https://videos.pexels.com/video-files/3044128/3044128-sd_640_360_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            BECAUSE TO SURVIVE WE MUST EVOLVE
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Transform your business into a perpetually adaptive enterprise,
            built to evolve continuously in a world of constant change.
          </p>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl shadow-soft-lg hover:shadow-soft transition-all duration-300 transform hover:scale-105 group"
          >
            Learn more
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

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
    </section>
  );
}
