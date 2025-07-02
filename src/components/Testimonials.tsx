import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ravi Kumar",
      course: "HND IT",
      rating: 5,
      text: "This place is so clean and quiet! Perfect environment for studying. The Wi-Fi is fast and the common study hall is exactly what I needed for my IT course.",
      avatar: "RK"
    },
    {
      name: "Ahmad Hassan", 
      course: "HNDE",
      rating: 5,
      text: "College is just 5 minutes walking distance. Super comfortable and the staff is very helpful. The security makes my parents feel safe about me staying here.",
      avatar: "AH"
    },
    {
      name: "Priya Sharma",
      course: "HND Business",
      rating: 5,
      text: "Great facilities and very affordable. The laundry area and cooking facility make life so much easier. Highly recommend for SLIATE students!",
      avatar: "PS"
    },
    {
      name: "Mohamed Ali",
      course: "HND Engineering",
      rating: 5,
      text: "The 24/7 electricity and water supply is a huge plus. Never had any issues with power cuts during my studies. Clean rooms and friendly environment.",
      avatar: "MA"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from current and former residents about their experience at our boarding home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        • {testimonial.course}
                      </span>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the comfort and convenience that hundreds of SLIATE students have enjoyed. 
              Book your spot today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
              >
                Book Your Room
              </button>
              <button
                onClick={() => window.open('https://wa.me/94771234567', '_blank')}
                className="px-6 py-3 bg-whatsapp text-whatsapp-foreground rounded-lg hover:bg-whatsapp/90 transition-colors"
              >
                Chat with Current Students
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;