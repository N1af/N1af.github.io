import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const Pricing = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      title: "Shared Room",
      subtitle: "Budget-friendly option",
      price: "6,000",
      features: [
        "Shared room with 2-3 students",
        "All basic facilities included",
        "Free Wi-Fi access",
        "Common study area",
        "Laundry facility",
        "24/7 security"
      ],
      popular: false
    },
    {
      title: "Double Room",
      subtitle: "Perfect for friends",
      price: "8,000",
      features: [
        "Room shared with 1 other student",
        "More privacy and space",
        "All basic facilities included",
        "Free Wi-Fi access",
        "Common study area",
        "Laundry facility",
        "24/7 security"
      ],
      popular: true
    },
    {
      title: "Single Room",
      subtitle: "Maximum privacy",
      price: "10,000",
      features: [
        "Private single room",
        "Complete privacy",
        "All basic facilities included",
        "Free Wi-Fi access",
        "Priority in common areas",
        "Laundry facility",
        "24/7 security"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect accommodation option that fits your budget and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-floating hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-card bg-primary/5' 
                  : 'hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.subtitle}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">
                    Rs. {plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "hero" : "default"}
                    onClick={scrollToBooking}
                  >
                    Book This Room
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/94771234567', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ask Questions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-accent/30 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Refundable Deposit</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 5,000</p>
                  <p className="text-sm text-muted-foreground">One-time security deposit</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Terms</h4>
                  <p className="text-sm text-muted-foreground">
                    Monthly advance payment required. Deposit refunded upon checkout with proper notice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;