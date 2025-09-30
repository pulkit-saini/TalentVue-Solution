import { Lightbulb, TrendingUp, Target, BarChart, Users, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Consulting = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategy Consulting",
      description: "Strategic planning and business transformation services to help organizations achieve their long-term objectives.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting to modernize operations and leverage emerging technologies.",
    },
    {
      icon: Target,
      title: "Process Optimization",
      description: "Business process re-engineering and optimization to improve efficiency and reduce operational costs.",
    },
    {
      icon: BarChart,
      title: "Performance Management",
      description: "Implementation of performance management systems and KPI frameworks for measurable business outcomes.",
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Comprehensive change management support to ensure successful adoption of new systems and processes.",
    },
    {
      icon: Cog,
      title: "Technology Advisory",
      description: "Expert guidance on technology selection, implementation, and optimization for maximum ROI.",
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
              Consulting Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Strategic guidance and expert consulting to transform challenges into opportunities for growth
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              TalentVue Solution's consulting practice combines deep industry expertise with innovative methodologies 
              to deliver actionable insights and sustainable solutions. Our consultants work closely with clients to 
              understand their unique challenges, identify opportunities, and implement strategies that drive measurable 
              business value and competitive advantage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Our Consulting Approach
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Discovery & Assessment</h3>
              <p className="text-muted-foreground">
                We begin with comprehensive discovery sessions and detailed assessments to understand your business landscape, 
                challenges, opportunities, and strategic objectives. This foundation ensures our recommendations are precisely 
                aligned with your needs.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Strategic Planning</h3>
              <p className="text-muted-foreground">
                Our consultants develop customized strategies that balance short-term wins with long-term value creation. 
                We leverage industry best practices, data-driven insights, and innovative thinking to craft actionable roadmaps 
                for success.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Implementation Support</h3>
              <p className="text-muted-foreground">
                Beyond strategy, we provide hands-on implementation support to ensure successful execution. Our team works 
                alongside yours to navigate challenges, adapt to changing conditions, and maintain momentum throughout 
                the transformation journey.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Performance Monitoring</h3>
              <p className="text-muted-foreground">
                We establish robust monitoring frameworks and KPIs to track progress, measure impact, and ensure accountability. 
                Regular reviews and adjustments keep initiatives on track and maximize return on investment.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Knowledge Transfer</h3>
              <p className="text-muted-foreground">
                Our consulting engagements include comprehensive knowledge transfer to build internal capabilities. We empower 
                your team with the skills, tools, and frameworks needed to sustain improvements and drive continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
              Industry Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="animate-slide-up">
                <h3 className="font-heading text-xl font-semibold mb-3">Manufacturing & Supply Chain</h3>
                <p className="text-muted-foreground text-sm">
                  Optimization of manufacturing processes, supply chain management, and operational excellence initiatives.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Financial Services</h3>
                <p className="text-muted-foreground text-sm">
                  Digital transformation, regulatory compliance, risk management, and customer experience enhancement.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Healthcare & Pharmaceuticals</h3>
                <p className="text-muted-foreground text-sm">
                  Healthcare IT solutions, process automation, compliance management, and patient care optimization.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Retail & E-commerce</h3>
                <p className="text-muted-foreground text-sm">
                  Omnichannel strategy, digital commerce, customer analytics, and inventory management solutions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="animate-scale-in">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
