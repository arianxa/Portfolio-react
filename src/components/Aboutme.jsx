import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img_profile from "../assets/img/img_profile.jpeg";
import { motion } from "framer-motion";

export const Aboutme = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="aboutme" className="py-20 bg-fondo-medio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img_profile}
                  alt="Arantxa Ordoyo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-texto">
              Sobre mí
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-texto">
              Conóceme
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />

            <p className="text-lg text-principal mb-8">
              Soy amable, colaborativa y puedo trabajar tanto de forma
              independiente como en equipo. Me motiva seguir creciendo
              profesionalmente y contribuir en proyectos innovadores.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
