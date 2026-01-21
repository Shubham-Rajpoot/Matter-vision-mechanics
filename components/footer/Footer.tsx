
import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  "Research Areas": [
    {
      title: "Robotics",
      href: "/robotics"
    },
    {
      title: "Artificial Intelligence",
      href: "/artificial-intelligence"
    },
    {
      title: "Rural Engineering",
      href: "/rural-engineering"
    },
    {
      title: "Sustainable Ceramics",
      href: "/sustainable-ceramics"
    },
    {
      title: "Bio Remediation",
      href: "/bio-remediation"
    },
    {
      title: "Agrotech",
      href: "/agrotech"
    },
    {
      title: "Consumer Products",
      href: "/consumer-products"
    },
    {
      title: "Healthcare Technology",
      href: "/healthcare-technology"
    },
    {
      title: "Assistive Technology",
      href: "/assistive-technology"
    },
    {
      title: "Industrial Design",
      href: "/industrial-design"
    },
  ],
  "Projects": [
    {
      title:"AI Sign Language",
      href:'/#sign-language'
    },
    {
      title:"Clean Air Solutions",
      href:'/#clean-air'
    },
    {
      title:"Sustainability Projects",
      href:'/#agriculture-systems'
    },
    {
      title:"Animal Husbandry",
      href:'/#bovidae-health'
    },
    {
      title:"Health Monitoring",
      href:'/#health-monitoring'
    },
    {
      title: "Gaming Solutions",
      href:'/#educational-gaming'
    },
    {
      title: "Home Decor",
      href:'/#home-decor'
    },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/matter-vision-mechanics/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href={"/"}
              className="flex items-center space-x-3 group cursor-pointer mb-6"
            >
              <img src="./icon.png" alt="logo" className="w-14 h-14 max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10 max-lg:w-12 max-lg:h-12" />
              <div className="relative">
                <div className="text-white font-black text-2xl lg:text-3xl tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  MVM
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <div className="hidden sm:block text-white/80 text-xs font-semibold tracking-widest uppercase">
                MATTER VISION MECHANICS
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering research company advancing humanity through cutting-edge innovation 
              in Robotics, AI, Sustainable Technologies, and beyond. Where research meets impact.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <span className="max-[350px]:text-xs">info.mvmpl@gmail.com</span>
              </div>
              {/* <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span>R-56, Pallav Puram, Phase 2, Meerut 250110</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 bg-dark-800 hover:bg-primary-600 rounded-xl transition-all duration-200 transform hover:scale-110 hover:rotate-3"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MATTER VISION MECHANICS. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
