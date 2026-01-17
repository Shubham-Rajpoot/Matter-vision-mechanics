import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { ShoppingBag, Wind, Gamepad2, Palette } from "lucide-react";

export default function ConsumerProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Consumer Products Research"
        description="Research and development of innovative consumer products including portable air purifiers, masks, home decor items, and gaming solutions that enhance everyday life."
        gradient="from-pink-600 via-rose-600 to-pink-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Innovation for Everyday Living
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our consumer products research focuses on creating practical, beautiful, 
                and sustainable products that improve quality of life while addressing 
                real-world needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From clean air solutions to educational games and artisan home decor, 
                we combine functionality with aesthetic design to create products people 
                love to use.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Wind className="w-10 h-10 text-pink-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Air Purifiers</h3>
                  <p className="text-sm text-gray-600">Portable clean air solutions</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <ShoppingBag className="w-10 h-10 text-rose-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Masks</h3>
                  <p className="text-sm text-gray-600">Advanced filtration technology</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Gamepad2 className="w-10 h-10 text-pink-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Gaming</h3>
                  <p className="text-sm text-gray-600">Educational platforms</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Palette className="w-10 h-10 text-rose-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Home Decor</h3>
                  <p className="text-sm text-gray-600">Wood & acrylic arts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Clean Air Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Portable air purifiers and advanced mask technology with HEPA filtration 
                  and smart monitoring for personal and industrial air quality management.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Educational Gaming</h4>
                <p className="text-gray-600 text-sm">
                  Online, offline, and Montessori-inspired games designed to enhance learning 
                  through interactive play and cognitive development activities.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Artisan Home Decor</h4>
                <p className="text-gray-600 text-sm">
                  Premium wood and acrylic art pieces combining traditional craftsmanship 
                  with modern design for residential and commercial spaces.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Smart Consumer Tech</h4>
                <p className="text-gray-600 text-sm">
                  IoT-enabled consumer products that integrate seamlessly into modern 
                  lifestyles, providing convenience and enhanced functionality.
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
