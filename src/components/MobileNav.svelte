<div class="drawer-side">
	<label for="my-drawer-4" class="drawer-overlay" />
	<ul
		class="menu w-80 flex-col overflow-y-auto bg-base-100 p-4 text-base-content">
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
		<!-- Sidebar content here -->
		<p class="uppercase tracking-widest">🖐 Hello there</p>
		<li class="mt-6">
			<a
				href="/"
				on:click={() => {
					document.getElementById('my-drawer-4').click();
				}}
				class="title underline decoration-4">>Home</a>
		</li>
		<li>
			<a
				href="/about-me"
				on:click={() => {
					document.getElementById('my-drawer-4').click();
				}}
				class="title underline decoration-4">>About me</a>
		</li>
		<div tabindex="0" class="collapse">
			<input type="checkbox" />
			<div class="title collapse-title">>Projects</div>
			<div class="collapse-content">
				<ul>
					<li class="ml-4">
						<a
							href="/development"
							on:click={() => {
								document.getElementById('my-drawer-4').click();
							}}
							class="title underline decoration-4">
							Development</a>
					</li>
					<li class="ml-4">
						<a
							href="/design"
							on:click={() => {
								document.getElementById('my-drawer-4').click();
							}}
							class="title underline decoration-4">
							Design</a>
					</li>
					<li class="ml-4">
						<a
							href="/audiovisual"
							on:click={() => {
								document.getElementById('my-drawer-4').click();
							}}
							class="title underline decoration-4">Audiovisual</a>
					</li>
				</ul>
			</div>
		</div>
		<li class="mt-2">
			<a
				href="#"
				type="button"
				data-tally-open="wLo013"
				data-tally-overlay="1"
				data-tally-emoji-text="🚀"
				data-tally-emoji-animation="wave"
				data-tally-auto-close="5000"
				class="title underline decoration-4"
				on:click={() => {
					document.getElementById('my-drawer-4').click();
				}}>>Contact</a>
		</li>
	</ul>
</div>
