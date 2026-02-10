import Link from "next/link";
import Image from "next/image";
import Container from "../components/layout/Container";
import ScrambleText from "../components/ScrambleText";
import { getMediumPosts } from "../lib/medium";

export default async function Blogs() {
  const posts = await getMediumPosts();

  return (
    <Container>
      <div className="flex-1 w-full flex flex-col gap-6 pt-8 pb-20 lg:pb-0 overflow-y-auto scrollbar-hide">
        <ScrambleText
          text="BLOGS"
          className="font-sans text-5xl lg:text-[120px] font-medium"
        />
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group grid grid-cols-10 gap-4 py-4 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              {post.thumbnail && (
                <div className="col-span-3 lg:col-span-2 relative aspect-video">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 20vw"
                  />
                </div>
              )}
              <div
                className={`${post.thumbnail ? "col-span-7 lg:col-span-8" : "col-span-10"} flex flex-col justify-center gap-2`}
              >
                <p className="font-sans text-lg lg:text-2xl font-medium group-hover:text-[#9eff00] transition-colors">
                  {post.title}
                </p>
                <p className="font-mono text-[11px] uppercase text-gray-500">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
