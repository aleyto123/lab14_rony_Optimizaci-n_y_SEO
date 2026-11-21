import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import "./projects.css";

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
    <section className="project-showcase-page">
      <header className="project-showcase-intro">
        <div>
          <h1>{title}</h1>
          <p>Desarrollo web y móvil aplicado a proyectos académicos y soluciones para negocios.</p>
        </div>
        <Link href="/contact" className="project-showcase-contact">Conversemos sobre tu proyecto</Link>
      </header>
      <div className="project-showcase-projects">
        {projects.map((project) => (
          <article key={project.slug} className="project-showcase-card">
            <Link href={`/projects/${project.slug}`} className="project-showcase-preview" aria-label={`Ver ${project.title}`}>
              <Image src={project.image} alt={project.imageAlt} fill loading="lazy"
                sizes="(min-width: 768px) 280px, calc(100vw - 80px)" className="project-showcase-image" />
              <span className="project-showcase-imageLabel">Imagen ilustrativa</span>
            </Link>
            <div className="project-showcase-content">
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.description}</p>
              <ul className="project-showcase-technologies" aria-label="Tecnologías utilizadas">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <div className="project-showcase-actions">
              <Link href={`/projects/${project.slug}`} className="project-showcase-details">Ver proyecto</Link>
              {project.githubUrl && <a href={project.githubUrl} className="project-showcase-repository">Código en GitHub</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
