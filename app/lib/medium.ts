import Parser from "rss-parser";
import { BlogPost } from "./types";

const parser = new Parser<
  Record<string, unknown>,
  { "content:encoded"?: string }
>({
  customFields: {
    item: ["content:encoded"],
  },
});

const FEED_URL = "https://medium.com/feed/@kylemendoza67";

function extractThumbnail(html: string): string {
  // Match all img src values, then pick the first that's an actual content image
  const matches = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)];
  for (const m of matches) {
    const src = m[1];
    if (
      src.includes("cdn-images-1.medium.com") ||
      src.includes("miro.medium.com")
    ) {
      return src;
    }
  }
  return "";
}

function extractSlug(link: string): string {
  // Medium URLs end with the slug which contains a trailing ID after the last dash
  const parts = link.replace(/\?.*$/, "").split("/");
  return parts[parts.length - 1] || "";
}

export async function getMediumPosts(): Promise<BlogPost[]> {
  const feed = await parser.parseURL(FEED_URL);

  return feed.items.map((item) => ({
    title: item.title ?? "",
    slug: extractSlug(item.link ?? ""),
    pubDate: item.pubDate ?? "",
    content: item["content:encoded"] ?? item.content ?? "",
    thumbnail: extractThumbnail(item["content:encoded"] ?? item.content ?? ""),
    link: item.link ?? "",
    categories: item.categories ?? [],
  }));
}

export async function getMediumPost(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getMediumPosts();
  return posts.find((p) => p.slug === slug);
}
