<script context="module">
	import { client } from '$lib/graphql-client';
	import { pagesQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { pages } = await client.request(pagesQuery);

		return {
			status: 200,
			props: {
				pages,
			},
		};
	};
</script>

<script>
	import { navigating } from '$app/stores';
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	export let pages;

	onMount(async () => {
		themeChange(false);
	});
	console.log(navigating);
</script>

<div class="container mx-auto flex min-h-screen flex-col">
	<Navbar {pages} />
	<div class="main flex-grow">
		<slot />
	</div>
	<Footer />
</div>
