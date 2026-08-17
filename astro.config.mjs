// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine de production. Source unique de vérité : les canonicals, les
  // hreflang et les métadonnées Open Graph en découlent via Astro.site,
  // aucune URL absolue n'est codée en dur dans les composants.
  site: 'https://banconle.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // Le sitemap ne liste que les pages réellement générées. Les brouillons
  // n'en produisent aucune, ils en sont donc absents sans filtre à maintenir.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
