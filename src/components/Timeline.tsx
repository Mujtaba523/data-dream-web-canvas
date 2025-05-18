
import { timelineItems, certifications } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";

/**
 * Timeline component
 * Displays professional experience, education history, and certifications
 * in a tabbed interface with timeline visualization
 */
export default function Timeline() {
  // Filter timeline items by type
  const educationItems = timelineItems.filter((item) => item.type === "education");
  const experienceItems = timelineItems.filter((item) => item.type === "experience");

  return (
    <section id="experience" className="py-20 bg-secondary/30 section-padding relative">
      {/* Top divider - zigzag pattern */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        {/* Tabbed interface for experience, education, and certifications */}
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </TabsTrigger>
          </TabsList>

          {/* Experience tab content with improved readability */}
          <TabsContent value="experience" className="mt-0">
            <div className="relative border-l-2 border-gradient-purple pl-8 ml-4 space-y-12">
              {experienceItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[48px] -top-1 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Period badge */}
                  <div className="mb-1 text-sm font-medium px-3 py-1 bg-primary/20 text-primary inline-block rounded-full">
                    {item.period}
                  </div>
                  
                  {/* Job title */}
                  <h3 className="text-xl font-bold mt-2 text-white">
                    {item.title}
                  </h3>
                  
                  {/* Organization */}
                  <h4 className="text-lg text-primary flex items-center gap-1 mb-2">
                    {item.organization}
                  </h4>
                  
                  {/* Description with improved contrast */}
                  <p className="text-foreground pl-2 border-l-2 border-primary/30 bg-secondary/40 p-3 rounded">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Education tab content with improved readability */}
          <TabsContent value="education" className="mt-0">
            <div className="relative border-l-2 border-gradient-blue pl-8 ml-4 space-y-12">
              {educationItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[48px] -top-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Period badge */}
                  <div className="mb-1 text-sm font-medium px-3 py-1 bg-blue-500/20 text-blue-400 inline-block rounded-full">
                    {item.period}
                  </div>
                  
                  {/* Degree/course title */}
                  <h3 className="text-xl font-bold mt-2 text-white">
                    {item.title}
                  </h3>
                  
                  {/* Institution */}
                  <h4 className="text-lg text-blue-400 flex items-center gap-1 mb-2">
                    {item.organization}
                  </h4>
                  
                  {/* Description with improved contrast */}
                  <p className="text-foreground pl-2 border-l-2 border-blue-500/30 bg-secondary/40 p-3 rounded">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Certifications tab content */}
          <TabsContent value="certifications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="bg-card/50 backdrop-blur-sm border-t-4 border-t-primary/70 card-hover animate-fade-in">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {cert.date}
                    </Badge>
                    <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                    <div className="text-sm text-foreground/70 mb-4">{cert.organization}</div>
                    <a 
                      href={cert.url} // PLACEHOLDER: Replace with actual certification URL
                      className="inline-flex items-center text-sm text-primary hover:underline" 
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom divider - tilt */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}
