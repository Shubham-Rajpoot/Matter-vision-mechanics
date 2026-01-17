import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Factory, Ruler, Palette, Settings } from "lucide-react";

export default function IndustrialDesignPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Industrial Design Research"
        description="Industrial design research focusing on product design, ergonomics, manufacturing processes, and innovative design solutions for industrial applications that combine form, function, and sustainability."
        gradient="from-gray-600 via-slate-600 to-gray-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Designing the Future of Industry
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our industrial design research combines aesthetic excellence with functional 
                innovation, creating products and systems that are both beautiful and highly 
                efficient.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on ergonomic design, sustainable manufacturing processes, material 
                innovation, and user-centered design approaches that enhance usability and 
                environmental impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Factory className="w-10 h-10 text-gray-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Product Design</h3>
                  <p className="text-sm text-gray-600">Industrial solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Ruler className="w-10 h-10 text-slate-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Ergonomics</h3>
                  <p className="text-sm text-gray-600">Human-centered design</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Palette className="w-10 h-10 text-gray-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Aesthetics</h3>
                  <p className="text-sm text-gray-600">Form & function</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Settings className="w-10 h-10 text-slate-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Process optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Product Design & Development</h4>
                <p className="text-gray-600 text-sm">
                  End-to-end product design from concept to manufacturing, focusing on 
                  user experience, functionality, and sustainable production methods.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ergonomic Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Human factors research and ergonomic design for industrial equipment, 
                  tools, and work environments that enhance safety and productivity.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Material Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Research into sustainable materials, composites, and manufacturing 
                  processes that reduce environmental impact while maintaining quality.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Design for Manufacturing</h4>
                <p className="text-gray-600 text-sm">
                  Optimizing designs for efficient manufacturing, cost-effectiveness, 
                  and scalability while maintaining design integrity and quality.
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
