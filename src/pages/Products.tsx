import { Monitor, Server, Shield, Cloud, Database, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: Monitor,
      title: "Enterprise Software Solutions",
      description: "Comprehensive software platforms designed to streamline business operations, enhance productivity, and drive digital transformation across your organization.",
      features: ["Custom Development", "ERP Systems", "CRM Solutions", "Workflow Automation"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud computing solutions that provide flexibility, reliability, and cost-efficiency for modern businesses of all sizes.",
      features: ["Cloud Migration", "Hybrid Solutions", "Infrastructure Management", "Disaster Recovery"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Advanced security systems to protect your digital assets, ensure compliance, and maintain business continuity in an evolving threat landscape.",
      features: ["Network Security", "Data Encryption", "Threat Detection", "Security Audits"],
    },
    {
      icon: Server,
      title: "IT Hardware & Equipment",
      description: "Premium quality servers, networking equipment, and computing devices from leading manufacturers to power your business infrastructure.",
      features: ["Servers & Storage", "Networking Devices", "Workstations", "Peripherals"],
    },
    {
      icon: Database,
      title: "Data Management Systems",
      description: "Robust data management and analytics platforms that transform raw data into actionable insights for informed decision-making.",
      features: ["Database Solutions", "Data Analytics", "Business Intelligence", "Data Warehousing"],
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Reliable networking infrastructure and connectivity solutions designed to ensure seamless communication and data flow across your organization.",
      features: ["Network Design", "Wireless Solutions", "VPN Services", "Network Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our IT Products & Solutions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Cutting-edge technology products and solutions designed to accelerate your digital journey 
              and enhance operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <product.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
              Why Choose Our Products?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-left animate-slide-up">
                <h3 className="font-heading font-semibold text-xl mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  All products undergo rigorous testing and quality control to ensure reliability, 
                  performance, and longevity in demanding business environments.
                </p>
              </div>
              
              <div className="text-left animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-heading font-semibold text-xl mb-3">Scalability</h3>
                <p className="text-muted-foreground">
                  Our solutions are designed to grow with your business, offering flexible configurations 
                  that adapt to changing needs and expanding operations.
                </p>
              </div>
              
              <div className="text-left animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-heading font-semibold text-xl mb-3">Expert Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive technical support and maintenance services ensure optimal performance 
                  and minimize downtime throughout the product lifecycle.
                </p>
              </div>
              
              <div className="text-left animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading font-semibold text-xl mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer exceptional value with competitive pricing models and flexible payment options 
                  that align with your budget and business objectives.
                </p>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="hero" size="lg" className="animate-scale-in">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
