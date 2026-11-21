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
    images: [{ url: personalInfo.avatar, alt: personalInfo.name }],
  },
};

export default function Home() {
  return (
    <>
      <section className="rounded-3xl bg-indigo-950 px-7 py-16 text-white sm:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl">Hola, soy {personalInfo.name}</h1>
        <p className="mt-4 text-xl text-indigo-200">{personalInfo.title}</p>
        <p className="mt-2 text-indigo-100">{personalInfo.description}</p>
        <Link href="/projects" className="mt-7 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-indigo-950">Ver proyectos</Link>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Proyectos destacados</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} heading="h3" />)}
        </div>
      </section>
    </>
  );
}
