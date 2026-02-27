import { getMediumPosts } from "../lib/medium";
import BlogsClient from "./BlogsClient";

export default function Blogs() {
  const postsPromise = getMediumPosts();
  return <BlogsClient postsPromise={postsPromise} />;
}
