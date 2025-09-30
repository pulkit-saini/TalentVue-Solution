import { BookOpen, Users, Award, TrendingUp, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SkillDevelopment = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Technical Training",
      description: "Comprehensive programs covering latest technologies, programming languages, and software development methodologies.",
    },
    {
      icon: Users,
      title: "Soft Skills Development",
      description: "Communication, leadership, and teamwork training to enhance professional effectiveness and career growth.",
    },
    {
      icon: Briefcase,
      title: "Industry Certifications",
      description: "Preparation courses for internationally recognized certifications in IT, project management, and specialized domains.",
    },
    {
      icon: Target,
      title: "Custom Corporate Training",
      description: "Tailored training solutions designed to address specific organizational needs and skill gaps.",
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
              Skill Development Programs
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Empowering professionals with cutting-edge skills and knowledge for tomorrow's challenges
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              At TalentVue Solution, we understand that skilled workforce is the cornerstone of organizational success. 
              Our comprehensive skill development programs are designed to bridge the gap between current capabilities 
              and future requirements, ensuring that professionals stay ahead in an rapidly evolving business landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{program.title}</h3>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Our Approach to Skill Development
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Needs Assessment & Analysis</h3>
              <p className="text-muted-foreground">
                We begin by conducting thorough assessments to identify skill gaps and training requirements, 
                ensuring our programs are perfectly aligned with organizational objectives and individual career aspirations.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Expert-Led Training</h3>
              <p className="text-muted-foreground">
                Our training programs are delivered by industry experts and certified professionals who bring 
                real-world experience and practical insights to every session, ensuring relevant and applicable learning.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Hands-On Learning</h3>
              <p className="text-muted-foreground">
                We emphasize practical, hands-on training methodologies that enable participants to immediately 
                apply new skills in real-world scenarios, accelerating competency development and knowledge retention.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Continuous Support & Assessment</h3>
              <p className="text-muted-foreground">
                Post-training support, regular assessments, and progress tracking ensure sustained learning outcomes 
                and provide opportunities for continuous improvement and skill refinement.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Flexible Delivery Methods</h3>
              <p className="text-muted-foreground">
                Choose from various training formats including in-person workshops, virtual classrooms, blended learning, 
                and self-paced modules to accommodate diverse learning preferences and schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
              Measurable Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our skill development programs have consistently delivered tangible results for organizations across industries:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="animate-scale-in">
                <div className="text-4xl font-heading font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Improvement in Employee Productivity</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">92%</div>
                <p className="text-muted-foreground">Participant Satisfaction Rate</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Professionals Trained</p>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="hero" size="lg" className="animate-scale-in">
                Explore Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillDevelopment;
