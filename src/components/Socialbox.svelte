<script>
    import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaBehance from 'svelte-icons/fa/FaBehance.svelte';
	import FaDribbble from 'svelte-icons/fa/FaDribbble.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<div class="rounded p-4 mt-8 bg-cyan-900/25 hover:scale-110 hover:rotate-2">
    <h3 class="text-lg mb-2 text-neutral-content">You can follow me on:</h3>
    <div class="flex justify-evenly w-full">
        <a
            href="https://www.linkedin.com/in/alejandrosapa/" target="_blank"
            class="w-10 p-2 transition ease-in-out text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-150"
        >
            <FaLinkedinIn />
        </a>
        <a
            href="https://github.com/kbzaso/" target="_blank"
            class="w-10 p-2 transition ease-in-out text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-150"
        >
            <FaGithub />
        </a>
        <a
            href="https://www.behance.net/kbzaso" target="_blank"
            class="w-12 p-2 transition ease-in-out text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-150"
        >
            <FaBehance />
        </a>
        <a
            href="https://dribbble.com/kbzaso" target="_blank"
            class="w-10 p-2 transition ease-in-out text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-150"
        >
            <FaDribbble />
        </a>
    </div>
</div>