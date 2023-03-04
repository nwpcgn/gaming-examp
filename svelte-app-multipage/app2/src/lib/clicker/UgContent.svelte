<script>
	import { _game, addcomma } from '../lib/data'
    export let price, count, titel, body, auto
</script>

<article class="flex justify-between py-2">
	
	<div class="flex flex-col">
		<div class="font-semibold text-3xl mb-1">{titel} <small class="ml-1 text-sm">({count})</small></div>
		<div>
			<span class="text-lg">+{body}</span>
			<span class="text-sm">/{auto ? 'sec' : 'click'}</span>
		</div>
	</div>

	<aside class="text-xl">
		<span class="font-medium">{price}</span>
		<span class="font-light">$</span>
	</aside>
</article>
