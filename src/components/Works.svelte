<script>
	export let name = '';
	export let image = '';
	export let slug = '';
	export let extract = '';
	export let category;
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	let hover = false;

	let extractDiv;
	let nameDiv;
	let categoryDiv;
	let backgroundDiv;
	onMount(() => {});
	function Hover() {
		hover = true;
		console.log(extractDiv);
		extractDiv.classList.replace(
			'lg:translate-y-48',
			'lg:translate-y-0'
		);
		nameDiv.classList.replace(
			'lg:-translate-x-[32rem]',
			'lg:translate-y-0'
		);
		categoryDiv.classList.replace(
			'lg:-translate-x-24',
			'lg:translate-x-0'
		);
		backgroundDiv.classList.replace(
			'lg:translate-y-96',
			'lg:translate-y-0'
		);
	}

	function Exit() {
		console.log('exit');
		extractDiv.classList.replace(
			'lg:translate-y-0',
			'lg:translate-y-48'
		);
		nameDiv.classList.replace(
			'lg:translate-y-0',
			'lg:-translate-x-[32rem]'
		);
		categoryDiv.classList.replace(
			'lg:translate-x-0',
			'lg:-translate-x-24'
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
		class="space-between relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center shadow-xl transition-all lg:hover:scale-105"
		style="background-image: url({image[0].url});">
		<h3
			bind:this={nameDiv}
			class="absolute bottom-4 z-10 order-2 ml-4 pb-1 text-left text-3xl italic text-accent transition duration-300 ease-in-out line-clamp-2 lg:bottom-20 lg:-translate-x-[32rem] lg:text-4xl">
			{name}
		</h3>
		<div
			bind:this={categoryDiv}
			class="badge badge-secondary absolute right-4 top-4 z-10 order-1">
			{category}
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
