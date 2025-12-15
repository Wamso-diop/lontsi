import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

/* ============================
   EXPÉRIENCES PROFESSIONNELLES
   ============================ */

const experiences = [
  {
  type: "work",
  role: "Développeur Backend / API Developer",
  company: "ADS Ltd",
  period: "Mars 2025 - Août 2025",
  location: "Douala, Cameroun",
  description: [
    "Conception et développement d’API sécurisées pour des compagnies d’assurance afin de gérer les données clients et les contrats.",
    "Mise en place de l’architecture backend avec Django et FastAPI pour assurer scalabilité et performance.",
    "Intégration de systèmes d’authentification et autorisation pour sécuriser les échanges entre les services.",
    "Collaboration avec les équipes front-end et produit pour garantir la cohérence des flux de données et l’expérience utilisateur.",
    "Optimisation des requêtes et des endpoints pour réduire le temps de réponse et améliorer la fiabilité de l’application."
  ],
},


  {
  type: "work",
  role: "Développeur Frontend",
  company: "Unilym Service",
  period: "Juin 2023 - Août 2023",
  location: "Mbouda, Cameroun",
  description: [
    "Développement du site web front-end pour Unilym Service en utilisant React et Tailwind CSS.",
    "Création d’interfaces utilisateurs responsives et modernes pour améliorer l’expérience client.",
    "Intégration des composants interactifs et optimisation de la navigation pour une meilleure fluidité.",
    "Collaboration avec le client pour comprendre les besoins et adapter le design aux exigences métier.",
    "Mise en place de bonnes pratiques de performance et d’accessibilité sur toutes les pages."
  ],
}

];


/* ======================
   PARCOURS ACADÉMIQUE
   ====================== */

const education = [
  {
    type: "education",
    degree: "Diplôme d’Ingénieur en Génie Logiciel",
    school: "École Nationale Polytechnique de Douala",
    period: "2027 (prévu)",
    location: "Douala, Cameroun",
    description: [
      "Formation avancée en génie logiciel",
      "Conception, développement et maintenance de systèmes informatiques complexes",
    ],
  },
    {
    type: "education",
    degree: "Bac +1 en Informatique",
    school: "Université de Yaoundé 1",
    period: "2021",
    location: "Yaoundé, Cameroun",
    description: [
      "Cours fondamentaux en systèmes d’exploitation",
      "Introduction aux réseaux informatiques et à l’algorithmique",
    ],
  },
  {
    // Type d’entrée : formation académique
    type: "education",

    // Diplôme obtenu
    degree: "Baccalauréat en Technologie de l’Informatique",

    // Établissement
    school: "Lycée Bilingue de Mbouda",

    // Année d’obtention
    period: "2020",

    // Lieu
    location: "Mbouda, Cameroun",

    // Contenu et compétences acquises
    description: [
      "Formation générale en informatique et technologies",
      "Bases solides en programmation, réseaux et systèmes informatiques",
    ],
  },


];


const ExperienceTimeline = () => {
  return (
    <section className="py-32 bg-gray-900 text-gray-200" id="experiences">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase text-sm tracking-widest font-semibold">
            Timeline
          </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 flex items-center justify-center gap-4">
          <FaGraduationCap className="text-purple-400 w-10 h-10" />
          Formations
          <span className="text-gray-400 mx-2">|</span>
          <FaBriefcase className="text-purple-400 w-10 h-10" />
          Expériences
        </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-400 h-full"></div>

          {/* Formations */}
          <div className="md:col-start-1">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 mb-12"
              >
                <div className="absolute top-6 -left-6 md:-left-8 md:top-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  <FaGraduationCap />
                </div>
                <h3 className="text-2xl font-bold">{item.degree}</h3>
                <p className="text-purple-400 font-medium">{item.school}</p>
                <p className="text-gray-400 text-sm mt-1 mb-3">{item.period} • {item.location}</p>
                <ul className="list-disc list-inside space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Expériences */}
          <div className="md:col-start-2">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 mb-12"
              >
                <div className="absolute top-6 -left-6 md:-left-8 md:top-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  <FaBriefcase />
                </div>
                <h3 className="text-2xl font-bold">{item.role}</h3>
                <p className="text-purple-400 font-medium">{item.company}</p>
                <p className="text-gray-400 text-sm mt-1 mb-3">{item.period} • {item.location}</p>
                <ul className="list-disc list-inside space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
