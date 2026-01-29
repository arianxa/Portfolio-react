import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Inicio", href: "#hero", id: "hero" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Habilidades", href: "#skills", id: "skills" },
  { name: "Contacto", href: "#contact", id: "contact" },
];




// ESTO ES LO DE CLAUDE QUE NO "ENTIENDO"


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const sections = navigation
      .map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))
      .filter((s) => s.element);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Si estamos al final de la página, siempre Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActiveSection("contact");
        return;
      }

      // Buscar qué sección está visible
      let currentSection = "hero";

      for (const section of sections) {
        if (section.element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Inicializar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



// AQUI ACABA

  return (
    <>
      {/* CAMBIADO */}
      <Disclosure
        as="nav"
        className="fixed top-0 left-0 right-0 z-50 bg-fondo-claro/95 backdrop-blur-sm border-b border-gray-200/30"
      >
        <div className="mx-auto max-w-full  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start pl-4">
              <div className="flex shrink-0 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-boton rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="text-lg font-semibold text-texto hidden sm:block">
                    Arantxa
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                      className={classNames(
                        activeSection === item.id
                          ? "text-texto font-semibold border-b-2 border-boton px-3 py-2 text-sm"
                          : "text-texto/60 hover:text-texto transition-colors px-3 py-2 text-sm font-medium",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={classNames(
                  activeSection === item.id
                    ? "text-texto font-semibold border-l-4 border-boton block px-3 py-2 text-base"
                    : "text-texto/60 hover:text-texto block px-3 py-2 text-base",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};
