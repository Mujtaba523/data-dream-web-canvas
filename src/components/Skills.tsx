import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type SkillCategory = "programming" | "mlai" | "tools";

const ICONS = {
  programming: Code,
  mlai: Database,
  tools: Terminal,
};

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

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (percentage: number) => {
    if (percentage >= 90) return "Expert";
    if (percentage >= 80) return "Advanced";
    if (percentage >= 65) return "Intermediate";
    return "Beginner";
  };

  const renderSkills = (category: SkillCategory) => {
    const Icon = ICONS[category];
    const filtered = skills.filter((s) => s.category === category);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((skill, index) => (
          <div
            key={skill.name}
            className="rounded-xl border bg-background p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Icon className="w-4 h-4 text-primary" />
                {skill.name}
              </div>
              <Badge
                variant="outline"
                className="text-xs bg-primary/10 text-primary border-primary/20"
              >
                {getSkillLevel(skill.percentage)}
              </Badge>
            </div>

            {/* Progress */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => {
                const filled = Math.round(skill.percentage / 20) >= level;
                return (
                  <div
                    key={level}
                    className={clsx(
                      "h-2 flex-1 rounded-full transition-all duration-700",
                      filled ? "bg-primary" : "bg-secondary",
                      isVisible && filled ? "opacity-100" : "opacity-30"
                    )}
                    style={{
                      transitionDelay: `${index * 100 + level * 80}ms`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative bg-secondary/30 py-16 section-padding overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <h2 className="text-3xl font-bold font-heading mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-10" />

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="mb-8 flex gap-2 overflow-x-auto">
            <TabsTrigger value="programming" className="flex gap-2">
              <Code className="w-4 h-4" /> Languages
            </TabsTrigger>
            <TabsTrigger value="mlai" className="flex gap-2">
              <Database className="w-4 h-4" /> Frameworks
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex gap-2">
              <Terminal className="w-4 h-4" /> Tools & Platforms
            </TabsTrigger>
          </TabsList>

          <div ref={skillsRef}>
            <TabsContent value="programming">
              {renderSkills("programming")}
            </TabsContent>

            <TabsContent value="mlai">
              {renderSkills("mlai")}
            </TabsContent>

            <TabsContent value="tools">
              {renderSkills("tools")}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
