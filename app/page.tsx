import { Metadata } from "next";
import { getProjects } from "@/app/lib/projects";
import HomeClient from "@/app/HomeClient";

export const metadata: Metadata = {
  title: "Home | KDM",
};

export default function Home() {
  const projectsPromise = getProjects();
  return <HomeClient projectsPromise={projectsPromise} />;
}
