import { useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Download, Send, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "blontsi00@gmail.com",
    href: "mailto:blontsi00@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Douala, Cameroun",
    href: null,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+237 698 833 335",
    href: "https://wa.me/237698833335",
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/wamso-diop", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/boris-lontsie-039742200/", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/237698833335", label: "WhatsApp" },
];

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_azxblwy",
        "template_m5qcncx",
        formRef.current,
        "8teECY5dK0eWhmRPz"
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          formRef.current.reset();
        },
        () => {
          alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0c0a2e]">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4">
            Travaillons{" "}
            <span className="gradient-text-warm">ensemble</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Vous avez un projet en tête ou une opportunité ? Contactez-moi directement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Discutons de votre projet
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Disponible pour des missions freelance, des opportunités d'emploi
                ou des collaborations techniques.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-[#ff6b00]/30 group-hover:bg-[#ff6b00]/5 transition-all">
                    <info.icon className="w-5 h-5 text-gray-400 group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-[#ff6b00] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                Retrouvez-moi sur
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/5 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/LontsieBoris.pdf"
              download="CV_LONTSIE_YEMAGOU_BORIS.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] transition-all duration-300 group"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="glass-card p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                    Nom / Entreprise
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 transition-all"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                  Objet
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 resize-none transition-all"
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ff6b00] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#e85d00] transition-all duration-300 uppercase tracking-wide text-sm"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
