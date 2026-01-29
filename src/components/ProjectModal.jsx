import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-fondo-claro rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-borde"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-subtitulo hover:text-titulo text-4xl font-bold transition-colors z-10 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center hover:bg-boton hover:text-white"
        >
          ×
        </button>

        {/* Imagen */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fondo-claro/20 rounded-t-2xl"></div>
        </div>

        {/* Contenido del Modal */}
        <div className="p-8">
          {/* Título y Año */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-titulo">{project.title}</h2>
            <span className="text-subtitulo text-lg font-medium bg-fondo-medio px-4 py-1.5 rounded-full">
              {project.year}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-texto mb-6 leading-relaxed text-lg">
            {project.fullDescription}
          </p>

          {/* Tecnologías */}
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

          {/* Botones */}
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer flex-1 text-center px-6 py-3 bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Demo
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 text-lg translate-y-[1px]"
                />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer flex-1 text-center px-6 py-3 border-2 border-fondo-medio text-titulo font-semibold rounded-lg hover:bg-fondo-medio transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-lg" />
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
