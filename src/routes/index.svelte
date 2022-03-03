<script context="module">
	import { client } from '$lib/graphql-client';
	import { homeQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { assets } = await client.request(homeQuery);

		return {
			status: 200,
			props: {
				assets,
			},
		};
	};
</script>

<script>
	import Hero from '../components/Hero.svelte';
	export let assets;
</script>

<head>
	<title
		>Alejandro Sáez | Frontend Dev, UX/UI, Multimedia Designer</title>
</head>

<Hero src={assets[0].url} />
