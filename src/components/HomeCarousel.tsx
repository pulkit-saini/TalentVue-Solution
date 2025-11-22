import { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import aiAssessmentImg from "@/assets/carousel/ai-assessment.jpg";
import skillMatchingImg from "@/assets/carousel/skill-matching.jpg";
import analyticsImg from "@/assets/carousel/analytics.jpg";
import customTestsImg from "@/assets/carousel/custom-tests.jpg";
import scalabilityImg from "@/assets/carousel/scalability.jpg";

const slides = [
  {
    image: aiAssessmentImg,
    title: "AI-Powered Assessments",
    description: "Streamline your hiring with unbiased, data-driven evaluations.",
    alt: "AI-powered assessment interface with holographic dashboard elements"
  },
  {
    image: skillMatchingImg,
    title: "Smart Skill Matching",
    description: "Match candidates to roles based on their true potential.",
    alt: "Skill matching visualization with interconnected puzzle pieces and talent icons"
  },
  {
    image: analyticsImg,
    title: "Real-Time Insights",
    description: "Make faster hiring decisions using detailed performance analytics.",
    alt: "Real-time analytics dashboard displaying graphs and performance metrics"
  },
  {
    image: customTestsImg,
    title: "Tailor-Made Assessments",
    description: "Create tests customized for your role requirements.",
    alt: "Customizable test interface with modular question blocks"
  },
  {
    image: scalabilityImg,
    title: "Scalable Hiring",
    description: "From startups to enterprise — hire efficiently, at scale.",
    alt: "Scalability visualization with growing graphs and professional silhouettes"
  }
];

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/95 via-primary to-accent/80 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-2xl overflow-hidden bg-transparent">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-primary-foreground">
                      <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                          {slide.title}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 drop-shadow-md max-w-2xl mx-auto">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            className="left-4 md:left-8 bg-primary-foreground/90 text-primary hover:bg-primary-foreground border-none shadow-lg h-10 w-10 md:h-12 md:w-12"
            aria-label="Previous slide"
          />
          <CarouselNext 
            className="right-4 md:right-8 bg-primary-foreground/90 text-primary hover:bg-primary-foreground border-none shadow-lg h-10 w-10 md:h-12 md:w-12"
            aria-label="Next slide"
          />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index 
                  ? "w-8 bg-primary-foreground" 
                  : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : "false"}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
