import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PaymentPlans from "@/components/PaymentPlans";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <PaymentPlans />
      <WhyChooseUs />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
