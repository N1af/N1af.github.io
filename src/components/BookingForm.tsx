import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    course: '',
    branch: '',
    roomType: '',
    moveInDate: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.mobile || !formData.roomType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `🏠 *New Booking Request - Students Boarding Home*

📋 *Student Details:*
• Name: ${formData.fullName}
• Course: ${formData.course || 'Not specified'}
• Mobile: ${formData.mobile}
• Email: ${formData.email || 'Not provided'}

🏢 *Accommodation Details:*
• Room Type: ${formData.roomType}
• Move-in Date: ${formData.moveInDate || 'Flexible'}

💬 *Additional Message:*
${formData.message || 'No additional message'}

Please contact me to confirm availability and next steps.`;

    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/94774455342?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Show success message
    toast({
      title: "Booking Request Sent!",
      description: "We'll get in touch via WhatsApp shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      fullName: '',
      course: '',
      branch: '',
      roomType: '',
      moveInDate: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserve Your Spot Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll contact you via WhatsApp to confirm your booking
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-foreground">
                Booking Request Form
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="course">Course / Program</Label>
                      <Input
                        id="course"
                        value={formData.course}
                        onChange={(e) => handleInputChange('course', e.target.value)}
                        placeholder="e.g., HND IT, HNDE"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        placeholder="+94 77 123 4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Accommodation Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                    Accommodation Preferences
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="branch">Booking Request *</Label>
                      <Select onValueChange={(value) => handleInputChange('branch', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select to book" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available Location</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="roomType">Room Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('roomType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shared">Shared Room (Rs. 5,000)</SelectItem>
                          <SelectItem value="double">Double Room (Rs. 6,000)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                    <Input
                      id="moveInDate"
                      type="date"
                      value={formData.moveInDate}
                      onChange={(e) => handleInputChange('moveInDate', e.target.value)}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  size="lg"
                >
                  Submit Booking Request
                </Button>

                {/* Alternative Contact Methods */}
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Or contact us directly:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="whatsapp"
                      onClick={() => window.open('https://wa.me/94774455342', '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp Chat
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open('mailto:acmirfan143477@gmail.com', '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;