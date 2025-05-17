
import { publications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="py-20 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Research <span className="text-gradient">Publications</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <Card 
              key={pub.id} 
              className="bg-card/50 backdrop-blur-sm border-t-4 border-t-primary/70 card-hover animate-fade-in overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-full text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {pub.date}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                    <div className="flex items-center text-sm text-foreground/70 mb-4">
                      <span>Published in: {pub.publisher}</span>
                    </div>
                    <a 
                      href={pub.url} 
                      className="inline-flex items-center text-sm text-primary hover:underline" 
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Publication <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
