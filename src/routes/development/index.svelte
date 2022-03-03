<script context="module">
	import { client } from '$lib/graphql-client';
	import { developmentQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(developmentQuery);

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
	import Breadcrums from '../../components/Breadcrums.svelte';
	export let projects;
	export let section;
</script>

<section class="contenedor">
	<Breadcrums path="Development" />
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
				section="development" />
		{/each}
	</div>
</section>
