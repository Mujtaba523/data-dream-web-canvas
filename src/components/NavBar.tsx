
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Navigation items for the navbar
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  // State to track scroll position for styling changes
  const [isScrolled, setIsScrolled] = useState(false);
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState("home");
  // Hook to detect if viewport is mobile size
  const isMobile = useIsMobile();

  // Effect to handle scroll events and determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Site logo/name */}
        <a href="#home" className="text-xl md:text-2xl font-bold text-gradient">
          Mujtaba Mateen
        </a>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-45 translate-y-1.5"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-1.5"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
            </div>
          </button>
        )}

        {/* Desktop navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile navigation */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg p-4 flex flex-col gap-2 transition-all duration-300 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary rounded ${
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-secondary/50"
                    : "text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
