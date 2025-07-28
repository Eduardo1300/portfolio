"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Code2 } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import { useTranslation } from "react-i18next"; // Importación para traducción

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation(); // Hook de traducción

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: t("nav_inicio"), href: "#hero" },
    { label: t("nav_sobre_mi"), href: "#about" },
    { label: t("nav_habilidades"), href: "#skills" },
    { label: t("nav_proyectos"), href: "#projects" },
    { label: t("nav_servicios"), href: "#services" },
    { label: t("nav_contacto"), href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md transition duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Ícono y nombre */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="bg-indigo-100 dark:bg-indigo-600 p-2 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
            <Code2 className="w-6 h-6 text-indigo-600 dark:text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              Christopher Valdivia
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t("navbar_subtitle")} {/* Esto también puedes traducir */}
            </p>
          </div>
        </Link>

        {/* Navegación + idioma + tema */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          {/* Idioma */}
          <LanguageSwitcher />

          {/* Tema oscuro/claro */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
