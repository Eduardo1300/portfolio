import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="text-center p-6 mt-8 border-t text-sm text-gray-500 dark:text-gray-400">
      <p className="mb-1">
        © {new Date().getFullYear()} {t("autor")} — {t("derechos_reservados")}
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/eduardovaldivia"
          className="hover:text-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/eduardovaldivia"
          className="hover:text-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
