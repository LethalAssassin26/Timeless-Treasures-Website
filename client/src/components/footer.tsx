import { Link } from "wouter";
import { BriefcaseBusiness } from "lucide-react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BriefcaseBusiness className="text-primary text-xl mr-2" />
              <span className="text-xl font-bold text-foreground">Timeless Treasures</span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="text-footer-description">
              Timeless Treasures - Crafting Memories with Every Piece.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_timeless_treasures_1/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576867763822" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="mailto:tmlstrs23@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-gmail"
              >
                <FaGoogle className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" data-testid="link-footer-products">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Social Media Info</h4>
            <ul className="space-y-2 text-muted-foreground" data-testid="text-contact-info">
              <li>Instagram: _timeless_treasures_1</li>
              <li>Facebook: Timeless Treasures</li>
              <li>Gmail: tmlstrs@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
