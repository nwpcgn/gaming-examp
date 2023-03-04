<script>
	import 'virtual:windi.css'
	import '../app.css'
	import TopBar from '$lib/components/TopBar.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faChevronLeft,
		faCog,
		faHome,
		faHeadphones
	} from '@fortawesome/free-solid-svg-icons'
	import { base } from '$app/paths'
	export let data
</script>

<svelte:head>
	<title>nwp-app</title>
</svelte:head>

<TopBar>
	<nav slot="start" class="space-x-1 px-2">
		{#if data.pathname !== `${base}/`}
			<button on:click={() => history.back()} aria-label="Back">
				<Fa icon={faChevronLeft} fw />
			</button>
		{:else}
			<span class="opacity-0">
				<Fa icon={faChevronLeft} fw />
			</span>
		{/if}
	</nav>
	<a slot="label" href="{base}/" class="text-xl font-semibold" aria-label="Label">nwp-studio</a>
	<nav slot="end" class="px-2">
		{#if data.pathname !== `${base}/settings`}
			<a href="{base}/settings" class="px-2" aria-label="Settings">
				<Fa icon={faCog} size="lg" fw />
			</a>
		{:else}
			<a href="{base}/" class="px-2" aria-label="Home">
				<Fa icon={faHome} size="lg" fw />
			</a>
		{/if}
	</nav>
</TopBar>

<main>
	<PageTransition pathname={data.pathname}><slot /></PageTransition>
</main>
