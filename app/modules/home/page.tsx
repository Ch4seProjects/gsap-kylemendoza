import ScrambleText from "@/app/components/ScrambleText";
import PhTime from "@/app/components/PhTime";
import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <>
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-[80%]">
        <div className="grid grid-cols-10 gap-x-4 items-end">
          <div className="font-sans text-[128px] uppercase col-span-6">
            <ScrambleText text="Kyle Dominic" />
            <ScrambleText text="Mendoza" />
          </div>
          <div className="font-mono text-xs uppercase col-span-2">
            <ScrambleText text="Software" />
            <ScrambleText text="Engineer" />
          </div>
          <div className="font-mono text-xs uppercase">
            <ScrambleText text="Manila, Ph" />
            <PhTime />
          </div>
        </div>
      </div>
      <div className="group/grid absolute bottom-0 w-full grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProjectCard key={i} index={i} />
        ))}
      </div>
    </>
  );
}
