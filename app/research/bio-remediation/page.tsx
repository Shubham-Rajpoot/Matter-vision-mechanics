import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import { Leaf, Droplets, Recycle, Microscope } from "lucide-react";

export default function BioRemediationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Bio Remediation Technology Research"
        description="Environmental biotechnology research focusing on bioremediation solutions for contaminated sites, wastewater treatment, and ecological restoration using natural and engineered biological processes."
        gradient="from-green-600 via-teal-600 to-green-700"
      />
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Healing the Environment Through Biology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our bio remediation research harnesses the power of microorganisms, plants, 
                and natural processes to clean contaminated environments, restore ecosystems, 
                and treat wastewater sustainably.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We develop innovative bioremediation technologies that are cost-effective, 
                environmentally friendly, and scalable for industrial and environmental applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Leaf className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Phytoremediation</h3>
                  <p className="text-sm text-gray-600">Plant-based cleanup</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Droplets className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Water Treatment</h3>
                  <p className="text-sm text-gray-600">Biological filtration</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Recycle className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Waste Management</h3>
                  <p className="text-sm text-gray-600">Organic waste processing</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <Microscope className="w-10 h-10 text-teal-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Microbial Solutions</h3>
                  <p className="text-sm text-gray-600">Engineered organisms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Soil Remediation</h4>
                <p className="text-gray-600 text-sm">
                  Biological treatment of contaminated soils using microorganisms and 
                  plants to degrade pollutants and restore soil health.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Wastewater Treatment</h4>
                <p className="text-gray-600 text-sm">
                  Advanced biological treatment systems for industrial and municipal 
                  wastewater, removing contaminants naturally.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Aquatic Ecosystem Restoration</h4>
                <p className="text-gray-600 text-sm">
                  Restoration of polluted water bodies through biological processes 
                  and ecosystem engineering.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Air Quality Improvement</h4>
                <p className="text-gray-600 text-sm">
                  Biofiltration systems using plants and microorganisms to remove 
                  air pollutants and improve indoor/outdoor air quality.
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
