import { Target, Eye, TrendingUp, ClipboardCheck, BookOpen, Users, MessageSquare, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/about-hero.jpg";
import nsdcLogo from "@/assets/nsdc-logo.png";
import pmkvyLogo from "@/assets/pmkvy-logo.png";
import msdeLogo from "@/assets/msde-logo.png";
import skillIndiaLogo from "@/assets/skill-india-logo.png";
import tcilLogo from "@/assets/tcil-logo.png";
import msmeLogo from "@/assets/msme-logo.png";
import apitcoLogo from "@/assets/apitco-logo.png";
import afcLogo from "@/assets/afc-logo.jpg";
import ncwLogo from "@/assets/ncw-logo.jpg";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Corporate training session" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About TalentVue Solutions Pvt. Ltd.
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Pioneering excellence in IT solutions, skill development & corporate consulting since inception
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              TalentVue Solutions Pvt. Ltd. is a leading provider of IT solutions, corporate training, and strategic consulting services. Founded with a vision to bridge the gap between industry demands and workforce capabilities, we specialize in empowering organizations through cutting-edge technology adoption, comprehensive skill development programs, and strategic business consulting.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our team comprises certified industry experts, experienced trainers, and technology consultants who bring real-world insights to every engagement. We partner with organizations across sectors—from startups to Fortune 500 companies—delivering customized solutions that drive measurable business outcomes, enhance team performance, and accelerate digital transformation journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="animate-scale-in shadow-md">
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Mission
                </h3>
                <p className="text-muted-foreground">
                  To empower organisations through innovative technology solutions and strategic consulting services that drive measurable success and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in shadow-md" style={{
            animationDelay: '100ms'
          }}>
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Vision
                </h3>
                <p className="text-muted-foreground">
                  To be recognised as the premier partner for digital transformation and talent development, setting industry standards for excellence and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in shadow-md" style={{
            animationDelay: '200ms'
          }}>
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Impact
                </h3>
                <p className="text-muted-foreground">
                  Integrity, Excellence, Innovation, Collaboration and Social Responsibility form the foundation of everything we do, shaping our decisions and relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Journey in Milestones
            </h2>
            <p className="text-lg mb-12 text-muted-foreground">
              Beginning in 2019, our mission has grown into a movement—training 2,000+ professionals and partnering with 25+ corporate clients—driving a culture of growth, learning, and meaningful impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline line */}
              <div className="absolute left-[47px] md:left-[103px] top-0 bottom-0 w-0.5 bg-accent"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* 2019 */}
                <div className="relative animate-fade-in flex items-start">
                  <div className="flex-shrink-0 w-24 md:w-32 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <Calendar className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className="text-3xl font-bold text-accent mb-2">2019</h3>
                    <h4 className="text-xl font-semibold text-primary mb-4">Foundation of Consulting Excellence</h4>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Laid the groundwork for delivering high-quality consulting</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Career guidance and personalized student mentorship</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Established strong foundation built on trust, expertise, and value-driven support</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative animate-fade-in flex items-start" style={{ animationDelay: '100ms' }}>
                  <div className="flex-shrink-0 w-24 md:w-32 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <Calendar className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className="text-3xl font-bold text-accent mb-2">2020</h3>
                    <h4 className="text-xl font-semibold text-primary mb-4">Expansion into Professional Skill Development</h4>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Introduced structured learning tracks and competency-based training programs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Expanded consulting services portfolio</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Enabled students and professionals to enhance technical and interpersonal skills</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Focused on workplace readiness and professional development</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative animate-fade-in flex items-start" style={{ animationDelay: '200ms' }}>
                  <div className="flex-shrink-0 w-24 md:w-32 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <Calendar className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className="text-3xl font-bold text-accent mb-2">2021</h3>
                    <h4 className="text-xl font-semibold text-primary mb-4">Diversification with Workforce & Talent Solutions</h4>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Expanded into talent ecosystem services</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Provided internship pathways and placement preparation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Launched workforce enablement programs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Bridged skill gaps to create job-ready candidates</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative animate-fade-in flex items-start" style={{ animationDelay: '300ms' }}>
                  <div className="flex-shrink-0 w-24 md:w-32 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <Calendar className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className="text-3xl font-bold text-accent mb-2">2023</h3>
                    <h4 className="text-xl font-semibold text-primary mb-4">Enhancement into IT Supply & Technology Services</h4>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Strengthened technological capabilities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Integrated IT supply solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Added digital enablement support</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Implemented modern tech-driven tools for enhanced client and learner experience</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2025 - Present */}
                <div className="relative animate-fade-in flex items-start" style={{ animationDelay: '400ms' }}>
                  <div className="flex-shrink-0 w-24 md:w-32 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <Calendar className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className="text-3xl font-bold text-accent mb-2">2025 - Present</h3>
                    <h4 className="text-xl font-semibold text-primary mb-4">Evolution into a Comprehensive Corporate Solutions Ecosystem</h4>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Transformed into multi-domain corporate solutions provider</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Unified platform offering training, consulting, and technology services</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>Comprehensive digital tools and career advancement solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                            <span>One-stop destination for corporate excellence</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - How We Work */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Our methodology transforms learning into performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[{
            icon: ClipboardCheck,
            title: 'Needs Assessment',
            description: 'We analyse skill-gaps and business goals before designing the program.'
          }, {
            icon: BookOpen,
            title: 'Custom Curriculum',
            description: 'Tailored content aligned to your industry, culture & technology stack.'
          }, {
            icon: Users,
            title: 'Interactive Delivery',
            description: 'Hands-on labs, real-world case-studies, blended virtual and on-site sessions.'
          }, {
            icon: MessageSquare,
            title: 'Post-Training Support',
            description: 'Quizzes, mentoring and refresher content ensure knowledge sticks.'
          }].map((item, index) => <Card key={index} className="animate-scale-in shadow-md" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              Making a Difference
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              We believe in tangible outcomes. Here are some key numbers from our clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[{
            number: '2000+',
            label: 'Professionals Trained'
          }, {
            number: '25+',
            label: 'Corporate Clients Served'
          }, {
            number: '4.8/5',
            label: 'Participant Satisfaction'
          }, {
            number: '64%',
            label: 'Productivity Improvement'
          }].map((metric, index) => <div key={index} className="text-center animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="text-4xl font-bold mb-3 text-accent">
                  {metric.number}
                </div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {metric.label}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Government Project Association */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Government Project Association
            </h2>
            <p className="text-lg text-muted-foreground">
              Proudly associated with India's leading government initiatives for skill development and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            logo: nsdcLogo,
            alt: 'NSDC - National Skill Development Corporation'
          }, {
            logo: msdeLogo,
            alt: 'MSDE - Ministry of Skill Development & Entrepreneurship'
          }, {
            logo: pmkvyLogo,
            alt: 'PMKVY - Pradhan Mantri Kaushal Vikas Yojana'
          }, {
            logo: skillIndiaLogo,
            alt: 'Skill India'
          }, {
            logo: tcilLogo,
            alt: 'TCIL - Telecommunications Consultants India Limited'
          }, {
            logo: msmeLogo,
            alt: 'MSME - Micro, Small & Medium Enterprises'
          }, {
            logo: apitcoLogo,
            alt: 'APITCO - Andhra Pradesh Industrial and Technical Consultancy Organisation'
          }, {
            logo: afcLogo,
            alt: 'AFC India - Agriculture Finance Corporation'
          }, {
            logo: ncwLogo,
            alt: 'National Commission for Women'
          }].map((org, index) => <Card key={index} className="animate-scale-in shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
                  <img src={org.logo} alt={org.alt} className="w-full h-auto object-contain max-h-[150px]" />
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[{
            quote: "The cloud training by TalentVue Solutions Pvt. Ltd. accelerated our team's delivery by 35%.",
            author: 'CPO, TechBridge Solutions'
          }, {
            quote: "The leadership workshops transformed how our managers think.",
            author: 'HR Head, Nexus Innovations'
          }, {
            quote: "Professional, knowledgeable, and results-driven. Highly recommended for corporate training.",
            author: 'CTO, DataSphere Analytics'
          }, {
            quote: "Their customized approach perfectly matched our industry needs and organizational culture.",
            author: 'L&D Director, Apex Consulting Group'
          }].map((testimonial, index) => <Card key={index} className="animate-fade-in shadow-md" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-lg mb-6 italic text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-muted-foreground">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Elevate Your Team?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today for a custom training roadmap tailored for your organisation
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;