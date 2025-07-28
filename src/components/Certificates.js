import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const certificates = [
  {
    titleKey: "cert_java",
    providerKey: "provider_cibertec",
    url: "https://example.com/certificados/java-backend",
    logo: "/java-cert.svg",
  },
  {
    titleKey: "cert_react",
    providerKey: "provider_udemy",
    url: "https://www.udemy.com/certificate/UC-XXXXXX/",
    logo: "/react-cert.svg",
  },
];

const Certificates = () => {
  const { t } = useTranslation("common");

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-14 text-center tracking-tight"
      >
        {t("certificados")}
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((c, i) => (
          <motion.a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-inner group-hover:scale-110 transition-transform">
                <img src={c.logo} alt={t(c.titleKey)} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{t(c.titleKey)}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t(c.providerKey)}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
