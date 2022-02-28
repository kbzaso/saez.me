<script>
	export let name = '';
	export let image = '';
	export let extract = '';
	export let slug = '';
	export let tags = [];
	export let section;
	import { marked } from 'marked';
</script>

<div id="projects" class="card w-full bg-base-100 shadow-xl">
	<a href={`${section}/${slug}`}>
		<figure><img src={image[0].url} alt={name} /></figure>
		<div class="card-body">
			<h2 class="card-title text-3xl italic">
				{name}
			</h2>
			<p>{@html marked(extract)}</p>
			<div class="card-actions justify-start">
				{#each tags as tag}
					<div class="badge bg-secondary">
						{tag}
					</div>
				{/each}
			</div>
		</div>
	</a>
</div>
