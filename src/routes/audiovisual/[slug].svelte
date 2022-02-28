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
	export let projects;
</script>

<article class="contenedor">
	{#each projects as { name, content, video }}
		<div
			class="prose  mx-auto max-w-prose text-left text-neutral-content prose-a:text-secondary prose-a:decoration-cyan-500 prose-a:decoration-solid prose-a:decoration-2 dark:prose-invert md:prose-lg lg:prose-xl">
			<h3 class="title">
				{name}
			</h3>
			{@html content.html}
			<div class="video">
				<iframe
					class="aspect-video w-full"
					src={video}
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen />
			</div>
		</div>
	{/each}
</article>
