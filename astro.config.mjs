// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // El puerto del backend se inyecta en build time con PUBLIC_BACKEND_URL
  // Se puede overridear con una variable de entorno al hacer npm run build
  output: 'static',
  server: {
    port: 4321,
    host: true,
  },
});
