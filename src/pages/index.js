// pages/index.js
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Secciones principales
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import FavTech from "../components/FavTech";
import Blog from "../components/Blog";
import GitHubStats from "../components/GitHubStats";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Extras pro ✨
import Loader from "../components/Loader";
import Roadmap from "../components/Roadmap";
import WhyHireMe from "../components/WhyHireMe";
import FreelanceProjects from "../components/FreelanceProjects"; // asegúrate de que esté bien escrito y exista

export default function Home() {
  return (
    <>
      <Head>
        <title>Christopher Valdivia – Portafolio</title>
        <meta
          name="description"
          content="Portafolio de Christopher Valdivia, desarrollador Full Stack Junior."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Christopher Valdivia – Portafolio" />
        <meta property="og:description" content="Desarrollador Full Stack Junior" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loader animado mientras carga */}
      <Loader />

      {/* Contenido principal */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
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
