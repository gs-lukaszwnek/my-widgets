import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: ".",
    emptyOutDir: false,
    cssCodeSplit: false,
    target: "es2015",
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "content-bundle.js",
        format: "iife",
      },
    },
  },
});
