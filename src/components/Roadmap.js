import { motion } from "framer-motion";
import { fadeUp } from "../utils/animationVariants";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaMicrosoft,
  FaNodeJs,
} from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const steps = [
  {
    year: "2022",
    skill: "HTML, CSS, JavaScript",
    icons: [
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
      { icon: <FaJs />, label: "JavaScript" },
    ],
  },
  {
    year: "2023",
    skill: "React, PHP, SQL Server",
    icons: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaPhp />, label: "PHP" },
      { icon: <FaDatabase />, label: "SQL Server" },
    ],
  },
  {
    year: "2024",
    skill: "Spring Boot, ASP.NET MVC",
    icons: [
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <FaMicrosoft />, label: "ASP.NET MVC" },
    ],
  },
  {
    year: "2025",
    skill: "Next.js, Tailwind, Freelance",
    icons: [
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <FaNodeJs />, label: "Freelance / Backend" },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-20 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Roadmap</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`relative mb-16 flex w-full flex-col sm:flex-row items-center ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Punto en la línea */}
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-600 border-4 border-white dark:border-gray-950 rounded-full z-10" />

            {/* Card */}
            <div
              className={`w-full sm:w-[48%] p-6 mt-8 sm:mt-0 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative z-10 ${
                i % 2 === 0 ? "sm:ml-[10%]" : "sm:mr-[10%]"
              }`}
            >
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                {step.year}
              </p>
              <h4 className="text-lg font-medium mb-3">{step.skill}</h4>

              <div className="flex flex-wrap gap-3 text-2xl text-blue-500 dark:text-blue-400">
                {step.icons.map((item, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                  >
                    <div>{item.icon}</div>
                    <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
