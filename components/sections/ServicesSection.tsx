"use client";

import { ArrowRight, Cloud, Shield, Brain, Zap, Globe, Code } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud solutions to accelerate your digital transformation journey.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Analytics",
    description: "Leverage artificial intelligence and data analytics for intelligent decision-making.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "World-class delivery model ensuring quality and speed across all time zones.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Application Development",
    description: "Custom application development tailored to your business needs.",
    gradient: "from-teal-500 to-blue-500",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive enterprise solutions designed to drive innovation and
            accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
