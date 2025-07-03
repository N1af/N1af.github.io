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
      price: "5,000",
      features: [
        "Shared room with 4-5 students",
        "All basic facilities included",
        "Common study area",
        "Laundry facility",
        "24/7 security",
        "Medical transport (Free)"
      ],
      popular: false
    },
    {
      title: "Double Room",
      subtitle: "Perfect for friends",
      price: "6,000",
      features: [
        "Room shared with 1 other student",
        "More privacy and space",
        "All basic facilities included",
        "Common study area",
        "Laundry facility",
        "24/7 security",
        "Medical transport (Free)"
      ],
      popular: true
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-500 hover:shadow-floating hover:-translate-y-3 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-card bg-gradient-to-br from-primary/5 to-accent/10 ring-2 ring-primary/20' 
                  : 'hover:shadow-card border-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
                      onClick={() => window.open('https://wa.me/94774455342', '_blank')}
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