import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MapPin, Sparkles, Quote } from "lucide-react";
import heroImage from "../assets/boris.png";

const CountUp = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const socials = [
  { icon: FaGithub, href: "https://github.com/wamso-diop", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/boris-lontsie-039742200/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/BorisLontsi4", label: "Twitter" },
];

const stats = [
  { value: 2.5, suffix: "+", label: "Ans d'expérience" },
  { value: 8, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Satisfaction client" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0a2e]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[128px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a1aff]/5 rounded-full blur-[200px] animate-pulse-soft" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Ingénieur logiciel{" "}
              <span className="gradient-text-warm">concevant</span> des solutions{" "}
              <span className="gradient-text-warm">digitales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-400 leading-relaxed max-w-lg mb-8"
            >
              Je suis <strong className="text-white">Boris Lontsie</strong>, développeur Full-Stack
              spécialisé en <strong className="text-[#ff6b00]">Python, Django, FastAPI</strong> et{" "}
              <strong className="text-[#ff6b00]">React</strong>. Je conçois des applications web
              performantes, sécurisées et prêtes pour la production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 text-sm text-gray-500 mb-10"
            >
              <MapPin className="w-4 h-4" />
              <span>Douala, Cameroun</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 ml-2 animate-pulse" />
              <span className="text-emerald-400">Disponible</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-md bg-[#ff6b00] text-white font-semibold uppercase text-sm tracking-wide hover:bg-[#e85d00] transition-all duration-300"
              >
                Voir mes projets
              </a>
              <a
                href="/LontsieBoris.pdf"
                download="CV_LONTSIE_YEMAGOU_BORIS.pdf"
                className="px-8 py-3.5 rounded-md border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
              >
                Télécharger CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 lg:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo + Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-fit">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b00]/15 via-[#7c3aed]/15 to-[#ff6b00]/15 rounded-3xl blur-2xl animate-pulse-soft" />

              {/* Stats/testimonial card — positioned to peek out LEFT of the photo */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="absolute -left-44 lg:-left-52 top-1/2 -translate-y-1/2 w-60 lg:w-64 z-20"
              >
                <div className="bg-[#0c0a2e]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-xl shadow-black/30">
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-[#ff6b00] flex items-center justify-center shadow-lg shadow-[#ff6b00]/30">
                    <Quote className="w-4 h-4 text-white fill-white" />
                  </div>

                  <div className="mb-3">
                    <span className="font-display text-3xl font-black text-white">6+</span>
                    <p className="text-[#ff6b00] text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                      Projets livrés
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="text-gray-300 italic text-[11px] leading-relaxed mb-3">
                      "Un travail exceptionnel ! Des idées précieuses qui ont
                      amélioré l'expérience utilisateur."
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/temoignages/im1.jpg"
                        alt="Ariane Djeupang"
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-white text-[11px]">Ariane Djeupang</p>
                        <p className="text-[#ff6b00] text-[9px]">Ingénieure ML</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Boris photo */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="relative z-10 w-64 sm:w-72 lg:w-[300px] aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-[#ff6b00]/10"
              >
                <img
                  src={heroImage}
                  alt="Boris Lontsie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a2e] via-transparent to-transparent opacity-40" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 z-20 bg-[#0c0a2e]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="text-[10px] text-gray-400">Stack principal</div>
                <div className="text-sm font-semibold text-white mt-0.5">Python & React</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 bottom-16 z-20 bg-[#0c0a2e]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="text-[10px] text-gray-400">Formation</div>
                <div className="text-sm font-semibold text-white mt-0.5">ENSPD - GL4</div>
              </motion.div>

              {/* Social links */}
              <div className="absolute -right-14 lg:-right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/10 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
