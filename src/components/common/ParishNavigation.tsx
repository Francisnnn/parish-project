import { Link } from "react-router-dom";
import { Home, Church, Clock, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: typeof Home;
  isExternal?: boolean;
}

interface ParishNavigationProps {
  items: NavItem[];
  variant?: "parish" | "outstation";
}

export const ParishNavigation = ({ items, variant = "parish" }: ParishNavigationProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <nav className="bg-[#b5892b] py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-5">
        {/* Navigation Menu - Always visible with horizontal scroll on mobile */}
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex flex-row justify-center md:justify-center list-none gap-1 sm:gap-2 min-w-max md:min-w-0">
            {items.map((item) => (
              <li key={item.href} className="flex-shrink-0">
                {item.isExternal || !item.href.startsWith('#') ? (
                  <Link 
                    to={item.href} 
                    className="flex items-center gap-1.5 sm:gap-2 text-[#0b3b57] no-underline font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors whitespace-nowrap"
                  >
                    <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button 
                    onClick={(e) => handleClick(item.href, e)}
                    className="flex items-center gap-1.5 sm:gap-2 text-[#0b3b57] font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors border-none bg-transparent cursor-pointer whitespace-nowrap"
                  >
                    <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                    <span>{item.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Preset navigation configurations
export const parishNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home, isExternal: true },
  { label: "Outstation", href: "/outstation", icon: Church, isExternal: true },
  { label: "Mass Time", href: "#mass-times", icon: Clock },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const outstationNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home, isExternal: true },
  { label: "Parish", href: "/parish", icon: Church, isExternal: true },
  { label: "Sacraments", href: "#sacraments", icon: Church },
  { label: "Contact", href: "#contact", icon: Mail },
];
