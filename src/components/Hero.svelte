<script>
	export let homes;
	const { title, description, profile } = homes[0];
	import Socialbox from './Socialbox.svelte';
	import Cv from './Cv.svelte';
</script>

<section>
	<div
		class="container mx-auto flex px-5 xl:px-32 lg:px-4 md:px-6 md:py-12 sm:py-4 md:flex-row flex-col items-center"
	>
		<div
			class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="leading-10 italic text-4xl font-extrabold mb-4 text-neutral-content pb-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-left">
			 {title}
			</h1>
			<!-- <span class="">🖐</span> -->
			<p class="leading-relaxed text-lg text-neutral-content text-left">
				{description}
			</p>
			<div class="flex gap-4 ">
				<Socialbox/>
				<Cv/>
			</div>
		</div>

		<div
			class="rotate-6  my-0 lg:my-0 md:order-last order-first lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mask mask-hexagon bg-universe bg-cover"
		>
			<img
				class="object-cover object-center"
				alt="Profile of Alejandro"
				src={profile.url}
			/>
		</div>
	</div>
</section>
