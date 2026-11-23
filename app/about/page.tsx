import type { Metadata } from "next";
import Image from "next/image";
import { personalInfo, skills, training } from "@/lib/data";

const title = "Sobre mí";
const description = personalInfo.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [{ url: personalInfo.avatar, alt: personalInfo.imageAlt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [personalInfo.avatar] },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="grid items-start gap-8 lg:grid-cols-[280px_1fr]">
        <div className="rounded-3xl border surface-panel p-7 shadow-sm">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.imageAlt}
            width={780}
            height={950}
            sizes="144px"
            className="mb-5 h-auto w-36 rounded-2xl"
          />
          <p className="text-lg font-bold text-[var(--ink)]">{personalInfo.shortName}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{personalInfo.title}</p>
          <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)]">{personalInfo.location}</p>
          <a href={`mailto:${personalInfo.email}`} className="mt-5 block rounded-xl bg-blue-800 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700">Escríbeme</a>
        </div>
        <div className="py-2">
          <h1 className="text-4xl font-bold text-[var(--ink)] sm:text-5xl">Sobre mí</h1>
          <h2 className="mt-6 text-xl font-semibold">{personalInfo.name}</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
          <p className="mt-5 text-[var(--muted)]">Me interesa crear software que responda a necesidades concretas. Mi experiencia incluye frontend y backend, aplicaciones móviles y bases de datos. En Creaciones Mathias y Natzumi participé en los perfiles de dueño y trabajador, sus permisos y las funcionalidades con códigos de barras.</p>
          <p className="mt-5 text-[var(--muted)]">Capacidad de análisis, solución de problemas y trabajo en equipo. Inglés intermedio.</p>
          <div className="mt-7 rounded-2xl border surface-panel p-6">
            <h2 className="font-bold text-[var(--ink)]">Formación</h2>
            <p className="mt-2 text-[var(--muted)]">Diseño y Desarrollo de Software · TECSUP · Quinto ciclo, en curso.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">Conocimientos técnicos</h2>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.area} className="rounded-2xl border surface-panel p-6">
              <dt className="font-semibold text-[var(--ink)]">{skill.area}</dt>
              <dd className="mt-3 text-sm leading-6 text-[var(--muted)]">{skill.technologies}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="rounded-3xl border surface-panel p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[var(--ink)]">Formación adicional</h2>
        <p className="mt-2 text-[var(--muted)]">Cisco Networking Academy</p>
        <ul className="mt-6 divide-y divide-[var(--line)] text-[var(--muted)]">
          {training.map((course) => <li key={course} className="py-4 first:pt-0 last:pb-0">{course}</li>)}
        </ul>
      </section>
    </div>
  );
}
