import { Sparkles } from "lucide-react";

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
  gradient = "from-[#FF6A00] via-[#FF8C42] to-[#E85D04]"
}: PageHeroProps) {
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
              className={`w-full h-full object-cover transition-opacity duration-500 `}
            >
              <source src={videoUrl} type="video/mp4" />
              {/* Fallback gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
            </video>
            {/* Video Control */}
            
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
        
        {/* Orange-tinted overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/10 via-transparent to-[#FFB703]/10" />
        
        {/* Animated orange orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF6A00]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFB703]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative accent */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent"></div>
            <Sparkles className="w-5 h-5 text-[#FFB703]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-[#FFB703] to-transparent"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto animate-slide-up leading-relaxed font-light">
            {description}
          </p>
          
          {/* Bottom accent line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
