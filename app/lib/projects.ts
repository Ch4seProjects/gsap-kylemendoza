import { readFileSync } from "fs";
import { join } from "path";
import { Project } from "./types";

export async function getProjects(): Promise<Project[]> {
  const filePath = join(process.cwd(), "public", "projects.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Project[];
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}
