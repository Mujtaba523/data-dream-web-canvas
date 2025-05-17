
import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <TabsTrigger value="programming">Programming Languages</TabsTrigger>
            <TabsTrigger value="mlai">ML/AI & Data</TabsTrigger>
            <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
          </TabsList>
          
          <div ref={skillsRef}>
            <TabsContent value="programming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mlai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mlaiSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {toolsSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.percentage}%</span>
                    </div>
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`, 
                      }}
                    >
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          '--progress-width': `${skill.percentage}%` 
                        } as React.CSSProperties}
                      ></div>
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
