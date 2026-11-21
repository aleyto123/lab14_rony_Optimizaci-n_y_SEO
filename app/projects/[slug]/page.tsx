import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const { title, description, image } = project;
  const url = `/projects/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl">
      <Link href="/projects" className="text-indigo-700 hover:underline">← Volver a proyectos</Link>
      <h1 className="mt-5 text-4xl font-bold">{project.title}</h1>
      <p className="my-4 text-lg text-slate-600">{project.description}</p>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
        <Image src={project.image} alt={project.imageAlt} fill preload
          sizes="(min-width: 948px) 896px, calc(100vw - 48px)" className="object-cover" />
      </div>
      <p className="mt-2 text-sm text-slate-600">Imagen ilustrativa de desarrollo de software.</p>
      <h2 className="mb-3 mt-7 text-xl font-bold">Mi participación</h2>
      <p className="text-slate-600">{project.contribution}</p>
      <h2 className="mb-3 mt-7 text-xl font-bold">Tecnologías</h2>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-800">{technology}</li>
        ))}
      </ul>
      <div className="mt-6 flex gap-5 font-medium text-indigo-700">
        {project.demoUrl && <a href={project.demoUrl}>Ver demo</a>}
        {project.githubUrl && <a href={project.githubUrl}>Ver código en GitHub</a>}
      </div>
    </article>
  );
}
