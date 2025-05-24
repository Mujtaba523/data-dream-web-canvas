
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
    <section id="about" className="py-16 md:py-20 section-padding relative">
      {/* Top wave divider - decorative element */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[50px] md:h-[70px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-secondary/30"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 md:mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile image column */}
          <div className="col-span-1 md:col-span-4 flex justify-center mb-6 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-primary p-2">
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
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 flex items-center gap-1 text-xs md:text-sm">
                <MapPin className="w-3 h-3" /> Karachi, Pakistan
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 flex items-center gap-1 text-xs md:text-sm">
                <Languages className="w-3 h-3" /> English, Urdu
              </Badge>
            </div>
            
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
              Data Scientist & AI Developer
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-foreground/80">
              I'm a 2024 graduate with a Bachelor's degree in Computer Information & Systems Engineering from NED University. With a passion for machine learning, artificial intelligence, and data analytics, I specialize in building predictive models and AI solutions that solve real-world problems.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-5 md:mb-6 text-foreground/80">
              As a Kaggle Expert with 2+ years of professional experience, I've successfully completed 90+ projects in data cleaning, analysis, visualization, machine learning, and deep learning. I'm driven to leverage data to unlock business value and support decision-making through intelligent systems.
            </p>

            {/* Stats cards section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">2+</h4>
                  <p className="text-xs md:text-sm">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">90+</h4>
                  <p className="text-xs md:text-sm">Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">2</h4>
                  <p className="text-xs md:text-sm">Publications</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">7+</h4>
                  <p className="text-xs md:text-sm">Certifications</p>
                </CardContent>
              </Card>
            </div>

            {/* Social media links */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 md:w-10 md:h-10" asChild>
                <a 
                  href="https://github.com/Mujtaba523" // PLACEHOLDER: Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 md:w-10 md:h-10" asChild>
                <a 
                  href="https://www.linkedin.com/in/mujtaba-mateen/" // PLACEHOLDER: Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 md:w-10 md:h-10" asChild>
                <a 
                  href="mailto:mujtabamateen12@gmail.com" // PLACEHOLDER: Replace with your email
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
              {/* Added Kaggle icon */}
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 md:w-10 md:h-10" asChild>
                <a 
                  href="https://www.kaggle.com/mujtabamatin" // PLACEHOLDER: Replace with your Kaggle URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaggle Profile"
                >
                  <Award className="w-4 h-4 md:w-5 md:h-5" /> {/* Using Award icon as placeholder for Kaggle */}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal divider - decorative element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[50px] md:h-[70px] w-full">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-secondary/30"></path>
        </svg>
      </div>
    </section>
  );
}
