import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowUpRight } from "lucide-react";

import unitProject from "../assets/preview.png";
import saleSystem from "../assets/SaleSystem.png";
import faceAttend from "../assets/face.jpg";
import ecommerce from "../assets/lexora.png";
import pdfApp from "../assets/pdf.png";
import messagingApp from "../assets/sms2.png";

const projects = [
  {
    title: "Plateforme Projets Universitaires",
    description:
      "API de gestion de projets étudiants pour l'Université de Douala. Interface moderne avec gestion complète des workflows académiques.",
    tech: ["Python", "FastAPI", "JavaScript"],
    github: "https://github.com/Wamso-diop/uniProjet",
    demo: "https://uniproject-alpha.vercel.app/",
    image: unitProject,
    featured: true,
  },
  {
    title: "Système de Vente en Ligne",
    description:
      "Plateforme e-commerce avec gestion de produits, panier dynamique et paiement sécurisé via Stripe.",
    tech: ["Django", "React", "Stripe"],
    github: "https://github.com/Wamso-diop/SaleSystem",
    demo: "https://salesystem.vercel.app/",
    image: saleSystem,
    featured: true,
  },
  {
    title: "FaceAttend – Reconnaissance Faciale",
    description:
      "Système intelligent de suivi de présence par reconnaissance faciale, conçu pour le milieu éducatif.",
    tech: ["Python", "OpenCV", "FastAPI"],
    github: "https://github.com/Wamso-diop/faceID",
    demo: null,
    image: faceAttend,
    featured: true,
  },
  {
    title: "Plateforme E-Commerce",
    description:
      "Solution e-commerce complète avec panier dynamique et gestion des commandes en temps réel.",
    tech: ["Django", "React", "Stripe"],
    github: "https://github.com/Wamso-diop/RADIOS",
    demo: null,
    image: ecommerce,
  },
  {
    title: "App de Lecture PDF",
    description:
      "Application desktop pour extraire, analyser et lire des documents PDF. Optimisée pour l'automatisation documentaire.",
    tech: ["Python", "Tkinter", "PyPDF2"],
    github: "https://github.com/ton/repo-pdf",
    demo: null,
    image: pdfApp,
  },
  {
    title: "Système d'Envoi de Messages",
    description:
      "Plateforme backend pour l'envoi de SMS et emails en temps réel avec authentification JWT.",
    tech: ["FastAPI", "Twilio", "JWT"],
    github: "https://github.com/Wamso-diop/ashtag",
    demo: null,
    image: messagingApp,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
              Projets
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c0a2e] mt-4 leading-tight">
              Projets concrets &{" "}
              <span className="text-[#ff6b00]">solutions réelles</span>
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-xl leading-relaxed">
              Chaque projet est une occasion de résoudre un problème réel avec du code
              propre et des technologies modernes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#0c0a2e] text-[#0c0a2e] text-sm font-semibold uppercase tracking-wide hover:bg-[#0c0a2e] hover:text-white transition-all duration-300"
            >
              Voir tout
            </a>
          </motion.div>
        </div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#ff6b00] transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#ff6b00] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-lg font-bold text-[#0c0a2e] mb-2 group-hover:text-[#ff6b00] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-5 pt-5 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    <FaGithub size={14} />
                    Code source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff6b00] transition-colors"
                    >
                      <ArrowUpRight size={14} />
                      Démo live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#ff6b00] transition-colors"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-base font-bold text-[#0c0a2e] mb-2 group-hover:text-[#ff6b00] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
