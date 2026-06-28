import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Accueil", href: "/#hero" },
  { label: "À propos", href: "/#about" },
  { label: "Compétences", href: "/#skills" },
  { label: "Projets", href: "/#projects" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/wamso-diop", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/boris-lontsie-039742200/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/BorisLontsi4", label: "Twitter" },
  { icon: FaWhatsapp, href: "https://wa.me/237698833335", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#0c0a2e]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-display text-2xl font-black italic">
                <span className="text-white">Bor</span>
                <span className="text-[#ff6b00]">is</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Développeur Full-Stack & étudiant en Génie Logiciel à l'ENSPD.
              Passionné par la création de solutions digitales performantes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-[#ff6b00] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#ff6b00] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Réseaux sociaux
            </h4>
            <div className="flex gap-3 mb-6">
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
            <p className="text-xs text-gray-600">
              Disponible pour freelance & opportunités
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Boris Lontsie. Tous droits réservés.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
