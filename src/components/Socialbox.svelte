<script>
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaBehance from 'svelte-icons/fa/FaBehance.svelte';
	import FaDribbble from 'svelte-icons/fa/FaDribbble.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<div
	class="mt-8 w-8/12 rounded bg-cyan-900/25 p-4 hover:rotate-2 hover:scale-110 lg:w-auto">
	<h3 class="mb-2 text-lg text-neutral-content md:text-center">
		You can follow me on:
	</h3>
	<div class="flex w-full justify-evenly">
		<a
			href="https://www.linkedin.com/in/alejandrosapa/"
			target="_blank"
			class="w-10 p-2 text-accent transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary">
			<FaLinkedinIn />
		</a>
		<a
			href="https://github.com/kbzaso/"
			target="_blank"
			class="w-10 p-2 text-accent transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary">
			<FaGithub />
		</a>
		<a
			href="https://www.behance.net/kbzaso"
			target="_blank"
			class="w-12 p-2 text-accent transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary">
			<FaBehance />
		</a>
		<a
			href="https://dribbble.com/kbzaso"
			target="_blank"
			class="w-10 p-2 text-accent transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary">
			<FaDribbble />
		</a>
	</div>
</div>
