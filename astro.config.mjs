// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://u20251231812-prog.github.io',
  base: '/consult_astro',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false // Fuerza a Vite a empaquetar todo el CSS en un solo archivo global
    }
  }
});