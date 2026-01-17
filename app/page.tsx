import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import InnovationSection from "@/components/sections/InnovationSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <ProductsSection />
      <InnovationSection />
      <Footer />
    </main>
  );
}
