import type { MetadataRoute } from "next";
import { getMediumPosts } from "./lib/medium";
import { getProjects } from "@/app/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kylemendoza.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/info`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  try {
    // Fetch dynamic blog posts
    const blogPosts = await getMediumPosts();

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.pubDate),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    // Fetch dynamic portfolio projects
    const projects = await getProjects();
    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.year),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    // Combine all pages
    return [...staticPages, ...blogPages, ...projectPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages if dynamic content fails
    return staticPages;
  }
}
