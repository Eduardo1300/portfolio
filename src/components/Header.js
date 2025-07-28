import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "CV", href: "#cv" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nombre */}
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">
          Christopher Valdivia
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          <LanguageSwitcher />

          {/* Botón modo oscuro */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
