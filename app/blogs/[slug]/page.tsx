import { notFound } from "next/navigation";
import Container from "@/app/components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import ScrollableBlogContent from "./ScrollableBlogContent";
import { getMediumPost } from "@/app/lib/medium";
import "./blog-content.css";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getMediumPost(slug);

  if (!post) return notFound();

  return (
    <Container>
      <div className="flex-1 min-h-0 w-full flex flex-col gap-12 lg:gap-0 lg:grid lg:grid-cols-10 px-2 pt-8 overflow-x-hidden">
        <ScrambleText
          withHover
          href="/blogs"
          text="blogs"
          className="font-mono text-xs uppercase w-fit lg:hidden"
        />
        <div className="col-span-3 flex flex-col justify-between gap-8 lg:gap-0">
          <ScrambleText
            text={post.title}
            className="font-sans text-5xl lg:text-[60px] uppercase"
          />
          <div className="h-1/2 flex flex-col-reverse lg:flex-col gap-4 lg:gap-0 justify-between">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="grid grid-cols-3">
                <p className="col-span-1 text-[11px] font-mono uppercase text-gray-500">
                  PUBLISHED
                </p>
                <p className="col-span-1 text-[11px] font-mono uppercase">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="grid grid-cols-3">
                <p className="col-span-1 text-[11px] font-mono uppercase text-gray-500">
                  CATEGORY
                </p>
                <div className="flex flex-col gap-2">
                  {post.categories.slice(0, 3).map((category, i) => (
                    <ScrambleText
                      key={i}
                      text={category}
                      className="text-[11px] font-mono uppercase"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollableBlogContent content={post.content} />
      </div>
    </Container>
  );
}
