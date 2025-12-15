import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Pour des étoiles plus belles (installe lucide-react si pas déjà fait)

const testimonials = [
  {
    name: "Ariane Djeupang",
    role: "Ingénieure en Machine Learning ",
    company: "DjangoCon Africa & PyLadiesCon",
    text: "Un travail exceptionnel ! Lincoln n’a pas seulement développé une application élégante, il a également apporté des idées précieuses qui ont considérablement amélioré l’expérience utilisateur. Je le recommande vivement pour tout type de projet.",
    stars: 5,
    avatar: "src/assets/hero.png",
  },
  {
    name: "Gassam Kevin",
    role: "Développeur Full-Stack chez KG-Code",
    company: "KG-Code",
    text: "La capacité de Lincoln à transformer des exigences complexes en solutions élégantes est impressionnante. Il a livré une application évolutive qui a nettement amélioré l’efficacité de notre flux de travail.",
    stars: 5,
    avatar: "src/assets/hero.png",
  },
  {
    name: "Robert Consultant",
    role: "Consultant – Montréal",
    text: "Lincoln a été un excellent atout pour notre équipe. Son attention aux bonnes pratiques de sécurité, sa capacité à collaborer et son sérieux dans la livraison ont rendu le projet fluide et réussi. Je le recommande pour tout travail de développement.",
    stars: 5,
    avatar: "src/assets/profile.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section id="experiences" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600/10 text-purple-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Témoignages clients
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ils m’ont fait confiance
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Des collaborations basées sur la performance, la fiabilité et la valeur long terme.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gray-800/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8">
                “{t.text}”
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-15 h-17 rounded-full object-cover border border-purple-500/40"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-purple-400">{t.role}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
