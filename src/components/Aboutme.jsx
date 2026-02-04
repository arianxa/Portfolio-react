import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img_profile from "../assets/img/img_profile.jpeg";

export const Aboutme = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="aboutme" ref={ref} className="relative py-24 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-linear-to-b from-bg-dark via-bg-card/30 to-bg-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with parallax */}
          <motion.div
            style={{ y }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-borde shadow-2xl">
                <img
                  src={img_profile}
                  alt="Arantxa"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              Sobre mí
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-texto">
              Conóceme
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />

            <div className="space-y-5 text-texto-secundario text-lg leading-relaxed">
              <p>
                Soy una persona trabajadora, honesta y apasionada por la
                tecnología. Siempre estoy lista para aprender nuevas habilidades
                y enfrentar nuevos desafíos.
              </p>
              <p>
                Llevo seis años en formación continua en programación y diseño
                web, especializándome en React, JavaScript y HTML/CSS. Me encanta
                crear experiencias digitales que sean tanto funcionales como
                visualmente atractivas.
              </p>
              <p>
                Soy amable, colaborativa y puedo trabajar tanto de forma
                independiente como en equipo. Me motiva seguir creciendo
                profesionalmente y contribuir en proyectos innovadores.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
