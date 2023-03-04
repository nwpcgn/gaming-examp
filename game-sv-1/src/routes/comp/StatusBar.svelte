<script>
	import { _battle } from './stores'
	const icon1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0z"/></g></svg>`
	const icon2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></g></svg>`
	const format = (int) => {
		return Number.parseFloat(int).toFixed(1)
	}
</script>

<article class="mt-8 py-8" data-pg-name="StatusBar">
	<div class="gap-2 grid grid-cols-2 p-2">
		<nav class="flex flex-col p-3 rounded-lg shadow">
			<header class="flex mb-1">
				<span class="mr-2 text-4xl">{@html icon1}</span>
				<h2 class="text-4xl">Knight</h2>
			</header>
			<div class="px-2">
				<h4 class="text-2xl">Player {format($_battle.playerHealth)}</h4>
			</div>
			<div class="px-2 py-4">
				<progress
					max={$_battle.playerHealthMax}
					value={$_battle.playerHealth} />
			</div>
		</nav>
		<nav class="flex flex-col p-3 rounded-lg shadow">
			<header class="flex mb-1">
				<span class="mr-2 text-4xl">{@html icon2}</span>
				<h2 class="text-4xl">Goblin</h2>
			</header>
			<div class="px-2">
				<h4 class="text-2xl">
					Enemy {format($_battle.enemyHealth)}
				</h4>
			</div>
			<div class="px-2 py-4">
				<progress max={$_battle.enemyHealthMax} value={$_battle.enemyHealth} />
			</div>
		</nav>
	</div>
</article>
