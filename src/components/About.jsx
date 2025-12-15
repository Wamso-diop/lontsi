import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Ingénieur logiciel en formation, développeur en action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Je combine une formation académique exigeante et une pratique terrain
            orientée résultats.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 – FORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500 transition"
          >
            <FaGraduationCap className="text-purple-400 text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Formation académique
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Étudiant en <strong>Génie Logiciel 4</strong> à l’
              <strong> École Nationale Polytechnique de Douala</strong>.
              Je développe une base solide en algorithmique, architecture logicielle
              et ingénierie des systèmes.
            </p>
          </motion.div>

          {/* CARD 2 – STACK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500 transition"
          >
            <FaCode className="text-purple-400 text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Développement logiciel
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Spécialisé en <strong>Python</strong> (Django, FastAPI),
              <strong> React</strong> et <strong>Tailwind CSS</strong>.
              Je conçois des applications web performantes, maintenables
              et orientées utilisateur.
            </p>
          </motion.div>

          {/* CARD 3 – VISION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500 transition"
          >
            <FaRocket className="text-purple-400 text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Vision & professionnalisation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              En montée de compétence sur le <strong>DevOps</strong>, la sécurité
              et le déploiement cloud afin de livrer des solutions fiables,
              scalables et prêtes pour la production.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
