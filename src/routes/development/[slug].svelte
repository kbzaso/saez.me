<script context="module">
	import { client } from '$lib/graphql-client';
	import { slugQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { projects } = await client.request(slugQuery, variables);

		return {
			status: 200,
			props: {
				projects,
			},
		};
	};
</script>

<script>
	import Breadcrums from '../../components/Breadcrums.svelte';
	export let projects;
</script>

<article class="contenedor">
	<Breadcrums />
	{#each projects as { name, content }}
		<div class="lectura mx-auto mt-4 max-w-prose">
			<h3 class="text-4xl italic text-base-content">
				{name}
			</h3>

			{@html content.html}
		</div>
	{/each}
</article>
