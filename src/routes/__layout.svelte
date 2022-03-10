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
	import '../app.css';
	import PageTransition from '../components/PageTransition.svelte';
	import { page } from '$app/stores';

	import MobileNav from '../components/MobileNav.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	export let pages;

	onMount(async () => {
		themeChange(false);
	});
</script>

<div class="drawer drawer-end h-screen w-full">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Navbar {pages} segment={$page.url.pathname} />
		<PageTransition refresh={$page.url.pathname}>
			<div class="container mx-auto flex min-h-screen flex-col">
				<div class="main flex-grow">
					<slot />
				</div>
				<Footer />
			</div>
		</PageTransition>
	</div>
	<MobileNav />
</div>
