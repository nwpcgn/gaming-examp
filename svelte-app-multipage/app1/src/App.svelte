<script>
	import Auth from './lib/components/Auth.svelte'
	import { Toasts } from 'svoast'
	import Router, { location, link } from 'svelte-spa-router'
	import routes from './routes'
</script>

<Toasts />

<Auth>
	<main>
		<Router {routes} />
	</main>
</Auth>
