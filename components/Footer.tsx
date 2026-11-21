import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="flex gap-5 font-medium">
          <a href={personalInfo.github} className="hover:text-indigo-700">GitHub</a>
          <a href={personalInfo.linkedin} className="hover:text-indigo-700">LinkedIn</a>
          <Link href="/contact" className="hover:text-indigo-700">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
