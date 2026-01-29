export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[500px]  bg-fondo-claro to-gray-800 text-primary flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-texto">
          Hola, soy <span className="text-boton">Arantxa</span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-2xl md:text-3xl texto mb-6">
          Desarrolladora Web Full Stack
        </h2>

        {/* Descripción corta */}
        <p className="text-lg md:text-xl text-texto-secundario mb-8 max-w-2xl mx-auto">
          Apasionada por crear experiencias web modernas con React y
          JavaScript.{" "}
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-colors"
          >
            Ver Mis Proyectos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
