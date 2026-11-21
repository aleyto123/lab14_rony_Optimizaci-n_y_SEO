import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project, heading: Heading = "h2" }: { project: Project; heading?: "h2" | "h3" }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col hover:text-indigo-700">
        <div className="relative aspect-video bg-slate-100">
          <Image src={project.image} alt={project.imageAlt} fill loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <Heading className="text-xl font-bold">{project.title}</Heading>
          <p className="text-sm leading-6 text-slate-600">{project.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-800">{technology}</li>
            ))}
          </ul>
          <span className="text-sm font-semibold text-indigo-700 group-hover:underline">Ver proyecto</span>
        </div>
      </Link>
    </article>
  );
}
