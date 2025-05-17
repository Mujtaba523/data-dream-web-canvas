
import { timelineItems, certifications } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-0">
            <div className="relative border-l-2 border-primary/50 pl-8 ml-4 space-y-12">
              {experienceItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] -top-1 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>
                  
                  <div className="mb-1 text-sm text-foreground/70">{item.period}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="text-lg text-primary mb-2">{item.organization}</h4>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="relative border-l-2 border-primary/50 pl-8 ml-4 space-y-12">
              {educationItems.map((item, index) => (
                <div key={item.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] -top-1 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>
                  
                  <div className="mb-1 text-sm text-foreground/70">{item.period}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="text-lg text-primary mb-2">{item.organization}</h4>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="p-6">
                    <Badge className="mb-3">{cert.date}</Badge>
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
