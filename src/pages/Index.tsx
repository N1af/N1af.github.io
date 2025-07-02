import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Facilities />
        <Pricing />
        <Testimonials />
        <Location />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
