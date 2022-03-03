const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'bg-pattern':
					"url('https://media.graphcms.com/aCPk2xVSeqoeqj4qgGHV')",
				universe:
					"url('https://images.unsplash.com/photo-1533113354171-490d836238e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2976&q=80')",
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
		fontFamily: {
			'font-ibm': ['"IBM Plex Sans"', 'sans-serif'],
		},
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
			'dracula',
			{
				dark: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=fantasy]'
					],
					'base-300': '#181f2a',
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};

module.exports = config;
