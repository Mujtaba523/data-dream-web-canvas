
import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const mlaiSkills = skills.filter(skill => skill.category === 'mlai');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  // Function to determine skill level label based on percentage
  const getSkillLevel = (percentage: number): string => {
    if (percentage >= 90) return "Expert";
    if (percentage >= 80) return "Advanced";
    if (percentage >= 65) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 bg-secondary/30 relative section-padding overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <Tabs defaultValue="programming" className="w-full">
          <div className="w-full overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="mb-6 w-full justify-start inline-flex whitespace-nowrap min-w-max">
              <TabsTrigger value="programming" className="text-xs sm:text-sm flex items-center gap-1 px-2 sm:px-3">
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Languages</span>
              </TabsTrigger>
              <TabsTrigger value="mlai" className="text-xs sm:text-sm flex items-center gap-1 px-2 sm:px-3">
                <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Frameworks</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-xs sm:text-sm flex items-center gap-1 px-2 sm:px-3">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Tools</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div ref={skillsRef}>
            <TabsContent value="programming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center text-xs sm:text-sm">
                        <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-primary" />
                        {skill.name}
                      </span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {getSkillLevel(skill.percentage)}
                      </Badge>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => {
                          const shouldFill = Math.round(skill.percentage / 20) >= level;
                          return (
                            <div 
                              key={level} 
                              className={`h-1.5 sm:h-2 rounded-full flex-1 transition-all duration-700 ${shouldFill ? 'bg-primary' : 'bg-secondary'} ${isVisible && shouldFill ? 'opacity-100' : 'opacity-30'}`}
                              style={{ 
                                transitionDelay: `${index * 100 + level * 100}ms`,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mlai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {mlaiSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center text-xs sm:text-sm">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-primary" />
                        {skill.name}
                      </span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {getSkillLevel(skill.percentage)}
                      </Badge>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => {
                          const shouldFill = Math.round(skill.percentage / 20) >= level;
                          return (
                            <div 
                              key={level} 
                              className={`h-1.5 sm:h-2 rounded-full flex-1 transition-all duration-700 ${shouldFill ? 'bg-primary' : 'bg-secondary'} ${isVisible && shouldFill ? 'opacity-100' : 'opacity-30'}`}
                              style={{ 
                                transitionDelay: `${index * 100 + level * 100}ms`,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {toolsSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center text-xs sm:text-sm">
                        <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-primary" />
                        {skill.name}
                      </span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {getSkillLevel(skill.percentage)}
                      </Badge>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => {
                          const shouldFill = Math.round(skill.percentage / 20) >= level;
                          return (
                            <div 
                              key={level} 
                              className={`h-1.5 sm:h-2 rounded-full flex-1 transition-all duration-700 ${shouldFill ? 'bg-primary' : 'bg-secondary'} ${isVisible && shouldFill ? 'opacity-100' : 'opacity-30'}`}
                              style={{ 
                                transitionDelay: `${index * 100 + level * 100}ms`,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}
