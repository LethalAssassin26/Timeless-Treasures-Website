import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";
import { type Product } from "@shared/schema";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "software":
        return "bg-primary/10 text-primary";
      case "hardware":
        return "bg-accent/20 text-accent-foreground";
      case "services":
        return "bg-secondary/20 text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const features = [
    "Enterprise-grade security",
    "24/7 technical support", 
    "Scalable architecture",
    "Easy integration"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-product-details">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold" data-testid="text-modal-title">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
              data-testid="img-modal-product"
            />
            <div className="flex gap-2">
              {/* Thumbnail placeholders */}
              <div className="w-16 h-16 bg-muted rounded-lg"></div>
              <div className="w-16 h-16 bg-muted rounded-lg"></div>
              <div className="w-16 h-16 bg-muted rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Badge 
                variant="secondary" 
                className={`${getCategoryColor(product.category)} mr-4`}
                data-testid="badge-modal-category"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              <div className="flex" data-testid="rating-modal">
                {renderStars(product.rating)}
              </div>
              <span className="ml-2 text-muted-foreground">
                ({product.rating}.0/5)
              </span>
            </div>
            
            <div className="text-3xl font-bold text-primary mb-4" data-testid="text-modal-price">
              {product.price}
            </div>
            
            <p className="text-muted-foreground mb-6" data-testid="text-modal-description">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
              <ul className="space-y-2 text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center" data-testid={`feature-${index}`}>
                    <Check className="text-primary mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Button 
                className="flex-1 font-semibold"
                data-testid="button-get-started-modal"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="font-semibold"
                data-testid="button-request-demo"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
