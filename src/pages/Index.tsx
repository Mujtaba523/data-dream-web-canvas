
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Add title to page
  useEffect(() => {
    document.title = "John Doe | Data Scientist & AI Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        
        <footer className="py-6 border-t border-border">
          <div className="container mx-auto text-center text-foreground/60 text-sm">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
