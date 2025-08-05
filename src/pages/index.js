// pages/index.js
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Componentes principales (carga inmediata)
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Componentes con lazy loading (carga diferida)
const Projects = dynamic(() => import("../components/Projects"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando proyectos...</div>,
  ssr: true
});

const Services = dynamic(() => import("../components/Services"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando servicios...</div>,
  ssr: true
});

const Experience = dynamic(() => import("../components/Experience"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando experiencia...</div>,
  ssr: true
});

const Certificates = dynamic(() => import("../components/Certificates"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando certificados...</div>,
  ssr: true
});

const FavTech = dynamic(() => import("../components/FavTech"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando tecnologías...</div>,
  ssr: true
});

const Blog = dynamic(() => import("../components/Blog"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando blog...</div>,
  ssr: true
});

const GitHubStats = dynamic(() => import("../components/GitHubStats"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando estadísticas...</div>,
  ssr: true
});

const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando testimonios...</div>,
  ssr: true
});

// Componentes extras (carga diferida)
const Loader = dynamic(() => import("../components/Loader"), {
  ssr: false
});

const Roadmap = dynamic(() => import("../components/Roadmap"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando roadmap...</div>,
  ssr: true
});

const WhyHireMe = dynamic(() => import("../components/WhyHireMe"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando información...</div>,
  ssr: true
});

const FreelanceProjects = dynamic(() => import("../components/FreelanceProjects"), {
  loading: () => <div className="py-20 px-6 text-center">Cargando proyectos freelance...</div>,
  ssr: true
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Christopher Valdivia – Desarrollador Full Stack | Portafolio</title>
        <meta
          name="description"
          content="Portafolio de Christopher Valdivia, desarrollador Full Stack Junior especializado en React, Spring Boot, Next.js y MongoDB. Proyectos web y aplicaciones móviles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="desarrollador full stack, react, spring boot, next.js, mongodb, portafolio, desarrollo web, aplicaciones móviles" />
        <meta name="author" content="Christopher Valdivia" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Christopher Valdivia – Desarrollador Full Stack" />
        <meta property="og:description" content="Portafolio de Christopher Valdivia, desarrollador Full Stack Junior especializado en React, Spring Boot, Next.js y MongoDB." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/perfil-removebg-preview.png" />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta property="og:site_name" content="Christopher Valdivia Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Christopher Valdivia – Desarrollador Full Stack" />
        <meta name="twitter:description" content="Portafolio de Christopher Valdivia, desarrollador Full Stack Junior" />
        <meta name="twitter:image" content="/images/perfil-removebg-preview.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://tu-dominio.com" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Christopher Valdivia",
              "jobTitle": "Desarrollador Full Stack",
              "description": "Desarrollador Full Stack Junior especializado en React, Spring Boot, Next.js y MongoDB",
              "url": "https://tu-dominio.com",
              "image": "/images/perfil-removebg-preview.png",
              "sameAs": [
                "https://github.com/Eduardo1300"
              ],
              "knowsAbout": [
                "React", "Spring Boot", "Next.js", "MongoDB", "JavaScript", "Java", "Python"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressCountry": "Perú"
              }
            })
          }}
        />
      </Head>

      {/* Loader animado mientras carga */}
      <Loader />

      {/* Contenido principal */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        
        <Suspense fallback={<div className="py-20 px-6 text-center">Cargando contenido...</div>}>
          <Projects />
          <FreelanceProjects />
          <Services />
          <Experience />
          <Certificates />
          <FavTech />
          <WhyHireMe />
          <Roadmap />
          <Blog />
          <GitHubStats />
          <Testimonials />
        </Suspense>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// ⬇️ Agregado para que funcionen las traducciones
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
