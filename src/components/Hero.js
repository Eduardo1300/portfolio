import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const { t } = useTranslation("common");

  const fullCode = [
    "const developer = {",
    "  name: 'Christopher',",
    "  skills: ['React', 'Spring', 'Next.js', 'MongoDB'],",
    "  passion: 'Full Stack'",
    "};",
  ].join("\n");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-6 overflow-hidden"
      aria-label="Sección principal del portafolio"
    >
      {/* Fondo animado de partículas */}
      <ParticlesBackground />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto a la izquierda */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t("hero_title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/cv-christopher-valdivia.pdf"
              download
              className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Descargar CV de Christopher Valdivia"
            >
              📄 {t("descargar_cv")}
            </Link>
            <Link
              href="#contact"
              className="px-5 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Ir a la sección de contacto"
            >
              ✉️ {t("contacto")}
            </Link>
          </div>
        </div>

        {/* Animación + Foto */}
        <div className="flex flex-col items-center gap-6">
          {/* Foto optimizada */}
          <div className="relative w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg overflow-hidden">
            <Image
              src="/images/perfil-removebg-preview.png"
              alt="Foto de perfil de Christopher Valdivia - Desarrollador Full Stack"
              fill
              sizes="(max-width: 768px) 160px, 160px"
              className="object-cover"
              priority
              quality={90}
            />
          </div>

          {/* Código animado */}
          <div 
            className="code-animation text-sm w-full max-w-xs whitespace-pre-line bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            aria-label="Código de ejemplo del desarrollador"
          >
            <Typewriter
              words={[fullCode]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={3000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
