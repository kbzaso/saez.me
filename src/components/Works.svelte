<script>
	export let name = '';
	export let image = '';
	export let slug = '';
	export let extract = '';
	export let category;
	import { marked } from 'marked';

	let hover = false;

	let extractDiv;
	let nameDiv;
	let backgroundDiv;
	function Hover() {
		hover = true;
		extractDiv.classList.replace(
			'lg:translate-y-48',
			'lg:translate-y-0'
		);
		nameDiv.classList.replace(
			'lg:-translate-x-[32rem]',
			'lg:translate-y-0'
		);

		backgroundDiv.classList.replace(
			'lg:translate-y-96',
			'lg:translate-y-0'
		);
	}

	function Exit() {
		extractDiv.classList.replace(
			'lg:translate-y-0',
			'lg:translate-y-48'
		);
		nameDiv.classList.replace(
			'lg:translate-y-0',
			'lg:-translate-x-[32rem]'
		);

		backgroundDiv.classList.replace(
			'lg:translate-y-0',
			'lg:translate-y-96'
		);
	}
</script>

<a href={`/work/${slug}`}>
	<div
		on:mouseenter={Hover}
		on:mouseleave={Exit}
		class="space-between relative flex h-96 w-full flex-col justify-end overflow-hidden  bg-cover bg-center shadow-xl transition-all lg:hover:scale-105"
		style="background-image: url({image[0].url});">
		<h3
			bind:this={nameDiv}
			class="absolute bottom-4 z-10 order-2 ml-4 pb-1 text-left text-3xl italic text-accent transition duration-300 ease-in-out line-clamp-2 lg:bottom-20 lg:-translate-x-[32rem] lg:text-4xl">
			{name}
		</h3>
		<div class="order-1 mr-4 mt-4 flex flex-1 gap-4 self-end">
			{#each category as cat}
				<div class="badge badge-accent capitalize">
					{cat}
				</div>
			{/each}
		</div>
		<p
			bind:this={extractDiv}
			class="absolute z-10 order-3 mx-4 mb-4 hidden text-lg text-white transition duration-300 ease-in-out lg:translate-y-48 lg:line-clamp-2">
			{extract}
		</p>

		<div
			bind:this={backgroundDiv}
			class="absolute z-0 h-full w-full bg-gradient-to-t from-base-300 transition duration-300 ease-in-out lg:visible lg:translate-y-96" />
	</div>
</a>
