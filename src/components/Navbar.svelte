<script>
	import { page } from '$app/stores';
	import ThemeSelect from './Theme-select.svelte';
	import { CITY_PHOTO, RANDOM_PHOTOS } from '$lib/info';
	import { onMount } from 'svelte';
	import SocialIcons from '../components/SocialIcons.svelte';
	import Close32 from 'carbon-icons-svelte/lib/Close32';
	import { gsap, Expo } from 'gsap';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let mount = false;
	$: menuPhoto = RANDOM_PHOTOS[0];
	afterNavigate(() => {
		setTimeout(() => {
			let random = Math.floor(Math.random() * RANDOM_PHOTOS.length);
			menuPhoto = RANDOM_PHOTOS[random];
		}, 1800);
		return menuPhoto;
	});

	let tl = gsap.timeline({ defaults: { duration: 0.3 } });

	onMount(() => {
		mount = true;
		tl.to('#menu-left', { left: 0, ease: Expo.easeInOut });
		tl.to('#menu-right', { right: 0, ease: Expo.easeInOut });
		tl.from('.menu-link', {
			y: 100,
			opacity: 0,
			ease: Expo.easeOut,
			stagger: 0.1,
		});

		tl.to(
			'#menu-close',
			{
				scale: 1,
				ease: Expo.easeInOut,
			},
			'-=1.3'
		);

		tl.reverse();
	});

	let open = false;
	function openMenu() {
		tl.play();
		open = true;
	}

	function closeMenu() {
		tl.reverse();
		open = false;
	}

	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<nav class="fixed top-0 z-10 mx-auto flex w-full ">
	<div
		class="w-full p-2 transition {scroll > 30
			? 'bg-base-200/90 shadow-lg'
			: 'bg-transparent'} {mount ? 'flex' : 'invisible'}">
		<!-- LOGO -->
		{#if mount}
			<div class="flex-1" transition:fade>
				<div
					class={$page.url.pathname !== '/'
						? 'tooltip tooltip-right'
						: ''}
					data-tip="Back to home 🤚">
					<a
						href="/"
						class="btn border-0 bg-transparent hover:bg-transparent">
						<svg
							class="h-16 fill-base-content transition duration-150 ease-in-out hover:scale-110"
							viewBox="0 0 661 868"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M440.921,206.441c-32.422,26.099 -62.92,166.442 -42.458,204.865c30.595,-62.807 45.947,-128.889 65.496,-192.315c-8.984,-4.892 -15.93,-8.677 -23.038,-12.55m-346.22,371.619c46.133,-65.302 51.208,-165.197 56.334,-247.307c-39.849,74.128 -85.724,161.073 -56.334,247.307m202.553,-516.515c-25.8,41.988 -49.339,85.356 -73.368,128.375c-13.735,109.967 25.965,226.723 -12.562,335.825c-21.381,101.011 -151.277,181.01 -162.913,29.147c-1.339,-99.171 46.06,-192.052 91.829,-277.533c22.165,-38.265 13.622,-80.545 21.429,-124.721c-95.743,116.44 -139.911,247.707 -147.395,392.187c-13.031,-19.594 -12.348,-48.127 -13.747,-70.878c1.763,-145.179 89.201,-259.885 174.683,-369.451c9.125,-15.712 51.134,-90.807 59.039,-39.705c-3.154,21.3 -7.792,42.381 -9.813,64.465c12.772,-14.661 106.417,-174.585 117.519,-115.203c1.929,62.706 1.343,124.409 -5.328,186.938c23.062,-40.845 47.673,-80.949 72.749,-120.577c49.582,-64.986 123.31,-67.21 131.744,27.102c2.515,36.154 3.509,72.438 4.172,108.681c0.308,23.038 37.097,21.91 53.609,29.835c17.588,3.679 30.162,-21.292 48.045,-10.626c11.637,6.514 14.415,17.9 13.707,30.288c-5.737,60.317 -83.763,64.974 -128.606,44.867c-18.587,57.22 -43.901,121.612 -101.149,149.854c-131.303,44.576 -55.323,-225.817 -12.231,-272.023c17.026,-20.564 28.549,-21.696 53.245,-7.771c3.55,-30.708 32.249,-148.192 -27.166,-96.871c-174.582,182.914 -146.097,464.123 -113.311,695.087c1.257,28.161 22.06,78.645 -16.545,88.312c-26.495,4.593 -34.149,-26.604 -40.064,-46.521c-75.171,-248.617 -19.043,-511.918 22.428,-759.083" /></svg>
					</a>
				</div>
			</div>
		{/if}

		<!-- THEME CHANGER -->
		<div class=" mt-3 mr-4 inline-block flex-none">
			<ThemeSelect />
		</div>
		{#if mount}
			<!-- HAMBURGER MENU -->
			<div
				transition:fade
				class="mt-2 cursor-pointer"
				on:click={openMenu}>
				<!-- hamburger icon -->
				<svg
					class="swap-on h-12 w-12 fill-secondary hover:fill-primary"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path
						d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
			</div>
		{/if}
	</div>
</nav>

<div
	id="menu-close"
	on:click={closeMenu}
	class="fixed top-[10%] left-[80%] z-40 -translate-x-1/2 -translate-y-1/2 scale-0 cursor-pointer lg:top-[50%] lg:left-[50%] ">
	<Close32
		class="h-16 w-16 rounded-full bg-base-100 transition ease-in-out hover:scale-110 hover:bg-error lg:h-32 lg:w-32" />
</div>

<div
	id="menu-left"
	class="fixed -left-[100%] z-20 flex h-screen w-full items-center justify-center bg-base-300 text-secondary lg:w-[50%]">
	<div class="menu-links flex flex-col gap-8">
		<div class="menu-link">
			<a
				on:click={closeMenu}
				href="/"
				class="decoration-3 text-4xl italic underline hover:text-accent lg:text-6xl"
				>Home</a>
			<span class="text-2xl">01</span>
		</div>
		<div class="menu-link">
			<a
				on:click={closeMenu}
				href="/design"
				class="decoration-3 text-4xl italic underline hover:text-accent lg:text-6xl"
				>Design
			</a>
			<span class="text-2xl">02</span>
		</div>

		<div class="menu-link">
			<a
				on:click={closeMenu}
				href="/development"
				class="decoration-3 text-4xl italic underline hover:text-accent lg:text-6xl"
				>Development</a>
			<span class="text-2xl">03</span>
		</div>
		<div class="menu-link">
			<span
				data-tally-open="wLo013"
				data-tally-layout="modal"
				data-tally-width="375"
				data-tally-hide-title="1"
				data-tally-emoji-text="👋"
				data-tally-emoji-animation="wave"
				data-tally-auto-close="2000"
				class="decoration-3 cursor-pointer text-4xl italic underline hover:text-accent lg:text-6xl">
				Say Hi!
			</span>
			<span class="text-2xl">04</span>
		</div>

		<div class="menu-link">
			<span class="text-4xl italic lg:text-6xl">Follow me</span>
			<span class="text-2xl">05</span>
		</div>
		<div class="menu-link ">
			<SocialIcons />
		</div>

		<div class="menu-link ">
			<svg
				class="h-12 fill-white"
				viewBox="0 0 661 868"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M440.921,206.441c-32.422,26.099 -62.92,166.442 -42.458,204.865c30.595,-62.807 45.947,-128.889 65.496,-192.315c-8.984,-4.892 -15.93,-8.677 -23.038,-12.55m-346.22,371.619c46.133,-65.302 51.208,-165.197 56.334,-247.307c-39.849,74.128 -85.724,161.073 -56.334,247.307m202.553,-516.515c-25.8,41.988 -49.339,85.356 -73.368,128.375c-13.735,109.967 25.965,226.723 -12.562,335.825c-21.381,101.011 -151.277,181.01 -162.913,29.147c-1.339,-99.171 46.06,-192.052 91.829,-277.533c22.165,-38.265 13.622,-80.545 21.429,-124.721c-95.743,116.44 -139.911,247.707 -147.395,392.187c-13.031,-19.594 -12.348,-48.127 -13.747,-70.878c1.763,-145.179 89.201,-259.885 174.683,-369.451c9.125,-15.712 51.134,-90.807 59.039,-39.705c-3.154,21.3 -7.792,42.381 -9.813,64.465c12.772,-14.661 106.417,-174.585 117.519,-115.203c1.929,62.706 1.343,124.409 -5.328,186.938c23.062,-40.845 47.673,-80.949 72.749,-120.577c49.582,-64.986 123.31,-67.21 131.744,27.102c2.515,36.154 3.509,72.438 4.172,108.681c0.308,23.038 37.097,21.91 53.609,29.835c17.588,3.679 30.162,-21.292 48.045,-10.626c11.637,6.514 14.415,17.9 13.707,30.288c-5.737,60.317 -83.763,64.974 -128.606,44.867c-18.587,57.22 -43.901,121.612 -101.149,149.854c-131.303,44.576 -55.323,-225.817 -12.231,-272.023c17.026,-20.564 28.549,-21.696 53.245,-7.771c3.55,-30.708 32.249,-148.192 -27.166,-96.871c-174.582,182.914 -146.097,464.123 -113.311,695.087c1.257,28.161 22.06,78.645 -16.545,88.312c-26.495,4.593 -34.149,-26.604 -40.064,-46.521c-75.171,-248.617 -19.043,-511.918 22.428,-759.083" /></svg>
		</div>
	</div>
</div>
<div
	id="menu-right"
	class="fixed -right-[51%] z-20 hidden h-screen w-[50%] lg:inline-block">
	<img
		src={menuPhoto}
		alt="menu background"
		class="h-full w-full object-cover" />
</div>
