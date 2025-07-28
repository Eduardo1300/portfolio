"use client";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import skills from "../data/skills";
import { Brain } from "lucide-react";

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <h2 className="text-4xl font-bold">{t("habilidades_tecnicas")}</h2>
        </div>
        <div className="h-1 w-16 bg-purple-600 dark:bg-purple-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {group.category}
            </h3>
            {group.items.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
