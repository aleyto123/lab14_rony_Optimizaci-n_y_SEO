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
    <div className="mx-auto max-w-4xl space-y-10">
      <section>
        <Image
          src="/fotocv.webp"
          alt={`Fotografía de ${personalInfo.name}`}
          width={160}
          height={160}
          sizes="160px"
          className="mb-6 h-40 w-40 rounded-full object-cover"
        />
        <h1 className="text-4xl font-bold">Sobre mí</h1>
        <h2 className="mt-4 text-xl font-semibold">{personalInfo.name}</h2>
        <p className="mt-2 text-indigo-700">{personalInfo.title}</p>
        <p className="mt-4 text-slate-600">{description}</p>
        <p className="mt-4 text-slate-600">Me interesa crear software que responda a necesidades concretas. Mi experiencia incluye frontend y backend, aplicaciones móviles y bases de datos. En Creaciones Mathias y Natzumi participé en los perfiles de dueño y trabajador, sus permisos y las funcionalidades con códigos de barras.</p>
        <p className="mt-4 text-slate-600">Capacidad de análisis, solución de problemas y trabajo en equipo. Inglés intermedio.</p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Formación</h2>
        <p className="text-slate-600">Diseño y Desarrollo de Software · TECSUP · Quinto ciclo, en curso.</p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Conocimientos técnicos</h2>
        <dl className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.area} className="rounded-xl border border-slate-200 bg-white p-5">
              <dt className="font-semibold">{skill.area}</dt>
              <dd className="mt-2 text-slate-600">{skill.technologies}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Formación adicional</h2>
        <p className="mb-3 text-slate-600">Cisco Networking Academy</p>
        <ul className="list-inside list-disc space-y-2 text-slate-600">
          {training.map((course) => <li key={course}>{course}</li>)}
        </ul>
      </section>
    </div>
  );
}
