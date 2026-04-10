// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://datasmith.pl',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap({
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    },
  })],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});