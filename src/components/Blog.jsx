import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import authorImg from "../assets/tof.jpeg";

const blogPosts = articles.slice(0, 3).map((a, i) => ({ ...a, featured: i === 0 }));

const Blog = () => {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog-preview" className="relative py-24 lg:py-32 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
              Blog
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c0a2e] mt-4 leading-tight">
              Derniers articles
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-xl leading-relaxed">
              Retours d'expérience et tutoriels issus de mes projets et missions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#0c0a2e] text-[#0c0a2e] text-sm font-semibold hover:bg-[#0c0a2e] hover:text-white transition-all duration-300"
            >
              Tous les articles
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link to={`/blog/${featured.slug}`}>
                <div className={`relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br ${featured.gradient} p-8 flex flex-col justify-between shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      Article à la une
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-snug mb-4 drop-shadow-sm">
                      {featured.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-md">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <img src={authorImg} alt="Boris Lontsie" className="w-8 h-8 rounded-full object-cover border border-white/30" />
                        <span className="text-white/90 text-sm font-medium">Boris Lontsie</span>
                      </div>
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Clock className="w-3 h-3" /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Other articles */}
          <div className="flex flex-col gap-6">
            {others.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="flex gap-5 items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`shrink-0 w-28 h-24 rounded-xl overflow-hidden bg-gradient-to-br ${post.gradient}`} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-bold text-[#0c0a2e] leading-snug mb-2 group-hover:text-[#ff6b00] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="font-medium text-[#0c0a2e]">Boris Lontsie</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#ff6b00]">
                        Lire <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
