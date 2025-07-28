import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import projects from "../data/projects";

const allTags = ["Todos", ...new Set(projects.flatMap((p) => p.tech))];
const projectIcons = ["💼", "🏥", "💰", "✅", "📚", "🏃‍♂️"];

const Projects = () => {
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Título con animación */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        🚀 {t("proyectos_destacados")}
      </motion.h2>

      {/* Filtros animados */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {allTags.map((tag) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              filter === tag
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          >
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              #
            </motion.span>{" "}
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Contenedor de proyectos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            {/* Emoji con animación */}
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-40 flex items-center justify-center text-5xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              {projectIcons[index % projectIcons.length]}
            </motion.div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {project.stack}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
              >
                {t("ver_codigo")}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
