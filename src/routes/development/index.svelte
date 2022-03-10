<script context="module">
	import { client } from '$lib/graphql-client';
	import { developmentQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(developmentQuery);

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
	export let projects;
	const DEV_PHOTO =
		'https://media.graphcms.com/output=format:webp/resize=height:800,fit:max/CHau8X0oSmWz0FPWVJZz';
</script>

<section class="contenedor mt-6">
	<main class="mx-auto flex h-96 flex-col justify-center">
		<h1
			class="bg-gradient-to-r from-primary to-secondary bg-clip-text pb-1 text-center text-4xl font-extrabold italic text-transparent">
			I just belive in
		</h1>
		<h2
			class="bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-center text-6xl italic text-transparent  underline decoration-accent
	decoration-4">
			HTML, CSS and JavaScript
		</h2>
		<!-- <p class="mt-2 text-center">Steve Jobs</p> -->
	</main>
	<article class="mt-8 flex flex-col gap-8 md:flex-row">
		<figure class="md:w-1/2">
			<img
				class="mb-2 h-96 w-full rounded-lg object-cover"
				src={DEV_PHOTO}
				alt="A pen above a paper" />
			<figcaption class="text-center">
				Photo by <a
					class="underline decoration-2"
					target="_blank"
					href="https://unsplash.com/@karlp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Karl Pawlowicz</a>
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
				class="lectura first-letter:float-left
		first-letter:mr-3 first-letter:text-7xl first-letter:font-bold
		first-letter:text-accent first-line:uppercase first-line:tracking-widest">
				I love to work with HTML, CSS, and JavaScript! But working
				with some frameworks like Svelte, React, or Vue, make me feel
				like a ¡super human! But I have to say that the simplicity of
				Svelte takes all my heart. ❤️ <br />

				I always try to make a high-performance development focus on
				details.
			</p>
		</div>
	</article>
	<h2 class="mt-16 text-4xl italic text-base-content">
		Development projects
	</h2>
	<p class="lectura mt-2">
		Here is a portfolio of my frontend development work.
	</p>
</section>
<aside class="contenedor mt-6">
	<div
		class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 md:grid-cols-[repeat(auto-fit,minmax(24rem,24rem))]">
		{#each projects as { name, description, image, slug, extract, category }}
			<Works
				{name}
				{description}
				{image}
				{slug}
				{extract}
				{category}
				section="development" />
		{/each}
	</div>
</aside>
