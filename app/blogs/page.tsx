import { Metadata } from "next";
import { getMediumPosts } from "../lib/medium";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blogs() {
  const postsPromise = getMediumPosts();
  return <BlogsClient postsPromise={postsPromise} />;
}
