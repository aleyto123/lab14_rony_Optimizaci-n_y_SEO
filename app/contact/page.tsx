import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";

const title = "Contacto";
const description = "Ponte en contacto conmigo para conversar sobre proyectos y oportunidades de desarrollo web.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    images: [{ url: personalInfo.avatar, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [personalInfo.avatar],
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <p className="mt-4 text-lg text-slate-600">{description}</p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">Conversemos</h2>
        <p className="mt-3 text-slate-600">Puedes escribirme por correo o encontrarme en mis redes profesionales.</p>
        <div className="mt-6 flex flex-wrap gap-5 font-medium text-indigo-700">
          <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
          <a href={personalInfo.github} className="hover:underline">GitHub</a>
          <a href={personalInfo.linkedin} className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
