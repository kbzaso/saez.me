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
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { themeChange } from 'theme-change';

	import PageTransition from '../components/PageTransition.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	export let pages;

	let load = false;

	afterNavigate(() => {
		document
			.querySelector('.drawer-content')
			.scrollTo({ top: 0, behavior: 'smooth' });
	});

	onMount(() => {
		themeChange(false);
		load = true;
	});
</script>

<div class="drawer drawer-end h-screen w-full">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Navbar {pages} segment={$page.url.pathname} />
		{#if load}
			<div class="flex min-h-screen flex-col">
				<div class="main flex-grow">
					<PageTransition refresh={$page.url.pathname}>
						<slot />
					</PageTransition>
				</div>
				<Footer />
			</div>
		{:else}
			LOADING
		{/if}
	</div>
	<MobileNav />
</div>
