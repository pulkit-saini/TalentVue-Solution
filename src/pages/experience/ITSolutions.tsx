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
      description: "End-to-end software development tailored to your business needs — from web and desktop applications to enterprise-grade systems. We specialize in building scalable, secure, and intuitive software that evolves with your business.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Accelerate your cloud journey with services that include cloud migration & modernization, infrastructure management, cloud-native app development, and multi-cloud and hybrid architecture design.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your digital ecosystem with advanced cybersecurity frameworks that ensure threat detection and prevention, risk and vulnerability assessments, compliance (ISO 27001, GDPR, SOC 2, etc.), data protection and incident response.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Turn raw data into strategic insights with our analytics solutions: data integration & warehousing, business intelligence dashboards, predictive analytics & AI models, and real-time reporting for faster decision-making.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Crafting seamless user experiences with native (iOS & Android) and cross-platform apps, UX/UI design optimization, scalable mobile backends and integrations.",
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      description: "Accelerate delivery and reduce deployment risks through CI/CD pipeline implementation, Infrastructure as Code (IaC), automated testing & monitoring, and cloud-native DevOps culture enablement.",
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Core Offerings
            </h2>
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
      <section className="py-20 bg-secondary/50 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Technology Expertise
          </h2>

          <div className="relative border-l-4 border-primary/30 max-w-4xl mx-auto">
            {[
              {
                title: "Frontend Technologies",
                desc: "React, Angular, Vue.js, Next.js, TypeScript, HTML5, CSS3 — delivering responsive, performant, and engaging interfaces for modern digital products.",
              },
              {
                title: "Backend Technologies",
                desc: "Node.js, Python, Java, .NET Core, and Go — building secure, modular, and scalable backend architectures.",
              },
              {
                title: "Cloud Platforms",
                desc: "Expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP) — with proven experience in architecture, deployment, and cost optimization.",
              },
              {
                title: "Databases & Storage",
                desc: "Proficient in PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and data lakes — ensuring high availability and efficient data retrieval.",
              },
              {
                title: "DevOps Tools & Frameworks",
                desc: "Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, and Ansible — powering automation, reliability, and scalability across environments.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group mb-12 pl-10 relative transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[1.6rem] top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-md group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-transparent hover:border-primary/10 cursor-pointer">
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
                </div>

                {/* Timeline Connector */}
                {index !== 4 && (
                  <div className="absolute left-[-2px] top-10 w-[4px] h-full bg-primary/20"></div>
                )}
              </div>
            ))}
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
              <Card className="animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Agile Methodology</h3>
                  <p className="text-muted-foreground text-sm">
                    Iterative development with regular feedback loops, ensuring flexibility and rapid adaptation to 
                    changing requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive testing strategies including automated testing, code reviews, and continuous 
                    integration for superior quality.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Security First</h3>
                  <p className="text-muted-foreground text-sm">
                    Security integrated throughout the development lifecycle with regular audits, vulnerability 
                    assessments, and compliance adherence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Scalable Architecture</h3>
                  <p className="text-muted-foreground text-sm">
                    Designing systems that scale efficiently with growth, ensuring performance and reliability 
                    as your business expands.
                  </p>
                </CardContent>
              </Card>
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
