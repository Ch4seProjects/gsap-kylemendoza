"use client";

import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/lib/mocks";

export default function ProjectShowcase({
  onHover,
  onLeave,
}: {
  onHover: (index: number) => void;
  onLeave: () => void;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) onHover(index);
          }
        });
      },
      { root: carousel, threshold: 0.6 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [onHover]);

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
      <div
        ref={carouselRef}
        className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-2 pb-4"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="snap-center shrink-0 w-[85%]"
          >
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
