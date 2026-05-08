import { Metadata } from "next";
import { getMediumPosts } from "../lib/medium";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Web development tutorials by Kyle Dominic Mendoza — practical guides on React.js, TypeScript, and modern front-end development.",
};

export default function Blogs() {
  const postsPromise = getMediumPosts();
  return <BlogsClient postsPromise={postsPromise} />;
}
