import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <button
        onClick={() => window.open('https://wa.me/94774455342', '_blank')}
        className="bg-whatsapp hover:bg-whatsapp/90 text-white p-4 rounded-full shadow-floating hover:shadow-glow transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <Phone className="w-6 h-6 group-hover:animate-bounce-gentle" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;