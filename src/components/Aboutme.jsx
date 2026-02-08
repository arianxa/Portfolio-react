import img_profile from "../assets/img/img_profile.jpeg";
import { motion } from "framer-motion";

export const Aboutme = () => {
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
            </h2>
            <div className="w-20 h-1 bg-boton mb-6"></div>

            <p className="text-lg text-principal mb-6">
              Soy una persona trabajadora, honesta y apasionada por la
              tecnología. Siempre estoy lista para aprender nuevas habilidades y
              enfrentar nuevos desafíos.
            </p>

            <p className="text-lg text-principal mb-6">
              Llevo seis años en formación continua en programación y diseño
              web, especializándome en React, JavaScript y HTML/CSS. Me encanta
              crear experiencias digitales que sean tanto funcionales como
              visualmente atractivas.
            </p>

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
