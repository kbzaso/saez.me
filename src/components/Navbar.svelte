<script>
	import Logo from '../../static/logo.svg';
</script>

<div class="navbar mb-2 pt-6 text-neutral-content">
	<div class="flex-1 px-2 mx-2">
		<a href="/"><img src={Logo} alt="Logotipo Alejandor Sáez" class="w-16" /></a>
	</div>
	<div class="flex-none px-2 mx-2 ">
		<div class="flex items-stretch gap-4">
			<button type="button" class="btn btn-outline btn-accent transition ease-in-out btn-sm rounded-btn hover:shadow-lg hover:shadow-cyan-500/50" data-tally-open="wLo013" data-tally-overlay="1" data-tally-emoji-text="🚀" data-tally-emoji-animation="wave" data-tally-auto-close="5000">
				Contact Me 
			</button>
		</div>
	</div>
	<div class="flex-none hidden">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>
</div>
