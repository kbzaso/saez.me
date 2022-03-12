import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// target: '#svelte',
	},

	preprocess: [preprocess({})],
};

export default config;
