<script context="module">
	import { client } from '$lib/graphql-client';
	import { designQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(designQuery);

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
	export let projects;
	export let section;
</script>

<section class="contenedor">
	<h3 class="title">My design projects</h3>

	<div
		class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
		{#each projects as { name, description, image, slug, extract, tags }}
			<Works
				{name}
				{description}
				{image}
				{slug}
				{extract}
				{tags}
				section="design" />
		{/each}
	</div>
</section>
