"use client";

import { useState } from "react";
import { Play, Pause, ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
   <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-24">

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isVideoPlaying ? "opacity-100" : "opacity-40"
          }`}
        >
          <source
            src="/assets/videos/istockphoto-2183778539-640_adpp_is.mp4"
            type="video/mp4"
          />
          <source
            src="/assets/videos/hero-video.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/32386518/32386518-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/32386590/32386590-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        </video>
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Subtle animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Modern Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full mb-10 border border-white/10 shadow-lg animate-fade-in hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-primary-300" />
            </div>
            <span className="text-sm font-medium text-white/95 tracking-wide">Pioneering Research & Innovation</span>
            <Zap className="w-4 h-4 text-primary-300" />
          </div>

          {/* Modern Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in">
            <span className="block mb-3 text-white/95">PIONEERING THE</span>
            <span className="block bg-gradient-to-r from-blue-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              FUTURE THROUGH
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-2xl mt-2">
              RESEARCH
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up">
            Advancing humanity through cutting-edge research in{" "}
            <span className="font-semibold text-white">Robotics</span>,{" "}
            <span className="font-semibold text-white">AI</span>, and{" "}
            <span className="font-semibold text-white">Sustainable Technologies</span>.
            <br className="hidden sm:block" />
            <span className="text-white/70">Where innovation meets impact.</span>
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-16">
            <a
              href="#research"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-400 hover:via-primary-500 hover:to-primary-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-primary-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden border border-primary-400/30"
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>
              <span className="relative flex items-center gap-3 z-10">
                <span>Explore Research</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-2xl text-white font-bold text-lg rounded-full border-2 border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>
              <span className="relative flex items-center gap-3 z-10">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Modern Stats Grid */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t border-white/10">
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-b from-white to-white/70 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Research Domains</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-b from-white to-white/70 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Active Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-b from-white to-white/70 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Researchers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-10 left-10 z-20 p-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-xl rounded-2xl text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/30 shadow-xl"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-3 text-white/60 group cursor-pointer">
        <span className="text-xs font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors">Scroll</span>
        <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center p-1.5 group-hover:border-white/50 transition-colors">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1 animate-bounce group-hover:bg-white/80"></div>
        </div>
      </div>
    </section>
  );
}
