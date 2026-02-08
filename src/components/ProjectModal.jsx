import { Github, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, projectIndex, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="bg-fondo-claro rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-borde relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Boton Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-texto-secundario hover:text-texto transition-colors z-10 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center hover:bg-boton hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Imagen */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-t-2xl"
                style={{
                  viewTransitionName:
                    projectIndex !== null
                      ? `project-img-${projectIndex}`
                      : undefined,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fondo-claro/20 rounded-t-2xl"></div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8">
              {/* Titulo y Ano */}
              <div className="flex justify-between items-start mb-4">
                <h2
                  className="text-3xl font-bold text-titulo"
                  style={{
                    viewTransitionName:
                      projectIndex !== null
                        ? `project-title-${projectIndex}`
                        : undefined,
                  }}
                >
                  {project.title}
                </h2>
                <span className="text-subtitulo text-lg font-medium bg-fondo-medio px-4 py-1.5 rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Descripcion */}
              <motion.p
                className="text-texto mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.fullDescription}
              </motion.p>

              {/* Tecnologias */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-bold text-lg mb-3 text-titulo">
                  Tecnologías utilizadas:
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-fondo-medio text-texto text-sm font-semibold rounded-full hover:bg-boton hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Botones */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer flex-1 text-center px-6 py-3 bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                  >
                    Ver Demo
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer flex-1 text-center px-6 py-3 border-2 border-fondo-medio text-titulo font-semibold rounded-lg hover:bg-fondo-medio transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                >
                  <Github className="mr-2" size={18} />
                  Ver en GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
