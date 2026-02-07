"use client";

import { useState } from "react";
import ScrambleText from "@/app/components/ScrambleText";

export default function ProjectCard({ index }: { index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group h-70 flex flex-col gap-2 cursor-pointer justify-end transition-[filter] duration-500 group-hover/grid:blur-[2px] hover:blur-none!"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[80%] bg-red-400 rounded-lg transition-all duration-500 group-hover/grid:h-[60%] group-hover:h-[80%]!"></div>
      <div className="flex justify-between h-[20%]">
        <p className="font-mono text-gray-600 text-xs uppercase transition-colors duration-300 group-hover:text-white">
          <span className="transition-colors duration-300 group-hover:text-[#9eff00]">
            [
          </span>
          <ScrambleText
            as="span"
            text={String(index + 1).padStart(2, "0")}
            scrambleOn={isHovered}
            className="inline"
          />
          <span className="transition-colors duration-300 group-hover:text-[#9eff00]">
            ]
          </span>
        </p>
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ScrambleText
            text="view project"
            scrambleOn={isHovered}
            className="font-mono text-white text-xs uppercase"
          />
        </div>
      </div>
    </div>
  );
}
