import Link from "next/link";
import { personalInfo } from "@/lib/data";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Navegación principal" className="site-nav">
        <Link href="/" className="site-brand">
          <span aria-hidden="true">{"</>"}</span> {personalInfo.shortName}
        </Link>
        <Navigation />
      </nav>
    </header>
  );
}
