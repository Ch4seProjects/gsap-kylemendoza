import { getMediumPosts } from "../lib/medium";
import BlogsClient from "./BlogsClient";

export default async function Blogs() {
  const posts = await getMediumPosts();

  return <BlogsClient posts={posts} />;
}
