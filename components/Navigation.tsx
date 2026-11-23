"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio", icon: "⌂" },
  { href: "/projects", label: "Proyectos", icon: "◇" },
  { href: "/about", label: "Sobre mí", icon: "♙" },
  { href: "/contact", label: "Contacto", icon: "✉" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="site-nav-links">
      {links.map(({ href, label, icon }) => {
        const active = pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));
        return (
          <Link key={href} href={href} aria-current={active ? "page" : undefined}>
            <span aria-hidden="true">{icon}</span> {label}
          </Link>
        );
      })}
    </div>
  );
}
