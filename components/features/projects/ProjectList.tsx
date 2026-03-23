"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight, Search, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

export function ProjectList() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 3;

    const filteredProjects = PROJECTS.filter((project) => {
        const matchesCategory = filter === "All" || project.category === filter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            );

        return matchesCategory && matchesSearch;
    });

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    return (
        <Section className="space-y-12 min-h-screen">
            <SectionHeading
                icon={<MoveRight className="h-8 w-8 text-primary" />}
                title="All Projects"
                description="A collection of projects I've built, ranging from web applications to mobile apps and more."
            />

            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 justify-center">
                    {CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            size="sm"
                            className={`transition-colors 
            ${filter === category
                                    ? "bg-purple-500 text-white hover:bg-purple-500"
                                    : "text-muted-foreground hover:bg-purple-100/50"
                                }`}
                            onClick={() => {
                                setFilter(category || "All");
                                setCurrentPage(1);
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="relative w-full md:w-64 md:ml-auto">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="pl-8"
                    />
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentProjects.length > 0 ? (
                    currentProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 ">
                    <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-purple-600 hover:text-white transition-colors"
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            size="sm"
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            className={`transition-colors ${currentPage === i + 1
                                ? "bg-purple-500 text-white hover:bg-purple-500"
                                : "text-muted-foreground hover:bg-purple-100/50"
                                }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
        </Section>
    );
}