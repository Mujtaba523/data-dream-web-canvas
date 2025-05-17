
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image column */}
          <div className="col-span-1 md:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="John Doe - Data Scientist & AI Developer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="col-span-1 md:col-span-8">
            <h3 className="text-xl font-bold mb-4">
              Data Scientist & AI Developer
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-foreground/80">
              I'm a passionate AI practitioner with over 5 years of experience developing machine learning 
              and deep learning solutions. My expertise spans multiple domains including natural language 
              processing, computer vision, and predictive analytics.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground/80">
              With a research-driven approach, I transform complex data challenges into actionable 
              insights and scalable AI systems. I believe in creating responsible AI that solves 
              real-world problems while maintaining ethical standards.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-primary">5+</h4>
                  <p className="text-sm">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-primary">20+</h4>
                  <p className="text-sm">Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-primary">12+</h4>
                  <p className="text-sm">ML Models</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <h4 className="text-3xl font-bold text-primary">8+</h4>
                  <p className="text-sm">Publications</p>
                </CardContent>
              </Card>
            </div>

            <Button className="flex items-center gap-2" asChild>
              <a href="#" download>
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
