/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			translate: {
				"slide-0": '0px',
				"slide-1": '320px',
				"slide-2": '640px',
				"slide-3": '960px',
				"slide-4": '1280px',
			}
		},
	},
	plugins: [],
}
