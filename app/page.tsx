import { getProjects } from "@/app/lib/projects";
import HomeClient from "@/app/HomeClient";

export default function Page() {
  const projectsPromise = getProjects();
  return <HomeClient projectsPromise={projectsPromise} />;
}
