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
	import Breadcrums from '../../components/Breadcrums.svelte';
	export let projects;
</script>

<Breadcrums />
<article class="contenedor flex flex-col lg:flex-row">
	<aside
		class="mb-6 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4 prose-h4:mt-4 prose-h4:text-primary first:prose-h4:mt-0 lg:h-fit lg:grid-rows-3">
		<div>
			<h4 class="uppercase tracking-widest">Timeline</h4>
			<p>Mar - Apr 2021</p>
		</div>
		<div>
			<h4 class="uppercase tracking-widest">Platform</h4>
			<p>Responsive Website</p>
		</div>
		<div>
			<h4 class="uppercase tracking-widest">My Role</h4>
			<ul>
				<li>Product Designer</li>
				<li>Webflow Developer</li>
			</ul>
		</div>
	</aside>

	{#each projects as { name, content }}
		<div class="lectura mx-auto max-w-prose">
			<h3 class="text-4xl italic text-base-content">
				{name}
			</h3>
			{@html content.html}
		</div>
	{/each}
</article>
