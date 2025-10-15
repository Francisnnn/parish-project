import { DualLogo } from "./DualLogo";

interface ParishHeaderProps {
  title: string;
  subtitle: string;
  location?: string;
}

export const ParishHeader = ({ title, subtitle, location }: ParishHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-[#0b3b57] to-[#6b2f2f] text-white py-3 sm:py-4 px-4 sm:px-6 relative shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-5">
          <DualLogo />
          <div>
            {location && <h3 className="text-xs sm:text-sm mb-0.5">{location}</h3>}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif m-0 leading-tight">{title}</h1>
            <h2 className="text-sm sm:text-base md:text-lg text-[#b5892b] m-0">{subtitle}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};
