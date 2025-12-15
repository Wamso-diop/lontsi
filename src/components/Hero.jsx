import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/tof.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-gray-900 to-black pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-purple-600/20 text-purple-400">
            Développeur Full-Stack
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Je construis des <span className="text-purple-400">applications web performantes</span><br />
            qui génèrent de la valeur
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Je m’appelle <strong>Boris LONTSIE</strong>.  
            Spécialisé en <strong>Python, React et DevOps debutant</strong>,  
            j’aide les startups et entrepreneurs à transformer leurs idées en produits solides.
          </p>

          <div className="flex items-center space-x-4">
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
              Me contacter
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-4 bg-purple-600/30 blur-3xl rounded-full"></div>

          <img
            src={heroImage}
            alt="Boris LONTSIE"
            className="relative w-72 md:w-96 rounded-3xl shadow-2xl object-cover border-4 border-purple-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
