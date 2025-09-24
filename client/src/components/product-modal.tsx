import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";
import { type Product } from "@shared/schema";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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

  const features = [
    "Handcrafted with precision",
    "Customizable designs available",
    "Durable and eco-friendly materials",
    "Unique, small-batch production"
  ];

  return (
    <>
      {/* Main Product Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-y-auto"
          data-testid="modal-product-details"
        >
          <DialogHeader>
            <DialogTitle
              className="text-3xl font-bold"
              data-testid="text-modal-title"
            >
              {product.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6"></div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
                data-testid="img-modal-product"
              />
              <div className="flex gap-2">
              {/* Single stretched button */}
              <Button
                className="w-full font-semibold"
                data-testid="button-more-info-modal"
                onClick={() => setShowMoreInfo(true)}
              >
                More Information
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Secondary "More Info" Popup */}
      <Dialog open={showMoreInfo} onOpenChange={setShowMoreInfo}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              About Our {product.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h4 className="font-semibold text-foreground mb-2">
                Materials & Craftsmanship
              </h4>
              <p>
                Each piece is carefully handcrafted using premium, sustainable
                wood and high-quality 3D printing materials. We pride ourselves
                on durability, precision, and a smooth finish that highlights
                natural textures and unique patterns.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-foreground mb-2">
                Customization
              </h4>
              <p>
                Want something personal? We offer custom sizing, engraving, and
                design adjustments. Whether it’s a wooden décor item or a
                3D-printed model, your product can be tailored to your vision.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-foreground mb-2">
                Care Instructions
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Keep wooden items away from prolonged moisture.</li>
                <li>Dust regularly with a dry or slightly damp cloth.</li>
                <li>
                  For 3D-printed products, avoid high heat or direct sunlight to
                  prevent warping.
                </li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-foreground mb-2">Why Us?</h4>
              <p>
                As a small business, every order means the world to us. Each
                product is made in small batches, ensuring attention to detail,
                quality, and uniqueness you won’t find in mass-produced items.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductModal;