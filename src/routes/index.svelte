<script context="module">
	import { client } from '$lib/graphql-client';
	import { homeQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { homes } = await client.request(homeQuery);

		return {
			status: 200,
			props: {
				homes,
			},
		};
	};
</script>

<script>
	export let homes;
	const { title, content, cta } = homes[0];
	import Hero from '../components/Hero.svelte';
	import AboutMe from '../components/AboutMe.svelte';
	import SvelteSeo from 'svelte-seo';

	import { SEO_CARD_IMAGE } from '$lib/info';
</script>

<svelte:head>
	<title
		>Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer</title>
</svelte:head>
<SvelteSeo
	twitter={{
		site: '@kbzaso',
		title: 'Welcome to my digital mind space',
		card: 'summary_large_image',
		description:
			'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
		image: SEO_CARD_IMAGE,
		imageAlt: 'SEO card',
	}}
	openGraph={{
		title: 'Welcome to my digital mind space',
		description:
			'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
		url: 'https://www.saez.me',
		type: 'website',
		images: [
			{
				url: SEO_CARD_IMAGE,
				width: 850,
				height: 650,
				alt: 'SEO card',
			},
		],
	}} />
<Hero />
<AboutMe {title} {content} {cta} />
