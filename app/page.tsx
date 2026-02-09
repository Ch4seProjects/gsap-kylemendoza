"use client";

import { useState } from "react";
import Container from "./components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import PhTime from "@/app/components/PhTime";
import ProjectShowcase from "./components/ProjectShowcase";
import { projects } from "@/app/lib/mocks";

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredProject = hoveredIndex !== null ? projects[hoveredIndex] : null;

  return (
    <Container>
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-[80%]">
        <div className="grid grid-cols-4 lg:grid-cols-10 gap-x-4 items-end h-50 lg:h-70">
          <div className="font-sans text-5xl lg:text-[128px] font-medium lg:font-normal uppercase col-span-4 lg:col-span-6">
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
      <ProjectShowcase
        onHover={(i) => setHoveredIndex(i)}
        onLeave={() => setHoveredIndex(null)}
      />
    </Container>
  );
}
