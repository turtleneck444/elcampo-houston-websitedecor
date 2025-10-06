import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "El Campo",
    address: "306 N Mechanic St",
    city: "El Campo, TX 77437",
    mapUrl: "https://maps.google.com/?q=306+N+Mechanic+St+El+Campo+TX+77437",
  },
  {
    name: "Houston West",
    address: "5424 Hwy 6 N",
    city: "Houston, TX 77084",
    mapUrl: "https://maps.google.com/?q=5424+Hwy+6+N+Houston+TX+77084",
  },
  {
    name: "Houston South",
    address: "10806 S Post Oak Rd",
    city: "Houston, TX 77035",
    mapUrl: "https://maps.google.com/?q=10806+S+Post+Oak+Rd+Houston+TX+77035",
  },
];

const Locations = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit any of our three convenient locations across Texas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-base font-medium">{location.address}</p>
                  <p className="text-base text-muted-foreground">{location.city}</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(location.mapUrl, '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Phone className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Call Any Location</h3>
                <p className="text-3xl font-bold mb-4">(832) 991-6859</p>
                <p className="text-lg text-primary-foreground/90">
                  Same phone number for all three locations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Locations;
