import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Heart, Activity, Smartphone, Stethoscope } from "lucide-react";

export default function HealthcareTechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Healthcare Technology Research"
        description="IoT-based health monitoring devices, medical diagnostics, telemedicine solutions, and innovative healthcare technologies for improved patient outcomes and accessible healthcare delivery."
        gradient="from-red-600 via-pink-600 to-red-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advancing Healthcare Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our healthcare technology research focuses on developing innovative medical 
                devices, health monitoring systems, and telemedicine solutions that make 
                quality healthcare more accessible and effective.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We create IoT-based devices that enable continuous health monitoring, 
                remote patient care, and data-driven medical decision-making for better 
                patient outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Heart className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Health Monitoring</h3>
                  <p className="text-sm text-gray-600">IoT-based devices</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Activity className="w-10 h-10 text-pink-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Vital Signs</h3>
                  <p className="text-sm text-gray-600">Real-time tracking</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Smartphone className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Telemedicine</h3>
                  <p className="text-sm text-gray-600">Remote care solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Stethoscope className="w-10 h-10 text-pink-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Diagnostics</h3>
                  <p className="text-sm text-gray-600">Medical device innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Research Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Two-in-One IoT Health Monitor</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive health monitoring device combining vital signs tracking 
                  and remote patient monitoring with telemedicine integration capabilities.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Wearable Health Sensors</h4>
                <p className="text-gray-600 text-sm">
                  Advanced wearable devices for continuous monitoring of heart rate, 
                  blood pressure, oxygen levels, and other critical health metrics.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Telemedicine Platforms</h4>
                <p className="text-gray-600 text-sm">
                  Integrated platforms enabling remote consultations, health data sharing, 
                  and virtual healthcare delivery for improved access.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">AI-Powered Diagnostics</h4>
                <p className="text-gray-600 text-sm">
                  Machine learning algorithms for early disease detection, pattern recognition 
                  in health data, and predictive health analytics.
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
