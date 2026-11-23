import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project, heading: Heading = "h2" }: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  return (
    <article className="featured-card">
      <Link href={`/projects/${project.slug}`} className="featured-card-link">
        <div className="featured-image">
          <Image src={project.image} alt={project.imageAlt} fill loading="lazy"
            sizes="(min-width: 1400px) 430px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div className="featured-content">
          <Heading>{project.title}</Heading>
          <p>{project.description}</p>
          <div className="featured-card-footer">
            <ul aria-label="Tecnologías">
              {project.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
