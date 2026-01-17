"use client";

import { Building2, Heart, Factory, Leaf, Users, GraduationCap, ShoppingCart, Sprout, Sparkles, TrendingUp } from "lucide-react";

const applications = [
  {
    icon: Factory,
    title: "Industrial Applications",
    description: "Robotics and automation solutions for manufacturing, sustainable ceramics for industrial processes, and advanced materials research.",
    color: "orange",
    accentIcon: TrendingUp,
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "IoT health monitoring devices, assistive technologies for accessibility, and medical device innovation for improved patient care.",
    color: "red",
    accentIcon: TrendingUp,
  },
  {
    icon: Leaf,
    title: "Environmental Solutions",
    description: "Bio remediation technologies for environmental cleanup, sustainable agriculture systems, and clean air solutions for healthier environments.",
    color: "green",
    accentIcon: TrendingUp,
  },
  {
    icon: Sprout,
    title: "Agriculture & Food Security",
    description: "Agrotech innovations including hydroponic systems, precision farming, and livestock monitoring for sustainable food production.",
    color: "lime",
    accentIcon: TrendingUp,
  },
  {
    icon: Users,
    title: "Rural Development",
    description: "Rural engineering solutions, accessible technology for underserved communities, and sustainable infrastructure development.",
    color: "blue",
    accentIcon: TrendingUp,
  },
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description: "Educational gaming platforms, assistive learning technologies, and interactive solutions for enhanced educational experiences.",
    color: "purple",
    accentIcon: TrendingUp,
  },
  {
    icon: ShoppingCart,
    title: "Consumer Products",
    description: "Innovative consumer products including air purifiers, home decor, gaming solutions, and everyday technology for modern living.",
    color: "pink",
    accentIcon: TrendingUp,
  },
  {
    icon: Building2,
    title: "Smart Cities & Infrastructure",
    description: "Industrial design solutions, IoT integration for smart infrastructure, and sustainable urban development technologies.",
    color: "primary",
    accentIcon: TrendingUp,
  },
];

const colorClasses = {
  primary: "from-primary-500 to-primary-600",
  red: "from-red-500 to-red-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  lime: "from-lime-500 to-green-600",
  pink: "from-pink-500 to-rose-600",
};

export default function IndustriesSection() {
  return (
    <section
      id="applications"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05)), linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05))`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <Sparkles className="w-6 h-6 text-primary-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Research Applications & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our research creates real-world impact across diverse sectors, addressing critical
            challenges and enabling sustainable solutions
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {applications.map((application, index) => {
            const Icon = application.icon;
            const AccentIcon = application.accentIcon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} opacity-5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Enhanced Icon Container */}
                <div className="relative mb-6">
                  <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} shadow-soft-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  </div>
                  {/* Floating Accent */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <AccentIcon className={`w-5 h-5 text-transparent bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} bg-clip-text`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 z-10">
                  {application.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed text-sm z-10">
                  {application.description}
                </p>

                {/* Enhanced Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 group-hover:opacity-10 transition-all duration-500`} />

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[application.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
