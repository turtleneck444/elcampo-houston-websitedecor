import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PaymentPlans from "@/components/PaymentPlans";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <PaymentPlans />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
