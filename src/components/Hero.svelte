<script>
	import NextFilled32 from 'carbon-icons-svelte/lib/NextFilled32';
	import { CITY_PHOTO } from '$lib/info';
</script>

<header
	class="flex h-screen items-end justify-center bg-black bg-cover bg-fixed bg-center bg-blend-luminosity"
	style="background-image: url({CITY_PHOTO})">
	<a href="#about-me">
		<NextFilled32
			class="mb-8 h-12 w-12 rotate-90 fill-accent mix-blend-hard-light" />
	</a>
</header>
