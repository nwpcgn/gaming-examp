<script>
	import SignOut from '../lib/components/SignOut.svelte'
	import { push } from 'svelte-spa-router'
</script>

<section class="flex-1 h-full w-full flex flex-col items-center justify-center">
	<div class="w-full max-w-lg px-4 mx-auto text-center">
		<img
			class="md:max-w-md mx-auto mb-12"
			src="https://shuffle.dev/metis-assets/illustrations/error1.png"
			alt="" />
			<span class="text-4xl text-blue-600 font-bold font-heading mb-4">Nwp-Studio</span>
			<div class="flex flex-col py-2 mt-4 space-y-2">
			<button class="btn btn-blue" on:click={() => push('/game')}>Start Here</button>
			<SignOut class="btn btn-red">
				<span>Logout User</span>
			</SignOut>
		</div>
	</div>
</section>


