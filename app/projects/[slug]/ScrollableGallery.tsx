"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";

export default function ScrollableGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lenis = new Lenis({
      wrapper: container,
      content: container,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      className="col-span-7 col-start-4 flex flex-col gap-10 lg:overflow-y-auto scrollbar-hide"
    >
      {images.map((image, i) => (
        <div key={i} className="relative h-75 lg:h-screen shrink-0 bg-[#141414]">
          <Image
            src={image}
            alt={`${name} ${i + 1}`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
      ))}
    </div>
  );
}
