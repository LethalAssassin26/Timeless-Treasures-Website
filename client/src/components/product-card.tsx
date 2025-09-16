import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
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

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={() => onViewDetails(product)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`img-product-${product.id}`}
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge 
            variant="secondary" 
            className={getCategoryColor(product.category)}
            data-testid={`badge-category-${product.id}`}
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>
          <div className="flex" data-testid={`rating-${product.id}`}>
            {renderStars(product.rating)}
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary" data-testid={`text-product-price-${product.id}`}>
            {product.price}
          </div>
          <Button 
            className="font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            data-testid={`button-view-details-${product.id}`}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
