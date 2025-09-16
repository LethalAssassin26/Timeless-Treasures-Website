import { Link } from "wouter";
import { Cpu } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Cpu className="text-primary text-xl mr-2" />
              <span className="text-xl font-bold text-foreground">TechFlow Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="text-footer-description">
              Empowering businesses with innovative technology solutions for a digital future.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <FaFacebook className="text-xl" />
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
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground" data-testid="text-contact-info">
              <li>123 Tech Street, Suite 456</li>
              <li>San Francisco, CA 94102</li>
              <li>+1 (555) 123-4567</li>
              <li>info@techflow-solutions.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            &copy; 2024 TechFlow Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
