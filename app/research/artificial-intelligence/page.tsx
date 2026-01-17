import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Brain, Eye, MessageSquare, Network } from "lucide-react";

export default function AIPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Artificial Intelligence Research"
        description="Pioneering AI research in machine learning, computer vision, natural language processing, and assistive technologies for sign language recognition and human-computer interaction."
        gradient="from-purple-600 via-indigo-600 to-purple-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advancing AI for Human Benefit
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our AI research spans machine learning, deep learning, computer vision, 
                and natural language processing, with special emphasis on assistive 
                technologies for accessibility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're developing breakthrough AI systems for real-time sign language 
                recognition, enabling seamless communication for the deaf and hard of 
                hearing community through advanced HCI integration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Brain className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
                  <p className="text-sm text-gray-600">Deep learning and neural networks</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Eye className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Computer Vision</h3>
                  <p className="text-sm text-gray-600">Image and video understanding</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <MessageSquare className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">NLP & HCI</h3>
                  <p className="text-sm text-gray-600">Natural language and interaction</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Network className="w-10 h-10 text-indigo-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Sign Language AI</h3>
                  <p className="text-sm text-gray-600">Real-time recognition systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Research Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">AI Sign Language Recognition</h4>
                <p className="text-gray-600 text-sm">
                  Real-time sign language recognition and translation system using advanced 
                  computer vision and machine learning for seamless communication.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Human-Computer Interaction</h4>
                <p className="text-gray-600 text-sm">
                  Intuitive HCI systems that enable natural interaction between humans 
                  and AI-powered devices, with focus on accessibility.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
                <p className="text-gray-600 text-sm">
                  Advanced ML models for forecasting, pattern recognition, and 
                  data-driven decision making across industries.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">AI Ethics & Fairness</h4>
                <p className="text-gray-600 text-sm">
                  Research into ethical AI development, bias mitigation, and ensuring 
                  AI systems are fair, transparent, and beneficial for all.
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
