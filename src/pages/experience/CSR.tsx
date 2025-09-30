import { Heart, Users, GraduationCap, Leaf, HandHeart, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CSR = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Education & Skill Building",
      description: "Providing free training programs and educational resources to underprivileged communities, focusing on digital literacy and vocational skills.",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Implementing green technology solutions and supporting environmental conservation projects to reduce carbon footprint and promote sustainability.",
    },
    {
      icon: HandHeart,
      title: "Community Development",
      description: "Supporting local communities through infrastructure development, healthcare initiatives, and economic empowerment programs.",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Special programs dedicated to women's skill development, entrepreneurship support, and creating equal opportunities in the technology sector.",
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
              Corporate Social Responsibility
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Committed to creating positive social impact and sustainable development in communities we serve
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              At TalentVue Solution, we believe in the power of responsible business practices to drive meaningful change. 
              Our CSR initiatives reflect our commitment to social welfare, environmental stewardship, and sustainable 
              development. We actively engage with communities, support education, promote environmental conservation, 
              and create opportunities for marginalized sections of society.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <initiative.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground text-sm">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Our CSR Programs
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Digital Literacy Campaign</h3>
              <p className="text-muted-foreground">
                We conduct free digital literacy programs in rural and semi-urban areas, helping bridge the digital divide 
                by providing basic computer training, internet literacy, and digital skills development to thousands of 
                individuals who lack access to technology education.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Vocational Training for Youth</h3>
              <p className="text-muted-foreground">
                Our vocational training initiatives focus on equipping unemployed youth with market-relevant skills in IT, 
                soft skills, and emerging technologies. These programs include placement assistance and entrepreneurship 
                support to ensure sustainable livelihoods.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Green Technology Initiative</h3>
              <p className="text-muted-foreground">
                We promote environmentally sustainable practices by implementing green IT solutions, supporting e-waste 
                management programs, conducting tree plantation drives, and advocating for renewable energy adoption 
                in business operations.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Healthcare Support Programs</h3>
              <p className="text-muted-foreground">
                We partner with healthcare organizations to provide medical camps, health awareness programs, and support 
                healthcare infrastructure in underserved communities, ensuring better access to quality healthcare services.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Women in Technology Program</h3>
              <p className="text-muted-foreground">
                Special initiatives designed to encourage and support women's participation in technology careers through 
                scholarships, mentorship programs, technical training, and creating inclusive work environments that 
                promote gender diversity in the IT sector.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Community Infrastructure Development</h3>
              <p className="text-muted-foreground">
                We support community development by contributing to infrastructure projects including educational facilities, 
                community centers, and technology labs in underprivileged areas, creating long-term positive impact on 
                community wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
              Our CSR Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="animate-scale-in">
                <div className="text-4xl font-heading font-bold text-primary mb-2">50,000+</div>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Communities Served</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Training Programs</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Partner Organizations</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              We remain committed to expanding our CSR footprint and creating sustainable, measurable impact 
              in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSR;
