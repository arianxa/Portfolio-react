import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import img_profile from "../assets/img/img_profile.jpeg";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-12 lg:px-20 py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column – text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm font-medium text-texto-secundario">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Hola, soy{" "}
              <span className="bg-linear-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                Arantxa
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-medium text-texto-secundario"
            >
              Desarrolladora Web Full Stack
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-texto-sutil max-w-lg"
            >
              Apasionada por crear experiencias web modernas con React y
              JavaScript.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg hover:brightness-110 transition-all"
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-borde text-texto font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                Contacto
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={fadeUp}
              className="flex gap-5 mt-4"
            >
              {[
                { icon: Github, href: "https://github.com/arianxa", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:arantxa@example.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.2, color: "#0df2f2" }}
                  className="text-texto-sutil transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column – profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img
                  src={img_profile}
                  alt="Arantxa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
