
import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Terminal } from "lucide-react";

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

  return (
    <section id="skills" className="py-20 bg-secondary/30 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            <TabsTrigger value="programming" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Programming Languages</span>
            </TabsTrigger>
            <TabsTrigger value="mlai" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>ML/AI & Data</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Tools & Platforms</span>
            </TabsTrigger>
          </TabsList>
          
          <div ref={skillsRef}>
            <TabsContent value="programming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center">
                        <Code className="w-4 h-4 mr-2 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-primary to-primary/80"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mlai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mlaiSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center">
                        <Database className="w-4 h-4 mr-2 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar relative overflow-hidden rounded-full bg-gradient-to-r from-primary/80 via-primary to-primary/80"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {toolsSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar relative overflow-hidden rounded-full bg-gradient-to-r from-primary/70 via-primary/90 to-primary"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
