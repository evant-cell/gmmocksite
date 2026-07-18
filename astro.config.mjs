// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://geniusmonkey.com',
  integrations: [
    sitemap({
      // Styleguide pages are internal design docs, keep them out of the sitemap
      filter: (page) => !page.includes('/styleguide/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});