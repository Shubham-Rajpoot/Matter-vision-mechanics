
import Link from "next/link";
import { 
  ArrowRight, 
  Cpu, 
  Network, 
  Settings, 
  Beaker, 
  Recycle, 
  Wheat, 
  Package, 
  Activity, 
  HandHeart, 
  Ruler,
  Sparkles 
} from "lucide-react";

const researchAreas = [
  {
    icon: Cpu,
    title: "Robotics",
    slug: "robotics",
    description: "Fundamental Research in diverse fields like programmable prosthetics, autonomous/semi-autonomous assistants in various industries, industrial automation and more.",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: Network,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Bleeding Edge AI research in machine learning, deep learning, image processing, computer vision, satellite image processing and biometrics. Special focus upon assistive AI for sign language recognition and HCI.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Settings,
    title: "Rural Engineering",
    slug: "rural-engineering",
    description: "Engineering solutions tailored for rural communities. Developing sustainable infrastructure, water management systems, and technology solutions for underserved areas.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Beaker,
    title: "Sustainable Ceramics",
    slug: "sustainable-ceramics",
    description: "Innovative ceramic materials research including micro furnaces, high-performance ceramics, and sustainable manufacturing processes for industrial applications.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Recycle,
    title: "Bio Remediation Technology",
    slug: "bio-remediation",
    description: "Environmental biotechnology research focusing on bioremediation solutions for contaminated sites, wastewater treatment, and ecological restoration.",
    gradient: "from-green-600 to-teal-600",
  },
  {
    icon: Wheat,
    title: "Agrotech",
    slug: "agrotech",
    description: "Agricultural technology innovations including hydroponic systems, precision farming, crop monitoring, and sustainable agriculture solutions for enhanced food security.",
    gradient: "from-lime-500 to-green-600",
  },
  {
    icon: Package,
    title: "Consumer Products",
    slug: "consumer-products",
    description: "Research and development of consumer products including portable air purifiers, masks, home decor items (wood and acrylic arts), and everyday innovation solutions.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Activity,
    title: "Healthcare Technology",
    slug: "healthcare-technology",
    description: "IoT-based health monitoring devices, medical diagnostics, telemedicine solutions, and innovative healthcare technologies for improved patient outcomes.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: HandHeart,
    title: "Assistive Technology",
    slug: "assistive-technology",
    description: "Specialized assistive technologies including AI-powered sign language recognition systems, communication aids for the deaf and hard of hearing, and accessibility solutions.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Ruler,
    title: "Industrial Design",
    slug: "industrial-design",
    description: "Industrial design research focusing on product design, ergonomics, manufacturing processes, and innovative design solutions for industrial applications.",
    gradient: "from-gray-600 to-slate-600",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="research"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-primary-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Research Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Active research across cutting-edge domains, driving innovation and creating impact
            through interdisciplinary collaboration
          </p>
        </div>

        {/* Premium Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link
                key={index}
                href={`/${area.slug}`}
                className="group relative bg-white rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1 border border-gray-200/50 hover:border-gray-300 block cursor-pointer overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 rounded-2xl`}
                />
                
                {/* Top accent line - more subtle */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                
                {/* Professional Icon Container */}
                <div className="relative mb-6">
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105`}>
                    <Icon className="w-7 h-7 text-white relative z-10" strokeWidth={2} />
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-xl blur-sm"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 relative z-10">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm relative z-10">
                  {area.description}
                </p>

                {/* Professional Link Indicator */}
                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300 relative z-10">
                  <span className="relative text-sm">
                    Learn more
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Subtle corner accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-[0.15] rounded-tl-full transition-opacity duration-700`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
