import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobDetail = () => {
  const { jobId } = useParams();

  // In a real app, this would fetch from a database
  const jobs: Record<string, any> = {
    "senior-software-engineer": {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "We are seeking an experienced Senior Software Engineer to lead development of enterprise applications and mentor junior developers.",
      responsibilities: [
        "Lead design and development of scalable web applications",
        "Mentor and guide junior developers",
        "Collaborate with cross-functional teams on technical solutions",
        "Conduct code reviews and ensure best practices",
        "Drive technical innovation and improvements"
      ],
      requirements: [
        "5+ years of experience in software development",
        "Strong proficiency in React, Node.js, and cloud platforms",
        "Experience with microservices architecture",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance for self and family",
        "Professional development opportunities",
        "Flexible working hours",
        "Performance bonuses"
      ]
    },
    "business-analyst": {
      title: "Business Analyst",
      department: "Consulting",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our consulting team to analyze business requirements, design solutions, and drive digital transformation initiatives.",
      responsibilities: [
        "Gather and document business requirements",
        "Analyze business processes and identify improvement opportunities",
        "Design solutions to address business challenges",
        "Facilitate workshops with stakeholders",
        "Create detailed documentation and presentations"
      ],
      requirements: [
        "3+ years of experience in business analysis",
        "Strong understanding of business processes",
        "Experience with requirement gathering and documentation",
        "Excellent stakeholder management skills",
        "Proficiency in analysis tools and methodologies"
      ],
      benefits: [
        "Competitive compensation",
        "Career growth opportunities",
        "Training and certifications",
        "Work-life balance",
        "Team events and activities"
      ]
    }
  };

  const job = jobs[jobId || ""] || jobs["senior-software-engineer"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We will contact you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/career" className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Careers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">{job.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{job.description}</p>

              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-scale-in">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-semibold mb-6">Apply for this Position</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="5" required />
                  </div>
                  <div>
                    <Label htmlFor="resume">Resume URL / LinkedIn</Label>
                    <Input id="resume" placeholder="https://linkedin.com/in/yourprofile" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Cover Letter</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us why you're a great fit for this role..." 
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;
