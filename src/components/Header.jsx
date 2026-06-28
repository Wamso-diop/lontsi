import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/#hero", sectionId: "hero" },
  { label: "À propos", href: "/#about", sectionId: "about" },
  { label: "Compétences", href: "/#skills", sectionId: "skills" },
  { label: "Projets", href: "/#projects", sectionId: "projects" },
  { label: "Parcours", href: "/#experiences", sectionId: "experiences" },
  { label: "Blog", href: "/blog", sectionId: null },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks.filter(l => l.sectionId).map(l => l.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (link) => {
    if (link.href === "/blog") return location.pathname === "/blog";
    if (location.pathname !== "/") return false;
    return activeSection === link.sectionId;
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0c0a2e]/90 backdrop-blur-2xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center" onClick={() => setActiveSection("hero")}>
              <span className="font-display text-3xl font-black italic">
                <span className="text-white">Bor</span>
                <span className="text-[#ff6b00]">is</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link);
                return link.href === "/blog" ? (
                  <Link
                    key={link.href}
                    to="/blog"
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-[#ff6b00]" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#ff6b00]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-[#ff6b00]" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#ff6b00]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("/#contact"); }}
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#ff6b00] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#e85d00] transition-all duration-300"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-[#0c0a2e]/95 backdrop-blur-2xl border-l border-white/5 p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const active = isActive(link);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.href === "/blog" ? (
                        <Link
                          to="/blog"
                          onClick={() => setMobileOpen(false)}
                          className={`block px-4 py-3.5 rounded-xl text-lg transition-all ${
                            active ? "text-[#ff6b00] bg-[#ff6b00]/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                          className={`block px-4 py-3.5 rounded-xl text-lg transition-all ${
                            active ? "text-[#ff6b00] bg-[#ff6b00]/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <a
                  href="/#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("/#contact"); }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-[#ff6b00] text-white font-semibold uppercase"
                >
                  Me contacter
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
