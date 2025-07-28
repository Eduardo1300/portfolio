import React from "react";
import { Code, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const Services = () => {
  const { t } = useTranslation("common");

  const services = [
    {
      title: t("servicio_web"),
      description: t("servicio_web_desc"),
      icon: <Code className="w-6 h-6 text-white" />,
      bg: "bg-blue-500",
    },
    {
      title: t("servicio_api"),
      description: t("servicio_api_desc"),
      icon: <Cloud className="w-6 h-6 text-white" />,
      bg: "bg-green-500",
    },
    {
      title: t("servicio_bd"),
      description: t("servicio_bd_desc"),
      icon: <Database className="w-6 h-6 text-white" />,
      bg: "bg-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-14 text-center tracking-tight"
        >
          {t("servicios")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 shadow-md mx-auto group-hover:rotate-6"
                   style={{ backgroundColor: "transparent" }}>
                <div className={`${s.bg} w-full h-full flex items-center justify-center rounded-full`}>
                  {s.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
