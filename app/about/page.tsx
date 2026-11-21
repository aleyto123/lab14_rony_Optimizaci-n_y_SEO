import type { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

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
    images: [{ url: personalInfo.avatar, alt: personalInfo.name }],
  },
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
      <Image src={personalInfo.avatar} alt={`Retrato de ${personalInfo.name}`} width={224} height={224}
        loading="lazy" className="aspect-square rounded-full object-cover" />
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="mt-4 text-xl font-semibold">{personalInfo.name} · {personalInfo.title}</h2>
        <p className="my-4 text-slate-600">{description}</p>
        <a href={`mailto:${personalInfo.email}`} className="text-indigo-700 hover:underline">{personalInfo.email}</a>
      </div>
    </section>
  );
}
