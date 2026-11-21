import Link from "next/link";
import { personalInfo } from "@/lib/data";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-indigo-950">{personalInfo.shortName}</Link>
        <Navigation />
      </nav>
    </header>
  );
}
