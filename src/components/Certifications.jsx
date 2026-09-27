import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { FaPython, FaReact, FaLinux} from "react-icons/fa";

import pythonCert from "../assets/python.jpg";
import devopsCert from "../assets/site.png";
import linuxCert from "../assets/linux.png";

const certifications = [
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    provider: "IBM / Coursera",
    description:
      "Prise en main des commandes Linux essentielles et introduction au shell scripting pour l'administration système.",
    icon: FaLinux,
    image: linuxCert,
  },
  {
    title: "Certification Python",
    provider: "Udemy / Coursera",
    description:
      "Maîtrise avancée de Python orientée développement backend, automatisation et bonnes pratiques professionnelles.",
    icon: FaPython,
    image: pythonCert,
  },
  {
    title: "Certification React JS",
    provider: "Coursera",
    description:
      "Maîtrise de la bibliothèque React JS pour le développement d'interfaces utilisateur dynamiques et responsives.",
    icon: FaReact,
    image: devopsCert,
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-[#0c0a2e]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
            Certifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Preuves de compétence &{" "}
            <span className="gradient-text-warm">apprentissage continu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a2e] via-[#0c0a2e]/40 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#ff6b00]" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <cert.icon className="w-6 h-6 text-[#ff6b00]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-xs font-medium text-[#ff6b00]">{cert.provider}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
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
