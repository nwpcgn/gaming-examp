<script>
	import { _game, addcomma } from '../lib/data'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faDollarSign,
		faCat,
		faHammer
	} from '@fortawesome/free-solid-svg-icons'
</script>

<article class="flex flex-col py-4 px-4 rounded border font-semibold text-xl">
	<header class="flex items-center">
		<span class="flex items-center w-full"
			><Fa icon={faDollarSign} fw />
			<span class="ml-2">Coins</span>
        </span>
		<span>{addcomma($_game.money)}</span>
	</header>
	<header class="flex items-center">
		<span class="flex items-center w-full">
            <Fa icon={faCat} fw />
			<span class="ml-2">Cats</span>
        </span>
		<span>{$_game.catown}</span>
	</header>
	<header class="flex items-center">
		<span class="flex items-center w-full">
            <Fa icon={faHammer} fw />
			<span class="ml-2">Staff</span>
        </span>
		<span>{$_game.workerown}</span>
	</header>
</article>
