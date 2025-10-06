import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Payment Plans Available",
  "No Credit Needed",
  "Flexible Payment Options",
  "Same-Day Service Available",
  "Quality Parts Guaranteed",
  "Expert Technicians",
];

const PaymentPlans = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Payment Options
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We make phone repairs affordable for everyone. No credit check required!
          </p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg font-medium text-primary-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentPlans;
