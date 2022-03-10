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
	import InfoBox from '../../components/InfoBox.svelte';
	export let projects;
</script>

<Breadcrums />
<article class="contenedor flex flex-col lg:flex-row">
	{#each projects as { name, content, timeline, myrole, technologies, deliverables }}
		<InfoBox {timeline} {technologies} {deliverables} {myrole} />
		<main class="lectura mx-auto mt-8 max-w-prose">
			<h3 class="text-4xl italic">
				{name}
			</h3>
			<div
				class="prose-h2:mb-4 prose-h2:italic prose-h2:text-primary prose-h3:text-lg prose-h3:italic prose-h3:text-primary prose-h4:text-primary prose-blockquote:text-secondary">
				{@html content.html}
			</div>
		</main>
	{/each}
</article>
