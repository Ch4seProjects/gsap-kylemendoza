"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/app/lib/types";

export default function BlogShowcase({
  posts,
  onHover,
  onLeave,
}: {
  posts: BlogPost[];
  onHover: (index: number) => void;
  onLeave: () => void;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const grid = desktopGridRef.current;
    if (!grid) return;

    const cards = grid.children;
    gsap.set(cards, { yPercent: 100, opacity: 0 });
    gsap.to(cards, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) onHover(index);
          }
        });
      },
      { root: carousel, threshold: 0.6 },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [onHover]);

  return (
    <div className="absolute bottom-0 w-full ">
      {/* Desktop: static grid */}
      <div
        ref={desktopGridRef}
        className={`hidden lg:grid grid-cols-5 overflow-hidden ${posts.length > 1 ? "group/grid" : ""}`}
      >
        {posts.map((post, i) => (
          <BlogCard
            key={post.slug}
            index={i}
            image={post.thumbnail}
            href={`/blogs/${post.slug}`}
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
        {posts.map((post, i) => (
          <div
            key={post.slug}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="snap-center shrink-0 w-[85%]"
          >
            <BlogCard
              index={i}
              image={post.thumbnail}
              href={`/blogs/${post.slug}`}
              onHover={() => onHover(i)}
              onLeave={onLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
