import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const HeroSection = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="relative bg-gradient-to-br from-primary to-accent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight" data-testid="text-hero-title">
              Handmade Products Crafted with Care
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-hero-description">
              Discover unique, high-quality items made with passion and attention to detail. Each piece tells a story and brings warmth to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-secondary px-8 py-3 font-semibold shadow-lg"
                onClick={() => setLocation("/products")}
                data-testid="button-explore-products"
              >
                Explore Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card text-foreground hover:bg-secondary px-8 py-3 font-semibold shadow-lg"
                onClick={() => setLocation("/contact")}
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Full Product Display" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
