"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Floating particles component
const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  const x = useMotionValue(Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920));
  const y = useMotionValue(Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080));

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined') {
        x.set(Math.random() * window.innerWidth);
        y.set(Math.random() * window.innerHeight);
      }
    }, 10000 + delay * 1000);

    return () => clearInterval(interval);
  }, [x, y, delay]);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
      style={{
        x,
        y,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

// Animated gradient orb component
const GradientOrb = ({ 
  size, 
  x, 
  y, 
  color, 
  delay = 0 
}: { 
  size: number; 
  x: number; 
  y: number; 
  color: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent)`,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 20 + delay * 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

// Magnetic button component with spring physics
const MagneticButton = ({ 
  children, 
  href, 
  primary = false 
}: { 
  children: React.ReactNode; 
  href: string;
  primary?: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic effect strength
    x.set(distanceX * 0.15);
    y.set(distanceY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base overflow-hidden transition-all duration-300 ${
        primary
          ? "bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white border border-primary-400/30 shadow-xl hover:shadow-primary-500/40"
          : "bg-white/20 text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70 shadow-lg"
      }`}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative flex items-center gap-2 z-10">
        {children}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </span>
    </motion.a>
  );
};

// Text reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
    },
  },
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      delay: i * 0.05,
    },
  }),
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax transforms
  const parallaxX = useTransform(
    useMotionValue(mousePosition.x),
    [0, 1],
    [-20, 20]
  );
  const parallaxY = useTransform(
    useMotionValue(mousePosition.y),
    [0, 1],
    [-20, 20]
  );

  const headlineWords = ["Pioneering", "the", "Future", "of", "Research"];
  const subheadlineWords = "Advancing robotics, AI, and sustainable technology.".split(" ");

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden pt-24 pb-24"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with scroll parallax */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
          }}
        >
          <img
            src="/assets/images/Gemini_Generated_Image_eua2caeua2caeua2.png"
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
        
        {/* Base gradient mesh overlay for readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-slate-950/40" />
        
        {/* Floating gradient orbs with organic movement */}
        <GradientOrb 
          size={600} 
          x={20} 
          y={20} 
          color="rgba(255, 106, 0, 0.4)" 
          delay={0}
        />
        <GradientOrb 
          size={500} 
          x={70} 
          y={60} 
          color="rgba(232, 93, 4, 0.3)" 
          delay={2}
        />
        <GradientOrb 
          size={400} 
          x={50} 
          y={80} 
          color="rgba(255, 154, 61, 0.25)" 
          delay={4}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}

        {/* Light refraction effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 106, 0, 0.2), transparent 50%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 106, 0, 0.2), transparent 50%)`,
              `radial-gradient(circle at ${(mousePosition.x * 100 + 10) % 100}% ${(mousePosition.y * 100 + 10) % 100}%, rgba(255, 106, 0, 0.15), transparent 50%)`,
              `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 106, 0, 0.2), transparent 50%)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Depth overlay for readability - minimal overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with sparkle effect */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20 shadow-lg"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs font-medium text-white/95 tracking-wide">
              Research & Innovation
            </span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 text-primary-300" />
            </motion.div>
          </motion.div>

          {/* Headline with word-by-word reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight"
            style={{
              x: parallaxX,
              y: parallaxY,
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span className="block text-white/95 mb-2">
              {headlineWords.slice(0, 2).map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block bg-gradient-to-r from-primary-300 via-white to-primary-400 bg-clip-text text-transparent drop-shadow-2xl">
              {headlineWords.slice(2).map((word, i) => (
                <motion.span
                  key={i + 2}
                  custom={i + 2}
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheading with fade + slide */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/90 mb-8 max-w-lg mx-auto leading-relaxed"
            style={{
              textShadow: "0 1px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            {subheadlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <MagneticButton href="#research" primary>
              Explore Research
            </MagneticButton>
            <MagneticButton href="#projects">
              View Projects
            </MagneticButton>
          </motion.div>

          {/* Stats Grid with staggered animation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
          >
            {[
              { value: "10+", label: "Research Domains" },
              { value: "50+", label: "Active Projects" },
              { value: "150+", label: "Researchers" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-b from-white to-white/70 bg-clip-text mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    delay: 1.2 + i * 0.1,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with smooth animation */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-3 text-white/60 group cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors">
          Scroll
        </span>
        <motion.div
          className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center p-1.5 group-hover:border-white/50 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
