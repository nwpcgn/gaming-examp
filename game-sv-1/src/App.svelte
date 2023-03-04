<script>
  import { Toasts } from 'svoast';
  import Router, { location, link } from "svelte-spa-router";
  import TopBar from "./lib/components/TopBar.svelte";
  import routes from "./routes";
</script>

<Toasts />

<TopBar class="px-2">
  <a href="/" use:link slot="start"> <h2>NWP-GAME</h2></a>
  <nav slot="end">
    <a href="/game" use:link class:active={$location === "/game"}>Game</a>
    <a href="/battle" use:link class:active={$location === "/battle"}>Battle</a>
    <a href="/bj" use:link class:active={$location === "/bj"}>Gambel</a>
    <!-- <a href="/404" use:link class:active={$location === "/404"}>404</a> -->
  </nav>
</TopBar>

<main>

    <Router {routes} />

</main>

<style>
  a.active {
    @apply text-parker-300;
  }
</style>
