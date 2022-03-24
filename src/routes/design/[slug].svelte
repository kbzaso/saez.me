<script context="module">
	import { client } from '$lib/graphql-client';
	import { slugQuery, designQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(slugQuery, variables);
		const { projects } = await client.request(designQuery);

		return {
			status: 200,
			props: {
				project,
				projects,
			},
		};
	};
</script>

<script>
	import CollapseAll32 from 'carbon-icons-svelte/lib/CollapseAll32';
	import { page } from '$app/stores';
	let path = $page.url.pathname.split('/');
	let url = path.pop();
	import InfoBox from '../../components/InfoBox.svelte';
	import Works from '../../components/Works.svelte';
	import SvelteSeo from 'svelte-seo';
	export let projects;
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

	// const img =
	// 	'https://images.unsplash.com/photo-1647627570490-a85a967d261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';
</script>

<svelte:head>
	<title>Design | {name}</title>
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
<!-- <div
	class="h-96 bg-cover bg-fixed"
	style={`background-image: url(${img})`} /> -->

<article class="contenedor mt-32 flex flex-col lg:flex-row">
	<InfoBox {timeline} {technologies} {deliverables} {myrole} />
	<main class="lectura mx-auto mt-8 max-w-prose">
		<h3 class="text-4xl italic">
			{name}
		</h3>

		<div
			class="prose-h2:mb-4 prose-h2:italic prose-h2:text-primary first-of-type:prose-h2:mt-0 prose-h3:text-lg prose-h3:italic prose-h3:text-primary prose-h4:text-primary prose-blockquote:text-secondary prose-img:rounded-xl prose-img:shadow-xl">
			{@html content.html}
		</div>
	</main>
</article>

<aside class="mt-36 mb-8 bg-base-content px-8 py-4">
	<div class="contenedor">
		<h2
			class="mt-12 flex items-center justify-center gap-4 text-4xl italic text-base-100">
			<CollapseAll32 />Others projects
		</h2>
		<div
			class="my-12 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 md:grid-cols-[repeat(auto-fit,minmax(24rem,24rem))]">
			{#each projects as { name, image, slug, extract, category, worktype }}
				{#if slug !== url}
					<Works
						{name}
						{image}
						{slug}
						{extract}
						{category}
						{worktype} />
				{/if}
			{/each}
		</div>
	</div>
</aside>
