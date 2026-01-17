"use client";

import { Building2, Heart, GraduationCap, Factory, Plane, ShoppingCart } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    description: "Transform banking operations with cutting-edge fintech solutions.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Advance patient care with innovative healthcare technology.",
    color: "red",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Empower learning institutions with digital education platforms.",
    color: "purple",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize manufacturing processes with Industry 4.0 solutions.",
    color: "orange",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Enhance guest experiences with smart travel solutions.",
    color: "blue",
  },
  {
    icon: ShoppingCart,
    title: "Retail & CPG",
    description: "Drive retail innovation with omnichannel commerce platforms.",
    color: "green",
  },
];

const colorClasses = {
  primary: "from-primary-500 to-primary-600",
  red: "from-red-500 to-red-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
};

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized solutions tailored to the unique needs of your industry
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-transparent overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} shadow-soft mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  {industry.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
