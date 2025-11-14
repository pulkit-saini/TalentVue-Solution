import { Handshake, Briefcase, Target, FileSpreadsheet} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ManpowerSolutions = () => {
    const services = [
        {
            icon:Handshake, 
            title: "Contract Placements",
            description:"Provide businesses with flexible, skilled professionals for temporary and project-based roles, ensuring the perfect match for every need.",
        },
        {
            icon:Briefcase, 
            title: "Permanent Placements",
            description:"Build a strong, lasting team by hiring top talent for permanent roles and secure the right fit for your long-term success.",
        },
        {
            icon:Target, 
            title: "Executive Search",
            description:"Our executive search service connects you with top-tier leaders to drive your business forward with the right expertise.",
        },
        {
           icon:FileSpreadsheet, 
            title: "Payroll& Workpass",
            description:"Streamline your operations with our efficient payroll management and hassle-free work pass application services.",
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
              Manpower Solutions
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">


              {services.map((service, index) => (
                <Card
            key={index}
       className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden text-center w-[90%] md:w-[85%] lg:w-[95%]"
         style={{ animationDelay: `${index * 100}ms` }}
                 >

                  <CardContent className="p-6 flex flex-col items-center text-center">

                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">

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


{/* Detailed Service Sections */}
<section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-secondary/40">
  <div className="container mx-auto px-6 md:px-12 space-y-24">
    
    {/* Contract Placements */}
    <div className="grid md:grid-cols-2 gap-12 items-center group">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
        alt="Contract Placements"
        className="rounded-2xl shadow-xl w-full h-[420px] object-cover transform group-hover:scale-[1.02] transition duration-500"
      />
      <div className="transform transition duration-700 group-hover:translate-y-[-5px]">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
          Contract Placements
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          We offer flexible contract staffing solutions tailored to your project-specific needs.
          Whether you require specialized developers, technical consultants, or creative professionals,
          we connect you with experienced talent ready to contribute immediately.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Our agile hiring process ensures you get the right people, right when you need them — 
          helping your organization stay productive and efficient while managing costs effectively.
        </p>
      </div>
    </div>

    {/* Permanent Placements */}
    <div className="grid md:grid-cols-2 gap-12 items-center group md:flex-row-reverse">
      <div className="transform transition duration-700 group-hover:translate-y-[-5px]">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
          Permanent Placements
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Building a strong workforce starts with hiring the right people. 
          Our permanent placement service focuses on sourcing individuals who 
          bring expertise, dedication, and cultural fit to your organization.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We work closely with clients to understand their values, goals, and 
          technical needs, ensuring that every hire strengthens the foundation 
          of your business for long-term success.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
        alt="Permanent Placements"
        className="rounded-2xl shadow-xl w-full h-[420px] object-cover transform group-hover:scale-[1.02] transition duration-500"
      />
    </div>

    {/* Executive Search */}
    <div className="grid md:grid-cols-2 gap-12 items-center group">
      <img
        src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=900&q=80"
        alt="Executive Search"
        className="rounded-2xl shadow-xl w-full h-[420px] object-cover transform group-hover:scale-[1.02] transition duration-500"
      />
      <div className="transform transition duration-700 group-hover:translate-y-[-5px]">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
          Executive Search
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Leadership defines the direction of an organization. Our executive search 
          service focuses on identifying visionary leaders who align with your company’s 
          mission and long-term strategy.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We use deep industry insights, discreet outreach, and strategic evaluation 
          methods to find leaders capable of driving innovation, growth, and cultural excellence.
        </p>
      </div>
    </div>

    {/* Payroll & Workpass */}
    <div className="grid md:grid-cols-2 gap-12 items-center group md:flex-row-reverse">
      <div className="transform transition duration-700 group-hover:translate-y-[-5px]">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
          Payroll & Workpass
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our Payroll & Workpass management solutions are designed to simplify HR processes 
          and ensure compliance. From managing employee compensation, benefits, and taxation 
          to handling visa or work pass formalities — we take care of every administrative detail.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          With accurate, timely, and transparent payroll processing, we free your HR teams 
          from tedious tasks and help your employees stay focused on what truly matters — performance and growth.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=80"
        alt="Payroll and Workpass"
        className="rounded-2xl shadow-xl w-full h-[420px] object-cover transform group-hover:scale-[1.02] transition duration-500"
      />
    </div>

  </div>
</section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Technology Expertise
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative flex items-start gap-6 animate-slide-up">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                    1
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">Frontend Technologies</h3>
                      <p className="text-muted-foreground">
                        React, Angular, Vue.js, Next.js, TypeScript, HTML5, CSS3, and modern frontend frameworks 
                        to build responsive, performant, and engaging user interfaces.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                    2
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">Backend Technologies</h3>
                      <p className="text-muted-foreground">
                        Node.js, Python, Java, .NET Core, Go, and microservices architecture for building scalable, 
                        secure, and high-performance backend systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                    3
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">Cloud Platforms</h3>
                      <p className="text-muted-foreground">
                        AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions with expertise 
                        in cloud architecture, deployment, and optimization.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                    4
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">Databases & Storage</h3>
                      <p className="text-muted-foreground">
                        PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and data warehousing solutions for 
                        efficient data management and retrieval.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                    5
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">DevOps & Tools</h3>
                      <p className="text-muted-foreground">
                        Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, Ansible, and modern DevOps tools 
                        for automated deployment and infrastructure management.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
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

export default ManpowerSolutions;
