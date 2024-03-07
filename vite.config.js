/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
