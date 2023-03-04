<script>
  import Page from "../lib/components/Page.svelte";
</script>

<Page>
  <section
    class="flex-1 h-full w-full flex flex-col items-center justify-center"
  >
    <div class="container px-4 mx-auto text-center">
      <img
        class="md:max-w-md mx-auto mb-12"
        src="https://shuffle.dev/metis-assets/illustrations/error1.png"
        alt=""
      /><span class="text-4xl text-blue-600 font-bold font-heading"
        >Whoops!</span
      >
      <h2 class="mb-2 text-4xl font-bold font-heading">
        Something went wrong!
      </h2>
      <p class="mb-6 text-blueGray-400">
        Sorry, but we are unable to open this page.
      </p>
      <div>
        <a
          class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
          href="#/">Go back to Homepage</a
        >
      </div>
    </div>
  </section>
</Page>
