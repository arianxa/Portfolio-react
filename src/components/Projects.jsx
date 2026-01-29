import img_cityPlanner from "../assets/img/img_cityplanner.png";
import img_APISIMPSON from "../assets/img/img_simpson1.png";
import img_retroGames from "../assets/img/img_retroGames.png";
import img_libro_CS from "../assets/img/img_libro_CS.png";
import img_libro_Android from "../assets/img/img_libro_Android.png";
import img_SantCugat_desktop from "../assets/img/img_SantCugat_desktop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectModal from "./ProjectModal"; // ← Importa el modal

import { useState } from "react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [showAll, setShowAll] = useState(false);
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
  const optionProject = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-fondo-claro">
      <div className="max-w-full mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-texto ">
            {showAll ? "Todos Mis Proyectos" : "Proyectos Destacados"}
          </h2>
          <div className="w-24 h-1 bg-boton mx-auto my-6"></div>

          {/* <p className="text-gray-600 text-lg ">
            {showAll
              ? "Mi portafolio completo de desarrollo"
              : "Algunos de mis mejores trabajos"}
          </p> */}
        </div>

        {/* Grid de Proyectos */}
        <section className="bg-fondo-claro py-2">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {optionProject.map((project) => (
                <div
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-2xl hover:scale-105 cursor-pointer group bg-white border-2 border-borde shadow-xl overflow-hidden hover:shadow-2xl hover:border-boton transition-all duration-300"
                >
                  <div className="relative h-70 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold text-titulo mb-2">
                        {project.title}
                      </h3>
                      <span className="text-subtitulo text-sm font-medium bg-fondo-medio px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-texto mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Botón Ver Más / Ver Menos */}
        <div className="text-center mt-16">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className=" cursor-pointer inline-block px-8 py-3.5  bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-all  shadow-lg hover:shadow-xl "
            >
              Ver Todos los Proyectos
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className=" cursor-pointer inline-block px-8 py-3.5  bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-all  shadow-lg hover:shadow-xl "
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className=" cursor-pointer mr-2 translate-y-[1px] text-lg"
              />{" "}
              Ver Menos
            </button>
          )}
        </div>
      </div>

      {/* EMPIEZA EL MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
