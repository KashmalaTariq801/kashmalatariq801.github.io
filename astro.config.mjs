import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://KashmalaTariq801.github.io",
  base: "/umerzai-printing-press-website",
  vite: {
    plugins: [tailwindcss()],
  },
});