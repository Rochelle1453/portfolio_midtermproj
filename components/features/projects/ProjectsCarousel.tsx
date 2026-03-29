"use client";

import { ProjectCard } from "@/components/common/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/types/project";

type Props = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: Props) {
  const recentProjects = projects.slice(0, 6);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <Carousel opts={{ align: "start" }} className="w-full">
        
        <CarouselContent className="-ml-4">
          {recentProjects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />

      </Carousel>
    </div>
  );
}