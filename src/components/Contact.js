"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation("common");
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      setErrorMessage("El nombre es requerido");
      return false;
    }
    
    if (!email.trim()) {
      setErrorMessage("El correo electrónico es requerido");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido");
      return false;
    }
    
    if (!message.trim()) {
      setErrorMessage("El mensaje es requerido");
      return false;
    }
    
    if (message.length < 10) {
      setErrorMessage("El mensaje debe tener al menos 10 caracteres");
      return false;
    }
    
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = new Date().toLocaleString();
    form.current.appendChild(timeInput);

    try {
      await emailjs.sendForm(
        "service_3o3h87v",
        "template_pc30hx8",
        form.current,
        "P46sCK11mvcaepbfA"
      );
      
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      form.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
      
    } catch (error) {
      console.error(error.text);
      setSuccess(false);
      setErrorMessage("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-label="Sección de contacto"
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
            <motion.div 
              className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <a 
                href="mailto:eduardovaldivia130@outlook.es"
                className="hover:text-blue-500 transition-colors duration-200"
                aria-label="Enviar correo a eduardovaldivia130@outlook.es"
              >
                eduardovaldivia130@outlook.es
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
              <a 
                href="tel:+51953587619"
                className="hover:text-green-500 transition-colors duration-200"
                aria-label="Llamar al +51 953 587 619"
              >
                +51 953 587 619
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 bg-white/10 dark:bg-gray-800 p-4 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span>Lima, Perú</span>
            </motion.div>
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
          noValidate
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            ✉️ {t("contacto")}
          </h2>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              {t("nombre")} *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder={t("nombre")}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-transparent focus:border-indigo-500 focus:outline-none transition-colors duration-200"
              aria-describedby="name-error"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              {t("correo")} *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="ejemplo@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-transparent focus:border-indigo-500 focus:outline-none transition-colors duration-200"
              aria-describedby="email-error"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              {t("mensaje")} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              placeholder={t("mensaje")}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-transparent focus:border-indigo-500 focus:outline-none transition-colors duration-200 resize-none"
              aria-describedby="message-error"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t("enviar_mensaje")}
              </>
            )}
          </motion.button>

          <AnimatePresence mode="wait">
            {success === true && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
              >
                <CheckCircle className="w-5 h-5" />
                <span>✅ {t("mensaje_enviado")}</span>
              </motion.div>
            )}
            
            {success === false && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
              >
                <AlertCircle className="w-5 h-5" />
                <span>❌ {errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
