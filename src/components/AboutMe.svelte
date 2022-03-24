<script>
	export let cta = '';
	export let content = '';
</script>

<main
	id="about-me"
	class="contenedor mt-12 flex h-fit scroll-mt-12 flex-col justify-center">
	<p
		class="prose-2xl prose prose-p:text-xl first:first-letter:prose-p:float-left first:first-letter:prose-p:mr-3 first:first-letter:prose-p:text-9xl first:first-line:prose-p:tracking-widest first:first-letter:prose-p:first-line:uppercase first-of-type:first-letter:prose-p:font-bold
		first-of-type:first-letter:prose-p:text-accent
		prose-a:text-secondary prose-a:decoration-cyan-500 prose-a:decoration-solid prose-a:decoration-2 md:prose-p:text-2xl">
		{@html content.html}
	</p>

	<button
		type="button"
		class="text-left text-xl text-secondary underline decoration-cyan-500
                decoration-solid
                decoration-2
                hover:text-primary
                hover:decoration-primary
                hover:decoration-wavy
                hover:decoration-1
                md:text-2xl"
		data-tally-open="wLo013"
		data-tally-layout="modal"
		data-tally-width="375"
		data-tally-hide-title="1"
		data-tally-emoji-text="👋"
		data-tally-emoji-animation="wave"
		data-tally-auto-close="2000">{cta}</button>
</main>
