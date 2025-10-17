interface DualLogoProps {
  logo1Src?: string;
  logo2Src?: string;
  logo1Alt?: string;
  logo2Alt?: string;
}

export const DualLogo = ({ 
  logo1Src = "/img/Archdoicese of Ibadan logo.jpg",
  logo2Src = "/img/trinity logo.jpeg",
  logo1Alt = "Archdiocese of Ibadan",
  logo2Alt = "Holy Trinity Catholic Church"
}: DualLogoProps) => {
  return (
    <div className="flex gap-1.5 sm:gap-2">
      <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex items-center justify-center flex-shrink-0">
        <img src={logo1Src} alt={logo1Alt} className="h-full w-auto border radius-25px object-contain" />
      </div>
      <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex items-center justify-center flex-shrink-0">
        <img src={logo2Src} alt={logo2Alt} className="h-full w-auto border radius-25px object-contain" />
      </div>
    </div>
  );
};
