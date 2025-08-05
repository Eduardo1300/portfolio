import { useTranslation } from "next-i18next";

const testimonials = [
  {
    name: "María Gómez",
    role: "Líder de proyecto - DevDatep",
    feedbackKey: "testimonio_1",
  },
  {
    name: "Carlos Ruiz",
    role: "Docente Cibertec",
    feedbackKey: "testimonio_2",
  },
];

export default function Testimonials() {
  const { t } = useTranslation("common");

  return (
    <section id="testimonios" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white">{t("testimonios")}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4">“</div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                &ldquo;Christopher demostró excelentes habilidades técnicas y una gran capacidad de aprendizaje. Su trabajo en el proyecto fue fundamental para el éxito del equipo.&rdquo;
              </p>
              <p className="text-sm font-medium text-right text-gray-800 dark:text-gray-400">
                — {item.name}, <span className="italic">{item.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
