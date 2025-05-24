
import { publications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="py-12 md:py-16 lg:py-20 section-padding relative">
      {/* Top divider - curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-secondary/30"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-heading mb-2">
          Research <span className="text-gradient">Publications</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-6 md:mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 pb-6 md:pb-8">
          {publications.map((pub) => (
            <Card 
              key={pub.id} 
              className="bg-card/50 backdrop-blur-sm border-t-4 border-t-primary/70 card-hover animate-fade-in overflow-hidden transition-all"
            >
              <CardContent className="p-4 md:p-6 flex flex-col h-full">
                <div className="flex items-start gap-3 h-full">
                  <div className="p-2 bg-primary/20 rounded-full text-primary hidden sm:flex shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col justify-between h-full w-full">
                    <div>
                      <Badge variant="secondary" className="mb-2 inline-flex">
                        {pub.date}
                      </Badge>
                      <h3 className="text-sm sm:text-base font-bold mb-2 break-words hyphens-auto leading-tight">
                        {pub.title}
                      </h3>
                      <div className="flex items-start text-xs sm:text-sm text-foreground/70 mb-3">
                        <BookOpen className="w-3 h-3 mr-1.5 mt-0.5 sm:hidden shrink-0" />
                        <span className="line-clamp-2">Published in: {pub.publisher}</span>
                      </div>
                    </div>
                    <a 
                      href={pub.url} 
                      className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline hover:text-primary/80 transition-colors group py-1.5 mt-2" 
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View publication: ${pub.title}`}
                    >
                      <span>View Publication</span> 
                      <ExternalLink className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom divider - waves - increased z-index to prevent overlap issues */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[30px] md:h-[40px] w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.5" className="fill-primary/10"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity="0.5" className="fill-primary/20"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-primary/10"></path>
        </svg>
      </div>
    </section>
  );
}
