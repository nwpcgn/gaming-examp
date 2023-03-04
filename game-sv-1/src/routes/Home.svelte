<script>
  import svelteLogo from "../assets/svelte.svg";
  import Counter from "../lib/Counter.svelte";
  import Page from "../lib/components/Page.svelte";
</script>

<Page>
  <section class="w-full max-w-3xl mx-auto px-4 py-4 nwp">
    <div class="flex">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <h1>Vite + Svelte</h1>

    <div class="card">
      <Counter class="btn btn-blue" />
    </div>

    <p class="lead">
      Check out <a
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer">SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
      Click on the Vite and Svelte logos to learn more
    </p>
  </section>
</Page>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
