"use client";
import { useTranslation } from "next-i18next";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyHireMe() {
  const { t } = useTranslation("common");

  const points = [
    t("punto_1"),
    t("punto_2"),
    t("punto_3"),
    t("punto_4"),
  ];

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14"
      >
        {t("por_que_contratarme")}
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg p-5 transition"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <CheckCircle className="text-green-600 dark:text-green-400 w-6 h-6" />
            </div>
            <p className="text-base font-medium">{p}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
