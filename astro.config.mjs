import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hossamemad5566.github.io',
  integrations: [tailwind()],
});
