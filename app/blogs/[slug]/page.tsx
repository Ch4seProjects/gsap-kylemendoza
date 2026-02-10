import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/app/components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
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
      <div className="flex-1 w-full flex flex-col gap-6 pt-8 pb-20 lg:pb-8 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-4">
          <ScrambleText
            withHover
            href="/blogs"
            text="blogs"
            className="font-mono text-xs uppercase w-fit"
          />
          <ScrambleText
            text={post.title}
            className="font-sans text-3xl lg:text-5xl font-medium"
          />
          <p className="font-mono text-[11px] uppercase text-gray-500">
            {new Date(post.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link
          href="/blogs"
          className="font-mono text-xs uppercase text-[#9eff00] hover:underline w-fit mt-4"
        >
          &larr; Back to blogs
        </Link>
      </div>
    </Container>
  );
}
