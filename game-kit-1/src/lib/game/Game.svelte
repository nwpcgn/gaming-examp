<script>
	// import declarations
	import Building from './Building.svelte'
	import Upgrade from './Upgrade.svelte'
	import {
		money,
		proofs,
		firstNum,
		firstBoughtNum,
		secondNum,
		secondBoughtNum,
		combinatoricsNum,
		combinatoricsBoughtNum,
		probabilityNum,
		probabilityBoughtNum,
		firstRowUpgradeBoughtNum,
		secondRowUpgradeBoughtNum
	} from './store.js'
	import { currencyToString } from './utils.js'

	// variable declarations
	let firstUpgradePerBuilding = 0.25
	let secondUpgradePerBuilding = 1
	let stop = false
	// reactive declarations
	$: firstTierBuildingBought = $firstBoughtNum + $combinatoricsBoughtNum
	$: secondTierBuildingBought = $secondBoughtNum + $probabilityBoughtNum
	$: firstTierBuildingUpgradeBonus =
		firstTierBuildingBought *
		firstUpgradePerBuilding *
		$firstRowUpgradeBoughtNum
	$: secondTierBuildingUpgradeBonus =
		secondTierBuildingBought *
		secondUpgradePerBuilding *
		$secondRowUpgradeBoughtNum

	// function declarations

	// lifecycle functions
</script>

<h1>
	You have {$money}{currencyToString(money)} and {$proofs}{currencyToString(
		proofs
	)}!
</h1>

<div class="grid grid-cols-2 gap-2 py-2">
	<Building
		bind:stop
		name="1th "
		numberOfBuilding={firstNum}
		numberOfBuildingBought={firstBoughtNum}
		upgradeBonus={firstTierBuildingUpgradeBonus} />
	<Building
		bind:stop
		name="Combinatorics"
		currencyProduced={proofs}
		numberOfBuilding={combinatoricsNum}
		numberOfBuildingBought={combinatoricsBoughtNum}
		upgradeBonus={firstTierBuildingUpgradeBonus} />

	<Building
		bind:stop
		name="2nde "
		currencyProduced={firstNum}
		numberOfBuilding={secondNum}
		numberOfBuildingBought={secondBoughtNum}
		upgradeBonus={secondTierBuildingUpgradeBonus} />
	<Building
		bind:stop
		name="Probability"
		currencyProduced={combinatoricsNum}
		numberOfBuilding={probabilityNum}
		numberOfBuildingBought={probabilityBoughtNum}
		upgradeBonus={secondTierBuildingUpgradeBonus} />
</div>
<div>
	<button on:click={() => (stop = !stop)}>{stop ? 'Run' : 'Pause'}</button>
</div>

<div class="grid grid-cols-2 gap-2 py-2">
	<Upgrade
		name="First row"
		numberOfUpgradeBought={firstRowUpgradeBoughtNum}
		initialCost={100} />
	<Upgrade
		name="Second row"
		numberOfUpgradeBought={secondRowUpgradeBoughtNum}
		initialCost={10000} />
</div>

<style>
</style>
