import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Suspense } from "react";

const GitHubStats = () => {
  const { t } = useTranslation("common");

  return (
    <section 
      className="py-20 px-4 text-center bg-white dark:bg-gray-950"
      aria-label="Estadísticas de GitHub"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        📊 {t("estadisticas_github")}
      </h2>
      <div className="flex justify-center flex-wrap gap-10">
        {[
          {
            src: "https://github-readme-stats.vercel.app/api?username=Eduardo1300&show_icons=true&theme=tokyonight",
            alt: "Estadísticas de GitHub de Christopher Valdivia",
          },
          {
            src: "https://github-readme-streak-stats.herokuapp.com/?user=Eduardo1300&theme=tokyonight",
            alt: "Racha de contribuciones de GitHub de Christopher Valdivia",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="transition-transform hover:-translate-y-1 hover:shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <Suspense fallback={
              <div className="w-full max-w-md h-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
                <span className="text-gray-500">Cargando estadísticas...</span>
              </div>
            }>
              <Image
                src={stat.src}
                alt={stat.alt}
                width={400}
                height={160}
                className="w-full max-w-md"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </Suspense>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;
