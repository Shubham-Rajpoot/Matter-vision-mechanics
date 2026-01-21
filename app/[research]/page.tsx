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
      
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {pageData.h2}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {pageData.para1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pageData.para2}
              </p>
            </div>
            <div className={`bg-gradient-to-br ${pageData.lightGradient} rounded-3xl p-8`}>
              <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-6">
                {pageData.cards.map((card, index)=>{
                  const Icon = iconsData[card.icon as keyof typeof iconsData];
                  return <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                  <Icon className={`w-10 h-10 ${card.color} `} />
                  <h3 className="font-bold text-gray-900 mb-2"> {card.title} </h3>
                  <p className="text-sm text-gray-600"> {card.description} </p>
                </div>
                })}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Research Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.researchAreas.map((card, index)=>{
                return <div key={index} className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">{card.title}</h4>
                <p className="text-gray-600 text-sm">
                  {card.description}
                </p>
              </div>
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
