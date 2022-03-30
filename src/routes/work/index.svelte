<script context="module">
	import { client } from '$lib/graphql-client';
	import {
		allProjectsQuery,
		developmentQuery,
	} from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(allProjectsQuery);

		return {
			status: 200,
			props: {
				projects,
			},
		};
	};
</script>

<script>
	import Works from '../../components/Works.svelte';
	import { fade, fly } from 'svelte/transition';
	export let projects;
	let tabs = ['one', 'two', 'three'];
	let selected = tabs[0];
</script>

<section class="contenedor mt-28 w-full">
	<div class="flex justify-center">
		<div class="btn-group">
			<button
				on:click={() => (selected = tabs[0])}
				class:btn-active={selected === 'one'}
				class="btn">Development</button>
			<button
				on:click={() => (selected = tabs[1])}
				class:btn-active={selected === 'two'}
				class="btn">UX/UI</button>
			<button
				on:click={() => (selected = tabs[2])}
				class:btn-active={selected === 'three'}
				class="btn">Branding</button>
		</div>
	</div>

	{#if selected === 'one'}
		<div
			in:fly={{ y: -30, duration: 250, delay: 300 }}
			out:fly={{ y: -30, duration: 250 }}
			class="mt-8 grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
			{#each projects as { name, image, slug, extract, category, worktype }}
				<Works
					{name}
					{image}
					{slug}
					{extract}
					{category}
					{worktype} />
			{/each}
		</div>
	{:else if selected === 'two'}
		<p
			in:fly={{ y: -30, duration: 250, delay: 300 }}
			out:fly={{ y: -30, duration: 250 }}>
			TWO
		</p>
	{:else}
		<p
			in:fly={{ y: -30, duration: 250, delay: 300 }}
			out:fly={{ y: -30, duration: 250 }}>
			THREE
		</p>
	{/if}
</section>
