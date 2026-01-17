import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Eye, Languages, Hand, Users } from "lucide-react";

export default function AssistiveTechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Assistive Technology Research"
        description="Specialized assistive technologies including AI-powered sign language recognition systems, communication aids for the deaf and hard of hearing, and accessibility solutions that empower individuals with disabilities."
        gradient="from-violet-600 via-purple-600 to-violet-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Empowering Through Accessible Technology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our assistive technology research focuses on creating innovative solutions 
                that break down communication barriers and enhance accessibility for people 
                with disabilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're developing cutting-edge AI systems for real-time sign language recognition, 
                creating intuitive HCI interfaces, and building communication tools that enable 
                seamless interaction for the deaf and hard of hearing community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Languages className="w-10 h-10 text-violet-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Sign Language AI</h3>
                  <p className="text-sm text-gray-600">Real-time recognition</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Eye className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Computer Vision</h3>
                  <p className="text-sm text-gray-600">Gesture recognition</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Hand className="w-10 h-10 text-violet-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">HCI Integration</h3>
                  <p className="text-sm text-gray-600">Intuitive interfaces</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Users className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Communication Aids</h3>
                  <p className="text-sm text-gray-600">Accessibility tools</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">AI Sign Language Recognition</h4>
                <p className="text-gray-600 text-sm">
                  Advanced AI system for real-time sign language recognition and translation, 
                  enabling seamless communication for the deaf and hard of hearing community 
                  with multi-language support.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Human-Computer Interaction</h4>
                <p className="text-gray-600 text-sm">
                  Intuitive HCI systems designed for accessibility, enabling natural interaction 
                  through gestures, voice, and visual interfaces for users with diverse needs.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Communication Devices</h4>
                <p className="text-gray-600 text-sm">
                  Specialized communication aids and assistive devices that enhance 
                  accessibility in education, employment, and daily life activities.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Accessibility Software</h4>
                <p className="text-gray-600 text-sm">
                  Software solutions and applications designed to make digital content 
                  and services accessible to people with various disabilities.
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
