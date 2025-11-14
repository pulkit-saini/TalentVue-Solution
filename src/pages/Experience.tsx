import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Laptop, 
  Package, 
  Award,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Experience = () => {
  const experienceAreas = [
    {
      title: "Skill Development",
      description: "Comprehensive training programs across 30+ industry sectors with government-backed initiatives and certifications.",
      icon: GraduationCap,
      link: "/experience/skill-development",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Corporate Social Responsibility",
      description: "Partnering with leading PSUs and corporate organizations to create sustainable social impact programs.",
      icon: Heart,
      link: "/experience/csr",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Consulting Services",
      description: "Strategic consulting for skill development, training management, and organizational capacity building.",
      icon: Briefcase,
      link: "/experience/consulting",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "IT Solutions",
      description: "End-to-end technology solutions including portal development, assessment systems, and digital infrastructure.",
      icon: Laptop,
      link: "/experience/it-solutions",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Supply of IT Products",
      description: "Pan-India supply of medical, sector-specific, STEM equipment, and specialized training tools.",
      icon: Package,
      link: "/experience/supply",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const sectors = [
    "Capital Goods", "Logistics", "Management", "Apparel", "Electronics", "Retail",
    "Beauty & Wellness", "Media & Entertainment", "Telecom", "BFSI", "IT-ITeS",
    "Green Jobs", "Tourism & Hospitality", "Construction", "Agriculture", "Textile",
    "Healthcare", "Food Processing", "Automotive", "Life Sciences", "Iron and Steel",
    "Handicrafts", "Rubber", "Plumbing", "Leather", "Furniture & Fittings",
    "Hydrocarbon", "Power", "Aerospace", "Gem & Jewellery", "Security", "Mining"
  ];

  const keyStrengths = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "TOT Certified trainers, MSDE approved, and sector skill council certified professionals"
    },
    {
      icon: Users,
      title: "Extensive Network",
      description: "Pan-India presence with established partnerships across government and private sectors"
    },
    {
      icon: Building2,
      title: "Infrastructure Ready",
      description: "Complete training infrastructure with state-of-the-art equipment and facilities"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects across skill development and CSR initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Expertise</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Our Experience
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in">
              Extensive expertise across skill development, CSR initiatives, consulting, IT solutions, and supply chain management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Competencies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Five key areas where we deliver exceptional results and create lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${area.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${area.color}`} />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full group-hover:bg-accent" asChild>
                      <Link to={area.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Experience Across 30+ Industry Sectors
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse portfolio spans across multiple industries, delivering specialized solutions and expertise
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {sectors.map((sector, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose TalentVue Solution
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to excellence, quality, and transparency sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{strength.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {strength.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Government Programs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Government-Backed Programs & Initiatives
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Programs</CardTitle>
                <CardDescription>
                  Extensive involvement in government-funded skill development schemes across India
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
                  "Recognition of Prior Learning (RPL)",
                  "National Apprenticeship Promotion Scheme (NAPS)",
                  "DAY-NULM (Deendayal Antyodaya Yojana)",
                  "Special Projects & Sector-Specific Training",
                  "State Skill Development Missions"
                ].map((program, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{program}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our expertise can help achieve your organizational goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
