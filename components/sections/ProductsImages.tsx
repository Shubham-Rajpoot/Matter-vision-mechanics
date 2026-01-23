"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Sparkles, Beaker, Recycle, Wheat, Ruler, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  id: string;
  title: string;
  icon: LucideIcon;
  images: Array<{ src: string; alt: string }>;
};

const productCategories: Category[] = [
  {
    id: "ceramics",
    title: "Ceramics Products",
    icon: Beaker,
    images: [
      { src: "/assets/images/ceramic/ceramic1.png", alt: "Ceramics Product 1" },
      { src: "/assets/images/ceramic/ceramic2.png", alt: "Ceramics Product 2" },
      { src: "/assets/images/ceramic/ceramic3.png", alt: "Ceramics Product 3" },
      { src: "/assets/images/ceramic/ceramic4.png", alt: "Ceramics Product 4" },
    ],
  },
  {
    id: "bioremediation",
    title: "Bio Remediation Products",
    icon: Recycle,
    images: [
      {
        src: "/assets/images/bioremediation/bioremediation1.png",
        alt: "Bio Remediation Product 1",
      },
      {
        src: "/assets/images/bioremediation/bioremediation2.png",
        alt: "Bio Remediation Product 2",
      },
      {
        src: "/assets/images/bioremediation/bioremediation3.png",
        alt: "Bio Remediation Product 3",
      },
    ],
  },
  {
    id: "hydroponic",
    title: "Hydroponic Systems Products",
    icon: Wheat,
    images: [
      { src: "/assets/images/hydroponic/hydroponic1.png", alt: "Hydroponic Product 1" },
      { src: "/assets/images/hydroponic/hydroponic2.png", alt: "Hydroponic Product 2" },
      // { src: "/assets/images/hydroponic/hydroponic3.png", alt: "Hydroponic Product 3" },
      { src: "/assets/images/hydroponic/hydroponic4.png", alt: "Hydroponic Product 3" },
    ],
  },
  {
    id: "industrial",
    title: "Industrial Design Products",
    icon: Ruler,
    images: [
      {
        src: "/assets/images/industrial_design/industrial_design1.png",
        alt: "Industrial Design Product 1",
      },
      {
        src: "/assets/images/industrial_design/industrial_design2.png",
        alt: "Industrial Design Product 2",
      },
      {
        src: "/assets/images/industrial_design/industrial_design3.png",
        alt: "Industrial Design Product 3",
      },
    ],
  },
  {
    id: "agriculture",
    title: "Sustainable Agriculture Systems Products",
    icon: Leaf,
    images: [
      {
        src: "/assets/images/sustainable_agriculture_systems/sustainable_agriculture_systems.png",
        alt: "Sustainable Agriculture Systems Product",
      },
    ],
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function CategorySliderCard({
  category,
  layoutClassName,
  intervalMs = 4800,
}: {
  category: Category;
  layoutClassName: string;
  intervalMs?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = category.images.length;
  const safeActive = ((active % total) + total) % total;

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isPaused) return;
    if (total <= 1) return;
    const t = window.setInterval(() => {
      setActive((v) => v + 1);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [intervalMs, isPaused, prefersReducedMotion, total]);

  const Icon = category.icon;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19]",
        "shadow-modern hover:shadow-modern-lg transition-all duration-500",
        "ring-1 ring-[#FF6A00]/10 hover:ring-[#FF6A00]/25 focus-within:ring-[#FF6A00]/35",
        layoutClassName,
      ].join(" ")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Background images (crossfade) */}
      <div className="absolute inset-0">
        {category.images.map((img, idx) => {
          const isActive = idx === safeActive;
          return (
            <div
              key={`${category.id}-${img.src}`}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          );
        })}

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/12 via-transparent to-[#FFB703]/12" />
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#FF6A00]/25 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#FFB703]/22 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Title area */}
      <div className="relative z-10 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6A00] via-[#FF8C42] to-[#FFB703] shadow-glow">
                <Icon className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Portfolio
              </span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              {category.title}
            </h3>
          </div>

          {/* Next slide button */}
          <button
            type="button"
            className={[
              "shrink-0 rounded-2xl p-3",
              "border border-white/15 bg-white/10 backdrop-blur-md",
              "transition-all duration-300",
              "group-hover:bg-white/15 group-hover:border-white/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]/60",
            ].join(" ")}
            aria-label={`Next slide for ${category.title}`}
            onClick={() => setActive((v) => v + 1)}
          >
            <ArrowRight className="h-5 w-5 text-white/90 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={`${category.id}-dot-${i}`}
                type="button"
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all duration-300",
                  i === safeActive
                    ? "bg-white shadow-[0_0_0_4px_rgba(255,106,0,0.22)]"
                    : "bg-white/35 hover:bg-white/70",
                ].join(" ")}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1} of ${total} for ${category.title}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 backdrop-blur-md">
            <span className="text-[11px] font-semibold text-white/80">Slide</span>
            <span className="text-[11px] font-bold text-[#FFB703]">
              {safeActive + 1}/{total}
            </span>
          </div>
        </div>
      </div>

      {/* Top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

const ProductsImages = () => {
  const layoutByIndex = useMemo(
    () => [
      // Tata Elxsi-style layout (desktop)
      "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-2",
      "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-1",
      "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-1 xl:row-span-2",
      "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-2",
      "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-1",
    ],
    [],
  );

  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#050816] via-[#0B0F19] to-[#050816] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent"></div>
            <Sparkles className="w-6 h-6 text-[#FFB703]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#FFB703] to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] bg-clip-text">
              Product Portfolio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
            Slider-based gallery inspired by premium corporate layouts — optimized for all screen sizes.
          </p>
        </div>

        {/* Slider Cards Grid (Tata Elxsi-inspired) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          {productCategories.map((category, idx) => (
            <CategorySliderCard
              key={category.id}
              category={category}
              layoutClassName={
                layoutByIndex[idx] ??
                "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:col-span-1"
              }
              intervalMs={4800}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsImages;
