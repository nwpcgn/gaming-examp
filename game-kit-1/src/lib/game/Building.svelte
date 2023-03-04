<script>
	// import declarations
	import { onMount } from 'svelte'
	import { money } from './store'
	import { currencyToString } from './utils'

	// variable declarations
	let tickSpeed = 1000
	export let stop = false
	// props declarations
	export let name
	export let currencyProduced = money
	export let numberOfBuilding
	export let numberOfBuildingBought
	export let upgradeBonus

	// reactive declarations
	$: cantBuy = cost > $money
	$: cost = ($numberOfBuildingBought + 1) * 5
	$: buildingProduction = 1 + Math.floor(1 * upgradeBonus) // currency produced per building per tick
	$: productionPerTick = $numberOfBuilding * buildingProduction

	// function declarations

	// update the value of `currencyProduced` to the store, adding `n` to it.
	function updateMoney(n) {
		money.update((m) => m + n)
	}

	// update the value of `currencyProduced` to the store, adding `n` to it.
	function updateCurrencyProduced(n) {
		currencyProduced.update((m) => m + n)
	}

	// update the values of `currencyProduced` and `numberBuildings`
	function updateNumbers() {
		updateMoney(-cost)
		numberOfBuilding.update((n) => n + 1)
		numberOfBuildingBought.update((n) => n + 1)
	}

	// update `currencyProduced` with `productionPerTick` and set a timeout to call itself after `tickSpeed` ms
	function launchTimeout() {
		updateCurrencyProduced(productionPerTick)
		if (!stop) setTimeout(launchTimeout, tickSpeed)
	}

	// lifecycle functions
	onMount(() => {
		launchTimeout()
	})
</script>

<button on:click={updateNumbers} class:cantbuy={cantBuy} disabled={cantBuy}>
	<h3>{name}</h3>
	<p>
		{buildingProduction}{currencyToString(currencyProduced)}/tick: costs {cost}$.
	</p>
	<p>Owned:{$numberOfBuilding} ({$numberOfBuildingBought})</p>
</button>

<style>
	button {
		outline: 1px solid black;
		background: aliceblue;
		cursor: pointer;
	}

	button.cantbuy {
		background: #555;
		color: #ddd;
		cursor: default;
	}
</style>
