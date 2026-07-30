import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: resolve(import.meta.dirname, "demo/react"),
  envDir: resolve(import.meta.dirname),
  // Allow imports from root directory (src/, demo/shared/)
  server: {
    fs: {
      allow: ["."],
    },
  },
});
