<script>
	import { slide } from 'svelte/transition';
	import { menu, projects } from '$lib/info';
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
	const closeDrawer = () => {
		document.getElementById('my-drawer-4').click();
	};
</script>

<div class="drawer-side">
	<label for="my-drawer-4" class="drawer-overlay" />
	<ul
		class="menu w-80 flex-col gap-2 overflow-y-auto bg-base-100 p-4">
		<label
			class="btn-outline btn btn-circle self-end"
			for="my-drawer-4">
			<!-- close icon -->
			<svg
				class="swap-off fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><polygon
					points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
		</label>
		<p class="uppercase tracking-widest">🖐 Hello there</p>
		<li class="mt-6">
			<a
				href={menu.home.url}
				on:click={closeDrawer}
				class="text-4xl font-extrabold capitalize italic leading-10 text-base-content underline decoration-4 "
				>{menu.home.name}</a>
		</li>
		<li>
			<a
				href={menu.about.url}
				on:click={closeDrawer}
				class="text-4xl font-extrabold capitalize italic leading-10 text-base-content underline decoration-4 "
				>{menu.about.name}</a>
		</li>
		<li>
			<span
				class="text-4xl font-extrabold italic leading-10 text-base-content underline decoration-cyan-500 decoration-4 "
				on:click={toggle}
				aria-expanded={isOpen}
				><svg
					style="tran"
					width="20"
					height="30"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
					viewBox="0 0 18 24"
					stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
				>Projects</span>
			{#if isOpen}
				<span
					class="ml-4 flex flex-col items-start text-3xl font-extrabold italic leading-10 text-base-content underline decoration-pink-500 decoration-4 hover:bg-transparent"
					transition:slide={{ duration: 300 }}>
					{#each projects as project}
						<a
							on:click={toggle}
							on:click={closeDrawer}
							href={project.url}>{project.name}</a>
					{/each}
				</span>
			{/if}
		</li>
		<li>
			<button
				type="button"
				data-tally-open="wLo013"
				data-tally-overlay="1"
				data-tally-emoji-text="🚀"
				data-tally-emoji-animation="wave"
				data-tally-auto-close="5000"
				class="text-4xl font-extrabold italic leading-10 text-base-content underline decoration-accent decoration-4"
				on:click={closeDrawer}>{menu.contact}</button>
		</li>
	</ul>
</div>

<style>
	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
</style>
