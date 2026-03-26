import { Section } from "@/components/common/Section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/constants/project";
import { ProjectsCarousel } from "@/components/features/projects/ProjectsCarousel";
export function Projects() {
  return (
    <Section id="projects" className="relative space-y-12">

      <div>
        <p className="bg-purple-300 text-white dark:text-black p-2 w-fit text-xs rounded-[10px] tracking-widest">
          MY WORK
        </p>

        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Recent Projects
        </h1>
      </div>

      <ProjectsCarousel projects={PROJECTS} />

      <div className="flex justify-end">
        <Link href="/projects">
          <Button variant="outline" size="lg" className="group hover:shadow-purple-500">
            More Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

    </Section>
  );
}