import { motion } from "framer-motion";
import { Code2, Layers, GraduationCap, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Applications web complètes avec Python (Django, FastAPI) côté serveur et React côté client. Architecture solide, code propre et performant.",
  },
  {
    icon: Layers,
    title: "Architecture Backend",
    description:
      "Conception d'API RESTful sécurisées, bases de données PostgreSQL optimisées, authentification JWT et intégration de services tiers.",
  },
  {
    icon: GraduationCap,
    title: "Ingénierie Logicielle",
    description:
      "Formation en Génie Logiciel (GL4) à l'ENSPD. Bases solides en algorithmique, architecture logicielle et ingénierie des systèmes.",
  },
  {
    icon: Rocket,
    title: "DevOps & Déploiement",
    description:
      "En montée de compétence sur Docker, CI/CD et le cloud. Objectif : livrer des solutions fiables, scalables et prêtes pour la production.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0c0a2e]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
              À propos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
              Ingénieur en formation,{" "}
              <span className="gradient-text-warm">développeur en action</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Je combine une formation académique exigeante à l'ENSPD et une pratique
              terrain orientée résultats. Chaque projet est une occasion de livrer de la
              valeur concrète.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-7 hover:border-[#ff6b00]/20"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#ff6b00] transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
