<script context="module">
	import { client } from '$lib/graphql-client';
	import { audiovisualQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(audiovisualQuery);

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
	<Breadcrums />
	<div
		class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
		{#each projects as { name, description, image, slug, extract, tags, video }}
			<Works
				{name}
				{description}
				{image}
				{slug}
				{extract}
				{tags}
				{video}
				section="audiovisual" />
		{/each}
	</div>
</section>
