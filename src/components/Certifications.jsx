import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaPython, FaDocker } from "react-icons/fa";

import pythonCert from "../assets/python.jpg";
import devopsCert from "../assets/site.png";

const certifications = [
  {
    title: "Certification Python",
    provider: "Udemy / Coursera",
    description:
      "Maîtrise avancée de Python orientée développement backend, automatisation et bonnes pratiques professionnelles.",
    icon: FaPython,
    image: pythonCert,
  },
  {
    title: "Certification DevOps",
    provider: "Coursera",
    description:
      "Docker, CI/CD, bases AWS et déploiement d’applications scalables et sécurisées.",
    icon: FaDocker,
    image: devopsCert,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-28 bg-gradient-to-b from-gray-900 to-gray-800"
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
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Preuves de compétence & apprentissage continu
          </h2>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl overflow-hidden hover:border-purple-500 transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-8 text-left">
                <div className="flex items-center space-x-3 mb-4">
                  <cert.icon className="text-purple-400 text-3xl" />
                  <h3 className="text-2xl font-bold text-white">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-sm text-purple-400 mb-3">
                  {cert.provider}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
