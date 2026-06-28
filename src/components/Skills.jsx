import { motion } from "framer-motion";
import {
  FaPython, FaReact, FaDocker, FaGitAlt, FaDatabase,
} from "react-icons/fa";
import {
  SiDjango, SiFastapi, SiTailwindcss, SiPostgresql, SiJavascript,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: FaPython, level: 90 },
      { name: "Django", icon: SiDjango, level: 85 },
      { name: "FastAPI", icon: SiFastapi, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 80 },
      { name: "JavaScript", icon: SiJavascript, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    title: "Outils & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 80 },
      { name: "Docker", icon: FaDocker, level: 55 },
      { name: "Bases de données", icon: FaDatabase, level: 75 },
    ],
  },
];

const SkillBar = ({ level, delay }) => (
  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="h-full rounded-full bg-gradient-to-r from-[#ff6b00] to-[#7c3aed]"
    />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#0c0a2e]">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b00]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[#ff6b00] text-xs font-semibold uppercase tracking-[0.2em]">
            Compétences
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Technologies que j'utilise{" "}
            <span className="gradient-text-warm">au quotidien</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#7c3aed] rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-[#ff6b00]" />
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar
                      level={skill.level}
                      delay={catIdx * 0.15 + skillIdx * 0.08}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
