<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let disabled
	const onHandle = (event) => {
		if (!disabled) dispatch('click', event)
	}
</script>

<button on:click={onHandle} class:disabled {disabled}>
	<slot />
</button>

<style>
	button {
		@apply border-2 p-3 rounded-lg shadow-lg text-left cursor-pointer;
	}
	button.disabled {
		@apply opacity-50 cursor-not-allowed;
	}
</style>
