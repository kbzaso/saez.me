<script context="module">
	import { client } from '$lib/graphql-client';
	import { slugQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(slugQuery, variables);

		return {
			status: 200,
			props: {
				project,
			},
		};
	};
</script>

<script>
	import InfoBox from '../../components/InfoBox.svelte';
	import SvelteSeo from 'svelte-seo';
	export let project;
	const {
		name,
		content,
		timeline,
		myrole,
		technologies,
		deliverables,
		extract,
		image,
		slug,
	} = project;
</script>

<svelte:head>
	<title>Development | {name}</title>
	<SvelteSeo
		twitter={{
			site: '@kbzaso',
			title: name,
			description: extract,
			image: image[0].url,
			card: 'summary_large_image',
			imageAlt: 'SEO Card',
		}}
		openGraph={{
			title: name,
			description: extract,
			type: 'article',
			url: `https://www.saez.me/design/${slug}`,
			images: [
				{
					url: image[0].url,
					width: 850,
					height: 650,
					alt: 'SEO Card',
				},
			],
		}} />
</svelte:head>

<article class="contenedor mt-28 mb-8 flex flex-col lg:flex-row">
	<InfoBox {timeline} {technologies} {deliverables} {myrole} />

	<main class="lectura mx-auto mt-8 max-w-prose">
		<h3 class="text-4xl italic">
			{name}
		</h3>
		<div
			class="prose-h2:mb-4 prose-h2:italic prose-h2:text-primary prose-h3:text-lg prose-h3:italic prose-h3:text-primary prose-h4:text-primary prose-blockquote:text-secondary prose-img:rounded-xl prose-img:shadow-xl">
			{@html content.html}
		</div>
	</main>
</article>
