<script context="module">
	import { client } from '$lib/graphql-client';
	import { homeQuery, projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const [homeReq, projectReq] = await Promise.all([
			client.request(homeQuery),
			client.request(projectsQuery),
		]);

		const { homes } = homeReq;
		const { projects } = projectReq;

		return {
			status: 200,
			props: {
				homes,
				projects,
			},
		};
	};
</script>

<script>
	import Hero from '../components/Hero.svelte';
	import Works from '../components/Works.svelte';
	export let homes;
	export let projects;
</script>

<head>
	<title
		>Alejandro Sáez | Frontend Dev, UX/UI, Multimedia Designer</title>
</head>

<Hero bind:homes />

<section class="contenedor">
	<div class="flex justify-between">
		<h2 class="title">My Lastest projects</h2>
		<a
			class="btn-outline btn btn-accent rounded-btn btn-sm mt-2 transition ease-in-out hover:shadow-lg hover:shadow-cyan-500/50"
			href="/projects">See all projects</a>
	</div>
	<div
		class="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
		{#each projects as { name, description, image, slug, extract, tags }}
			<Works {name} {description} {image} {slug} {extract} {tags} />
		{/each}
	</div>
</section>
