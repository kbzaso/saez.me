<script context="module">
	import { client } from '$lib/graphql-client';
	import { allProjectsQuery } from '$lib/graphql-queries';

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
	export let projects;
</script>

<section class="contenedor mt-28 w-full">
	<div
		class="mt-4 grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
		{#each projects as { name, image, slug, extract, category, worktype }}
			<Works {name} {image} {slug} {extract} {category} {worktype} />
		{/each}
	</div>
</section>
