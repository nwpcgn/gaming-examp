<script>
	// import declarations
	import { money } from './store'
	import { currencyToString } from './utils'

	// props declarations
	export let name
	export let numberOfUpgradeBought
	export let initialCost

	// reactive declarations
	$: cantBuy = cost > $money
	$: cost = initialCost * Math.pow(100, $numberOfUpgradeBought)

	// function declarations

	// update the value of `currencyProduced` to the store, adding `n` to it.
	function updateMoney(n) {
		money.update((m) => m + n)
	}

	// update the values of `currencyProduced` and `numberBuildings`
	function updateNumbers() {
		updateMoney(-cost)
		numberOfUpgradeBought.update((n) => n + 1)
	}
</script>

<button on:click={updateNumbers} class:cantbuy={cantBuy} disabled={cantBuy}>
	<h3>{name}</h3>
	<p>costs {cost}$.</p>
	<p>Owned:{$numberOfUpgradeBought}</p>
</button>

<style>
	button {
		outline: 1px solid black;
		background: aquamarine;
		cursor: pointer;
	}

	button.cantbuy {
		background: #555;
		color: #ddd;
		cursor: default;
	}
</style>
