
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`w-full flex-shrink-0 transition-all duration-500 transform ${
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"
                }`}
              >
                <Card className="bg-card/50 backdrop-blur-sm border border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center gap-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg md:text-xl italic mb-6 text-foreground/80">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex flex-col items-center">
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/70">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background z-10"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background z-10"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
      
      {/* Divider between Testimonials and Contact section */}
      <div className="container mx-auto max-w-7xl mt-20">
        <Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
}
