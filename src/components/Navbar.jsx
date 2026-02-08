import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Inicio", href: "#hero", id: "hero" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Habilidades", href: "#skills", id: "skills" },
  { name: "Contacto", href: "#contact", id: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navigation
      .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      .filter((s) => s.element);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 150;
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
          setActiveSection("contact");
          ticking = false;
          return;
        }
        let currentSection = "hero";
        for (const section of sections) {
          if (section.element.offsetTop <= scrollPosition) currentSection = section.id;
        }
        setActiveSection(currentSection);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-texto-sutil hover:text-primary focus:outline-none">
                <Menu aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <X aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-bg-dark font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Arantxa</span>
            </div>
            <div className="hidden sm:flex items-center gap-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={classNames(
                    activeSection === item.id
                      ? "text-primary font-semibold"
                      : "text-texto-secundario hover:text-primary transition-colors",
                    "text-sm font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 sm:hidden bg-bg-dark/95 backdrop-blur-sm"
        >
          <div className="space-y-1 px-4 pt-2 pb-4">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  activeSection === item.id
                    ? "text-primary font-semibold border-l-2 border-primary"
                    : "text-texto-secundario hover:text-primary",
                  "block px-3 py-2 text-base transition-colors"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </motion.div>
  );
};
