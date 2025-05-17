
import { useState, useEffect } from "react";
import { typingTexts } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the particlesJS interface on window object
declare global {
  interface Window {
    particlesJS: (
      id: string,
      options: any
    ) => void;
  }
}

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Initialize particles directly without using the particlesJS import
    // We'll use a script tag to load particles.js in index.html instead
    if (typeof window !== "undefined") {
      // Check if particles-js container exists
      if (document.getElementById("particles-js")) {
        // Use window object to check if particlesJS is available from the CDN
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#8b5cf6" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#8b5cf6",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typingTexts[typingIndex];
      
      if (!isDeleting) {
        if (text.length < current.length) {
          setText(current.substring(0, text.length + 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(true);
          setTypingSpeed(50);
        }
      } else {
        if (text.length > 0) {
          setText(current.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setTypingIndex((typingIndex + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, typingIndex, isDeleting, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background section-padding"
    >
      <div id="particles-js" className="absolute inset-0 z-0" aria-hidden="true"></div>
      
      <div className="container mx-auto z-10 flex flex-col gap-6 max-w-4xl text-center">
        <p className="text-primary font-medium">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading">
          John Doe
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground/80 mb-4">
          Data Scientist & AI Developer
        </h2>
        
        <div className="h-12">
          <p className="text-lg md:text-xl lg:text-2xl font-medium inline-block">
            I'm a{" "}
            <span className="text-primary font-semibold h-8 inline-block">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-blink"></span>
            </span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button 
            size="lg" 
            className="px-8 py-6"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-sm gap-2 text-foreground/70 hover:text-foreground transition-colors"
      >
        <span>Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
