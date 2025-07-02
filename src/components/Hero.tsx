import { Button } from "@/components/ui/button";
import { Phone, Wifi, Bed } from "lucide-react";
import heroImage from "@/assets/hero-boarding-home.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SLIATE Students Boarding Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-accent-foreground">SLIATE Students Boarding Home</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Located just a few minutes from SLIATE college campuses, our boarding home provides students with a peaceful, clean, and secure environment that supports focus and academic success.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Bed className="w-5 h-5" />
              <span>Clean Rooms</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Wifi className="w-5 h-5" />
              <span>Free Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="w-5 h-5" />
              <span>24/7 Security</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('facilities')}
              className="w-full sm:w-auto"
            >
              View Facilities
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open('https://wa.me/94771234567', '_blank')}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
            >
              Book a Bed
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;