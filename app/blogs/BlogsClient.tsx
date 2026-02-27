"use client";

import { Suspense, use, useRef, useState, useEffect } from "react";
import Container from "../components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import BlogShowcase from "@/app/components/BlogShowcase";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { BlogPost } from "@/app/lib/types";

function BlogShowcaseFallback() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="hidden lg:grid grid-cols-5 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-70 px-2 flex flex-col justify-end gap-2">
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

function BlogShowcaseResolver({
  postsPromise,
  onLoaded,
  onHover,
  onLeave,
}: {
  postsPromise: Promise<BlogPost[]>;
  onLoaded: (posts: BlogPost[]) => void;
  onHover: (index: number) => void;
  onLeave: () => void;
}) {
  const posts = use(postsPromise);

  useEffect(() => {
    onLoaded(posts);
    const mq = window.matchMedia("(max-width: 1023px)");
    if (mq.matches) onHover(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BlogShowcase posts={posts} onHover={onHover} onLeave={onLeave} />
  );
}

export default function BlogsClient({
  postsPromise,
}: {
  postsPromise: Promise<BlogPost[]>;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [postsCount, setPostsCount] = useState<number | null>(null);
  const postsRef = useRef<BlogPost[]>([]);
  const hoveredPost =
    hoveredIndex !== null ? (postsRef.current[hoveredIndex] ?? null) : null;

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
              hoveredPost.categories.slice(0, 3).map((category, i) => (
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
              <ScrambleText
                text={postsCount !== null ? `${postsCount} Posts` : "— Posts"}
              />
            )}
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<BlogShowcaseFallback />}>
          <BlogShowcaseResolver
            postsPromise={postsPromise}
            onLoaded={(p) => {
              postsRef.current = p;
              setPostsCount(p.length);
            }}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
          />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}
