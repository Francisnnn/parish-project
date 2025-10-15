import { useEffect, useState } from "react";

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-12 h-12 border-4 border-[#b5892b] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
