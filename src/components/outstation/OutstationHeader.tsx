import { Cross } from "lucide-react";

interface OutstationHeaderProps {
  title?: string;
  subtitle?: string;
  location?: string;
}

export const OutstationHeader = ({ 
  title = "St. John of the Cross Catholic Outstation",
  subtitle = "Elebu, Ibadan, Nigeria",
  location = "Under Holy Trinity Catholic Church, Aba-Panu Apata"
}: OutstationHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-[#523826] to-[#6f3f22] text-white py-3 sm:py-4 px-4 sm:px-6 relative shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex">
            <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px] bg-white rounded-full p-1 border-2 border-[#b5892b] flex items-center justify-center flex-shrink-0">
              <Cross className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-[#6f3f22]" />
            </div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif m-0 leading-tight">{title}</h1>
            <h2 className="text-sm sm:text-base md:text-lg text-[#b5892b] m-0">{subtitle}</h2>
            <p className="text-xs sm:text-sm md:text-base m-0 opacity-90">{location}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
