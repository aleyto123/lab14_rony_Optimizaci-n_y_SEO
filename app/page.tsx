import type { Metadata } from "next";
import Image from "next/image";
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

const highlights = [
  { icon: "</>", title: String(projects.length), detail: "Proyectos desarrollados" },
  { icon: "◇", title: "5.° ciclo", detail: "Diseño y Desarrollo de Software" },
  { icon: "▣", title: "Web y móvil", detail: "Enfoque full stack" },
  { icon: "☆", title: "TECSUP", detail: "Formación profesional" },
];

export default function Home() {
  return (
    <>
      <section className="portfolio-hero">
        <div className="hero-copy">
          <p className="hero-badge"><span aria-hidden="true">◇</span> Estudiante de TECSUP</p>
          <h1>Hola, soy <strong>{personalInfo.shortName}</strong></h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.description}</p>
          <div className="hero-actions">
            <Link href="/projects" className="portfolio-button primary-button">Ver proyectos <span aria-hidden="true">→</span></Link>
            <Link href="/contact" className="portfolio-button"><span aria-hidden="true">✉</span> Contactar</Link>
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.imageAlt}
            width={780}
            height={950}
            sizes="(min-width: 900px) 310px, (min-width: 700px) 240px, 200px"
            preload
          />
        </div>
      </section>
      <ul className="portfolio-highlights" aria-label="Perfil profesional">
        {highlights.map(({ icon, title, detail }) => (
          <li key={title}>
            <span aria-hidden="true" className="highlight-icon">{icon}</span>
            <div><strong>{title}</strong><span>{detail}</span></div>
          </li>
        ))}
      </ul>
      <section aria-labelledby="featured-projects">
        <div className="featured-heading">
          <div>
            <h2 id="featured-projects">Proyectos destacados</h2>
            <p>Algunos de los proyectos en los que he trabajado.</p>
          </div>
          <Link href="/projects">Ver todos los proyectos <span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} heading="h3" />
          ))}
        </div>
      </section>
    </>
  );
}
