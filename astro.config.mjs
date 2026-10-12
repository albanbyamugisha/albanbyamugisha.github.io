import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://albanbyamugisha.github.io', output: 'static', trailingSlash: 'always', integrations: [sitemap({filter:page=>!page.endsWith("/message-received/")})], devToolbar: { enabled: false } });
