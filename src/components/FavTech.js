import { useTranslation } from "next-i18next";
import Image from "next/image";

const tech = [
  { name: "React", src: "/react.png" },
  { name: "Tailwind", src: "/tailwind.png" },
  { name: "Spring", src: "/spring.png" },
  { name: "ASP.NET", src: "/dotnet.png" },
];

const FavTech = () => {
  const { t } = useTranslation("common");

  return (
    <section 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center"
      aria-label="Tecnologías favoritas"
    >
      <h2 className="text-3xl font-bold mb-10">{t("tecnologias_favoritas")}</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {tech.map((t, i) => (
          <div key={i} className="group">
            <Image
              src={t.src}
              alt={`Logo de ${t.name}`}
              width={64}
              height={64}
              className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
            />
            <p className="mt-2 text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavTech;
