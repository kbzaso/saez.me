<script context="module">
	import { client } from '$lib/graphql-client';
	import { pagesSlugQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { pages } = await client.request(pagesSlugQuery, variables);

		return {
			status: 200,
			props: {
				pages,
			},
		};
	};
</script>

<script>
	export let pages;
</script>

<article class="contenedor">
	{#each pages as { title, content }}
		<div
			class="prose mx-auto max-w-prose text-left prose-a:text-secondary prose-a:decoration-cyan-500 prose-a:decoration-solid prose-a:decoration-2 md:prose-lg lg:prose-xl">
			<h3 class="text-4xl italic text-base-content">
				{title}
			</h3>
			{@html content.html}
		</div>
	{/each}
</article>
