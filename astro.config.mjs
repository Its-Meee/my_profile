// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://Its-Meee.github.io/my_profile',
  vite: {
    plugins: [tailwindcss()],
  },
});
