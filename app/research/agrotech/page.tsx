import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Sprout, Droplets, Cpu, TrendingUp } from "lucide-react";

export default function AgrotechPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Agrotech Research"
        description="Agricultural technology innovations including hydroponic systems, precision farming, crop monitoring, and sustainable agriculture solutions for enhanced food security and productivity."
        gradient="from-lime-600 via-green-600 to-lime-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Agriculture Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our agrotech research combines advanced technology with sustainable farming 
                practices to increase crop yields, optimize resource use, and ensure food 
                security for growing populations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We develop hydroponic systems, IoT-based monitoring solutions, precision 
                agriculture tools, and livestock tracking systems that enable data-driven 
                farming decisions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Sprout className="w-10 h-10 text-lime-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Hydroponics</h3>
                  <p className="text-sm text-gray-600">Soilless cultivation systems</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Droplets className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Precision Farming</h3>
                  <p className="text-sm text-gray-600">Smart irrigation & monitoring</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Cpu className="w-10 h-10 text-lime-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">IoT Monitoring</h3>
                  <p className="text-sm text-gray-600">Real-time crop analytics</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Yield Optimization</h3>
                  <p className="text-sm text-gray-600">Data-driven improvements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Research Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Hydroponic Systems</h4>
                <p className="text-gray-600 text-sm">
                  Advanced hydroponic setups integrated with ceramic micro furnaces for 
                  controlled environment agriculture, enabling year-round cultivation.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Livestock Monitoring</h4>
                <p className="text-gray-600 text-sm">
                  Bovidae health monitoring and tracking systems using muzzle-based 
                  identification and biometric sensors for comprehensive herd management.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Precision Agriculture</h4>
                <p className="text-gray-600 text-sm">
                  IoT sensors, drones, and AI-powered analytics for optimizing water usage, 
                  fertilizer application, and crop health monitoring.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Sustainable Practices</h4>
                <p className="text-gray-600 text-sm">
                  Research into organic farming methods, integrated pest management, and 
                  regenerative agriculture techniques.
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
