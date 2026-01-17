import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { FlaskConical, Flame, Factory, Leaf } from "lucide-react";

export default function SustainableCeramicsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Sustainable Ceramics Research"
        description="Innovative ceramic materials research including micro furnaces, high-performance ceramics, and sustainable manufacturing processes for industrial and consumer applications."
        gradient="from-orange-600 via-red-600 to-orange-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advanced Ceramic Materials & Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our sustainable ceramics research focuses on developing innovative ceramic 
                materials and manufacturing processes that are both high-performance and 
                environmentally responsible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're pioneering ceramic micro furnaces for controlled environments, 
                creating advanced ceramic composites, and developing sustainable production 
                methods that reduce energy consumption and waste.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <FlaskConical className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Micro Furnaces</h3>
                  <p className="text-sm text-gray-600">Precision temperature control</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Flame className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">High-Temp Materials</h3>
                  <p className="text-sm text-gray-600">Heat-resistant ceramics</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Factory className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Sustainable processes</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Leaf className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-gray-600">Green production methods</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ceramic Micro Furnaces</h4>
                <p className="text-gray-600 text-sm">
                  Compact, energy-efficient furnaces for controlled environment applications 
                  in research, manufacturing, and specialized processes.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Industrial Ceramics</h4>
                <p className="text-gray-600 text-sm">
                  High-performance ceramic components for industrial applications requiring 
                  durability, heat resistance, and precision.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Sustainable Production</h4>
                <p className="text-gray-600 text-sm">
                  Manufacturing processes that minimize energy consumption, reduce waste, 
                  and utilize renewable materials.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Advanced Composites</h4>
                <p className="text-gray-600 text-sm">
                  Ceramic matrix composites with enhanced properties for aerospace, 
                  automotive, and energy applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
