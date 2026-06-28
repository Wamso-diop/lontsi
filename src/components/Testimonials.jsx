import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Nogning",
    role: "Ingénieure Machine Learning",
    company: "DjangoCon Africa & PyLadiesCon",
    text: "Collaborer avec Boris a été une excellente expérience. Il est force de proposition, communique clairement et trouve toujours des solutions pertinentes. Son professionnalisme a largement contribué au succès du projet.",
    stars: 5,
    image: "/temoignages/im1.jpg",
  },
  {
    name: "Fetue Nathanael",
    role: "Développeur Full-Stack",
    company: "KG-Code",
    text: "J'ai été impressionné par sa rapidité d'exécution et la qualité de son code. Chaque fonctionnalité était bien pensée, proprement développée et livrée dans les délais convenus.",
    stars: 5,
    image: "/temoignages/im2.jpg",
  },
  {
    name: "Abogo Lincoln",
    role: "Consultant IT",
    company: "Montréal",
    text: "Boris accorde une grande importance aux détails, à la sécurité et à l'expérience utilisateur. Son sérieux, sa capacité d'écoute et son engagement font de lui un développeur sur lequel on peut compter.",
    stars: 5,
    image: "/temoignages/im3.jpg",
  },
{
  name: "Soppi Dipanda",
  role: "Ingenieure en Génie Logiciel",
  company: "TechNova",
  text: "Boris comprend rapidement les besoins du projet et propose toujours des solutions pertinentes. Son sens de l'organisation et sa capacité à résoudre des problèmes complexes ont fait toute la différence.",
  stars: 5,
  image: "/temoignages/im4.jpeg",
},
{
  name: "Nelson Kamga",
  role: "Ingenieur Logiciel / Expert en communication",
  company: "Digital Solutions",
  text: "Au-delà de ses compétences techniques, Boris est une personne fiable et proactive. Il respecte ses engagements, communique efficacement et cherche constamment à apporter plus de valeur au projet.",
  stars: 5,
  image: "/temoignages/im5.jpeg",
},
{
  name: "Clarisse Mbarga",
  role: "UX/UI Designer",
  company: "Creative Studio",
  text: "Travailler avec Boris a été un véritable plaisir. Il transforme les maquettes en interfaces fluides et performantes, tout en restant attentif aux détails qui améliorent réellement l'expérience utilisateur.",
  stars: 5,
  image: "/temoignages/im6.jpg",
},
];

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0c0a2e]">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
            Témoignages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Ils m'ont fait{" "}
            <span className="gradient-text-warm">confiance</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Des collaborations basées sur la performance, la fiabilité et la valeur
            à long terme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#ff6b00]/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#ff6b00] text-[#ff6b00]" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ff6b00]/30"
                />
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-[#ff6b00]">{t.role}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
