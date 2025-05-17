
import { timelineItems, certifications } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Timeline() {
  const educationItems = timelineItems.filter((item) => item.type === "education");
  const experienceItems = timelineItems.filter((item) => item.type === "experience");

  return (
    <section id="experience" className="py-20 bg-secondary/30 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

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

          <TabsContent value="experience" className="mt-0">
            <div className="relative border-l-2 border-gradient-purple pl-8 ml-4 space-y-12">
              {experienceItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[48px] -top-1 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="mb-1 text-sm font-medium px-3 py-1 bg-primary/10 text-primary inline-block rounded-full">{item.period}</div>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <h4 className="text-lg text-primary flex items-center gap-1 mb-2">
                    {item.organization}
                  </h4>
                  <p className="text-foreground/80 pl-2 border-l-2 border-primary/30">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="relative border-l-2 border-gradient-blue pl-8 ml-4 space-y-12">
              {educationItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[48px] -top-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="mb-1 text-sm font-medium px-3 py-1 bg-blue-500/10 text-blue-500 inline-block rounded-full">{item.period}</div>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <h4 className="text-lg text-blue-500 flex items-center gap-1 mb-2">
                    {item.organization}
                  </h4>
                  <p className="text-foreground/80 pl-2 border-l-2 border-blue-500/30">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

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
                      href={cert.url} 
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
    </section>
  );
}
