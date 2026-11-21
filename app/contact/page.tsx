import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";

const title = "Contacto";
const description = "Contacta a Rony Bellido para conversar sobre proyectos y oportunidades de desarrollo web y móvil.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    images: [{ url: personalInfo.avatar, alt: personalInfo.imageAlt }],
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
    <section className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="py-2">
        <h1 className="text-4xl font-bold text-indigo-950 sm:text-5xl">Contacto</h1>
        <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-8 border-l-2 border-indigo-200 pl-5">
          <p className="font-semibold text-indigo-950">{personalInfo.name}</p>
          <p className="mt-2 text-sm text-slate-600">{personalInfo.location}</p>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-indigo-950">Conversemos</h2>
        <p className="mt-3 text-slate-600">Puedes escribirme por correo o encontrarme en mis redes profesionales.</p>
        <a href={`mailto:${personalInfo.email}`} className="mt-7 block rounded-2xl bg-indigo-950 p-5 text-white transition-colors hover:bg-indigo-800">
          <span className="block text-sm text-indigo-200">Correo electrónico</span>
          <span className="mt-1 block break-all text-lg font-semibold">{personalInfo.email}</span>
        </a>
        <a href={`tel:${personalInfo.phoneHref}`} className="mt-4 block rounded-2xl border border-slate-200 p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50">
          <span className="block text-sm text-slate-600">Teléfono</span>
          <span className="mt-1 block text-lg font-semibold text-indigo-950">{personalInfo.phone}</span>
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={personalInfo.github} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-indigo-50">GitHub</a>
          <a href={personalInfo.linkedin} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-indigo-50">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
