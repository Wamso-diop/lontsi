import React from "react";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaCode, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook,
  FaTwitter 
} from "react-icons/fa";

import heroImage from "../assets/boris.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-gray-900 to-black pt-20 md:pt-28 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center py-8 md:py-0">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ROLE */}
          <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold rounded-full bg-purple-600/20 text-purple-400">
            Développeur Full-Stack Junior
          </span>

          {/* TITLE */}
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Je développe des <span className="text-purple-400">applications web robustes</span>{" "}
            prêtes pour la production
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
            Je m’appelle <strong>Boris LONTSIE</strong>, développeur Full-Stack spécialisé en  
            <strong> Python, Django et React</strong>.  
            J’ai <strong>1 an d’expérience</strong> pratique et <strong>6 projets concrets</strong> livrés,
            axés performance, sécurité et maintenabilité.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-3 md:gap-6 mb-8 md:mb-10">
            <div className="flex items-center gap-3 bg-gray-800/60 px-5 py-3 rounded-xl border border-white/5">
              <FaBriefcase className="text-purple-400" />
              <span className="text-white font-semibold">
                1 an d’expérience
              </span>
            </div>

            <div className="flex items-center gap-3 bg-gray-800/60 px-5 py-3 rounded-xl border border-white/5">
              <FaCode className="text-purple-400" />
              <span className="text-white font-semibold">
                6 projets professionnels
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-white font-semibold transition"
            >
              Voir mes projets
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Contacter le candidat
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center gap-6"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 bg-purple-600/30 blur-3xl rounded-full"></div>

            <img
              src={heroImage}
              alt="Boris LONTSIE – Développeur Full-Stack"
              className="relative w-56 md:w-96 rounded-3xl shadow-2xl object-cover border-4 border-purple-500"
            />

            {/* SOCIAL ICONS – desktop: floating right side */}
            <div className="hidden md:flex absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex-col gap-4">
              <a href="https://github.com/wamso-diop" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/boris-lontsie-039742200/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
                <FaFacebook size={18} />
              </a>
              <a href="https://twitter.com/BorisLontsi4" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* SOCIAL ICONS – mobile: horizontal row below image */}
          <div className="flex md:hidden gap-4">
            <a href="https://github.com/wamso-diop" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/boris-lontsie-039742200/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com/BorisLontsi4" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-purple-500 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
