
import { useState } from "react";
import { timelineItems, certifications } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

/**
 * Timeline component
 * Displays professional experience, education history, and certifications
 * in a tabbed interface with timeline visualization
 */
export default function Timeline() {
  // Filter timeline items by type
  const educationItems = timelineItems.filter((item) => item.type === "education");
  const experienceItems = timelineItems.filter((item) => item.type === "experience");
  
  // Add pagination state for certifications
  const [currentPage, setCurrentPage] = useState(1);
  const certsPerPage = 6;
  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = certifications.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(certifications.length / certsPerPage);

  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 bg-secondary/30 section-padding relative">
      {/* Top divider - zigzag pattern */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-6 md:mb-8"></div>

        {/* Tabbed interface for experience, education, and certifications */}
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="mb-6 overflow-x-auto flex flex-nowrap w-full justify-center gap-2">
            <TabsTrigger value="experience" className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Work Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Certifications</span>
            </TabsTrigger>
          </TabsList>

          {/* Experience tab content with improved readability */}
          <TabsContent value="experience" className="mt-0">
            <div className="space-y-3 md:space-y-4">
              {experienceItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="relative animate-fade-in bg-card/60 border-l-4 border-primary hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-700 flex-shrink-0">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      
                      <div className="w-full">
                        {/* Header with job title and period */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                          <h3 className="text-sm md:text-base font-bold text-white">
                            {item.title}
                          </h3>
                          
                          <Badge className="text-xs font-medium px-2 py-0.5 bg-primary/20 text-primary inline-block rounded-full w-max">
                            {item.period}
                          </Badge>
                        </div>
                        
                        {/* Organization */}
                        <h4 className="text-xs md:text-sm text-primary/90 flex items-center gap-1 mb-2 font-medium">
                          <Briefcase className="inline w-3 h-3 md:hidden mr-1" />
                          @ {item.organization}
                        </h4>
                        
                        {/* Description with improved contrast */}
                        <div className="text-xs text-foreground/90 bg-card/80 p-2 rounded-md border border-border/40">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education tab content with improved readability */}
          <TabsContent value="education" className="mt-0">
            <div className="space-y-3 md:space-y-4">
              {educationItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="relative animate-fade-in bg-card/60 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex-shrink-0">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      
                      <div className="w-full">
                        {/* Degree and Period in header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                          <h3 className="text-sm md:text-base font-bold text-white">
                            {item.title}
                          </h3>
                          
                          <Badge className="text-xs font-medium px-2 py-0.5 bg-blue-500/20 text-blue-400 inline-block rounded-full w-max">
                            {item.period}
                          </Badge>
                        </div>
                        
                        {/* Institution with icon */}
                        <h4 className="text-xs md:text-sm text-blue-400 flex items-center gap-1 mb-2 font-medium">
                          <GraduationCap className="inline w-3 h-3 md:hidden mr-1" />
                          @ {item.organization}
                        </h4>
                        
                        {/* Description with improved contrast */}
                        <div className="text-xs text-foreground/90 bg-card/80 p-2 rounded-md border border-border/40">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications tab content with pagination */}
          <TabsContent value="certifications" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {currentCerts.map((cert) => (
                <Card key={cert.id} className="bg-card/50 backdrop-blur-sm border-t-4 border-t-primary/70 card-hover animate-fade-in h-full">
                  <CardContent className="p-3 md:p-4">
                    <Badge variant="secondary" className="mb-2 flex items-center gap-1 text-xs">
                      <Award className="w-3 h-3" />
                      {cert.date}
                    </Badge>
                    <h3 className="text-xs sm:text-sm font-bold mb-1">{cert.title}</h3>
                    <div className="text-xs text-foreground/70 mb-3">{cert.organization}</div>
                    <a 
                      href={cert.url}
                      className="inline-flex items-center text-xs text-primary hover:underline mt-auto" 
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination for certifications */}
            {totalPages > 1 && (
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                    />
                  </PaginationItem>
                  
                  {Array.from({length: totalPages}).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        isActive={currentPage === i + 1} 
                        onClick={() => setCurrentPage(i + 1)}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom divider - tilt */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}
