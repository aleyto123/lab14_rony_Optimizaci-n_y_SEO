"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-xl bg-slate-100/80 p-1 text-sm font-medium sm:gap-2">
      {links.map(({ href, label }) => {
        const active = pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));
        return (
          <Link key={href} href={href} aria-current={active ? "page" : undefined}
            className={`rounded-lg px-3 py-2 transition-colors ${active ? "bg-white text-indigo-800 shadow-sm" : "text-slate-600 hover:bg-white/70 hover:text-indigo-800"}`}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
