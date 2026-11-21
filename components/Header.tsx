import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-indigo-950">{personalInfo.shortName}</Link>
        <div className="flex flex-wrap items-center gap-1 text-sm font-medium text-slate-600 sm:gap-2">
          <Link href="/" className="rounded-lg px-3 py-2 transition-colors hover:bg-indigo-50 hover:text-indigo-800">Inicio</Link>
          <Link href="/projects" className="rounded-lg px-3 py-2 transition-colors hover:bg-indigo-50 hover:text-indigo-800">Proyectos</Link>
          <Link href="/about" className="rounded-lg px-3 py-2 transition-colors hover:bg-indigo-50 hover:text-indigo-800">Sobre mí</Link>
          <Link href="/contact" className="rounded-lg bg-indigo-50 px-3 py-2 text-indigo-800 transition-colors hover:bg-indigo-100">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
