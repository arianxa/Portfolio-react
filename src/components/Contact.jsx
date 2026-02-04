import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative z-10 max-w-[960px] mx-auto px-6 lg:px-10 flex flex-col items-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight pb-4 text-texto">
            Hablemos y{" "}
            <span className="text-primary">Creemos Algo Juntos</span>
          </h2>
          <p className="text-texto-secundario text-lg max-w-2xl mx-auto">
            Actualmente abierta a oportunidades freelance y posiciones a tiempo
            completo. ¿Tienes una pregunta o simplemente quieres saludar?
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-xl bg-primary/5 border border-primary/10 rounded-xl p-8 backdrop-blur-sm"
        >
          <motion.form
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-texto text-sm font-medium tracking-wide flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="neon-glow w-full rounded-lg text-texto border border-primary/20 bg-bg-input focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-14 placeholder:text-texto-sutil/40 px-4 text-base transition-all"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-texto text-sm font-medium tracking-wide flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" />
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="neon-glow w-full rounded-lg text-texto border border-primary/20 bg-bg-input focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-14 placeholder:text-texto-sutil/40 px-4 text-base transition-all"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-texto text-sm font-medium tracking-wide flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Mensaje
              </label>
              <textarea
                placeholder="Cuéntame sobre tu proyecto..."
                required
                rows={5}
                className="neon-glow w-full min-h-36 rounded-lg text-texto border border-primary/20 bg-bg-input focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-texto-sutil/40 p-4 text-base transition-all resize-none"
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-bg-dark py-4 px-8 rounded-lg text-lg font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <p className="text-texto-sutil text-sm font-medium uppercase tracking-[0.2em]">
            Encuéntrame en
          </p>
          <div className="flex gap-8">
            {[
              { icon: Github, href: "https://github.com/arianxa", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:arantxa@example.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.2, color: "#0df2f2" }}
                className="text-texto-secundario transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
