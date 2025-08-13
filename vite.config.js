import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  base: "/fm-tip-calculator/",
  plugins: [vue(), svgLoader()],
});
