import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import AdminButton from "@/components/AdminButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Facilities />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Location />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* <AdminButton /> */}
    </div>
  );
};

export default Index;
