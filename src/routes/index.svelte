<script context="module">
	import { client } from '$lib/graphql-client';
	import { gql } from 'graphql-request';

	export const load = async () => {
		const query = gql`
			query MyQuery {
				homes {
					description
					title
				}
			}
		`;

		const { homes } = await client.request(query);

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
	const { title, description } = homes[0];
	import Hero from '../components/Hero.svelte';
</script>

<Hero />
<h1>{title}</h1>
<p>{description}</p>
