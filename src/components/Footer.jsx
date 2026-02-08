import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => (
  <motion.footer
    className="bg-fondo-medio py-8 border-t border-borde"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-texto flex items-center justify-center gap-1">
        Made with <Heart size={16} className="text-boton fill-boton" /> by
        Arantxa Ordoyo
      </p>
    </div>
  </motion.footer>
);
