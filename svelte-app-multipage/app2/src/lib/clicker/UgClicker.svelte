<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	const onHandle = (event) => {
		dispatch('click', event)
	}
</script>

<button
	on:click={onHandle}
	class="flex items-center justify-center  w-full h-full border rounded active:border-b-2 active:shadow-lg active:text-gray-500">
	<span class="font-serif text-3xl font-bold">
		<slot>CLICK</slot>
	</span>
</button>
