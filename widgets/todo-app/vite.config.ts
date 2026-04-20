import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("sp-"),
        },
      },
    }),
  ],
  server: {
    cors: true,
  },
  define:
    command === "build"
      ? { "process.env.NODE_ENV": JSON.stringify("production") }
      : {},
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      fileName: "widget",
    },
  },
}));
