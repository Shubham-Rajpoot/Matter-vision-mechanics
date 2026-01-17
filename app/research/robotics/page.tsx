import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Bot, Cpu, Zap, Target } from "lucide-react";

export default function RoboticsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Robotics Research"
        description="Advancing the future of automation through cutting-edge robotics research, developing intelligent systems for industrial, service, and autonomous applications."
        gradient="from-blue-600 via-cyan-600 to-blue-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transforming Industries Through Robotics
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our robotics research focuses on developing advanced autonomous systems, 
                industrial automation solutions, and service robots that enhance productivity 
                and safety across diverse sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine artificial intelligence, machine learning, and advanced control 
                systems to create robots capable of complex decision-making, adaptive 
                behavior, and seamless human-robot collaboration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Bot className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Industrial Automation</h3>
                  <p className="text-sm text-gray-600">Manufacturing and production line optimization</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Cpu className="w-10 h-10 text-cyan-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Autonomous Systems</h3>
                  <p className="text-sm text-gray-600">Self-navigating and decision-making robots</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Zap className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Service Robotics</h3>
                  <p className="text-sm text-gray-600">Healthcare, hospitality, and assistance robots</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Target className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Precision Control</h3>
                  <p className="text-sm text-gray-600">High-accuracy manipulation and movement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Human-Robot Interaction</h4>
                <p className="text-gray-600 text-sm">
                  Developing intuitive interfaces and safe collaboration protocols for robots 
                  working alongside humans in shared environments.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Swarm Robotics</h4>
                <p className="text-gray-600 text-sm">
                  Coordinated multi-robot systems for complex tasks requiring distributed 
                  intelligence and collaborative problem-solving.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Robotic Perception</h4>
                <p className="text-gray-600 text-sm">
                  Advanced sensor fusion, computer vision, and environmental understanding 
                  for autonomous navigation and manipulation.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Soft Robotics</h4>
                <p className="text-gray-600 text-sm">
                  Flexible and adaptive robotic systems using novel materials and 
                  actuation methods for delicate and complex tasks.
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
