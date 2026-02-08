import img_cityPlanner from "../assets/img/img_cityplanner.png";
import img_APISIMPSON from "../assets/img/img_simpson1.png";
import img_retroGames from "../assets/img/img_retroGames.png";
import img_libro_CS from "../assets/img/img_libro_CS.png";
import img_libro_Android from "../assets/img/img_libro_Android.png";
import img_SantCugat_desktop from "../assets/img/img_SantCugat_desktop.png";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "API Simpson",
    year: "2026",
    description:
      "Explorador dinámico de personajes con consumo de API REST y filtrado en tiempo real.",
    fullDescription:
      "Aplicación web interactiva que consume la API pública de Los Simpson para mostrar información detallada sobre personajes, ubicaciones y episodios de la serie. Implementa un sistema de búsqueda en tiempo real con filtrado instantáneo, permitiendo a los usuarios explorar el universo Simpson de forma intuitiva. La interfaz cuenta con diseño responsive, navegación fluida y una arquitectura de componentes React optimizada para rendimiento.",
    tech: ["Vite", "React", "Bootstrap"],
    image: img_APISIMPSON,
    link: "https://api-simpson.vercel.app/",
    github:
      "https://github.com/4GeeksAcademy/fs-pt-127-API-Simpson-Arantxa-Ordoyo",
  },
  {
    title: "City Planner",
    year: "2024",
    description:
      "Plataforma integral para la búsqueda y gestión de eventos culturales y musicales.",
    fullDescription:
      "Plataforma web fullstack diseñada para centralizar la búsqueda y gestión de eventos culturales y musicales en la ciudad. Los usuarios pueden explorar eventos por categorías, fechas y ubicaciones, mientras que los organizadores tienen acceso a un panel de administración completo para gestionar sus publicaciones. El sistema incluye autenticación de usuarios, filtros avanzados de búsqueda, y una interfaz responsive que garantiza una experiencia óptima en cualquier dispositivo.",
    tech: ["PHP", "SQL", "CSS/HTML"],
    image: img_cityPlanner,
    link: "https://cityplanner.page.gd/index.php",
    github: "https://github.com/arianxa/CityPlanner",
  },
  {
    title: "Retro Games",
    year: "2020",
    description:
      "Guía interactiva y catálogo de juegos arcade clásicos con panel de administración.",
    fullDescription:
      "Catálogo web dedicado a preservar y documentar la historia de los videojuegos arcade clásicos. La plataforma ofrece fichas detalladas de cada juego con información técnica, historia, capturas de pantalla y curiosidades. Incluye un completo panel de administración CRUD para gestionar el contenido, permitiendo añadir, editar y eliminar juegos. El diseño retro rinde homenaje a la estética de las recreativas de los años 80 y 90.",
    tech: ["PHP", "SQL", "HTML/CSS"],
    image: img_retroGames,
    link: "https://juego-de-lucha.vercel.app/",
    github: "https://github.com/arianxa/RetroFight-Guide",
  },
  {
    title: "Sant Cugat API C#",
    year: "2019",
    description:
      "Servicio backend para la gestión de entidades deportivas y reserva de instalaciones.",
    fullDescription:
      "API REST desarrollada en C# con ASP.NET Core para gestionar el ecosistema deportivo municipal de Sant Cugat. El servicio proporciona endpoints completos para la administración de instalaciones deportivas, gestión de reservas, control de usuarios y seguimiento de actividades. Implementa Entity Framework para el acceso a datos, autenticación JWT, y arquitectura en capas siguiendo principios SOLID. Diseñada para ser consumida por aplicaciones web y móviles del ayuntamiento.",
    tech: ["C#", "ASP.NET", "Entity Framework"],
    image: img_SantCugat_desktop,
    github: "https://github.com/arianxa/Municipal-Sports-API",
  },
  {
    title: "Olor A Libro Android",
    year: "2018",
    description:
      "Aplicación móvil para la gestión de actividades y fidelización en bibliotecas.",
    fullDescription:
      "Aplicación móvil nativa Android diseñada para conectar a los usuarios con la red de bibliotecas municipales. Permite consultar el catálogo de libros, reservar ejemplares, inscribirse en actividades culturales y gestionar préstamos activos. Incluye un sistema de gamificación con puntos y recompensas para incentivar la lectura y participación en eventos. La app se sincroniza con el sistema de gestión bibliotecaria central y ofrece notificaciones push para recordatorios de devolución y eventos próximos.",
    tech: ["Java", "Android Studio", "XML"],
    image: img_libro_Android,
    github: "https://github.com/arianxa/OlorALibro-App",
  },
  {
    title: "Olor A Libro Escritorio",
    year: "2018",
    description:
      "Gestor administrativo de escritorio para la red de bibliotecas y eventos.",
    fullDescription:
      "Aplicación de escritorio desarrollada en C# para la administración completa de la red de bibliotecas municipales. Proporciona a los bibliotecarios herramientas para gestionar el inventario de libros, controlar préstamos y devoluciones, administrar usuarios y socios, y organizar eventos culturales. El sistema incluye generación de informes estadísticos, gestión de multas, y sincronización de datos entre múltiples sedes. Utiliza archivos XML y JSON para la persistencia de datos y ofrece una interfaz intuitiva adaptada al flujo de trabajo bibliotecario.",
    tech: ["C#", "XML", "JSON"],
    image: img_libro_CS,
    github: "https://github.com/arianxa/OlorALibro-Desktop",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function openWithTransition(fn) {
  if (document.startViewTransition) {
    document.startViewTransition(() => flushSync(fn));
  } else {
    fn();
  }
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleOpen = (project) => {
    openWithTransition(() => setSelectedProject(project));
  };

  const handleClose = () => {
    openWithTransition(() => setSelectedProject(null));
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: sectionY }} className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-texto">
            {showAll ? "Todos Mis Proyectos" : "Proyectos Destacados"}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleOpen(project)}
                  className="project-card-glow flex flex-col rounded-xl overflow-hidden bg-bg-card border border-borde cursor-pointer transition-colors"
                  style={
                    !selectedProject
                      ? { viewTransitionName: `project-img-${project.title.replace(/\s/g, "")}` }
                      : undefined
                  }
                >
                  {/* Image with tech overlay */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.slice(0, 2).map((t, idx) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              idx === 0
                                ? "bg-primary/90 text-bg-dark"
                                : "bg-white/20 text-white backdrop-blur-sm"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-texto">{project.title}</h3>
                      <span className="text-texto-sutil text-sm font-medium bg-bg-elevated px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-texto-secundario text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 bg-primary text-bg-dark py-2 px-4 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                        >
                          Demo en vivo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center p-2 rounded-lg border border-borde hover:bg-bg-elevated transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Toggle button */}
        <div className="text-center mt-16">
          {!showAll ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="cursor-pointer px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg hover:brightness-110 transition-all"
            >
              Ver Todos los Proyectos
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(false)}
              className="cursor-pointer px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Ver Menos
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleClose}
      />
    </section>
  );
};
