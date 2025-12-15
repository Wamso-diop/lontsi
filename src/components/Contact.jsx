import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Parlons de ton projet
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Décris brièvement ton besoin. Je te répondrai avec une proposition claire et adaptée.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT – INFO */}
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
              <li>✔️ Analyse claire de ton besoin</li>
              <li>✔️ Solutions modernes et évolutives</li>
              <li>✔️ Communication fluide et professionnelle</li>
              <li>✔️ Respect des délais</li>
            </ul>

            <div className="flex gap-4 pt-6">
              <a
                href="mailto:blontsi00@email.com"
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                <FaEnvelope />
                Email direct
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-3xl p-10 space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Ex : Jean Dupont"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                placeholder="exemple@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Parle-moi de ton projet, délai, budget, objectifs…"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
              ></textarea>
            </div>

            {/* SUBMIT */}
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
