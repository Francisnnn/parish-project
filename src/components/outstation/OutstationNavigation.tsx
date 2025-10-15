import { Link } from "react-router-dom";
import { Home, Church, Mail } from "lucide-react";

export const OutstationNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#d6b89a] py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-5">
        {/* Navigation Menu - Always visible with horizontal scroll on mobile */}
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex flex-row justify-center md:justify-center list-none gap-1 sm:gap-2 min-w-max md:min-w-0">
            <li className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center gap-1.5 sm:gap-2 text-[#523826] no-underline font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors whitespace-nowrap"
              >
                <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                <span>Home</span>
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link 
                to="/parish" 
                className="flex items-center gap-1.5 sm:gap-2 text-[#523826] no-underline font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors whitespace-nowrap"
              >
                <Church className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                <span>Parish</span>
              </Link>
            </li>
            <li className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('sacraments')} 
                className="flex items-center gap-1.5 sm:gap-2 text-[#523826] font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors border-none bg-transparent cursor-pointer whitespace-nowrap"
              >
                <Church className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                <span>Sacraments</span>
              </button>
            </li>
            <li className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center gap-1.5 sm:gap-2 text-[#523826] font-semibold text-sm sm:text-base md:text-lg px-2.5 sm:px-3 md:px-4 py-2 rounded hover:bg-white transition-colors border-none bg-transparent cursor-pointer whitespace-nowrap"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
