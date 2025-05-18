
import { useState } from "react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github } from "lucide-react";

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects based on selected tag
  const filteredProjects = projectFilter
    ? projects.filter((project) => project.tags.includes(projectFilter))
    : projects;

  const openProject = (id: string) => {
    setSelectedProject(id);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const currentProject = projects.find(
    (project) => project.id === selectedProject
  );

  return (
    <section id="projects" className="py-20 section-padding relative">
      {/* Top divider - triangles */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-secondary/30"></path>
        </svg>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="flex flex-wrap gap-2 mb-10">
          <Badge
            variant={projectFilter === null ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setProjectFilter(null)}
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={projectFilter === tag ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setProjectFilter(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[80%]">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-foreground/80 line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button size="sm" onClick={() => openProject(project.id)}>
                  View Details
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Project detail dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProject()}>
          {currentProject && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{currentProject.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-1 pt-1">
                  {currentProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-md mb-4">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-foreground/80">{currentProject.description}</p>
                <Button className="flex items-center gap-2" asChild>
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>

      {/* Bottom divider - curved */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-secondary/30"></path>
        </svg>
      </div>
    </section>
  );
}
