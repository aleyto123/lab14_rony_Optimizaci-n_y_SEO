import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "liga-1-pro",
    title: "Liga 1 Pro",
    description: "Aplicación web sobre la Liga 1 del Perú, desarrollada con Django y React, que incluye predicción de resultados de partidos.",
    contribution: "Participé en el desarrollo de Liga 1 Pro en un equipo de tres integrantes. Utilizamos Django y React para construir una aplicación dedicada al fútbol peruano e incorporamos una funcionalidad de predicción de resultados.",
    image: "/liga-1-pro.webp",
    imageAlt: "Estadio de fútbol iluminado",
    technologies: ["Django", "React"],
    featured: true,
  },
  {
    slug: "creaciones-mathias-natzumi",
    title: "Gestión para Creaciones Mathias y Natzumi",
    description: "Sistema web y móvil para apoyar la producción, el inventario y las ventas de un negocio de confecciones infantiles en Gamarra.",
    contribution: "Mi aporte comprende el frontend y backend de los perfiles de dueño y trabajador, sus funcionalidades y permisos, la integración de códigos de barras y el desarrollo Android con Kotlin y Jetpack Compose. También participé en la documentación. El proyecto se encontraba en desarrollo.",
    image: "/creaciones-mathias-natzumi.webp",
    imageAlt: "Prendas de confección infantil",
    technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "PostgreSQL", "Kotlin", "Jetpack Compose"],
    featured: true,
  },
  {
    slug: "ventas-ios",
    title: "Aplicación de ventas para iOS",
    description: "Proyecto académico de TECSUP con gestión de productos, clientes y ventas, roles de vendedor y supervisor y persistencia local.",
    contribution: "Desarrollé una aplicación académica con SwiftUI y SwiftData para el curso de Programación en Móviles Avanzado. Incluye ingreso y creación de cuentas. Los roles de vendedor y supervisor comparten los datos de la instalación. Los clientes se registran como información de la tienda.",
    image: "/ventas-ios.webp",
    imageAlt: "Aplicación de ventas ilustrada en un iPhone",
    technologies: ["Swift", "SwiftUI", "SwiftData"],
    githubUrl: "https://github.com/aleyto123/MovilesAvanzado_RonyBellido",
    featured: true,
  },
];

export const personalInfo = {
  name: "Rony Widmer Bellido Chambi",
  shortName: "Rony Bellido",
  title: "Desarrollador de software web y móvil",
  description: "Estudiante de quinto ciclo de Diseño y Desarrollo de Software en TECSUP. Desarrollo soluciones web y móviles y he participado como desarrollador full stack en un sistema de gestión para un negocio de confecciones en Gamarra.",
  email: "ronyaleyto@gmail.com",
  phone: "929 932 175",
  phoneHref: "+51929932175",
  location: "Villa María del Triunfo, Lima, Perú",
  github: "https://github.com/aleyto123",
  linkedin: "https://www.linkedin.com/in/rony-widmer-bellido-chambi-9a6471451",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  avatar: "/retrato-sin-fondo.png",
  imageAlt: "Retrato de Rony Widmer Bellido Chambi",
};

export const skills = [
  { area: "Lenguajes", technologies: "Java, JavaScript, Python, Kotlin y Swift" },
  { area: "Desarrollo web", technologies: "HTML, React, Next.js y Tailwind CSS" },
  { area: "Backend", technologies: "Django, Laravel, Spring Boot y FastAPI" },
  { area: "Android", technologies: "Kotlin y Jetpack Compose" },
  { area: "iOS", technologies: "SwiftUI, SwiftData y Core Data" },
  { area: "Bases de datos", technologies: "SQL, NoSQL y PostgreSQL" },
  { area: "Herramientas y arquitectura", technologies: "Git, GitHub, despliegue de proyectos y conocimientos de microservicios" },
];

export const training = [
  "Vía de ciberseguridad — junio de 2024",
  "Introducción a Cisco Packet Tracer — septiembre de 2024",
  "Introducción a la Ciberseguridad — noviembre de 2024",
];
