"use client";

import { Suspense, use, useRef, useState, useEffect } from "react";
import Container from "./components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import PhTime from "@/app/components/PhTime";
import ProjectShowcase from "./components/ProjectShowcase";
import ShowcaseErrorBoundary from "./components/ShowcaseErrorBoundary";
import { Project } from "@/app/lib/types";

function ShowcaseFallback() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="hidden lg:flex overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex-1 min-w-0 h-70 px-2 flex flex-col justify-end gap-2">
            <div className="h-[80%] rounded-lg bg-white/5 animate-pulse" />
            <div className="h-[20%]" />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden h-70 px-2">
        <div className="w-[85%] h-[80%] rounded-lg bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

function ShowcaseResolver({
  projectsPromise,
  onLoaded,
  onHover,
  onLeave,
}: {
  projectsPromise: Promise<Project[]>;
  onLoaded: (projects: Project[]) => void;
  onHover: (index: number) => void;
  onLeave: () => void;
}) {
  const projects = use(projectsPromise);

  useEffect(() => {
    onLoaded(projects);
    const mq = window.matchMedia("(max-width: 1023px)");
    if (mq.matches) onHover(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProjectShowcase projects={projects} onHover={onHover} onLeave={onLeave} />
  );
}

export default function HomeClient({
  projectsPromise,
}: {
  projectsPromise: Promise<Project[]>;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectsRef = useRef<Project[]>([]);
  const hoveredProject =
    hoveredIndex !== null ? (projectsRef.current[hoveredIndex] ?? null) : null;

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

      <ShowcaseErrorBoundary>
        <Suspense fallback={<ShowcaseFallback />}>
          <ShowcaseResolver
            projectsPromise={projectsPromise}
            onLoaded={(p) => {
              projectsRef.current = p;
            }}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
          />
        </Suspense>
      </ShowcaseErrorBoundary>
    </Container>
  );
}
