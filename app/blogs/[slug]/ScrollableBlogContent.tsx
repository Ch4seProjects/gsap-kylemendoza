"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function ScrollableBlogContent({
  content,
}: {
  content: string;
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
      className="flex lg:justify-center lg:p-4 col-span-7 col-start-4 lg:overflow-y-auto scrollbar-hide"
    >
      <div
        className="blog-content max-w-full lg:max-w-180"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
