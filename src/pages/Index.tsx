
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
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - fixed at top */}
      <NavBar />
      
      <main className="overflow-x-hidden">
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
          <div className="container mx-auto text-center text-foreground/60 text-xs md:text-sm px-4">
            <p>&copy; {new Date().getFullYear()} Mujtaba Mateen. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
