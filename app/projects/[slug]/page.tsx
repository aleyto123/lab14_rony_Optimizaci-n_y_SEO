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
    <article className="mx-auto max-w-5xl">
      <Link href="/projects" className="inline-block rounded-lg bg-sky-950 px-4 py-2 text-sm font-medium text-[var(--cyan)] hover:bg-sky-900">Volver a proyectos</Link>
      <h1 className="mt-7 max-w-3xl text-4xl font-bold text-[var(--ink)] sm:text-5xl">{project.title}</h1>
      <p className="mb-8 mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
      <div className="relative aspect-[3.2] overflow-hidden rounded-2xl bg-sky-950">
        <Image src={project.image} alt={project.imageAlt} fill preload
          sizes="(min-width: 948px) 896px, calc(100vw - 48px)" className="object-cover" />
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">{project.imageAlt}.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr]">
      <section className="rounded-2xl border surface-panel p-6 sm:p-8">
      <h2 className="mb-4 text-xl font-bold text-[var(--ink)]">Mi participación</h2>
      <p className="text-[var(--muted)]">{project.contribution}</p>
      </section>
      <section className="rounded-2xl border surface-panel p-6 sm:p-8">
      <h2 className="mb-4 text-xl font-bold text-[var(--ink)]">Tecnologías</h2>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-full bg-sky-950 px-3 py-1 text-sm text-[var(--cyan)]">{technology}</li>
        ))}
      </ul>
      </section>
      </div>
      <div className="mt-6 flex gap-5 font-medium text-[var(--cyan)]">
        {project.demoUrl && <a href={project.demoUrl}>Ver demo</a>}
        {project.githubUrl && <a href={project.githubUrl}>Ver código en GitHub</a>}
      </div>
    </article>
  );
}
