"use client";

import { ArrowRight, Layers, Database, Lock, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Layers,
    title: "Enterprise Platform Suite",
    description: "Comprehensive platform solutions for enterprise-wide digital transformation.",
    features: ["Multi-cloud support", "API-first architecture", "Real-time analytics"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Database,
    title: "Data Intelligence Platform",
    description: "Unified data platform for advanced analytics and business intelligence.",
    features: ["Data integration", "ML-powered insights", "Self-service analytics"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Lock,
    title: "Security & Compliance Suite",
    description: "End-to-end security solutions with automated compliance management.",
    features: ["Zero-trust architecture", "Threat detection", "Regulatory compliance"],
    gradient: "from-red-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Business Process Automation",
    description: "Intelligent automation platform to streamline business operations.",
    features: ["RPA integration", "Workflow orchestration", "AI-powered decisioning"],
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Products and Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative platforms engineered to drive business excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`}
                />

                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br ${product.gradient} shadow-soft-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} mr-3`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all"
                  >
                    Explore product
                    <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
