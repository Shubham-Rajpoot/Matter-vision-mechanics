"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Beaker, Recycle, Wheat, Ruler, Leaf } from 'lucide-react';

const productCategories = [
  {
    id: 'ceramics',
    title: 'Ceramics Products',
    icon: Beaker,
    images: [
      { src: '/assets/images/ceramic/ceramic1.png', alt: 'Ceramics Product 1' },
      { src: '/assets/images/ceramic/ceramic2.png', alt: 'Ceramics Product 2' },
      { src: '/assets/images/ceramic/ceramic3.png', alt: 'Ceramics Product 3' },
      { src: '/assets/images/ceramic/ceramic4.png', alt: 'Ceramics Product 4' },
    ],
  },
  {
    id: 'bioremediation',
    title: 'Bio Remediation Products',
    icon: Recycle,
    images: [
      { src: '/assets/images/bioremediation/bioremediation1.png', alt: 'Bio Remediation Product 1' },
      { src: '/assets/images/bioremediation/bioremediation2.png', alt: 'Bio Remediation Product 2' },
      { src: '/assets/images/bioremediation/bioremediation3.png', alt: 'Bio Remediation Product 3' },
    ],
  },
  {
    id: 'hydroponic',
    title: 'Hydroponic Systems Products',
    icon: Wheat,
    images: [
      { src: '/assets/images/hydroponic/hydroponic1.png', alt: 'Hydroponic Product 1' },
      { src: '/assets/images/hydroponic/hydroponic2.png', alt: 'Hydroponic Product 2' },
    //   { src: '/assets/images/hydroponic/hydroponic3.png', alt: 'Hydroponic Product 3' },
      { src: '/assets/images/hydroponic/hydroponic4.png', alt: 'Hydroponic Product 3' },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Design Products',
    icon: Ruler,
    images: [
      { src: '/assets/images/industrial_design/industrial_design1.png', alt: 'Industrial Design Product 1' },
      { src: '/assets/images/industrial_design/industrial_design2.png', alt: 'Industrial Design Product 2' },
      { src: '/assets/images/industrial_design/industrial_design3.png', alt: 'Industrial Design Product 3' },
    ],
  },
  {
    id: 'agriculture',
    title: 'Sustainable Agriculture Systems Products',
    icon: Leaf,
    images: [
      { src: '/assets/images/sustainable_agriculture_systems/sustainable_agriculture_systems.png', alt: 'Sustainable Agriculture Systems Product' },
    ],
  },
];

const ProductsImages = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    productCategories.forEach((category) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(category.id));
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const element = sectionRefs.current[category.id];
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id='products' className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5] to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
            <Sparkles className="w-6 h-6 text-[#FF6A00]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#FF6A00] to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-[#FF6A00]">Product Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our innovative products across multiple research domains, each designed with precision and sustainability in mind
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-24 lg:space-y-32">
          {productCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isVisible = visibleSections.has(category.id);
            const imageCount = category.images.length;
            const gridCols = imageCount === 1 ? 'grid-cols-1' : imageCount === 2 ? 'grid-cols-1 md:grid-cols-2' : imageCount === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

            return (
              <div
                key={category.id}
                ref={(el) => {
                  sectionRefs.current[category.id] = el;
                }}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="mb-10 lg:mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] rounded-xl blur-lg opacity-50"></div>
                      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6A00] via-[#FF8C42] to-[#FFB703] shadow-lg">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Images Grid */}
                <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
                  {category.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="group relative overflow-hidden rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:shadow-orange-100/70 transition-all duration-500 transform hover:-translate-y-2"
                      style={{
                        animationDelay: `${(categoryIndex * 150) + (imageIndex * 100)}ms`,
                      }}
                    >
                      {/* Top gradient accent line */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                      {/* Image Container - Fixed square dimensions with consistent sizing */}
                      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                          <div className="relative w-[85%] h-[85%] max-w-full max-h-full">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain object-center transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </div>
                        </div>
                        
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 via-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:via-[#FF8C42]/5 group-hover:to-[#FFB703]/5 transition-all duration-500 pointer-events-none"></div>
                      </div>

                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium text-gray-700 text-center">
                          {image.alt}
                        </p>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="pointer-events-none absolute -inset-16 bg-gradient-to-br from-[#FF6A00]/10 via-[#FF8C42]/5 to-[#FFB703]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6A00]/0 via-[#FF8C42]/0 to-[#FFB703]/0 group-hover:from-[#FF6A00]/20 group-hover:via-[#FF8C42]/15 group-hover:to-[#FFB703]/20 rounded-bl-full transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Section Divider */}
                {categoryIndex < productCategories.length - 1 && (
                  <div className="mt-16 lg:mt-20 flex items-center justify-center">
                    <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#FF8C42]/40 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsImages;
