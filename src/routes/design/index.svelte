<script context="module">
	import { client } from '$lib/graphql-client';
	import { designQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(designQuery);

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
	import SvelteSeo from 'svelte-seo';
	export let projects;
	const SEO_CARD_IMAGE =
		'https://media.graphcms.com/output=format:jpg/tZGYD890SemYXcQRwmIg';
	const DESIGN_PHOTO =
		'https://media.graphcms.com/output=format:webp/resize=height:800,fit:max/5vKTc2iKT9OMqCymwIyf';
</script>

<SvelteSeo
	twitter={{
		site: '@kbzaso',
		title:
			'Design is not just what it looks like and feels like. Design is how it works.',
		description: 'Here is a portfolio of my design work.',
		card: 'summary_large_image',
		image: SEO_CARD_IMAGE,
		imageAlt: 'SEO Card',
	}}
	openGraph={{
		title:
			'Design is not just what it looks like and feels like. Design is how it works.',
		description: 'Here is a portfolio of my design work.',
		type: 'article',
		url: `https://www.saez.me/design`,
		images: [
			{
				url: SEO_CARD_IMAGE,
				width: 850,
				height: 650,
				alt: 'SEO Card',
			},
		],
	}} />

<section class="contenedor mt-6">
	<main class="mx-auto flex h-96 flex-col justify-center">
		<h1
			class="bg-gradient-to-r from-primary to-secondary bg-clip-text pb-1 text-center text-4xl font-extrabold italic text-transparent">
			Design is not just what it looks like and feels like.<br />
		</h1>
		<h2
			class="bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-center text-6xl italic text-transparent  underline decoration-accent
		decoration-4">
			Design is how it works.
		</h2>
		<p class="mt-2 text-center">Steve Jobs</p>
	</main>
	<article class="mt-8 flex flex-col gap-8 md:flex-row">
		<figure class="md:w-1/2">
			<img
				class="mb-2 h-96 w-full rounded-lg object-cover"
				src={DESIGN_PHOTO}
				alt="A pen above a paper" />
			<figcaption class="text-center">
				Photo by <a
					class="underline decoration-2"
					target="_blank"
					href="https://unsplash.com/@medbadrc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Med Badr Chemmaoui</a>
				on
				<a
					target="_blank"
					class="underline decoration-2"
					href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Unsplash</a>
			</figcaption>
		</figure>
		<div class="flex md:w-1/2">
			<p
				class="lectura  first-letter:float-left
			first-letter:mr-3 first-letter:text-7xl first-letter:font-bold
			first-letter:text-accent first-line:uppercase first-line:tracking-widest">
				Questions are my secrete weapon. I always try to identify
				deeper motivations, gain clarity, challenge assumptions, and
				demonstrate curiosity and empathy. Like a doctor, I try to
				stay the most possible time in the diagnosis phase, so I can
				identify the real problems and give meaningful solutions.
			</p>
		</div>
	</article>
	<h2 class="mt-36 text-4xl italic text-base-content">
		Case Studies
	</h2>
	<aside
		class="my-6 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 md:grid-cols-[repeat(auto-fit,minmax(24rem,24rem))]">
		{#each projects as { name, image, slug, extract, category }}
			<Works
				{name}
				{image}
				{slug}
				{extract}
				{category}
				section="design" />
		{/each}
	</aside>
</section>
