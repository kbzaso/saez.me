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
	import Hero from '../components/Hero.svelte';
	export let homes;
</script>

<head>
	<title
		>Alejandro Sáez | Frontend Dev, UX/UI, Multimedia Designer</title>
</head>

<Hero bind:homes />
