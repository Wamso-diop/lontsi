import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaDocker,
  FaCss3Alt,
} from "react-icons/fa";

const skills = [
  { icon: FaPython, name: "Python", level: "Avancé" },
  { icon: FaDatabase, name: "Django / FastAPI", level: "Avancé" },
  { icon: FaReact, name: "React", level: "Intermédiaire +" },
  { icon: FaCss3Alt, name: "Tailwind CSS", level: "Avancé" },
  { icon: FaDocker, name: "DevOps & Docker", level: "En progression" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            Compétences techniques
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Technologies que j’utilise au quotidien
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500 transition"
            >
              {/* ICON */}
              <skill.icon className="text-5xl text-purple-400 mx-auto mb-6 group-hover:scale-110 transition" />

              {/* NAME */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>

              {/* LEVEL */}
              <span className="inline-block mt-2 px-4 py-1 text-xs font-semibold rounded-full bg-purple-600/20 text-purple-400">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
