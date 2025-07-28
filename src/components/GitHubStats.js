import { useTranslation } from "next-i18next";

const GitHubStats = () => {
  const { t } = useTranslation("common");

  return (
    <section className="py-20 px-4 text-center bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">📊 {t("estadisticas_github")}</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {[
          {
            src: "https://github-readme-stats.vercel.app/api?username=Eduardo1300&show_icons=true&theme=tokyonight",
            alt: "GitHub Stats",
          },
          {
            src: "https://github-readme-streak-stats.herokuapp.com/?user=Eduardo1300&theme=tokyonight",
            alt: "GitHub Streak",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="transition-transform hover:-translate-y-1 hover:shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={stat.src}
              alt={stat.alt}
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;
