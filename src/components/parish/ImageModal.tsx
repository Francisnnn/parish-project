import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-lg p-6 max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-[#6b2f2f] text-white rounded-full p-2 hover:bg-[#0b3b57] transition-smooth"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded" />
      </div>
    </div>
  );
};
