import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical screen repair take?",
    answer: "Most screen repairs are completed within 30-60 minutes. For more complex repairs, we may need a few hours. We always strive to provide same-day service whenever possible.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes! All our repairs come with a 90-day warranty covering parts and labor. If you experience any issues related to our repair work within this period, we'll fix it at no additional cost.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and offer flexible payment plans with no credit check required.",
  },
  {
    question: "Can you unlock phones from any carrier?",
    answer: "Yes! We can unlock phones from all major carriers including AT&T, Verizon, T-Mobile, Sprint, Metro PCS, Cricket, and more. The unlock is permanent and legal.",
  },
  {
    question: "Do I need an appointment?",
    answer: "While appointments are not required, they are recommended for complex repairs. Walk-ins are always welcome, and we'll do our best to serve you quickly.",
  },
  {
    question: "What if my phone has water damage?",
    answer: "We offer specialized water damage repair services. We'll perform a free diagnostic to assess the damage and provide you with repair options. In many cases, we can recover your data and restore functionality.",
  },
  {
    question: "Do you repair tablets and other devices?",
    answer: "Yes! While phones are our specialty, we also repair tablets, smartwatches, and other mobile devices. Contact us to discuss your specific device.",
  },
  {
    question: "How much does a screen replacement cost?",
    answer: "Screen replacement costs vary depending on your phone model. Prices typically start at $79 for basic models and go up for newer or more advanced devices. Call us for a specific quote for your device.",
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major brands including Apple (iPhone), Samsung, LG, Motorola, Google Pixel, OnePlus, and many others. If you have a device that needs repair, we can likely help!",
  },
  {
    question: "Can I pay my phone bill at your location?",
    answer: "Absolutely! We're a full-service bill payment center for all major carriers. You can pay your bill in person with cash or card, and the payment is processed instantly.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 px-4 text-primary-foreground">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our friendly staff is here to help. Give us a call or visit any of our locations.
            </p>
            <Button size="lg" className="shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (832) 991-6859
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
