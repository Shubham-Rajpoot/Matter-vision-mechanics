"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 lg:hidden z-40 bg-dark-900/98 backdrop-blur-md overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {navItems.map((item) => (
          <div key={item.label} className="border-b border-gray-700">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex items-center justify-between py-4 text-white hover:text-primary-400 transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  {openDropdown === item.label ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openDropdown === item.label && (
                  <div className="pb-4 space-y-2">
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href={dropdownItem.href}
                        onClick={onClose}
                        className="block py-2 pl-6 text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                onClick={onClose}
                className="block py-4 text-white hover:text-primary-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
        <div className="mt-6 space-y-4">
          <a
            href="#contact"
            onClick={onClose}
            className="block py-3 text-center text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
