import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("three") && !id.includes("@react-three")) {
            return "three-core";
          }
          if (id.includes("@react-three")) {
            return "react-three";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "lucide";
          }
        },
      },
    },
  },
});
