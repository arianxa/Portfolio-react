import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

const categories = [
  { label: "Frontend", icon: Code, items: ["React", "JavaScript", "HTML/CSS"] },
  { label: "Backend", icon: Server, items: ["Node.js", "Java", "MySQL"] },
  { label: "Herramientas", icon: Wrench, items: ["Git"] },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-bg-dark via-bg-card/20 to-bg-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-texto">
            Habilidades
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-bg-card rounded-2xl border border-borde p-10 md:p-14 space-y-12"
        >
          {categories.map((cat) => (
            <motion.div key={cat.label} variants={categoryVariants}>
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-texto">{cat.label}</h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ scale: 1.08, borderColor: "rgba(13,242,242,0.5)" }}
                    className="px-5 py-2.5 bg-bg-elevated rounded-full text-lg font-medium text-texto border border-borde cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
