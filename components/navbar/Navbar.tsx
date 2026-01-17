"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe, ChevronUp } from "lucide-react";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

const navItems = [
  {
    label: "Research Areas",
    href: "#research",
    dropdown: [
      { label: "Robotics", href: "/research/robotics" },
      { label: "Artificial Intelligence", href: "/research/artificial-intelligence" },
      { label: "Rural Engineering", href: "/research/rural-engineering" },
      { label: "Sustainable Ceramics", href: "/research/sustainable-ceramics" },
      { label: "Bio Remediation", href: "/research/bio-remediation" },
      { label: "Agrotech", href: "/research/agrotech" },
      { label: "Consumer Products", href: "/research/consumer-products" },
      { label: "Healthcare Technology", href: "/research/healthcare-technology" },
      { label: "Assistive Technology", href: "/research/assistive-technology" },
      { label: "Industrial Design", href: "/research/industrial-design" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    dropdown: [
      { label: "AI for Sign Language", href: "#sign-language" },
      { label: "Clean Air Solutions", href: "#clean-air" },
      { label: "Sustainability Projects", href: "#sustainability" },
      { label: "Animal Husbandry", href: "#animal-husbandry" },
      { label: "Health Monitoring", href: "#health-monitoring" },
      { label: "Gaming Solutions", href: "#gaming" },
      { label: "Home Decor", href: "#home-decor" },
    ],
  },
  {
    label: "About",
    href: "#about",
    dropdown: [
      { label: "Our Mission", href: "#mission" },
      { label: "Research Labs", href: "#labs" },
      { label: "Team", href: "#team" },
      { label: "Partnerships", href: "#partnerships" },
    ],
  },
  {
    label: "Publications",
    href: "#publications",
    dropdown: [
      { label: "Research Papers", href: "#papers" },
      { label: "Case Studies", href: "#cases" },
      { label: "White Papers", href: "#whitepapers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    label: "Careers",
    href: "#careers",
    dropdown: [
      { label: "Open Positions", href: "#positions" },
      { label: "Research Opportunities", href: "#research-opps" },
      { label: "Internships", href: "#internships" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveDropdownItem(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-900/98 backdrop-blur-xl shadow-modern-lg border-b border-white/5"
            : "bg-dark-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="text-white font-black text-2xl lg:text-3xl tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  MVM
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <div className="hidden lg:block text-white/80 text-xs font-semibold tracking-widest uppercase">
                MATTER VISION MECHANICS
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-all duration-300 ${
                      activeDropdown === item.label ? "text-white" : ""
                    }`}
                  >
                    {activeDropdown === item.label && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-cyan-400"></span>
                    )}
                    {item.label}
                    {item.dropdown && (
                      <span className="ml-1">
                        {activeDropdown === item.label ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </a>
                  {item.dropdown && activeDropdown === item.label && (
                    <NavDropdown 
                      items={item.dropdown} 
                      activeItem={activeDropdownItem}
                      onItemHover={setActiveDropdownItem}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button className="hidden lg:block text-white hover:text-primary-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="hidden lg:flex items-center text-white hover:text-primary-400 transition-colors cursor-pointer">
                <Globe className="w-5 h-5 mr-1" />
                <span className="text-sm">Global (En)</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <a
                href="#contact"
                className="hidden lg:block text-white hover:text-primary-400 transition-colors text-sm font-medium"
              >
                Contact Us
              </a>
              <div className="hidden lg:block text-white font-bold text-xl">
                MVM
              </div>
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
