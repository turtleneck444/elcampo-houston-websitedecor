import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Unlock, DollarSign, ShoppingBag, Wrench, Battery, ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Wrench,
      title: t('services.service1'),
      description: t('services.service1desc'),
      features: [t('services.feature1'), t('services.feature2'), t('services.feature3')],
    },
    {
      icon: Battery,
      title: t('services.service2'),
      description: t('services.service2desc'),
      features: [t('services.feature4'), t('services.feature5'), t('services.feature6')],
    },
    {
      icon: Unlock,
      title: t('services.service3'),
      description: t('services.service3desc'),
      features: [t('services.feature7'), t('services.feature8'), t('services.feature9')],
    },
    {
      icon: DollarSign,
      title: t('services.service4'),
      description: t('services.service4desc'),
      features: [t('services.feature10'), t('services.feature11'), t('services.feature12')],
    },
    {
      icon: ShoppingBag,
      title: t('services.service5'),
      description: t('services.service5desc'),
      features: [t('services.feature13'), t('services.feature14'), t('services.feature15')],
    },
    {
      icon: Smartphone,
      title: t('services.service6'),
      description: t('services.service6desc'),
      features: [t('services.feature16'), t('services.feature17'), t('services.feature18')],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-amber-500/10 px-6 py-3 rounded-full mb-6 border border-accent/20 shadow-sm">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-accent font-bold text-sm tracking-wide">{t('services.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            {t('services.title')} <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">{t('services.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')} <span className="font-semibold text-foreground">{t('services.subtitle2')}</span>{t('services.subtitle3')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-all hover:shadow-2xl group bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-primary transition-colors">
                  {t('services.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 shadow-premium">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              {t('services.ctaTitle')}
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              {t('services.ctaText')}
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-xl">
              <Phone className="mr-2 h-5 w-5" />
              {t('services.ctaButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
