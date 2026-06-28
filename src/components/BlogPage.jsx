import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import authorImg from "../assets/tof.jpeg";

const categories = ["Tous", ...new Set(articles.map(a => a.category))];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchCategory = activeCategory === "Tous" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-[#0c0a2e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-[#ff6b00] rounded-full" />
              <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
                Insights & Retours d'expérience
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Mon <span className="text-[#ff6b00] italic">Blog</span>
            </h1>
            <p className="text-gray-400 mt-6 text-base max-w-xl leading-relaxed">
              Retours d'expérience, tutoriels techniques et réflexions sur le
              développement web, l'architecture logicielle et la vie de développeur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 bg-[#ff6b00] rounded-full" />
                <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">Articles</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0a2e] leading-tight">
                Partage de <span className="text-[#ff6b00]">Connaissances</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-full lg:w-80">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-[#0c0a2e] text-sm placeholder-gray-400 focus:border-[#ff6b00]/50 focus:!shadow-none transition-all"
                />
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#ff6b00] text-white shadow-lg shadow-[#ff6b00]/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#ff6b00] hover:text-[#ff6b00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={`/blog/${article.slug}`} className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className={`relative h-56 bg-gradient-to-br ${article.gradient} overflow-hidden p-6 flex flex-col justify-between`}>
                    <div>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {article.title}
                    </h3>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <img src={authorImg} alt="Boris Lontsie" className="w-7 h-7 rounded-full object-cover" />
                        <span className="text-xs font-medium text-[#0c0a2e]">Boris Lontsie</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#ff6b00] group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
