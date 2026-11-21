import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.description,
    images: [{ url: personalInfo.avatar, alt: personalInfo.imageAlt }],
  },
};

export default function Home() {
  return (
    <>
      <section className="rounded-3xl bg-linear-to-br from-indigo-950 to-indigo-900 px-7 py-12 text-white sm:px-12 lg:py-16">
        <div className="min-w-0 flex-1">
        <h1 className="max-w-xl text-4xl font-bold sm:text-5xl">Hola, soy {personalInfo.shortName}</h1>
        <p className="mt-4 text-xl text-indigo-200">{personalInfo.title}</p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-indigo-100">{personalInfo.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-950 transition-colors hover:bg-indigo-100">Ver proyectos</Link>
          <Link href="/contact" className="rounded-xl border border-indigo-300/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Contactar</Link>
        </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Proyectos destacados</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} heading="h3" />)}
        </div>
      </section>
    </>
  );
}
