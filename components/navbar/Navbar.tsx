"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe, ChevronUp } from "lucide-react";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

const navItems = [
  {
    label: "What we do",
    href: "#services",
    dropdown: [
      { label: "Industries", href: "#industries" },
      { label: "Services", href: "#services" },
      { label: "Products and Platforms", href: "#products" },
      { label: "Research & Innovation", href: "#innovation" },
      { label: "Alliances", href: "#alliances" },
    ],
  },
  {
    label: "Who we are",
    href: "#about",
    dropdown: [
      { label: "About Us", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "Culture", href: "#culture" },
      { label: "Corporate Governance", href: "#governance" },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    dropdown: [
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#cases" },
      { label: "White Papers", href: "#whitepapers" },
      { label: "Webinars", href: "#webinars" },
    ],
  },
  {
    label: "Careers",
    href: "#careers",
    dropdown: [
      { label: "Open Positions", href: "#positions" },
      { label: "Life at Company", href: "#life" },
      { label: "Benefits", href: "#benefits" },
      { label: "Internships", href: "#internships" },
    ],
  },
  {
    label: "Newsroom",
    href: "#news",
  },
  {
    label: "Investors",
    href: "#investors",
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/95 backdrop-blur-md shadow-soft-lg"
            : "bg-dark-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-white font-bold text-2xl lg:text-3xl">
                tcs
              </div>
              <div className="hidden lg:block text-white text-xs font-medium tracking-wider">
                TATA CONSULTANCY SERVICES
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
                    className={`flex items-center px-4 py-2 text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200 ${
                      activeDropdown === item.label ? "text-primary-400" : ""
                    }`}
                  >
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
                TATA
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
