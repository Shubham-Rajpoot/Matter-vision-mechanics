"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe, ChevronUp } from "lucide-react";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const navItems = [
  {
    label: "Research Areas",
    href: "#research",
    dropdown: [
      { label: "Robotics", href: "/robotics" },
      {
        label: "Artificial Intelligence",
        href: "/artificial-intelligence",
      },
      { label: "Rural Engineering", href: "/rural-engineering" },
      { label: "Sustainable Ceramics", href: "/sustainable-ceramics" },
      { label: "Bio Remediation", href: "/bio-remediation" },
      { label: "Agrotech", href: "/agrotech" },
      { label: "Consumer Products", href: "/consumer-products" },
      {
        label: "Healthcare Technology",
        href: "/healthcare-technology",
      },
      { label: "Assistive Technology", href: "/assistive-technology" },
      { label: "Industrial Design", href: "/industrial-design" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    dropdown: [
      { label: "AI for Sign Language", href: "/#sign-language" },
      { label: "Clean Air Solutions", href: "/#clean-air" },
      { label: "Sustainability Projects", href: "/#agriculture-systems" },
      { label: "Animal Husbandry", href: "/#bovidae-health" },
      { label: "Health Monitoring", href: "/#health-monitoring" },
      { label: "Gaming Solutions", href: "/#educational-gaming" },
      { label: "Home Decor", href: "/#home-decor" },
    ],
  },
  {
    label: "Applications",
    href: "/#applications",
  },
  {
    label: "Products",
    href: "/#products",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(
    null,
  );

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
            ? "bg-dark-900/90 backdrop-blur-xl shadow-modern-lg border-b border-white/5"
            : "bg-dark-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <img src="./icon.png" alt="logo" className="w-16 h-16 max-sm:w-10 max-sm:h-10 max-md:w-12 max-md:h-12 max-lg:w-14 max-lg:h-14" />
              <div className="relative">
                <div className="text-white font-black text-2xl lg:text-3xl tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  MVM
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <div className="hidden md:block text-white/80 text-xs font-semibold tracking-widest uppercase">
                MATTER VISION MECHANICS
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center px-4 py-2 text-sm font-semibold text-white/80 hover:text-primary-400 transition-all duration-300 ${
                      activeDropdown === item.label ? "text-white" : ""
                    }`}
                  >
                    {activeDropdown === item.label && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500"></span>
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

            <div className="flex items-center space-x-4 lg:space-x-6 md:hidden">
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
