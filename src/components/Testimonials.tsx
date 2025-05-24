
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Testimonials component
 * Displays a carousel of client testimonials with navigation controls
 */
export default function Testimonials() {
  // State to track the currently displayed testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle automatic rotation of testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Navigation functions for the carousel
  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Go to a specific slide
  const goToSlide = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 md:mb-12"></div>

        {/* Testimonials Carousel */}
        <div className="relative px-4 sm:px-8 md:px-12">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`w-full flex-shrink-0 transition-all duration-700 ease-in-out transform ${
                  index === activeIndex 
                    ? "opacity-100 translate-x-0 scale-100" 
                    : "opacity-0 translate-x-full absolute scale-95"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col items-center">
                      {/* Quote icon in gradient circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/40 to-primary/80 flex items-center justify-center mb-6 shadow-md">
                        <Quote className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      {/* Testimonial quote with decorative quotes */}
                      <div className="text-center relative">
                        <span className="absolute -top-6 -left-2 text-4xl text-primary/20">"</span>
                        <p className="text-base md:text-lg italic mb-6 text-foreground/90 relative z-10 px-4 md:px-8">
                          {testimonial.quote}
                        </p>
                        <span className="absolute -bottom-10 -right-2 text-4xl text-primary/20">"</span>
                      </div>
                      
                      {/* Separator */}
                      <div className="w-16 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full my-4"></div>
                      
                      {/* Client name and title */}
                      <div className="mt-2 text-center">
                        <h4 className="font-bold text-base md:text-lg">{testimonial.name}</h4>
                        <p className="text-sm md:text-base text-foreground/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Carousel navigation controls */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <Button
              onClick={handlePrev}
              size="icon"
              variant="outline"
              className="rounded-full bg-background/80 border border-border hover:bg-background hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-primary scale-110" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
            
            <Button
              onClick={handleNext}
              size="icon"
              variant="outline"
              className="rounded-full bg-background/80 border border-border hover:bg-background hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced divider between Testimonials and Contact section */}
      <div className="container mx-auto max-w-7xl mt-16 md:mt-20">
        <Separator className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
}
