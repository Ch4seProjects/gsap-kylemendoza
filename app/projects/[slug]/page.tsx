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
      <div className="flex-1 min-h-0 w-full flex flex-col gap-12 lg:gap-0 lg:grid lg:grid-cols-10 px-2 pt-8">
        <ScrambleText
          withHover
          href="/"
          text="work"
          className="font-mono text-xs uppercase w-fit lg:hidden"
        />
        <div className="col-span-3 flex flex-col justify-between gap-8 lg:gap-0">
          <div className="flex flex-col gap-2">
            <ScrambleText
              text={project.name}
              className="font-sans text-5xl lg:text-[60px] uppercase"
            />
            <ScrambleText
              withHover
              alwaysActive
              text="Live View"
              href={project.liveSite}
              target="_blank"
              className="font-mono text-xs uppercase w-fit ml-1"
            />
          </div>
          <div className="h-1/2 flex flex-col-reverse lg:flex-col gap-4 lg:gap-0 justify-between">
            <div className="flex flex-col gap-2 lg:gap-4">
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
                <div className="flex flex-col gap-2">
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
              <div className="grid grid-cols-3">
                <p className="col-span-1 text-[11px] font-mono uppercase text-gray-500">
                  TECH STACK
                </p>
                <div className="flex flex-col gap-2">
                  {project.techStack.map((tech, i) => (
                    <p
                      className="col-span-1 text-[11px] font-mono uppercase"
                      key={i}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[10px] text-white/50 leading-4 lg:leading-none lg:text-white lg:text-2xl font-mono lg:font-sans font-medium pr-4 uppercase lg:normal-case">
              {project.description}
            </p>
          </div>
        </div>
        <ScrollableGallery images={project.images} name={project.name} />
      </div>
    </Container>
  );
}
