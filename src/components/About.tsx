
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Languages, Github, Linkedin, Mail, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * About section component
 * Displays personal information, skills, and professional background
 */
export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 section-padding relative">
      {/* Top wave divider - decorative element */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-secondary/30"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-6 md:mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Profile image column */}
          <div className="col-span-1 md:col-span-4 flex justify-center mb-4 md:mb-0">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-primary p-1.5 sm:p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl"></div>
              {/* Profile image placeholder */}
              <img
                src="https://i.postimg.cc/L4qvS9jC/1747319068372.jpg" // PLACEHOLDER: Replace with your profile image URL
                alt="Mujtaba Mateen - Data Scientist & AI Developer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content column with personal info */}
          <div className="col-span-1 md:col-span-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 flex items-center gap-1 text-xs">
                <MapPin className="w-3 h-3" /> Karachi, Pakistan
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 flex items-center gap-1 text-xs">
                <Languages className="w-3 h-3" /> English, Urdu
              </Badge>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
              Data Scientist & AI Developer
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 text-foreground/80">
              I'm a 2024 graduate with a Bachelor's degree in Computer Information & Systems Engineering from NED University. With a passion for machine learning, artificial intelligence, and data analytics, I specialize in building predictive models and AI solutions that solve real-world problems.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 text-foreground/80">
              As a Kaggle Expert with 2+ years of professional experience, I've successfully completed 90+ projects in data cleaning, analysis, visualization, machine learning, and deep learning. I'm driven to leverage data to unlock business value and support decision-making through intelligent systems.
            </p>

            {/* Stats cards section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-2 sm:p-3 text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-primary">2+</h4>
                  <p className="text-xs">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-2 sm:p-3 text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-primary">100+</h4>
                  <p className="text-xs">Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-2 sm:p-3 text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-primary">2</h4>
                  <p className="text-xs">Publications</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-2 sm:p-3 text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-primary">7+</h4>
                  <p className="text-xs">Certifications</p>
                </CardContent>
              </Card>
            </div>

            {/* Social media links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-9 sm:h-9" asChild>
                <a 
                  href="https://github.com/Mujtaba523" // PLACEHOLDER: Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-9 sm:h-9" asChild>
                <a 
                  href="https://www.linkedin.com/in/mujtaba-mateen/" // PLACEHOLDER: Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-9 sm:h-9" asChild>
                <a 
                  href="mailto:mujtabamateen12@gmail.com" // PLACEHOLDER: Replace with your email
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </Button>
              {/* Added Kaggle icon */}
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-9 sm:h-9" asChild>
                <a 
                  href="https://www.kaggle.com/mujtabamatin" // PLACEHOLDER: Replace with your Kaggle URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaggle Profile"
                >
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {/* Using Award icon as placeholder for Kaggle */}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal divider - decorative element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-secondary/30"></path>
        </svg>
      </div>
    </section>
  );
}
