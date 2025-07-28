import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { User2, Briefcase, Award, Layers3 } from "lucide-react";
import Link from "next/link";

export default function About() {
  const { t } = useTranslation("common");

  const stats = [
    { label: t("proyectos_completados"), value: "6+", icon: <Briefcase /> },
    { label: t("anios_experiencia"), value: "3+", icon: <Award /> },
    { label: t("tecnologias"), value: "10+", icon: <Layers3 /> },
    { label: t("certificaciones"), value: "2", icon: <Award /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título con ícono */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 dark:text-white flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <User2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          {t("sobre_mi")}
        </motion.h2>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Textos */}
          <motion.div
            className="space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{t("about_paragraph_1")}</p>
            <p>{t("about_paragraph_2")}</p>
            <p>{t("about_paragraph_3")}</p>

            {/* Enlaces sociales */}
            <div className="space-y-2 text-lg font-medium">
              <div>
                🐱{" "}
                <Link
                  href="https://github.com/Eduardo1300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  GitHub
                </Link>
              </div>
              <div>
                💼{" "}
                <Link
                  href="https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  LinkedIn
                </Link>
              </div>
              <div>
                📧{" "}
                <Link
                  href="mailto:eduardovaldivia130@outlook.es"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  eduardovaldivia130@outlook.es
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Estadísticas con animación */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 text-center cursor-pointer"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
