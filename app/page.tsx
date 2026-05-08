import { Metadata } from "next";
import { getProjects } from "@/app/lib/projects";
import HomeClient from "@/app/HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Kyle Dominic Mendoza's portfolio — a Front-End Developer building modern, performant web apps with React.js and TypeScript.",
};

export default function Home() {
  const projectsPromise = getProjects();
  return <HomeClient projectsPromise={projectsPromise} />;
}
