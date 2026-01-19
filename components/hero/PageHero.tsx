
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
