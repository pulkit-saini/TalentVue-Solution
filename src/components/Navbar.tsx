import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="TalentVue Solutions Pvt. Ltd." className="h-12 w-auto" />
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">
              TalentVue Solutions Pvt. Ltd.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-foreground"
              }`}
            >
              Products
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Our Expertise</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                
                <Link
                  to="/experience/manpower"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  Manpower Solutions
                </Link>
                <Link
                  to="/experience/skill-development"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  Skill Development
                </Link>
                <Link
                  to="/experience/csr"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  CSR
                </Link>
                <Link
                  to="/experience/consulting"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  Consulting Services
                </Link>
                <Link
                  to="/experience/it-solutions"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  IT Solutions
                </Link>
                <Link
                  to="/experience/corporate-trainings"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  Corporate Trainings
                </Link>
                
              </div>
            </div>

            <Link
              to="/career"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/career") ? "text-primary" : "text-foreground"
              }`}
            >
              Career
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              
              <div>
                <button
                  onClick={() => setExperienceOpen(!experienceOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium py-2"
                >
                  <span>Our Experience</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${experienceOpen ? 'rotate-180' : ''}`} />
                </button>
                {experienceOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/experience"
                      className="block text-sm py-2 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/experience/manpower"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Manpower Solutions
                    </Link>
                    <Link
                      to="/experience/skill-development"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Skill Development
                    </Link>
                    <Link
                      to="/experience/csr"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      CSR
                    </Link>
                    <Link
                      to="/experience/consulting"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Consulting Services
                    </Link>
                    <Link
                      to="/experience/it-solutions"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      IT Solutions
                    </Link>
                    <Link
                      to="/experience/corporate-trainings"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Corporate Trainings
                    </Link>
                    <Link
                      to="/experience/supply"
                      className="block text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Supply of IT Products
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/career"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="sm" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
