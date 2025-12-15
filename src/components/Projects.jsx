import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import pdfApp from "../assets/pdf.png";
import messagingApp from "../assets/sms.jpg";
import ecommerce from "../assets/pdf.png";
import faceAttend from "../assets/face.jpg";

const projects = [
  {
    title: "FaceAttend – Reconnaissance Faciale",
    description:
      "Système intelligent de suivi de présence par reconnaissance faciale, orienté éducation.",
    tech: ["Python", "OpenCV", "FastAPI"],
    github: "https://github.com/ton/repo-faceattend",
    demo: null,
    image: faceAttend,
  },
    {
    title: "Plateforme E-Commerce",
    description:
      "Solution e-commerce complète avec panier dynamique, paiement sécurisé et gestion des commandes.",
    tech: ["Django", "React", "Stripe"],
    github: "https://github.com/ton/repo-ecommerce",
    demo: null,
    image: ecommerce,
  },

  {
    title: "App de Lecture PDF",
    description:
      "Application desktop pour extraire, analyser et lire des documents PDF. Optimisée pour l’automatisation documentaire.",
    tech: ["Python", "Tkinter", "PyPDF2"],
    github: "https://github.com/ton/repo-pdf",
    demo: null,
    image: pdfApp,
  },
  {
    title: "Système d’Envoi de Messages",
    description:
      "Plateforme backend pour l’envoi de SMS et emails en temps réel avec authentification sécurisée.",
    tech: ["FastAPI", "Twilio", "JWT"],
    github: "https://github.com/ton/repo-messages",
    demo: null,
    image: messagingApp,
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            Projets
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Projets concrets & solutions réelles
          </h2>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl overflow-hidden hover:border-purple-500 transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-600/20 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
                    >
                      <FaExternalLinkAlt />
                      <span>Démo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
