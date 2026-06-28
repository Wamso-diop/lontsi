import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2 } from "lucide-react";
import { articles } from "../data/articles";
import authorImg from "../assets/tof.jpeg";

const CodeBlock = ({ code, language }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between px-4 py-2 bg-[#0c0a2e] text-xs">
      <span className="text-[#ff6b00] font-semibold uppercase tracking-wider">{language}</span>
      <span className="text-gray-500">READ ONLY</span>
    </div>
    <pre className="bg-[#0d0b2e] p-5 overflow-x-auto text-sm leading-relaxed">
      <code className="text-gray-300 font-mono">{code}</code>
    </pre>
  </div>
);

const TerminalBlock = ({ code }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <span className="text-xs text-gray-400 ml-2 font-mono">terminal</span>
    </div>
    <pre className="bg-[#0d0b2e] p-5 overflow-x-auto text-sm leading-relaxed">
      <code className="text-green-400 font-mono">{code}</code>
    </pre>
  </div>
);

const QuoteBlock = ({ text }) => (
  <div className="my-8 relative pl-6 border-l-4 border-[#ff6b00] bg-[#ff6b00]/5 rounded-r-xl py-6 pr-6">
    <span className="absolute -left-3 -top-3 text-4xl text-[#ff6b00] opacity-30 font-serif">"</span>
    <p className="text-[#0c0a2e] text-lg italic font-medium leading-relaxed">
      {text}
    </p>
  </div>
);

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3]">
        <div className="text-center pt-32">
          <h1 className="font-display text-4xl font-black text-[#0c0a2e] mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-[#ff6b00] font-medium hover:underline">Retour au blog</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = (article.relatedSlugs || [])
    .map(s => articles.find(a => a.slug === s))
    .filter(Boolean);

  return (
    <div className="bg-[#f8f6f3]">
      {/* Hero */}
      <section className={`relative pt-32 pb-16 bg-gradient-to-br ${article.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <Clock className="w-3 h-3" /> {article.readTime} de lecture
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mb-8">
              {article.title}
            </h1>

            <div className="flex items-center gap-4">
              <img src={authorImg} alt="Boris Lontsie" className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
              <div>
                <p className="text-white font-semibold text-sm">Boris Lontsie</p>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Calendar className="w-3 h-3" /> {article.date}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              {article.content.map((block, i) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={i} className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">{block.text}</p>;
                  case "heading":
                    return <h2 key={i} className="font-display text-2xl lg:text-3xl font-black text-[#0c0a2e] mt-10 mb-5">{block.text}</h2>;
                  case "code":
                    return <CodeBlock key={i} code={block.code} language={block.language} />;
                  case "terminal":
                    return <TerminalBlock key={i} code={block.code} />;
                  case "quote":
                    return <QuoteBlock key={i} text={block.text} />;
                  default:
                    return null;
                }
              })}

              {/* Author footer */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <img src={authorImg} alt="Boris Lontsie" className="w-14 h-14 rounded-full object-cover border-2 border-[#ff6b00]/30" />
                  <div>
                    <p className="font-display font-bold text-[#0c0a2e]">Boris Lontsie</p>
                    <p className="text-sm text-gray-500">Développeur Full-Stack & étudiant en Génie Logiciel à l'ENSPD. Passionné par Python, Django, FastAPI et React.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-sm font-bold text-[#0c0a2e] uppercase tracking-wider mb-5">
                  Articles similaires
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map(rel => (
                    <Link
                      key={rel.slug}
                      to={`/blog/${rel.slug}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-[9px] font-bold uppercase">
                          {rel.category}
                        </span>
                        <span className="text-[10px] text-gray-400">{rel.readTime} de lecture</span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#0c0a2e] leading-snug group-hover:text-[#ff6b00] transition-colors mb-1.5">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                        {rel.excerpt}
                      </p>
                      <span className="flex items-center gap-1 text-[#ff6b00] text-xs font-semibold">
                        Lire l'article <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="bg-[#0c0a2e] rounded-2xl p-6 text-center">
              <h3 className="font-display text-base font-bold text-white mb-2">
                Vous aimez ces articles ?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Accédez à du contenu premium et restez informé des nouvelles perspectives techniques.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-[#ff6b00] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#e85d00] transition-all"
              >
                S'abonner
              </a>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-sm font-bold text-[#0c0a2e] uppercase tracking-wider mb-4">
                Partager
              </h3>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Copier"].map(platform => (
                  <button
                    key={platform}
                    onClick={() => {
                      if (platform === "Copier") {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                    className="flex-1 px-3 py-2.5 rounded-lg bg-gray-50 text-xs font-medium text-gray-600 hover:bg-[#ff6b00]/10 hover:text-[#ff6b00] transition-all text-center"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
