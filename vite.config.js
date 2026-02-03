import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // permite acceso desde red / docker
    port: 5173,
    strictPort: false, // falla si el puerto está ocupado
    open: true, // abre el navegador al arrancar
  },
});
