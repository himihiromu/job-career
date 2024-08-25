import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  	site: 'https://himihiromu.github.io',
  	base: '/job-career',
   	trailingSlash: "never",
  	output: 'static',
	integrations: [
		starlight({
			title: '自己紹介',
			social: {
				github: 'https://github.com/himihiromu/job-career',
				'x.com': 'https://x.com/IT12921265',
				discord: 'https://discordapp.com/users/404351600719822849',
			},
			sidebar: [
				{ label: '初めに', link: '/intro/'},
				{
					label: '自己紹介',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '自己紹介', slug: 'self-introduction' },
					],
				},
				{
					label: '学生時代',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '学歴', slug: 'academic' },
						{ label: 'アルバイト', slug: 'academic/part-time-job' },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 4
			}
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
