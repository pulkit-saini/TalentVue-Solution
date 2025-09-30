import { Code, Cloud, Shield, Database, Smartphone, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ITSolutions = () => {
  const solutions = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your unique business requirements, from web applications to enterprise systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, infrastructure management, and cloud-native application development.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your digital assets, ensure compliance, and mitigate cyber threats.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data management, business intelligence, and analytics solutions to drive data-driven decision making.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile app development for iOS and Android with seamless user experiences.",
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure automation, and DevOps practices to accelerate software delivery.",
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
              IT Solutions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Innovative technology solutions that drive digital transformation and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              TalentVue Solution delivers comprehensive IT solutions that address complex business challenges and 
              accelerate digital transformation. Our team of experienced technologists combines technical expertise 
              with business acumen to design, develop, and deploy solutions that create lasting value and competitive 
              advantage for our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Technology Expertise
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Frontend Technologies</h3>
              <p className="text-muted-foreground">
                React, Angular, Vue.js, Next.js, TypeScript, HTML5, CSS3, and modern frontend frameworks 
                to build responsive, performant, and engaging user interfaces.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Backend Technologies</h3>
              <p className="text-muted-foreground">
                Node.js, Python, Java, .NET Core, Go, and microservices architecture for building scalable, 
                secure, and high-performance backend systems.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Cloud Platforms</h3>
              <p className="text-muted-foreground">
                AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions with expertise 
                in cloud architecture, deployment, and optimization.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Databases & Storage</h3>
              <p className="text-muted-foreground">
                PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and data warehousing solutions for 
                efficient data management and retrieval.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">DevOps & Tools</h3>
              <p className="text-muted-foreground">
                Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, Ansible, and modern DevOps tools 
                for automated deployment and infrastructure management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
              Our Development Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="animate-slide-up">
                <h3 className="font-heading text-xl font-semibold mb-3">Agile Methodology</h3>
                <p className="text-muted-foreground text-sm">
                  Iterative development with regular feedback loops, ensuring flexibility and rapid adaptation to 
                  changing requirements.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive testing strategies including automated testing, code reviews, and continuous 
                  integration for superior quality.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Security First</h3>
                <p className="text-muted-foreground text-sm">
                  Security integrated throughout the development lifecycle with regular audits, vulnerability 
                  assessments, and compliance adherence.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Scalable Architecture</h3>
                <p className="text-muted-foreground text-sm">
                  Designing systems that scale efficiently with growth, ensuring performance and reliability 
                  as your business expands.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="animate-scale-in">
                  Discuss Your Project
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

export default ITSolutions;
