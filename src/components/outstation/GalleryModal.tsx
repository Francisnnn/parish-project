import { X } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const GalleryModal = ({ isOpen, onClose, imageSrc, imageAlt }: GalleryModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-lg p-5 max-w-[800px] w-full" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl font-bold text-[#523826] cursor-pointer border-none bg-transparent hover:opacity-70"
        >
          <X />
        </button>
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded" />
      </div>
    </div>
  );
};
