<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
	import { _session } from '$lib'
	let { op1, op2, op3, op4 } = $_session
	let changes = []
	let change = ''
	function applyChange() {
		_session.update((state) => {
			if (op1 !== state.op1) changes.push('Option1')
			if (op2 !== state.op2) changes.push('Option2')
			if (op3 !== state.op3) changes.push('Option3')
			if (op4 !== state.op4) changes.push('Option4')
			if (changes.length > 0) change = `${changes.join(', ')} => Updated`
			else change = 'No Changes'
			return { op1, op2, op3, op4 }
		})
	}
	const reset = () => {
		changes = []
		change = ''
	}
</script>

<section class="py-8">
	<div class="w-full max-w-3xl mx-auto px-4 nwp">
		<header class="py-4">
			<h2 class="">Settings</h2>
		</header>

		<article>
			<nav>
				<ul class="divide-y border-t border-b divide-slade-200 border-slade-200">
					<li>
						<label class="check-item" class:active={$_session.op1 != op1}>
							<span class="check-label"
								>Option 1
							</span>
							<span>
								{#if op1}
									<Fa icon={faToggleOn} size="2x" fw />
								{:else}
									<Fa icon={faToggleOff} size="2x" fw />
								{/if}
								<input
									class="sr-only"
									type="checkbox"
									on:change={reset}
									bind:checked={op1} />
							</span>
						</label>
					</li>
					<li>
						<label class="check-item" class:active={$_session.op2 != op2}>
							<span class="check-label"
								>Option 2</span>
								<span>
								{#if op2}
									<Fa icon={faToggleOn} size="2x" fw />
								{:else}
									<Fa icon={faToggleOff} size="2x" fw />
								{/if}
								<input
									class="sr-only"
									type="checkbox"
									on:change={reset}
									bind:checked={op2} />
							</span>
						</label>
					</li>
					<li>
						<label class="check-item" class:active={$_session.op3 != op3}>
							<span class="check-label"
								>Option 3</span>
								<span>
								{#if op3}
									<Fa icon={faToggleOn} size="2x" fw />
								{:else}
									<Fa icon={faToggleOff} size="2x" fw />
								{/if}
								<input
									class="sr-only"
									type="checkbox"
									on:change={reset}
									bind:checked={op3} />
							</span>
						</label>
					</li>
					<li>
						<label class="check-item" class:active={$_session.op4 != op4}>
							<span class="check-label">Option 4</span>
								<span>
								{#if op4}
									<Fa icon={faToggleOn} size="2x" fw />
								{:else}
									<Fa icon={faToggleOff} size="2x" fw />
								{/if}
								<input
									class="sr-only"
									type="checkbox"
									on:change={reset}
									bind:checked={op4} />
							</span>
						</label>
					</li>
				</ul>
				<div class="py-4">
					<button on:click={applyChange} class="btn btn-blue"
						>Save Changes</button>
				</div>
				<div class="py-4">
					{#if change !== ''}
						<pre class="bg-slate-100 rounded border py-2 px-3">{change}</pre>
					{/if}
				</div>
			</nav>
		</article>
	</div>
</section>

<style>
	.check-item {
		@apply flex items-center justify-between py-1 px-2 cursor-pointer text-slade-400;
	}
	.check-label {
		@apply text-lg font-semibold;
	}
	.check-item.active {
		@apply text-blue-600;
	}
</style>
