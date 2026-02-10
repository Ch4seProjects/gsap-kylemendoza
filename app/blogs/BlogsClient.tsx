"use client";

import { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import BlogShowcase from "@/app/components/BlogShowcase";
import { BlogPost } from "@/app/lib/types";

export default function BlogsClient({ posts }: { posts: BlogPost[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredPost = hoveredIndex !== null ? posts[hoveredIndex] : null;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    if (mq.matches) setHoveredIndex(0);
  }, []);

  return (
    <Container>
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-[80%]">
        <div className="grid grid-cols-4 lg:grid-cols-10 gap-x-4 items-end h-50 lg:h-70">
          <div className="font-sans text-5xl lg:text-[128px] font-medium lg:font-normal uppercase col-span-4 lg:col-span-6 line-clamp-2">
            <ScrambleText
              text={hoveredPost ? hoveredPost.title : "Blogs"}
              scrambleOn={hoveredIndex !== null}
            />
          </div>
          <div className="font-mono text-xs uppercase col-span-2">
            {hoveredPost ? (
              hoveredPost.categories
                .slice(0, 3)
                .map((category, i) => (
                  <ScrambleText
                    key={i}
                    text={category}
                    scrambleOn={hoveredIndex !== null}
                  />
                ))
            ) : (
              <ScrambleText text="Medium Articles" className="w-[30%]" />
            )}
          </div>
          <div className="font-mono text-xs uppercase">
            {hoveredPost ? (
              <ScrambleText
                text={new Date(hoveredPost.pubDate).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
                scrambleOn={hoveredIndex !== null}
              />
            ) : (
              <ScrambleText text={`${posts.length} Posts`} />
            )}
          </div>
        </div>
      </div>
      <BlogShowcase
        posts={posts}
        onHover={(i) => setHoveredIndex(i)}
        onLeave={() => setHoveredIndex(null)}
      />
    </Container>
  );
}
