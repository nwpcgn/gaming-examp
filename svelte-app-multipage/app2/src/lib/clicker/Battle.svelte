<script>
	const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	$: score = 0
	$: time = 16
	let currentPos = 111
	let timer
	let active = false
	const stopTimer = () => {
		clearInterval(timer)
		active = false
		currentPos = 111
	}
	const startTimer = (callback, delay = 1000) => {
		timer = setInterval(() => callback(), delay)
	}

	const gameplay = () => {
		currentPos = Math.floor(Math.random() * 9)
		time--
		if (time === 0) {
			stopTimer()

			setTimeout(() => {
				alert('Game Done! Refresh to restart.')
			}, 200)
		}
	}

	const start = () => {
		score = 0
		time = 16
		active = true
		startTimer(gameplay, 1000)
	}

	const handleClick = (e) => {
		let i = parseInt(e.currentTarget.dataset.id)
		if (i == currentPos) score++
	}
	$: console.log('Score', score)
</script>

<nav class="sticky inset-x-0 top-0 z-40 bg-white bg-opacity-50 font-semibold px-2 py-1">Score: {score} | Time: {time}</nav>

<section class="bg-white">
	{#each fields as el, i}
		<div data-id={i} on:click={handleClick} class:mole={i == currentPos}>
			<span class="sr-only">{el}</span>
		</div>
	{/each}
</section>

{#if !active}
	<aside
		class="bg-blue-600 bg-opacity-50 flex flex-col items-center justify-center">
		<button class="nwp-btn blue" on:click={start}>Start</button>
	</aside>
{/if}

<style>
	aside {
		position: absolute;
		inset: 0;
		z-index: +1;
	}
	section {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-auto-columns: 1px;
		grid-auto-rows: 1px;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	div {
		border: 1px solid #eee;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: transparent;
	}

	.mole {
		width: 100%;
		height: 100%;
		background-image: url('./img/aniB05.png');
		background-repeat: no-repeat;
		background-size: contain;
		animation: appear 0.9s;
		background-position: center bottom;
		background-color: transparent;
		cursor: pointer;
	}
</style>
