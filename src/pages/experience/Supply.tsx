import { Package, Truck, Award, HeadphonesIcon, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Supply = () => {
  const features = [
    {
      icon: Package,
      title: "Wide Product Range",
      description: "Comprehensive catalog of IT hardware, software, and peripherals from leading global manufacturers.",
    },
    {
      icon: Award,
      title: "Genuine Products",
      description: "100% authentic products with manufacturer warranties and certifications.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics and supply chain management ensuring on-time delivery nationwide.",
    },
    {
      icon: HeadphonesIcon,
      title: "After-Sales Support",
      description: "Comprehensive technical support and maintenance services post-purchase.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous quality checks and testing before delivery to ensure optimal performance.",
    },
    {
      icon: Zap,
      title: "Competitive Pricing",
      description: "Best-in-market pricing with flexible payment terms and bulk discounts.",
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
              Supply of IT Products
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner for authentic, high-quality IT hardware and software solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              TalentVue Solution is a trusted supplier of premium IT products and equipment to organizations across 
              industries. We maintain strategic partnerships with leading technology manufacturers and distributors, 
              enabling us to provide authentic, high-quality products at competitive prices. Our supply chain expertise 
              and commitment to customer satisfaction make us the preferred choice for IT procurement needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Product Categories
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Computers & Workstations</h3>
              <p className="text-muted-foreground">
                Desktop computers, laptops, workstations, and all-in-one PCs from leading brands including Dell, HP, 
                Lenovo, Apple, and more. Customized configurations available based on specific requirements.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Servers & Storage Solutions</h3>
              <p className="text-muted-foreground">
                Enterprise-grade servers, storage systems, NAS devices, and data center equipment from HPE, Dell EMC, 
                IBM, and other premium manufacturers for reliable infrastructure.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Networking Equipment</h3>
              <p className="text-muted-foreground">
                Routers, switches, firewalls, wireless access points, and networking accessories from Cisco, Juniper, 
                Aruba, and other industry leaders for robust connectivity.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Software Licenses</h3>
              <p className="text-muted-foreground">
                Genuine software licenses for operating systems, productivity suites, security software, and enterprise 
                applications from Microsoft, Adobe, Oracle, and other vendors.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Peripherals & Accessories</h3>
              <p className="text-muted-foreground">
                Monitors, keyboards, mice, printers, scanners, UPS systems, cables, and other essential IT accessories 
                from trusted brands for complete workplace setup.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Specialized Equipment</h3>
              <p className="text-muted-foreground">
                Point-of-sale systems, barcode scanners, specialized industrial computers, embedded systems, and custom 
                hardware solutions for unique business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
              Authorized Partner & Distributor
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We are proud to be authorized partners and distributors for leading global technology brands:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                <p className="font-semibold text-primary">Dell Technologies</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '100ms' }}>
                <p className="font-semibold text-primary">HP Inc.</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '200ms' }}>
                <p className="font-semibold text-primary">Lenovo</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '300ms' }}>
                <p className="font-semibold text-primary">Cisco Systems</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '400ms' }}>
                <p className="font-semibold text-primary">Microsoft</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '500ms' }}>
                <p className="font-semibold text-primary">Intel</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '600ms' }}>
                <p className="font-semibold text-primary">VMware</p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in" style={{ animationDelay: '700ms' }}>
                <p className="font-semibold text-primary">Adobe</p>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="hero" size="lg" className="animate-scale-in">
                Request Product Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Supply;
