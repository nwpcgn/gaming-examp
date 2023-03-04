<!-- routify:options preload="proximity" -->

<main>
  <section class="page">
    <div class="container mx-auto px-4 py-4 nwp"><slot /></div>
  </section>
</main>

<style>
  main {
    flex: 1;
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
