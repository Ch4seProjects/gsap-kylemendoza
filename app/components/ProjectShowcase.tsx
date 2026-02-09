"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/app/lib/mocks";

export default function ProjectShowcase({
  onHover,
  onLeave,
}: {
  onHover: (index: number) => void;
  onLeave: () => void;
}) {
  return (
    <div className="absolute bottom-0 w-full">
      {/* Desktop: static grid */}
      <div className="hidden lg:grid group/grid grid-cols-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            index={i}
            image={project.images[0]}
            href={`/projects/${project.slug}`}
            onHover={() => onHover(i)}
            onLeave={onLeave}
          />
        ))}
      </div>

      {/* Mobile: snap carousel */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-2 pb-4">
        {projects.map((project, i) => (
          <div key={i} className="snap-center shrink-0 w-[85%]">
            <ProjectCard
              index={i}
              image={project.images[0]}
              href={`/projects/${project.slug}`}
              onHover={() => onHover(i)}
              onLeave={onLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
