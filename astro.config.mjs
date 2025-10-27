// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless'; // 👈 NUEVO


// https://astro.build/config
export default defineConfig({
  site: 'https://l-ark.app', // 👈 ACTUALIZADO al dominio correcto
  output: 'server', // 👈 NUEVO: híbrido (static + SSR donde se necesite)
  adapter: vercel({
    webAnalytics: {
      enabled: true, // 👈 Analytics gratis de Vercel
    },
  }), // 👈 NUEVO // 👈 NUEVO: Forzar build estático
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