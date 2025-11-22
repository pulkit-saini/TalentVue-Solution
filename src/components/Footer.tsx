import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="TalentVue Solution" className="h-12 w-auto" />
              <span className="font-heading font-bold text-lg text-primary-foreground">
                TalentVue Solution
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Empowering businesses through innovative IT solutions, skill development, and consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/experience/manpower"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Manpower Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/experience/skill-development"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Skill Development
                </Link>
              </li>
              <li>
                <Link
                  to="/experience/csr"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  CSR Services
                </Link>
              </li>
              <li>
                <Link
                  to="/experience/consulting"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link
                  to="/experience/it-solutions"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  IT Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/experience/corporate-trainings"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Corporate Training
                </Link>
              </li>
              

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  SA/5 , Shastri Nagar Ghaziabad, Uttar Pradesh 201002
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 9958789784</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info.talentvuesolutions@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} TalentVue Solution Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
