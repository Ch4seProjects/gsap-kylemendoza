"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrambleText from "@/app/components/ScrambleText";

export default function ProjectCard({
  index,
  image,
  href,
  onHover,
  onLeave,
}: {
  index: number;
  image: string;
  href: string;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="group h-70 flex flex-col gap-2 px-2 cursor-pointer justify-end transition-[filter] duration-500 group-hover/grid:blur-xs hover:blur-none!"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onLeave();
      }}
    >
      <div className="relative h-[80%] rounded-lg overflow-hidden transition-all duration-500 group-hover/grid:h-[60%] group-hover:h-[80%]!">
        <Image
          src={image}
          alt={`Project ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
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
    </Link>
  );
}
