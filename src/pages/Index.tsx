
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";

/**
 * Main landing page component
 * Assembles all sections of the portfolio website
 */
const Index = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = "Mujtaba Mateen | Data Scientist & AI Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation Bar - fixed at top */}
      <NavBar />
      
      <main className="relative">
        {/* Hero Section - first visible section */}
        <Hero />
        
        {/* About Section - personal info and background */}
        <About />
        
        {/* Skills Section - technical expertise */}
        <Skills />
        
        {/* Projects Section - portfolio of work */}
        <Projects />
        
        {/* Timeline Section - experience and education */}
        <Timeline />
        
        {/* Publications Section - academic/professional papers */}
        <Publications />
        
        {/* Testimonials Section - client feedback */}
        <Testimonials />
        
        {/* Contact Section - get in touch form */}
        <Contact />
        
        {/* Footer - copyright and attribution */}
        <footer className="py-4 md:py-6 border-t border-border">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-foreground/60 text-xs px-4">
            <p>&copy; {new Date().getFullYear()} Mujtaba Mateen. All rights reserved.</p>
            <div className="mt-2 sm:mt-0 flex gap-3 sm:gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <Separator orientation="vertical" className="hidden sm:block" />
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Index;
