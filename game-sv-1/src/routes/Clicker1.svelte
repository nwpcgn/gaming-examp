<script>
	import UgClicker from './UgClicker.svelte'

	import UgHeader from './UgHeader.svelte'
	import UgPanel from './UgPanel.svelte'
	import { onMount } from 'svelte'
	import Page from '../lib/components/Page.svelte'
	import UgContent from './UgContent.svelte'
	import { _game } from '../lib/data'
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faCoins } from '@fortawesome/free-solid-svg-icons'

	let {
		money,
		moneyup,
		msec,
		upcost,
		catcost,
		workercost,
		upown,
		catown,
		workerown,
		catadd,
		workadd,
		cboost,
		wboost,
		catmax,
		workmax
	} = $_game

	const saveAll = () => {
		_game.set({
			money,
			moneyup,
			msec,
			upcost,
			catcost,
			workercost,
			upown,
			catown,
			workerown,
			catadd,
			workadd,
			cboost,
			wboost,
			catmax,
			workmax
		})
	}
	const reset = () => {
		if (confirm('Are you sure you want to reset?') === true) {
			money = 0
			moneyup = 1
			msec = 0
			upcost = 15
			catcost = 25
			workercost = 250
			catown = 0
			workerown = 0
			upown = 0
			catadd = 1
			workadd = 15
			saveAll()
		}
	}
	function addcomma(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
	function clicked() {
		money += moneyup
	}
	function upgrade(name) {
		if (name === 'kitten') {
			if (money >= catcost && catown < 50) {
				if (catown <= 13) {
					msec += catadd
					catadd++
					cboost = 1
				} else if (catown == 14) {
					msec += catadd
					catadd++
					cboost = 200
				} else if (catown <= 23) {
					msec += 200 * catadd
					catadd++
					cboost = 200
				} else if (catown == 24) {
					msec += 200 * catadd
					catadd++
					cboost = 5000
				} else if (catown <= 48) {
					msec += 5000 * catadd
					catadd++
					cboost = 5000
				} else if (catown == 49) {
					msec += 5000 * catadd
					catadd++
					cboost = 15000
				} else {
					msec += 15000 * catadd
					catadd++
					cboost = 15000
				}
				catown += 1
				money -= catcost
				catcost = catcost * 2
			}
		}
		if (name === 'worker') {
			if (money >= workercost && workerown < 50) {
				if (workerown <= 13) {
					msec += workadd
					workadd++
					wboost = 1
				} else if (workerown == 14) {
					msec += workadd
					workadd++
					wboost = 200
				} else if (workerown <= 23) {
					msec += 200 * workadd
					workadd++
					wboost = 200
				} else if (workerown == 24) {
					msec += 200 * workadd
					workadd++
					wboost = 5000
				} else if (workerown <= 48) {
					msec += 5000 * workadd
					workadd++
					wboost = 5000
				} else if (workerown == 49) {
					msec += 5000 * workadd
					workadd++
					wboost = 15000
				} else {
					msec += 15000 * workadd
					workadd++
					wboost = 15000
				}
				workerown += 1
				money -= workercost
				workercost = workercost * 3
			}
		}

		if (name === 'upgrade') {
			if (money >= upcost) {
				moneyup += upcost / 15
				money -= upcost
				upown += 1
				upcost = upcost * 5
				if (catown == 50) {
					msec -= catmax
					catmax = Math.floor(moneyup * 0.15)
					msec += catmax
				}
				if (workerown == 50) {
					msec -= workmax
					workmax = Math.floor(moneyup * 0.35)
					msec += workmax
				}
			}
		}
	}

	function myTimer() {
		money += msec
	}

	onMount(() => {
		setInterval(myTimer, 1000)
	})

	$: saveAll({
    money
	})
</script>

<Page content>
	<header class="flex items-center justify-between">
		<span class="h4">Game</span>
		<span class="flex items-center space-x-2 h4">
			<span><Fa icon={faCoins} fw /></span>
			<span>{addcomma($_game.money)}</span>
		</span>
		<span>
			<button class="nwp-btn gray" on:click={reset}>Reset</button>
		</span>
	</header>

	<hr class="my-4" />
	<article>
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/2 p-1">
				<UgClicker on:click={clicked} />
			</div>
			<div class="w-full md:w-1/2 p-1">
				<UgHeader />
			</div>
		</div>
	</article>

	<div class="py-4">
		<nav class="flex flex-col w-full text-left py-2 space-y-2">
			<UgPanel on:click={() => upgrade('upgrade')} disabled={upcost > money}>
				<UgContent
					titel="Service"
					price={addcomma(upcost)}
					count={upown}
					body={moneyup}
					auto={false} />
			</UgPanel>
			<UgPanel
				on:click={() => upgrade('kitten')}
				disabled={catcost > money || catown >= 50}>
				<UgContent
					titel="Kitten"
					price={addcomma(catcost)}
					count={catown}
					body={addcomma(catadd * cboost)}
					auto={true} />
			</UgPanel>
			<UgPanel
				on:click={() => upgrade('worker')}
				disabled={workercost > money || workerown >= 50}>
				<UgContent
					titel="Staff"
					price={addcomma(workercost)}
					count={workerown}
					body={addcomma(workadd * wboost)}
					auto={true} />
			</UgPanel>
		</nav>
	</div>
</Page>
