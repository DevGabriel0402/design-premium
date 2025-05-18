import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <- ESSENCIAL!

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
