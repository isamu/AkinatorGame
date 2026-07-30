import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), react(), tailwindcss()],
  envDir: resolve(import.meta.dirname),
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.ts"),
        core: resolve(import.meta.dirname, "src/core/index.ts"),
        vue: resolve(import.meta.dirname, "src/vue/index.ts"),
        react: resolve(import.meta.dirname, "src/react/index.ts"),
      },
      name: "MulmoChatPlugin",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["vue", "react", "react-dom"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "style.[ext]",
      },
    },
    cssCodeSplit: false,
  },
});
