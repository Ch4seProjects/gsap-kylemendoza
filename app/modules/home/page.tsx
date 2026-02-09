"use client";

import { useState } from "react";
import ScrambleText from "@/app/components/ScrambleText";
import PhTime from "@/app/components/PhTime";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/lib/mocks";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredProject = hoveredIndex !== null ? projects[hoveredIndex] : null;

  return (
    <>
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-[80%]">
        <div className="grid grid-cols-10 gap-x-4 items-end h-70">
          <div className="font-sans text-[128px] uppercase col-span-6">
            <ScrambleText
              text={
                hoveredProject ? hoveredProject.name : "Kyle Dominic Mendoza"
              }
              scrambleOn={hoveredIndex !== null}
            />
          </div>
          <div className="font-mono text-xs uppercase col-span-2">
            {hoveredProject ? (
              hoveredProject.services.map((service, i) => (
                <ScrambleText
                  key={i}
                  text={service}
                  scrambleOn={hoveredIndex !== null}
                />
              ))
            ) : (
              <ScrambleText text="Software Engineer" className="w-[30%]" />
            )}
          </div>
          <div className="font-mono text-xs uppercase">
            {hoveredProject ? (
              <ScrambleText
                text={String(hoveredProject.year)}
                scrambleOn={hoveredIndex !== null}
              />
            ) : (
              <>
                <ScrambleText text="Manila, Ph" />
                <PhTime />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="group/grid absolute bottom-0 w-full grid grid-cols-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            index={i}
            image={project.images[0]}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </>
  );
}
