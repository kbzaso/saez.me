<script>
	export let name = '';
	export let image = '';
	export let extract = '';
	export let slug = '';
	export let worktype = '';
	export let category;
	import { marked } from 'marked';
</script>

<div
	class="card w-full bg-base-300 shadow-xl transition duration-150 ease-in-out hover:rotate-2 hover:scale-105 hover:bg-neutral-focus hover:shadow-lg">
	<a href={`/${worktype}/${slug}`}>
		<figure>
			<img src={image[0].url} alt={name} />
		</figure>
		<div class="card-body pb-4">
			<h2 class="card-title text-3xl italic text-accent line-clamp-2">
				{name}
			</h2>
			<p class="text-neutral-content line-clamp-3">
				{@html marked(extract)}
			</p>
		</div>
		<div class="badge badge-accent ml-8 mb-8">{category}</div>
	</a>
</div>
