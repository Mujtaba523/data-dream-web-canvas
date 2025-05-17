
import { useState } from "react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-20 section-padding">
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
                  {project.demoUrl && (
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
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
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
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
                  {currentProject.demoUrl && (
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a
                        href={currentProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
