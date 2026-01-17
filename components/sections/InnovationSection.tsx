"use client";

import { Lightbulb, Microscope, Rocket, Award, Beaker, Users, BookOpen, ArrowRight } from "lucide-react";

const researchFacilities = [
  {
    icon: Microscope,
    title: "Research Laboratories",
    description: "State-of-the-art research facilities equipped with advanced instrumentation for robotics, AI, materials science, and biotechnology research.",
    stat: "10+",
    statLabel: "Active Labs",
  },
  {
    icon: Beaker,
    title: "Innovation Centers",
    description: "Collaborative spaces where interdisciplinary teams transform research insights into practical solutions and commercial products.",
    stat: "50+",
    statLabel: "Research Projects",
  },
  {
    icon: Rocket,
    title: "Technology Transfer",
    description: "Bridging the gap between research and industry through strategic partnerships, licensing, and startup incubation programs.",
    stat: "20+",
    statLabel: "Industry Partners",
  },
  {
    icon: Award,
    title: "Research Excellence",
    description: "Recognized for groundbreaking contributions across multiple research domains with publications, patents, and industry recognition.",
    stat: "100+",
    statLabel: "Publications & Patents",
  },
  {
    icon: Users,
    title: "Research Team",
    description: "Diverse team of researchers, engineers, and scientists working collaboratively across disciplines to solve complex challenges.",
    stat: "150+",
    statLabel: "Researchers",
  },
  {
    icon: BookOpen,
    title: "Academic Partnerships",
    description: "Collaborative research programs with leading universities and research institutions worldwide, fostering knowledge exchange.",
    stat: "15+",
    statLabel: "University Partners",
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
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-400"></div>
            <Lightbulb className="w-6 h-6 text-primary-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Research Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            World-class research facilities and collaborative ecosystem driving innovation
            and technological advancement
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {researchFacilities.map((facility, index) => {
            const Icon = facility.icon;
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
                  {facility.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {facility.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    {facility.stat}
                  </div>
                  <div className="text-sm text-gray-400">
                    {facility.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-4.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center gap-2.5">
              Explore Our Research
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
