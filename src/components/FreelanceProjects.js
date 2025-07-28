// src/components/FreelanceProjects.js
import React from "react";
import { useTranslation } from "next-i18next";
import { Folder } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animationVariants";

const projects = [
  {
    title: "Vida Sana – App Android",
    description: "Coach digital de hábitos saludables. Backend en PHP + MySQL, app en Kotlin.",
    link: "https://github.com/ChrisValdivia/Vida-Sana-App",
    stack: "Kotlin · PHP · MySQL",
  },
  {
    title: "Gestor de Citas Médicas",
    description: "Sistema completo con ASP.NET y SQL Server para gestión clínica.",
    link: "https://github.com/ChrisValdivia/MedicalApp",
    stack: "ASP.NET MVC · SQL Server",
  },
  {
    title: "Dashboard de licitaciones",
    description: "Análisis de licitaciones públicas con Python, Pandas y Excel.",
    link: "https://github.com/ChrisValdivia/Licitaciones-Estadisticas",
    stack: "Python · Pandas · Excel",
  },
];

const FreelanceProjects = () => {
  const { t } = useTranslation("common");

  return (
    <section id="freelance" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("proyectos_freelance")}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <Folder className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{p.stack}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {t("ver_codigo")}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FreelanceProjects;
