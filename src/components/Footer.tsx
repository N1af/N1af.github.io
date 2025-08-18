import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Students</h3>
                <p className="text-sm opacity-90">Boarding Nawalapitiya</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Providing clean, safe, and affordable accommodation for SLIATE students. 
              Located conveniently near campuses with all modern facilities.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://instagram.com/sliateboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a> */}
              {/* <a
                href="https://facebook.com/sliateboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facilities')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <div>
                  <a
                    href="https://wa.me/94774455342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    +94 77 445 5342
                  </a>
                  <p className="text-xs opacity-70">Main Contact</p>
                </div>
              </div>
              

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:Acmirfan143477@gmail.com"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Acmirfan143477@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Sticky Button */}
            <div className="mt-6">
              <button
                onClick={() => window.open('https://wa.me/94774455342', '_blank')}
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Students Boarding Nawalapitiya. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-primary-foreground/60 text-xs">
                Near SLIATE Campus • Clean • Safe • Affordable
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;