// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://zialuy.github.io',  // 我的GitHub Pages地址
	output: 'static',
	base: '/',  // 改为根路径
	integrations: [mdx(), sitemap(),tailwind()],
  });
