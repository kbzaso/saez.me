<script>
	import SocialIcons from '../../components/SocialIcons.svelte';
	const CITY_PHOTO =
		'https://media.graphcms.com/output=format:webp/resize=height:800,fit:max/BzsYO2gTP617gt5UZMR8';
</script>

<article class="contenedor prose mb-8">
	<h3
		class="mb-4 mt-10 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text pb-1 text-left text-4xl font-extrabold italic leading-10 text-neutral-content text-transparent">
		I’m a Chilean soul currently based in Santiago, Chile.
	</h3>
	<p class="text-2xl leading-normal ">
		A freelance creative, nowadays working with growing businesses in
		their digital transformation. Mainly, I focus on creating
		efficient interfaces that make technology easier to use, but also
		I feel persuaded on brand identity, brand strategy, and motion
		graphics.
	</p>
	<div class="flex flex-col md:flex-row md:gap-12 lg:gap-20">
		<figure class="m-0 h-full w-full md:w-1/2">
			<img src={CITY_PHOTO} alt="Alejandro seat in a stairs" />
		</figure>
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
				program that prepares future tech leaders in Latin America. My
				main focus on the program is front-end development with React and
				Nextjs, working with agile methodologies like SCRUM. Additionally,
				I have completed additional courses in Product Design, User Experience,
				and Soft skills paths.
			</p>
			<p class="lectura">
				I’m currently working as a freelance front-end developer but
				also open for design gigs, I'm always interested in a
				challenge.
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
		class="mt-4 flex items-center rounded-lg border-2 border-neutral p-2 shadow-sm lg:mt-0">
		<div class="mr-4 fill-secondary p-3">
			<svg class="text-400 h-10 w-10 px-1" viewBox="0 0 16 16">
				<path
					fill-rule="evenodd"
					d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z" />
			</svg>
		</div>
		<div>
			<p class="lectura text-neutral">
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
