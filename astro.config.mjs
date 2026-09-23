// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://David22-f.github.io', // Tu usuario de GitHub
  base: '/p1',                          // Nombre de tu repositorio
  vite: {
    plugins: [tailwindcss()]
  }
});