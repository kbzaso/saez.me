<script>
	import Socialbox from './Socialbox.svelte';
	import Cv from './Cv.svelte';
	import { home } from '$lib/info';
</script>

<section>
	<main
		class="container mx-auto flex flex-col items-center px-5 sm:py-4 md:flex-row md:px-6 md:py-12 lg:px-4 xl:px-32">
		<div
			class="flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow">
			<h1
				class="mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text pb-1 text-left text-4xl font-extrabold italic leading-10 text-neutral-content text-transparent">
				{home.title}
			</h1>
			<p class="lectura">
				{home.description}
				<a class="italic" href={home.url}>{home.link}.</a>
			</p>
			<p class="paragraph mt-4 w-full">
				{home.icon}
				{home.bye}
			</p>
			<div class="flex w-full gap-4">
				<Socialbox />
				<Cv />
			</div>
		</div>

		<figure
			class="mask mask-squircle order-first mb-8 w-5/6 bg-universe bg-cover md:order-last md:mb-0 md:w-1/2 lg:my-0 lg:w-full lg:max-w-lg">
			<img
				class="object-cover object-center"
				alt="Profile of Alejandro"
				src={home.photo} />
		</figure>
	</main>
</section>
