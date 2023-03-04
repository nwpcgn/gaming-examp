<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let attacks = [["Shield Bash",2,3,"🛡️ You are trying to bash the opponent away with your shield ...","💫 The enemy dodges your attack ..."],["Mace Attack",6,6,"🔨 You are trying hit the enemy with a huge mace ...","💫 The enemy dodges your attack ..."],["Magic Attack",1,4,"🌀 You are trying to cast a spell on your opponent ...","💫 The enemy dodges your attack ..."]];
	export let disabled = false
    const onHandle = (event) => {
		let i = event.currentTarget.dataset.id
		dispatch('action', attacks[i])
	}
</script>

<article class="py-8" data-pg-name="ActionBar">
	<div class="gap-2 grid grid-cols-3 p-2">
		{#each attacks as atc, i}
			<button data-id={i} on:click={onHandle} {disabled}>{atc[0]}</button>
		{/each}
	</div>
</article>

<style>
	button {
		@apply active: shadow-lg duration-200 ease-linear focus:outline-none outline-none shadow transition-all;
		@apply mb-1 mr-1 px-6 py-3 rounded;
		@apply font-medium text-base;
	}

	button {
		@apply active: bg-blue-600 bg-blue-500 text-gray-50 active:text-white;
	}

	button[disabled] {
		@apply active: bg-gray-200 active:text-gray-800 bg-gray-100;
	}
</style>
