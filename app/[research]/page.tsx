import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/hero/PageHero";
import {pagesData} from "../data.js";
import {iconsData} from "../icons.js";
import { Metadata } from "next";
import NotFound from "../not-found"

export async function generateMetadata({ params }: { params:{research: string }}): Promise<Metadata> {
  const pageData = pagesData[params.research as keyof typeof pagesData];

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The requested research page does not exist.",
    };
  }

  return {
    title: pageData.seo.metaTitle,
    description: pageData.seo.metaDescription,
    keywords: pageData.seo.keywords,
    alternates: {
      canonical: `https://matter.vision/${params.research}`,
    },

    openGraph: {
      title: pageData.seo.metaTitle,
      description: pageData.seo.metaDescription,
      url: `https://matter.vision/${params.research}`,
      // images: [
      //   {
      //     url: pageData.seo.ogImage, // you can add images later
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
      type: "article",
    },
  };
}


export default function Research({params}: {params: {research: string}}) {
  const {research} = params;
  console.log(research);
  const pageData = pagesData[research as keyof typeof pagesData]; 
  if(!pageData) {
    return <NotFound />
  }
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title={pageData.title}
        description={pageData.description}
        gradient={pageData.gradient}
      />
      
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              {/* Section accent */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] rounded-full"></div>
                <span className="text-sm font-semibold text-[#FF6A00] uppercase tracking-wider">Research Focus</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {pageData.h2}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {pageData.para1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pageData.para2}
              </p>
            </div>
            
            <div className={`bg-gradient-to-br from-orange-50 via-[#FFF4E8] to-orange-50 rounded-3xl p-8 border border-orange-100 shadow-modern hover:shadow-modern-lg transition-all duration-300`}>
              <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-6">
                {pageData.cards.map((card, index)=>{
                  const Icon = iconsData[card.icon as keyof typeof iconsData];
                  return (
                    <div 
                      key={index} 
                      className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg hover:shadow-orange-100/70 transition-all duration-300 transform hover:-translate-y-1 border border-orange-50 hover:border-orange-100 overflow-hidden"
                    >
                      {/* Top accent line */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon with orange background */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-[#FF8C42]/10 to-[#FFB703]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-[#FF6A00] group-hover:to-[#FF8C42] transition-all duration-300">
                          <Icon className={`w-6 h-6 ${card.color} group-hover:text-white transition-colors duration-300`} />
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6A00] transition-colors duration-300"> 
                        {card.title} 
                      </h3>
                      <p className="text-sm text-gray-600"> 
                        {card.description} 
                      </p>
                      
                      {/* Corner glow */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6A00]/0 to-[#FFB703]/0 group-hover:from-[#FF6A00]/10 group-hover:to-[#FFB703]/10 rounded-tl-full transition-all duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Research Projects Section */}
          <div className="bg-gradient-to-br from-white via-orange-50/30 to-white rounded-3xl p-8 lg:p-12 border border-orange-100 shadow-modern relative overflow-hidden">
            {/* Section header with orange accent */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] rounded-full"></div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Key Research Projects
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Exploring innovative solutions across multiple research domains</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.researchAreas.map((card, index)=>{
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg hover:shadow-orange-100/70 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-orange-200 overflow-hidden"
                  >
                    {/* Top gradient accent */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FFB703] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-[#FF6A00] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 via-[#FF8C42]/0 to-[#FFB703]/0 group-hover:from-[#FF6A00]/5 group-hover:via-[#FF8C42]/5 group-hover:to-[#FFB703]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
