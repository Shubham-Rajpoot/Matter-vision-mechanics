import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
// import InnovationSection from "@/components/sections/InnovationSection";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";
import ProductsImages from "@/components/sections/ProductsImages";

export const metadata: Metadata = {
  title: "Matter Vision Mechanics",
  description: "Discover innovative research across multiple engineering and technology domains.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductsImages />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      {/* <InnovationSection /> */}
      <Footer />
    </main>
  );
}
