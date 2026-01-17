"use client";

import { Lightbulb, Microscope, Rocket, Award } from "lucide-react";

const innovations = [
  {
    icon: Lightbulb,
    title: "Research Labs",
    description: "Cutting-edge research facilities driving technological breakthroughs.",
    stat: "500+",
    statLabel: "Research Projects",
  },
  {
    icon: Microscope,
    title: "Innovation Centers",
    description: "Collaborative spaces where ideas transform into transformative solutions.",
    stat: "50+",
    statLabel: "Global Centers",
  },
  {
    icon: Rocket,
    title: "Startup Ecosystem",
    description: "Fostering innovation through strategic partnerships and investments.",
    stat: "200+",
    statLabel: "Partners",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Acknowledged leaders in innovation and technological excellence.",
    stat: "100+",
    statLabel: "Awards",
  },
];

export default function InnovationSection() {
  return (
    <section
      id="innovation"
      className="py-20 lg:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Research & Innovation
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of technology through continuous innovation and research
          </p>
        </div>

        {/* Innovations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-soft-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {innovation.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    {innovation.stat}
                  </div>
                  <div className="text-sm text-gray-400">
                    {innovation.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl shadow-soft-lg hover:shadow-soft transition-all duration-300 transform hover:scale-105"
          >
            Explore Innovation
          </a>
        </div>
      </div>
    </section>
  );
}
