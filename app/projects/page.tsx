import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const title = "Proyectos";
const description = "Explora mis proyectos de desarrollo web y las tecnologías que utilicé.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-10 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-bold text-indigo-950 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
