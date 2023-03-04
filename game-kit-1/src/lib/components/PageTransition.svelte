<script>
	import { fly } from 'svelte/transition'
	export let pathname = ''
</script>

{#key pathname}
	<section
		in:fly={{ x: -10, duration: 500, delay: 500 }}
		out:fly={{ x: 10, duration: 500 }}>
		<slot />
	</section>
{/key}

<style>
	section {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
