import { useTranslation } from "next-i18next";
import { Briefcase, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "DevDatep Consulting",
    roleKey: "practicante",
    date: "Junio 2025 – presente",
    descriptionKey: "descripcion_devdatep",
    icon: Briefcase,
  },
  {
    company: "LicitApp",
    roleKey: "practicas_diseño_web",
    date: "Junio 2025 – actualidad",
    descriptionKey: "descripcion_licitapp",
    icon: Building2,
  },
];

export default function Experience() {
  const { t } = useTranslation("common");

  return (
    <section
      id="experiencia"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          {t("experiencia_profesional")}
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-10">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="relative pl-8 group cursor-pointer"
              >
                {/* Punto del timeline */}
                <span className="absolute left-[-11px] top-2 w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900 transition-transform group-hover:scale-110"></span>

                {/* Tarjeta */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-transform group-hover:rotate-6" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {exp.company} – {t(exp.roleKey)}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {t(exp.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
