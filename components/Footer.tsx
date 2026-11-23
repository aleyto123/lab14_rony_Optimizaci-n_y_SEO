import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#0b1a30]">
      <div className="mx-auto flex max-w-[1350px] flex-wrap justify-between gap-4 px-6 py-6 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="flex gap-5 font-medium">
          <a href={personalInfo.github} className="hover:text-[var(--cyan)]">GitHub</a>
          <a href={personalInfo.linkedin} className="hover:text-[var(--cyan)]">LinkedIn</a>
          <Link href="/contact" className="hover:text-[var(--cyan)]">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
