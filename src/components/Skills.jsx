export const Skills = () => {
  const skills = {
    frontend: ["React", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Java", "MySQL"],
    mobile: ["Android"],
    tools: ["Git"],
  };
  return (
     <section id="skills" className="py-20 bg-fondo-medio">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Contenedor */}
    <div className="bg-fondo-claro rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-borde ">
      
      {/* Título dentro del contenedor */}
      <div className="text-center mb-12 pb-4  border-b-2 border-fondo-medio">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-texto">
          Habilidades
        </h2>
    
      </div>
      
      {/* Frontend */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-4xl font-bold text-texto">Frontend</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.frontend.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-fondo-medio rounded-full text-lg font-medium text-texto hover:bg-boton hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-4xl font-bold text-texto">Backend</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.backend.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-fondo-medio rounded-full text-lg font-medium text-texto hover:bg-boton hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Tools */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-4xl font-bold text-texto">Herramientas</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.tools.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-fondo-medio rounded-full text-lg font-medium text-texto hover:bg-boton hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Skills;
