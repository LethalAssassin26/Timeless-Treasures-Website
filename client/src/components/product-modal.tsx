import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
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
      case "wood":
        return "bg-amber-100 text-amber-700";
      case "3d print":
        return "bg-indigo-100 text-indigo-700";
      case "decor":
        return "bg-green-100 text-green-700";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
        data-testid="modal-product-details"
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
              data-testid="img-modal-product"
            />
          </div>

          {/* Details */}
          <div>
            {/* Category + Rating */}
            <div className="flex items-center mb-4">
              <Badge
                variant="secondary"
                className={`${getCategoryColor(product.category)} mr-4`}
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="ml-2 text-muted-foreground">
                ({product.rating}.0/5)
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary mb-4">
              {product.price}
            </div>

            {/* Short Description */}
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* Long, product-specific details */}
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h4 className="font-semibold text-foreground mb-2">
                  Materials & Craftsmanship
                </h4>
                <p>{product.details?.materials}</p>
              </section>

              <section>
                <h4 className="font-semibold text-foreground mb-2">
                  Customization
                </h4>
                <p>{product.details?.customization}</p>
              </section>

              <section>
                <h4 className="font-semibold text-foreground mb-2">
                  Care Instructions
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.details?.care?.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-foreground mb-2">Why Us?</h4>
                <p>{product.details?.whyUs}</p>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;