// @ts-check
import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import sitemapPlugin from "@astrojs/sitemap"
// https://astro.build/config
export default defineConfig({
    site: "https://github.com/GDSofKY-dev.github.io",
    output: 'static',
    // base: 'GDSOFKY-DEV.GITHUB.IO',
    integrations: [astroImageTools, sitemapPlugin()]
});
