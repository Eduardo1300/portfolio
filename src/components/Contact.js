"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation("common");
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = form.current.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setErrorMessage(t("correo_invalido"));
      setSuccess(false);
      return;
    }

    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = new Date().toLocaleString();
    form.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_3o3h87v",
        "template_pc30hx8",
        form.current,
        "P46sCK11mvcaepbfA"
      )
      .then(
        () => {
          setSuccess(true);
          setErrorMessage("");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
          setErrorMessage(t("mensaje_error"));
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">{t("tienes_proyecto")}</h2>
          <p className="text-lg mb-6 opacity-90">{t("texto_contacto")}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg">
              <Mail className="w-6 h-6 text-blue-500" />
              <span>eduardovaldivia130@outlook.es</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg">
              <Phone className="w-6 h-6 text-green-500" />
              <span>+51 953 587 619</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-red-500" />
              <span>Lima, Perú</span>
            </div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            ✉️ {t("contacto")}
          </h2>

          <div>
            <label className="block mb-1 font-medium">{t("nombre")}</label>
            <input
              type="text"
              name="name"
              required
              placeholder={t("nombre")}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">{t("correo")}</label>
            <input
              type="email"
              name="email"
              required
              placeholder="ejemplo@email.com"
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">{t("mensaje")}</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder={t("mensaje")}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("enviar_mensaje")}
          </button>

          {success === true && (
            <p className="text-green-500 mt-4">✅ {t("mensaje_enviado")}</p>
          )}
          {success === false && (
            <p className="text-red-500 mt-4">❌ {errorMessage}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
