import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Wrench, Droplets, Zap, Home } from "lucide-react";

export default function RuralEngineeringPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Rural Engineering Research"
        description="Developing sustainable engineering solutions tailored for rural communities, focusing on infrastructure, water management, and accessible technology for underserved areas."
        gradient="from-green-600 via-emerald-600 to-green-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Engineering for Rural Communities
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our rural engineering research addresses the unique challenges faced by 
                rural and remote communities, developing cost-effective, sustainable 
                solutions that improve quality of life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on creating accessible technologies, sustainable infrastructure, 
                and innovative systems that work within the constraints and opportunities 
                of rural environments.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Wrench className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Infrastructure</h3>
                  <p className="text-sm text-gray-600">Sustainable building solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Droplets className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Water Systems</h3>
                  <p className="text-sm text-gray-600">Clean water and sanitation</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Zap className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Energy Access</h3>
                  <p className="text-sm text-gray-600">Renewable energy solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Home className="w-10 h-10 text-emerald-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Smart Villages</h3>
                  <p className="text-sm text-gray-600">Technology integration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Water Management Systems</h4>
                <p className="text-gray-600 text-sm">
                  Efficient water harvesting, purification, and distribution systems 
                  designed for rural contexts with limited resources.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Affordable Housing</h4>
                <p className="text-gray-600 text-sm">
                  Low-cost, sustainable building materials and construction techniques 
                  suitable for rural environments.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Connectivity Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Innovative approaches to bring internet and communication technologies 
                  to remote areas.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Agricultural Infrastructure</h4>
                <p className="text-gray-600 text-sm">
                  Engineering solutions for irrigation, storage, and processing facilities 
                  that support rural agricultural communities.
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
