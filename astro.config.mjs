// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	output: 'static',
	base: '/Zialuy.github.io/',//仓库名
	integrations: [mdx(), sitemap()],
});
