// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://l-ark.app', // 👈 ACTUALIZADO al dominio correcto
  output: 'static', // 👈 NUEVO: Forzar build estático
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      filter: (page) => 
        !page.includes('/admin') && 
        !page.includes('/api'),
    }),
  ],
});