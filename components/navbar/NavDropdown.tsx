
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  activeItem?: string | null;
  onItemHover?: (label: string | null) => void;
}

export default function NavDropdown({ items, activeItem, onItemHover }: NavDropdownProps) {
  return (
    <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-soft-lg py-2 animate-slide-down">
      {items.map((item, index) => {
        const isActive = activeItem === item.label;
        const isRoute = item.href.startsWith("/");
        const Component = isRoute ? Link : "a";
        const props = isRoute 
          ? { href: item.href }
          : { href: item.href };
        
        return (
          <Component
            key={index}
            {...props}
            onMouseEnter={() => onItemHover && onItemHover(item.label)}
            onMouseLeave={() => onItemHover && onItemHover(null)}
            className={`relative flex items-center justify-between px-8 py-3 text-sm transition-all duration-200 group ${
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="relative inline-block pb-1">
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></span>
              )}
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all" />
          </Component>
        );
      })}
    </div>
  );
}
