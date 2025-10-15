import { Cross } from "lucide-react";

interface LeaderCardProps {
  imageSrc?: string;
  title: string;
  name: string;
  subtitle?: string;
}

export const LeaderCard = ({ imageSrc, title, name, subtitle }: LeaderCardProps) => {
  return (
    <div className="w-full max-w-[250px] text-center bg-white p-4 sm:p-5 rounded-lg shadow-card transition-transform hover:-translate-y-1">
      <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-[15%] mx-auto mb-4 sm:mb-5 overflow-hidden border-4 border-[#b5892b] shadow-elegant flex items-center justify-center bg-gradient-to-br from-[#0b3b57] to-[#6b2f2f]">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        ) : (
          <Cross className="h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20 text-white" />
        )}
      </div>
      {title && <p className="text-xs sm:text-sm text-muted-foreground mb-1">{title}</p>}
      <h3 className="font-serif text-base sm:text-lg mb-1">{name}</h3>
      {subtitle && <p className="text-xs sm:text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
