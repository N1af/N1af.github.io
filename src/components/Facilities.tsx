import { Card, CardContent } from "@/components/ui/card";
import { Bed, Phone, Bed as Reading, Bed as Kitchen, Bed as Laundry, Bed as Camera, ShoppingCart, MapPin, Printer, Heart } from "lucide-react";
import bedroomImage from "@/assets/clean-bedroom.jpg";
import studyHallImage from "@/assets/study-hall.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Bed,
      title: "Spacious Clean Bedrooms",
      description: "Comfortable shared rooms with quality mattresses and storage space for 4-5 students",
      // image: bedroomImage
    },
    {
      icon: Phone,
      title: "24-Hour Water & Electricity",
      description: "Uninterrupted water supply and power backup for comfortable living",
      image: null
    },
    {
      icon: Reading,
      title: "Common Reading Hall",
      description: "Quiet study space with proper lighting and comfortable seating",
      // image: studyHallImage
    },
    {
      icon: Kitchen,
      title: "Cooking & Mess Facility",
      description: "Fully equipped kitchen and dining area for self-cooking or mess meals",
      image: null
    },
    {
      icon: Laundry,
      title: "Laundry Area",
      description: "Dedicated washing area with drying space for your convenience",
      image: null
    },
    {
      icon: Camera,
      title: "24/7 CCTV Security",
      description: "Complete surveillance system ensuring safety and security of residents",
      image: null
    },
    {
      icon: ShoppingCart,
      title: "Grocery Store",
      description: "Convenient grocery store located just 50 meters away",
      image: null
    },
    {
      icon: Phone,
      title: "Communication Center",
      description: "Communication facilities available within 50 meters",
      image: null
    },
    {
      icon: Printer,
      title: "Print Out Facilities",
      description: "Professional printing services available within 150 meters walking distance",
      image: null
    },
    {
      icon: Heart,
      title: "Medical Transport",
      description: "Free medical transport service available for emergencies",
      image: null
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed with students in mind - everything you need for comfortable and focused living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 bg-card border-0 shadow-soft animate-fade-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                {facility.image ? (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <facility.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Why Choose Our Boarding Home?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5 min</div>
                <p className="text-muted-foreground">Walk to SLIATE Campus</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Security & Support</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Clean & Hygienic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;