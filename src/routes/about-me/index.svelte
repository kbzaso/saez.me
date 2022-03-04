<script context="module">
	import { client } from '$lib/graphql-client';
	import { homeQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { assets } = await client.request(homeQuery);

		return {
			status: 200,
			props: {
				assets,
			},
		};
	};
</script>

<script>
	import SocialIcons from '../../components/SocialIcons.svelte';
	export let assets;
</script>

<article class="contenedor prose">
	<h3
		class="mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text pb-1 text-left text-4xl font-extrabold italic leading-10 text-neutral-content text-transparent">
		I’m Chilean mind currently based in Santiago, Chile.
	</h3>
	<p class=" text-2xl leading-normal ">
		A freelance creative, nowadays working with growing businesses in
		their digital transformation. Mainly, I focus on creating
		efficient interfaces that makes technology easier to use.
	</p>
	<div class="flex flex-col md:flex-row md:gap-12 lg:gap-20">
		<div class="w-full md:w-1/2">
			<img
				class=""
				src={assets[3].url}
				alt="Alejandro seat in a stairs" />
		</div>
		<div class="w-full md:w-1/2">
			<p
				class="lectura first-letter:float-left first-letter:mr-3
			first-letter:text-7xl first-letter:font-bold first-letter:text-accent
			first-line:uppercase first-line:tracking-widest">
				I'm fueled by my curiosity about problem-solving through
				visual design. I consider myself a 'forever student', eager to
				build on my design knowledge and keep learning software
				development through continued coursework and professional
				development.
			</p>
			<p class="lectura">
				I’m part of <a
					href="https://platzi.com/master/"
					target="_blank">Platzi Master</a> what it is an intensive education
				program that train future tech leaders in Latin America. My main
				focus on the program is front-end development with React and Nextjs,
				working with agile methodologies like SCRUM. Also I completed additional
				courses in Product Design, User Experience and Soft skills paths.
			</p>
			<p class="lectura">
				I’m currently working as a freelance front-end developer but
				also open for design gigs, I always interested in a challenge.
				<button
					type="button"
					class="text-secondary underline
					decoration-cyan-500
					decoration-solid
					decoration-2

					hover:text-primary
					hover:decoration-primary
					hover:decoration-wavy
					hover:decoration-1"
					data-tally-open="wLo013"
					data-tally-overlay="1"
					data-tally-emoji-text="🚀"
					data-tally-emoji-animation="wave"
					data-tally-auto-close="5000">Reach me out!</button>
			</p>
			<!-- <p class="paragraph">
				I’m currently working as a freelance front end developer but
				also open for design gigs, I always interested in a challenge.
				Reach me out!
			</p> -->
			<SocialIcons />
		</div>
	</div>

	<div
		class="flex items-center rounded-lg border-2 p-2 text-neutral shadow-sm">
		<div class="mr-4 fill-secondary p-3">
			<svg class="text-400 h-10 w-10 px-1" viewBox="0 0 16 16">
				<path
					fill-rule="evenodd"
					d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z" />
			</svg>
		</div>
		<div>
			<p class="lectura">
				This site is in constant development. The technologies I'm
				using are <a href="https://github.com/" target="_blank"
					>Github</a
				>,
				<a href="https://vercel.com/" target="_blank">Vercel</a>,
				<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a
				>,
				<a href="https://tailwindcss.com/" target="_blank">Tailwind</a
				>,
				<a href="https://daisyui.com/" target="_blank">DaisyUI</a>
				and
				<a href="https://graphcms.com/" target="_blank">GraphCms</a>.
				And the languages are HTML, CSS, JavaScript and GraphQL
			</p>
		</div>
	</div>
</article>
