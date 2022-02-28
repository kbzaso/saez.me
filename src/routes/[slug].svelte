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
			class="prose my-6 mx-auto max-w-prose text-left text-neutral-content prose-a:text-secondary prose-a:decoration-cyan-500 prose-a:decoration-solid prose-a:decoration-2 dark:prose-invert md:prose-lg lg:prose-xl">
			<h3 class="title">
				{title}
			</h3>
			{@html content.html}
		</div>
	{/each}
</article>
