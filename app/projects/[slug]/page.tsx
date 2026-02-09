import { projects } from "@/app/lib/mocks";
import { notFound } from "next/navigation";
import Container from "@/app/components/layout/Container";
import ScrambleText from "@/app/components/ScrambleText";
import ScrollableGallery from "./ScrollableGallery";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <Container>
      <div className="flex-1 min-h-0 w-full grid grid-cols-10 px-2 pt-8">
        <div className="col-span-3 flex flex-col justify-between">
          <ScrambleText
            text={project.name}
            className="font-sans text-[60px] uppercase"
          />
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3">
              <p className="col-span-1 text-[11px] font-mono uppercase text-gray-500">
                YEAR
              </p>
              <p className="col-span-1 text-[11px] font-mono uppercase">
                {project.year}
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="col-span-1 text-[11px] font-mono uppercase text-gray-500">
                SERVICES
              </p>
              <div className="flex flex-col">
                {project.services.map((service, i) => (
                  <p
                    className="col-span-1 text-[11px] font-mono uppercase"
                    key={i}
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="text-2xl font-sans font-medium pr-2">
            {project.description}
          </p>
        </div>
        <ScrollableGallery images={project.images} name={project.name} />
      </div>
    </Container>
  );
}
