<script context="module">
	import { client } from '$lib/graphql-client';
	import { pagesSlugQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { page } = await client.request(pagesSlugQuery, variables);

		return {
			status: 200,
			props: {
				page,
			},
		};
	};
</script>

<script>
	import SvelteSeo from 'svelte-seo';
	export let page;
	const { title, content } = page;
	import { SEO_CARD_IMAGE } from '$lib/info';
</script>

<svelte:head>
	<title>{title}</title>
	<SvelteSeo
		twitter={{
			site: '@kbzaso',
			title: title,
			card: 'summary_large_image',
			description:
				'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
			image: SEO_CARD_IMAGE,
			imageAlt: 'SEO card',
		}}
		openGraph={{
			title: title,
			description:
				'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
			url: 'https://www.saez.me',
			type: 'website',
			images: [
				{
					url: SEO_CARD_IMAGE,
					width: 850,
					height: 650,
					alt: 'SEO card',
				},
			],
		}} />
</svelte:head>

<article class="contenedor">
	<div
		class="prose mx-auto max-w-prose text-left prose-a:text-secondary prose-a:decoration-cyan-500 prose-a:decoration-solid prose-a:decoration-2 md:prose-lg lg:prose-xl">
		<h3 class="text-4xl italic text-base-content">
			{title}
		</h3>
		{@html content.html}
	</div>
</article>
