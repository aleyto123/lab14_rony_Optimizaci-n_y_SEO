import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-bold text-indigo-700">{personalInfo.name}</Link>
        <div className="flex gap-5 text-sm font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/about">Sobre mí</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
