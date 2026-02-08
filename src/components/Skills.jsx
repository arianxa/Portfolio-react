import { Code, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Java", "MySQL"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: ["Git"],
  },
];

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-fondo-medio">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="bg-fondo-claro rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-borde"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Titulo */}
          <div className="text-center mb-12 pb-4 border-b-2 border-fondo-medio">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-texto">
              Habilidades
            </h2>
          </div>

          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className={index < skillCategories.length - 1 ? "mb-12" : ""}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent size={28} className="text-boton" />
                  <h3 className="text-4xl font-bold text-texto">
                    {category.title}
                  </h3>
                </div>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={tagContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagVariants}
                      whileHover={{ scale: 1.08 }}
                      className="px-5 py-2 bg-fondo-medio rounded-full text-lg font-medium text-texto hover:bg-boton hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
