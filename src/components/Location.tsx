import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Stay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your accommodation? Contact us directly through WhatsApp for instant booking
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 shadow-floating">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Ready to Book?
              </CardTitle>
              <p className="text-muted-foreground">
                Contact us now for immediate booking and room availability
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">Near SLIATE Campus</span>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Contact Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a 
                        href="tel:+94774455342"
                        className="text-lg font-medium text-primary hover:underline"
                      >
                        +94 77 445 5342
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a 
                        href="mailto:sliatehome@example.com"
                        className="text-primary hover:underline"
                      >
                        sliatehome@example.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => window.open('https://wa.me/94774455342', '_blank')}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book Now via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={() => window.open('tel:+94774455342', '_blank')}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +94 77 445 5342
                  </Button>
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for bookings and inquiries
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Overview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">5000</div>
              <p className="text-muted-foreground">Shared Room (Monthly)</p>
            </Card>
            <Card className="text-center p-6 shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">6000</div>
              <p className="text-muted-foreground">Double Room (Monthly)</p>
            </Card>
            <Card className="text-center p-6 shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Available Support</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;