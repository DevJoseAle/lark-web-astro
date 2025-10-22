// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // 👈 NUEVO
// https://astro.build/config
export default defineConfig({
    site: 'https://lark.app', // 👈 CAMBIAR por tu dominio real
  integrations: [
    sitemap({
      // 👇 NUEVO: Configuración del sitemap
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      // 👇 Opcional: Excluir páginas privadas
      filter: (page) => 
        !page.includes('/admin') && 
        !page.includes('/api'),
    }),
  ],
});
