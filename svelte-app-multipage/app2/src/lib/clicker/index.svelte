<script>
  import { url } from "@roxi/routify";
  import { _session } from "../../lib/data";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faDollarSign,
    faMouse,
    faHome,
    faCat,
    faHammer,
    faSave,
  } from "@fortawesome/free-solid-svg-icons";

  let {
    money,
    moneyup,
    msec,
    upcost,
    catcost,
    workercost,
    upown,
    catown,
    workerown,
    catadd,
    workadd,
    cboost,
    wboost,
    catmax,
    workmax,
  } = $_session;

  const saveGame = () => {
    console.log("saveGame");
    _session.set({
      money,
      moneyup,
      msec,
      upcost,
      catcost,
      workercost,
      upown,
      catown,
      workerown,
      catadd,
      workadd,
      cboost,
      wboost,
      catmax,
      workmax,
    });
  };
  function addcomma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function clicked() {
    money += moneyup;
    // document.getElementById("total").innerHTML = "LB: " + addcomma(money);
  }
</script>

<header class="flex justify-start items-center py-2 space-x-2">
  <Fa icon={faMouse} fw size="2.5x" />
  <h2>Clicker Game</h2>
  <span class="flex-1" />
  <span>
    <a href={$url("/")} class="">
      <Fa icon={faHome} size="lg" fw />
    </a>
  </span>
</header>

<hr />

<article class="relative w-full py-4">
  <header class="flex items-center font-semibold text-3xl space-x-2">
    <span class="flex-1">Money</span>
    <span>{addcomma(money)}</span>
    <Fa icon={faDollarSign} fw />
  </header>
  <header class="flex items-center font-semibold text-xl space-x-2">
    <span class="flex-1">Cats</span>
    <span>{catown}</span>
    <Fa icon={faCat} fw />
  </header>
  <header class="flex items-center font-semibold text-xl space-x-2">
    <span class="flex-1">Worker</span>
    <span>{workerown}</span>
    <Fa icon={faHammer} fw />
  </header>
</article>

<article class="w-full py-16 flex flex-col text-center">
  <button
    on:click={clicked}
    class="flex items-center justify-center btn-gray py-12 px-8 rounded-lg shadow"
  >
    <Fa icon={faMouse} size="2.5x" fw />
  </button>
</article>

<article class="w-full py-16 text-center">
  <button on:click={saveGame} class="btn-gray py-4 px-8 rounded-lg shadow">
    <Fa icon={faSave} size="2x" fw />
  </button>
</article>

<style>
  .spieltisch-wrapper {
    @apply grid grid-cols-2 py-2 gap-3;
  }
  .spieltisch {
    @apply px-5 py-4 rounded-lg border;
  }
  .spieltisch h4 {
    @apply flex items-center space-x-2 mb-3;
  }
</style>
