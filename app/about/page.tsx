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
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <Image src="/fotocv.webp" alt={`Fotografía de ${personalInfo.name}`} width={224} height={224}
            sizes="224px" className="mx-auto aspect-square w-full max-w-56 rounded-2xl object-cover" />
          <p className="mt-5 text-lg font-bold text-indigo-950">{personalInfo.shortName}</p>
          <p className="mt-1 text-sm text-slate-600">{personalInfo.title}</p>
          <p className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">{personalInfo.location}</p>
          <a href={`mailto:${personalInfo.email}`} className="mt-5 block rounded-xl bg-indigo-950 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-800">Escríbeme</a>
        </div>
        <div className="py-2">
          <h1 className="text-4xl font-bold text-indigo-950 sm:text-5xl">Sobre mí</h1>
          <h2 className="mt-6 text-xl font-semibold">{personalInfo.name}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
          <p className="mt-5 text-slate-600">Me interesa crear software que responda a necesidades concretas. Mi experiencia incluye frontend y backend, aplicaciones móviles y bases de datos. En Creaciones Mathias y Natzumi participé en los perfiles de dueño y trabajador, sus permisos y las funcionalidades con códigos de barras.</p>
          <p className="mt-5 text-slate-600">Capacidad de análisis, solución de problemas y trabajo en equipo. Inglés intermedio.</p>
          <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
            <h2 className="font-bold text-indigo-950">Formación</h2>
            <p className="mt-2 text-slate-600">Diseño y Desarrollo de Software · TECSUP · Quinto ciclo, en curso.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-indigo-950">Conocimientos técnicos</h2>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.area} className="rounded-2xl border border-slate-200 bg-white p-6">
              <dt className="font-semibold text-indigo-950">{skill.area}</dt>
              <dd className="mt-3 text-sm leading-6 text-slate-600">{skill.technologies}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-indigo-950">Formación adicional</h2>
        <p className="mt-2 text-slate-600">Cisco Networking Academy</p>
        <ul className="mt-6 divide-y divide-slate-100 text-slate-600">
          {training.map((course) => <li key={course} className="py-4 first:pt-0 last:pb-0">{course}</li>)}
        </ul>
      </section>
    </div>
  );
}
