import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azxblwy",      // ← remplace
        "template_m5qcncx",     // ← remplace
        formRef.current,
        "8teECY5dK0eWhmRPz"       // ← remplace
      )
      .then(
        () => {
          alert("Message envoyé avec succès.");
          formRef.current.reset();
        },
        () => {
          alert("Erreur lors de l’envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            Contact professionnel
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Intéressé par mon profil ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Recruteur, manager ou responsable technique ?
            Contactez-moi directement via le formulaire ci-dessous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">
              Pourquoi me contacter ?
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔️ Développeur Full-Stack & Génie Logiciel</li>
              <li>✔️ Expérience en API et frontend moderne</li>
              <li>✔️ Code propre, maintenable et scalable</li>
              <li>✔️ Disponible pour emploi ou mission</li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/src/assets/cv-boris-lontsi.pdf"
                download
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
              >
                <FaDownload />
                Télécharger mon CV
              </a>

              <a
                href="https://wa.me/237698833335"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-3xl p-10 space-y-6"
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              Envoyer un message
            </h4>

            <input
              type="text"
              name="from_name"
              placeholder="Nom / Entreprise"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Adresse email"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Objet"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Votre message"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl text-white font-semibold text-lg transition"
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
