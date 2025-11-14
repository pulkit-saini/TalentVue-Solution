import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Lightbulb, Target, Shield, TrendingUp, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import infosysLogo from "@/assets/partners/infosys.png";
import mangosOrangeLogo from "@/assets/partners/mangosorange.png";
import googleLogo from "@/assets/partners/google.jpg";
import hpLogo from "@/assets/partners/hp.svg";
import acerLogo from "@/assets/partners/acer.svg";
import intelLogo from "@/assets/partners/intel.svg";
import dellLogo from "@/assets/partners/dell.svg";
import ciscoLogo from "@/assets/partners/cisco.svg";
import ibmLogo from "@/assets/partners/ibm.svg";
import HomeCarousel from "@/components/HomeCarousel";

const Home = () => {
  const services = [
    {
      icon: Lightbulb,
      title: " Manpower Solutions",
      description: "Comprehensive training programs to enhance workforce capabilities and professional growth.",
      link: "/experience/manpower",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Comprehensive training programs to enhance workforce capabilities and professional growth.",
      link: "/experience/skill-development",
    },
    {
      icon: Shield,
      title: "CSR Initiatives",
      description: "Strategic corporate social responsibility programs that create lasting community impact.",
      link: "/experience/csr",
    },
    {
      icon: Target,
      title: "Consulting Services",
      description: "Expert guidance and strategic solutions for your business challenges and growth objectives.",
      link: "/experience/consulting",
    },
    {
      icon: TrendingUp,
      title: "IT Solutions",
      description: "Cutting-edge technology solutions tailored to drive digital transformation and efficiency.",
      link: "/experience/it-solutions",
    },
    {
      icon: TrendingUp,
      title: "Corporate Trainings",
      description: "Cutting-edge technology solutions tailored to drive digital transformation and efficiency.",
      link: "/experience/corporate-trainings",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Expert Team" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses Through
              <span className="block text-accent mt-2">Innovation & Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Your trusted partner in IT solutions, skill development, and corporate consulting. 
              Empowering organizations to achieve their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to drive growth, innovation, and sustainable success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:shadow-accent/15 transition-all duration-300 animate-scale-in border border-border/60 hover:border-accent/50 bg-gradient-to-br from-card via-card to-secondary/20" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TalentVue?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our proven track record and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-slide-up group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Proven Expertise</h3>
              <p className="text-muted-foreground">
                Decade of experience delivering exceptional results across diverse industries
              </p>
            </div>

            <div className="text-center animate-slide-up group" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Tailored solutions that align perfectly with your unique business objectives
              </p>
            </div>

            <div className="text-center animate-slide-up group" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Measurable Results</h3>
              <p className="text-muted-foreground">
                Data-driven strategies that deliver tangible improvements and ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <HomeCarousel />

      {/* Our Trusted Partners Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with global technology leaders to deliver innovative and reliable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { logo: infosysLogo, alt: "Infosys" },
              { logo: mangosOrangeLogo, alt: "MangosOrange" },
              { logo: googleLogo, alt: "Google" },
              { logo: hpLogo, alt: "HP" },
              { logo: acerLogo, alt: "Acer" },
              { logo: intelLogo, alt: "Intel" },
              { logo: dellLogo, alt: "Dell" },
              { logo: ciscoLogo, alt: "Cisco" },
              { logo: ibmLogo, alt: "IBM" }
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl flex items-center justify-center h-[160px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's discuss how we can help you achieve your goals with our innovative solutions
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="animate-scale-in">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
