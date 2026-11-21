import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";
import "./globals.css";

const title = `${personalInfo.name} | ${personalInfo.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: { default: title, template: `%s | ${personalInfo.name}` },
  description: personalInfo.description,
  authors: [{ name: personalInfo.name }],
  keywords: ["portafolio", "desarrollo web", "Next.js", "Full Stack"],
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: personalInfo.name,
    title,
    description: personalInfo.description,
    images: [{ url: personalInfo.avatar, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personalInfo.description,
    images: [personalInfo.avatar],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
