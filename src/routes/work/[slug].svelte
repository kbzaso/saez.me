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
	import ArrowLeft32 from 'carbon-icons-svelte/lib/ArrowLeft32';

	import { fade } from 'svelte/transition';

	export let project;
	const {
		name,
		content,
		video,
		timeline,
		myrole,
		technologies,
		deliverables,
		extract,
		image,
		slug,
	} = project;
	let scroll;

	let imageApplications = image.slice(2, 4);
	console.log(imageApplications);
	console.log(image);
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
			url: `https://www.saez.me/work/${slug}`,
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

<svelte:window bind:scrollY={scroll} />

{#if scroll > 300}
	<a transition:fade href="/work">
		<ArrowLeft32
			class="fixed bottom-8 right-4 h-9 w-9 rounded-full bg-accent/80 fill-base-300 lg:top-28" />
	</a>
{/if}
<div
	class="hero min-h-[30rem]"
	style="background-image: url('{image[1].url}');">
	<div class="hero-overlay bg-opacity-60" />
</div>
<article
	class="contenedor mt-8 mb-8 flex flex-col lg:mt-12 lg:flex-row">
	<InfoBox {timeline} {technologies} {deliverables} {myrole} />

	<main class="lectura mx-auto max-w-prose">
		<h3 class="text-4xl italic">
			{name}
		</h3>
		<div
			class="prose-h2:mb-4 prose-h2:mt-0 prose-h2:italic prose-h2:text-primary prose-h3:text-lg prose-h3:italic prose-h3:text-primary prose-h4:text-primary prose-blockquote:text-secondary prose-img:rounded-sm prose-img:shadow-xl">
			{@html content.html}
		</div>

		<div>
			{#each imageApplications as app}
				<div>
					<img src={app.url} alt="" />
				</div>
			{/each}
		</div>
		{#if video}
			<div>
				<iframe
					class="aspect-video w-full"
					src="https://player.vimeo.com/video/{video}"
					frameborder="0"
					title={name}
					allow="autoplay; fullscreen"
					allowfullscreen />
			</div>
		{/if}
	</main>
</article>
