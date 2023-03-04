<script>
  import { fly } from "svelte/transition";
  export let pathname = "";
  export let content = false;
</script>

{#key pathname}
  <section
    in:fly={{ x: -40, duration: 400, delay: 200 }}
    out:fly={{ x: 40, duration: 400 }}
  >
    {#if content}
      <div class={$$restProps.class ? $$restProps.class : 'w-full max-w-3xl mx-auto px-4 py-4 nwp'}>
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
  </section>
{/key}

<style>
  section {
    position: absolute;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
