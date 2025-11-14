import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const Career = () => {
  const jobs: Job[] = [
    {
      id: "senior-software-engineer",
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "We are seeking an experienced Senior Software Engineer to lead development of enterprise applications and mentor junior developers.",
      requirements: [
        "5+ years of experience in software development",
        "Strong proficiency in React, Node.js, and cloud platforms",
        "Experience with microservices architecture",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: "business-analyst",
      title: "Business Analyst",
      department: "Consulting",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our consulting team to analyze business requirements, design solutions, and drive digital transformation initiatives.",
      requirements: [
        "3+ years of experience in business analysis",
        "Strong understanding of business processes",
        "Experience with requirement gathering and documentation",
        "Excellent stakeholder management skills"
      ]
    },
    {
      id: "training-specialist",
      title: "Training Specialist",
      department: "Skill Development",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Deliver high-quality training programs in IT skills, soft skills, and professional development to diverse audiences.",
      requirements: [
        "2+ years of experience in corporate training",
        "Expertise in IT technologies or soft skills training",
        "Excellent presentation and communication skills",
        "Ability to design and develop training content"
      ]
    },
    {
      id: "it-sales-manager",
      title: "IT Sales Manager",
      department: "Sales",
      location: "Pune, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive sales of IT products and solutions, manage key accounts, and develop strategic partnerships with clients.",
      requirements: [
        "4+ years of experience in IT sales",
        "Proven track record of achieving sales targets",
        "Strong network in IT industry",
        "Excellent negotiation and relationship-building skills"
      ]
    },
    {
      id: "cloud-architect",
      title: "Cloud Architect",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "6-10 years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients using AWS, Azure, or GCP.",
      requirements: [
        "6+ years of experience with cloud platforms",
        "Strong knowledge of AWS/Azure/GCP architecture",
        "Experience with DevOps and automation tools",
        "Relevant cloud certifications preferred"
      ]
    },
    {
      id: "hr-manager",
      title: "HR Manager",
      department: "Human Resources",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-7 years",
      description: "Lead HR operations including recruitment, talent management, employee relations, and organizational development.",
      requirements: [
        "5+ years of HR management experience",
        "Strong knowledge of HR policies and labor laws",
        "Experience in talent acquisition and development",
        "Excellent interpersonal and leadership skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Build your career with TalentVue Solution and be part of a dynamic team driving innovation 
              and excellence in the IT industry
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Why Work With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">
                Clear career progression paths with continuous learning and skill development programs
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground text-sm">
                Flexible working arrangements and policies that support your personal and professional life
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Inclusive Culture</h3>
              <p className="text-muted-foreground text-sm">
                Diverse, collaborative environment where every voice is heard and valued
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Current Openings
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-xl mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 2).map((req, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link to={`/career/${job.id}`}>
                      <Button variant="default" className="w-full md:w-auto">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
