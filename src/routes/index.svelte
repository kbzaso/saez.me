<script context="module">
	import { client } from '$lib/graphql-client';
	import { gql } from 'graphql-request';

	export const load = async () => {
		const query = gql`
			query MyQuery {
				homes {
					description
					title
					profile {
						url
					}
					logo {
						url
					}
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
	import Hero from '../components/Hero.svelte';
</script>

<head>
	
	<title>Alejandro Sáez | Frontend Dev, UX/UI, Multimedia Designer</title>
</head>

<Hero bind:homes />
<!-- <h1>{title}</h1>
<p>{description}</p>
<img src={profile.url} alt="" /> -->
