import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full mt-10 pb-12 px-6"
  >
    <div className="max-w-[960px] mx-auto pt-8 border-t border-primary/5 flex flex-col items-center gap-4">
      <p className="text-texto-sutil text-sm font-medium">
        &copy; 2025 Arantxa Ordoyo. Todos los derechos reservados.
      </p>
      <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full">
        <span className="text-primary/40 font-mono text-[11px] flex items-center gap-1">
          &lt;!-- Hecho con{" "}
          <Heart className="w-3 h-3 text-red-400 inline" />
          {" "}y mucho café --&gt;
        </span>
      </div>
      <div className="flex gap-4 mt-4">
        <span className="inline-block size-2 rounded-full bg-primary/20" />
        <span className="inline-block size-2 rounded-full bg-primary/20" />
        <span className="inline-block size-2 rounded-full bg-primary/20" />
      </div>
    </div>
  </motion.footer>
);
