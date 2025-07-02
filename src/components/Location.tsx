import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const Location = () => {
  const branches = [
    {
      city: "Colombo",
      address: "Near SLIATE Campus, Colombo",
      distance: "3 minutes walk to campus",
      phone: "+94 77 123 4567",
      whatsapp: "94771234567",
      status: "Available"
    },
    {
      city: "Batticaloa", 
      address: "Near SLIATE Campus, Batticaloa",
      distance: "5 minutes walk to campus",
      phone: "+94 71 234 5678",
      whatsapp: "94712345678", 
      status: "Available"
    },
    {
      city: "Kurunegala",
      address: "Near SLIATE Campus, Kurunegala", 
      distance: "4 minutes walk to campus",
      phone: "+94 77 345 6789",
      whatsapp: "94773456789",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located near SLIATE campuses across Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-soft">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-foreground">
                  {branch.city}
                </CardTitle>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  branch.status === 'Available' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {branch.status}
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-muted-foreground mb-1">{branch.address}</p>
                  <p className="text-sm text-primary font-medium">{branch.distance}</p>
                </div>

                {branch.status === 'Available' && (
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => window.open(`https://wa.me/${branch.whatsapp}`, '_blank')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-whatsapp text-whatsapp-foreground rounded-lg hover:bg-whatsapp/90 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp: {branch.phone}
                    </button>
                    
                    <button
                      onClick={() => window.open(`tel:${branch.phone}`, '_blank')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call: {branch.phone}
                    </button>
                  </div>
                )}

                {branch.status === 'Coming Soon' && (
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Opening soon! Contact our main office for updates.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/5 p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Find Us Near Your Campus
                </h3>
                <p className="text-muted-foreground">
                  All our locations are strategically placed within walking distance of SLIATE campuses
                </p>
              </div>
              
              {/* Placeholder for Google Maps - In a real implementation, you'd embed Google Maps here */}
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Google Maps integration showing exact locations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="bg-accent/30 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                General Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:sliatehome@example.com" 
                    className="text-primary hover:underline"
                  >
                    sliatehome@example.com
                  </a>
                </div>
                <p className="text-muted-foreground">
                  For general inquiries and information about all locations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;