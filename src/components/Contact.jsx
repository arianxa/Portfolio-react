import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const formFields = [
  { type: "text", placeholder: "Nombre", name: "name" },
  { type: "email", placeholder: "Correo electrónico", name: "email" },
  { type: "text", placeholder: "Asunto", name: "subject" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-fondo-claro">
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-4 text-texto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h2>
      <div className="p-4">
        <div className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-fondo-claro rounded-2xl shadow-2xl border-2 border-borde">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-texto text-3xl font-bold">Hablemos</h2>
            <p className="text-[15px] text-texto-secundario mt-4 leading-relaxed">
              Si tienes una idea o proyecto en mente y necesitas ayuda, no dudes
              en contactarme. Me encantaría saber más sobre tu proyecto.
            </p>

            <div className="mt-12">
              <h2 className="text-texto text-base font-semibold">Correo</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-fondo-medio h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-texto" />
                  </div>
                  <a href="mailto:info@example.com" className="text-sm ml-4">
                    <small className="block text-texto">Correo</small>
                    <span className="text-boton font-medium">
                      info@example.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-texto text-base font-semibold">
                Redes Sociales
              </h2>
              <ul className="flex mt-4 space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.li
                      key={social.label}
                      className="bg-fondo-medio h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-boton group transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <IconComponent
                          size={20}
                          className="text-texto group-hover:text-white transition-colors duration-300"
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {formFields.map((field, index) => (
              <motion.input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full text-texto rounded-lg py-2.5 px-4 border border-borde text-sm outline-0 focus:border-boton bg-fondo-claro"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              />
            ))}
            <motion.textarea
              placeholder="Mensaje"
              rows="6"
              className="w-full text-texto rounded-lg px-4 border border-borde text-sm pt-2.5 outline-0 focus:border-boton bg-fondo-claro"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            />
            <motion.button
              type="button"
              className="text-white bg-boton hover:bg-boton-hover rounded-lg text-sm font-semibold px-4 py-2.5 w-full cursor-pointer border-0 mt-2 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
