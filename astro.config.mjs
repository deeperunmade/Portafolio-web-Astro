import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://deeperunmade.github.io',
  base:'/Portafolio-web-Astro',
  output: "server",
  adapter: netlify()
});