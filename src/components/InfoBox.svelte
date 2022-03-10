<script>
	export let timeline = '';
	export let myrole = [];
	export let deliverables = [];
	export let technologies = [];
</script>

<aside
	class="my-8 grid h-fit grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-6 rounded-lg border-2 border-neutral p-4 shadow-sm transition prose-h4:text-primary">
	<div class="h-fit">
		<h4 class="uppercase tracking-widest">Timeline</h4>
		<p>{timeline}</p>
	</div>
	<div class="h-fit">
		<h4 class="uppercase tracking-widest">My Role</h4>
		{#each myrole as role}
			<p>{role}</p>
		{/each}
	</div>
	<div class="h-fit">
		<h4 class="uppercase tracking-widest">Deliverables</h4>
		{#each deliverables as deli}
			<p>{deli}</p>
		{/each}
	</div>
	<div class="h-fit">
		<h4 class="uppercase tracking-widest">technologies</h4>
		<ul>
			{#each technologies as tech}
				<li>{tech}</li>
			{/each}
		</ul>
	</div>
</aside>
