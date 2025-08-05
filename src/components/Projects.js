import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const allTags = ["Todos", ...new Set(projects.flatMap((p) => p.tech))];
const projectIcons = ["💼", "🏥", "💰", "✅", "📚", "🏃‍♂️"];

const Projects = () => {
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 max-w-6xl mx-auto"
      aria-label="Sección de proyectos destacados"
    >
      {/* Título con animación */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
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
        role="tablist"
        aria-label="Filtros de proyectos"
      >
        {allTags.map((tag) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              filter === tag
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            role="tab"
            aria-selected={filter === tag}
            aria-controls="projects-grid"
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
        id="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        role="tabpanel"
        aria-label={`Proyectos filtrados por ${filter}`}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${filter}`}
              variants={itemVariants}
              layout
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              {/* Emoji con animación */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-40 flex items-center justify-center text-5xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: hoveredProject === index ? 1.2 : 1,
                    rotate: hoveredProject === index ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {projectIcons[index % projectIcons.length]}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: hoveredProject === index ? "100%" : "-100%"
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <div className="p-6">
                <h3 
                  id={`project-title-${index}`}
                  className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {project.stack}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Ver código del proyecto ${project.title}`}
                >
                  {t("ver_codigo")}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Mensaje cuando no hay proyectos */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10"
        >
          <p className="text-gray-600 dark:text-gray-400">
            No hay proyectos disponibles con el filtro seleccionado.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
