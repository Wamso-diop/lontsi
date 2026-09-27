import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Développeur Backend",
    company: "Soluty Agency",
    period: "juin 2024– Aujourd'hui",
    location: "Douala, Cameroun",
    description: [
      "Développement de ZenStocks, SaaS de gestion d'inventaire pour commerçants africains",
      "Architecture backend avec FastAPI et interface React pour le suivi des stocks en temps réel",
      "Poursuite de la collaboration avec l'agence après la fin du stage initial",
    ],
    tech: ["React", "FastAPI","Rust","Next", "React Native"],
  },
  {
    type: "freelance",
    role: "Développeur Frontend Freelance",
    company: "Pôle d'Excellence",
    period: "jan 2026 – mars. 2026",
    location: "Douala, Cameroun",
    description: [
      "Conception et développement de la plateforme web du Pôle d'Excellence",
      "Interface utilisateur responsive présentant les activités et services",
    ],
    tech: ["React", "JavaScript"],
  },
  {
    type: "work",
    role: "Développeur Backend / API Developer",
    company: "ADS Ltd",
    period: "Mars 2025 – Nov. 2025",
    location: "Douala, Cameroun",
    description: [
      "Conception et développement d'API sécurisées pour des compagnies d'assurance",
      "Architecture backend avec Django et FastAPI pour scalabilité et performance",
      "Intégration de systèmes d'authentification et autorisation",
      "Optimisation des requêtes et endpoints pour réduire les temps de réponse",
    ],
  },
  {
    type: "work",
    role: "Développeur Frontend",
    company: "Unilym Service",
    period: "Juin 2023 – Août 2024",
    location: "Mbouda, Cameroun",
    description: [
      "Développement du site web avec React et Tailwind CSS",
      "Création d'interfaces utilisateurs responsives et modernes",
      "Intégration des composants interactifs et optimisation de la navigation",
      "Mise en place de bonnes pratiques de performance et d'accessibilité",
    ],
  },
];

const education = [
  {
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    school: "École Nationale Polytechnique de Douala",
    period: "2027 (prévu)",
    location: "Douala, Cameroun",
    highlights: ["Génie logiciel", "Architecture & Systèmes"],
  },
  {
    degree: "Bac +1 en Informatique",
    school: "Université de Yaoundé 1",
    period: "2021",
    location: "Yaoundé, Cameroun",
    highlights: ["Systèmes d'exploitation", "Réseaux & Algorithmique"],
  },
  {
    degree: "Baccalauréat en Technologie de l'Informatique",
    school: "Lycée Bilingue de Mbouda",
    period: "2020",
    location: "Mbouda, Cameroun",
    highlights: ["Programmation", "Réseaux & Systèmes"],
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="relative py-24 lg:py-32 bg-[#0c0a2e]">
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
            Parcours
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Expérience &{" "}
            <span className="gradient-text-warm">Formation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#ff6b00]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Expérience</h3>
            </div>

            <div className="relative pl-8 border-l border-white/10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#ff6b00] ring-4 ring-[#0c0a2e]" />

                  <div className="glass-card p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-medium">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-1">{exp.role}</h4>
                    <p className="text-[#ff6b00] text-sm font-medium mb-4">{exp.company}</p>

                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#7c3aed]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Formation</h3>
            </div>

            <div className="relative pl-8 border-l border-white/10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#7c3aed] ring-4 ring-[#0c0a2e]" />

                  <div className="glass-card p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-medium">
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-[#7c3aed] text-sm font-medium mb-4">{edu.school}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
