import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About TalentVue Solution
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Pioneering excellence in IT solutions, skill development, and corporate consulting since our inception
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                TalentVue Solution Pvt Ltd is a leading provider of comprehensive IT solutions, skill development programs, 
                and consulting services. With over a decade of experience, we have established ourselves as trusted partners 
                for organizations seeking to enhance their technological capabilities and workforce potential.
              </p>
              <p className="text-center">
                Our multidisciplinary approach combines technical expertise with strategic insight, enabling us to deliver 
                innovative solutions that address complex business challenges. We pride ourselves on our commitment to 
                excellence, integrity, and sustainable growth for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower organizations through innovative technology solutions, comprehensive skill development, 
                  and strategic consulting services that drive measurable success and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be recognized as the premier partner for digital transformation and human capital development, 
                  setting industry standards for excellence and innovation across all service domains.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, Excellence, Innovation, Collaboration, and Social Responsibility form the foundation 
                  of everything we do, guiding our decisions and shaping our relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
              Our Core Values in Action
            </h2>
            
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest ethical standards in all our interactions, building trust through transparency, 
                  honesty, and accountability in every engagement.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Excellence</h3>
                <p className="text-muted-foreground">
                  Our commitment to quality drives us to consistently exceed expectations, delivering superior solutions 
                  that create lasting value for our clients and stakeholders.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace change and foster creativity, continuously exploring new technologies and methodologies 
                  to solve complex challenges and drive progress.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of partnership, working closely with clients, communities, and team members 
                  to achieve shared goals and mutual success.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Social Responsibility</h3>
                <p className="text-muted-foreground">
                  We are dedicated to making a positive impact on society through our CSR initiatives, sustainable practices, 
                  and commitment to community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
