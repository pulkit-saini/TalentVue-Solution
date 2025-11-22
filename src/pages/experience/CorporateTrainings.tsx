import { Briefcase, MessageSquare, TrendingUp, Cpu, Globe2, FileCheck, Award, Users, GraduationCap,Star, Lightbulb, Target, Building2, Mail , UserCheck} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CorporateTrainings = () => {
  const trainings = [
    {
      icon: Briefcase,
      title: "Leadership & Management",
      description: "Empower leaders to inspire teams and drive organizational growth.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: MessageSquare,
      title: "Communication & Soft Skills",
      description: "Develop confident communicators and effective collaborators.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: Cpu,
      title: "Technical & IT Upskilling",
      description: "Enhance your workforce’s technical expertise for modern challenges.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Data & Analytics",
      description: "Leverage data-driven insights to make smarter business decisions.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: FileCheck,
      title: "HR & Compliance Training",
      description: "Stay compliant and strengthen HR policies through hands-on workshops.",
      image: "https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: Globe2,
      title: "Diversity & Inclusion",
      description: "Build a culture of inclusivity and respect within your organization.",
      image: "https://images.unsplash.com/photo-1581090464289-25e7f90f2f34?q=80&w=1470&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Corporate Trainings
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            “We design customized learning programs that enhance employee performance, leadership, and organizational success.”
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
           Our corporate training programs are designed to empower your workforce, enhance skills,
            and drive organizational growth. We combine industry expertise with practical case studies 
            to make learning relevant and actionable. Through interactive workshops and collaborative 
            exercises, participants gain hands-on experience they can immediately apply. Each program 
            is fully customizable to align with your company’s goals, culture, and unique challenges. 
            With expert trainers and measurable outcomes, our trainings help build leadership, 
           improve productivity, and foster a culture of high performance.
          </p>

{/* Training programs */}
            <h2 className="font-heading text-3xl font-bold mb-12 text-foreground">
              Our Training Programs
              </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training, index) => (
           <Card
             key={index}
               className="group hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
            >
            <CardContent className="p-6">
               {/* ICON SECTION */}
               <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <training.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

              {/* TITLE */}
               <h3 className="font-heading font-semibold text-xl mb-3">
                 {training.title}
                 </h3>

               {/* DESCRIPTION */}
               <p className="text-muted-foreground text-sm mb-4">
               {training.description}
              </p>
            </CardContent>
        </Card>
        ))}
          </div>


        </div>
      </section>
         

         {/* Our Strategy Section */}
<section className="py-20 bg-secondary/50 relative">
  <div className="container mx-auto px-4 text-center">
    <h2 className="font-heading text-3xl font-bold mb-16 text-foreground">
      Our Strategy
    </h2>

    <div className="relative border-l-4 border-primary/30 max-w-4xl mx-auto">
      {[
        {
          title: "Needs Assessment",
          desc: "We begin by analyzing your organization’s goals, challenges, and workforce capabilities to identify training needs.",
        },
        {
          title: "Customized Program Design",
          desc: "Our experts create a tailor-made solution that aligns with your objectives, ensuring relevant and high-impact learning.",
        },
        {
          title: "Engaging Delivery",
          desc: "We deliver sessions through interactive methods that combine real-world cases, discussions, and simulations.",
        },
        {
          title: "Feedback & Refinement",
          desc: "We gather participant and client feedback to refine training approaches for maximum retention and engagement.",
        },
        {
          title: "Long-Term Support",
          desc: "Post-training, we help integrate learnings into daily work culture for sustainable organizational growth.",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="group mb-12 pl-10 relative transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[1.6rem] top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-md group-hover:scale-110 transition-transform">
            {index + 1}
          </div>

          {/* Card */}
          <div className="bg-card p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-transparent hover:border-primary/10 cursor-pointer" >
            <h3 className="font-semibold text-xl text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
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


      
     {/*  Who should Attend */}
      <section className="py-20 bg-background text-center">
  <div className="container mx-auto px-4">
    <h2 className="font-heading text-3xl font-bold mb-12 text-foreground">
      Who Should Attend
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Users,
          title: "Team Leaders",
          text: "Enhance leadership and team motivation.",
        },
        {
          icon: Briefcase,
          title: "Working Professionals",
          text: "Upskill and drive career growth.",
        },
        {
          icon: Building2,
          title: "Organizations",
          text: "Invest in employee success and retention.",
        },
        {
          icon: GraduationCap,
          title: "Fresh Graduates",
          text: "Prepare for corporate challenges and soft skills.",
        },
        {
          icon: Target,
          title: "Project Managers",
          text: "Enhance strategic decision-making and team alignment.",
        },
        {
          icon: UserCheck,
          title: "HR Executives",
          text: "Develop employee engagement and training programs.",
        },
      ].map((person, index) => (
        <div
          key={index}
          className="group p-8 bg-secondary/30 rounded-xl shadow transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-110 cursor-pointer"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <person.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-foreground">
            {person.title}
          </h3>
          <p className="text-muted-foreground text-sm">{person.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

           {/* Benefits & Outcomes */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">Benefits & Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Performance Growth" },
              { icon: Lightbulb, title: "Innovative Thinking" },
              { icon: Target, title: "Skill Enhancement" },
              { icon: Award, title: "Employee Recognition" },
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-primary-foreground/10 rounded-xl transition-all duration-300 transform hover:bg-primary-foreground/20 hover:scale-105 hover:shadow-lg active:scale-110 active:shadow-xl cursor-pointer">
                <benefit.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* Success Stories */}
      <section className="py-20 bg-secondary/50 text-center">
  <div className="container mx-auto px-4">
    <h2 className="font-heading text-3xl font-bold mb-12 text-foreground">
      Success Stories
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "TechCorp Pvt. Ltd.",
          feedback:
            "“Our leadership team grew exponentially after TalentVue’s program.”",
          icon: Star,
        },
        {
          name: "BrightWorks",
          feedback:
            "“Communication workshops improved overall productivity by 30%.”",
          icon: Star,
        },
        {
          name: "Innovate Labs",
          feedback:
            "“An engaging experience that truly transformed team synergy.”",
          icon: Star,
        },
        {
          name: "NextGen Systems",
          feedback:
            "“Employees now show stronger collaboration and creative thinking.”",
          icon: Star,
        },
        {
          name: "Visionary Minds",
          feedback:
            "“Their data and leadership training drove real performance results.”",
          icon: Star,
        },
        {
          name: "Alpha Creations",
          feedback:
            "“The most interactive and motivating training we’ve ever had.”",
          icon: Star,
        },
      ].map((story, index) => (
        <Card
          key={index}
          className="group bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-110 p-8 rounded-xl border border-border cursor-pointer"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <story.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-all duration-300" />
          </div>
          <p className="text-muted-foreground italic mb-4 group-hover:text-foreground transition-colors duration-300">
            {story.feedback}
          </p>
          <h4 className="font-semibold text-foreground transition-colors">
            {story.name}
          </h4>
        </Card>
      ))}
    </div>
  </div>
</section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Get in touch with us to design a training program tailored for your organization.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="cursor-pointer">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateTrainings;
