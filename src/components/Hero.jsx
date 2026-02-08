import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[500px] bg-fondo-claro text-primary flex items-center justify-center px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-4 text-texto"
        >
          Hola, soy <span className="text-boton">Arantxa</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl texto mb-6"
        >
          Desarrolladora Web Full Stack
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-texto-secundario mb-8 max-w-2xl mx-auto"
        >
          Apasionada por crear experiencias web modernas con React y
          JavaScript.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mis Proyectos
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
