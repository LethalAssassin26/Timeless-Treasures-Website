import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/hero-section";
import { Rocket, Shield, Headphones } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Rocket className="text-primary-foreground text-2xl" />,
      title: "Performance Driven",
      description: "Optimized solutions that deliver measurable results and accelerate your business growth."
    },
    {
      icon: <Shield className="text-primary-foreground text-2xl" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind."
    },
    {
      icon: <Headphones className="text-primary-foreground text-2xl" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our expert team whenever you need it."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Company Overview Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-why-choose-title">
              Why Choose Timeless Treasures?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-choose-description">
              We sell handmade products crafted with care and passion, ensuring each item is unique and of the highest quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:bg-muted/50 transition-colors duration-200"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
