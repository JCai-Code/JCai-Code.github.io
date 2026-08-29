// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jcai-code.github.io',
	integrations: [
		starlight({
			title: 'My Docs',
			components: {
        		Search: './src/components/CustomSearch.astro',
     		},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/JCai-Code' }],
			head: [
				{ 
					tag: 'script', 
					attrs: {
						src: 'https://cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js',
						defer: true,
					}
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
