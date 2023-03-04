<script>
  import { metatags, url, isActive } from "@roxi/routify";
  import { sleep, _game } from "../../lib/data";
  import SuitClubs from "../../assets/SuitClubs.svg";
  import SuitDiamonds from "../../assets/SuitDiamonds.svg";
  import SuitHearts from "../../assets/SuitHearts.svg";
  import SuitSpades from "../../assets/SuitSpades.svg";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faDice,
    faLandmark,
    faUser,
    faHome,
  } from "@fortawesome/free-solid-svg-icons";
  let { points, lost, won, name } = $_game;

  function applyChange() {
    _game.set({ points, lost, won, name });
  }

  const suits = ["Herz", "Kreuz", "Karo", "Pick"];
  const values = [
    "Ass",
    "König",
    "Dame",
    "Bube",
    "Neun",
    "Acht",
    "Sieben",
    "Sechs",
    "Fünf",
    "Vier",
    "Drei",
    "Zwei",
  ];
  let gameStarted = false,
    gameOver = false,
    playerWon = false,
    deck = [],
    showGame = false,
    showStart = true,
    dealerCards = [],
    playerCards = [];
  $: dealerScore = 0;
  $: playerScore = 0;
  let loading;
  const getIcon = (str) => {
    switch (str) {
      case "Kreuz":
        return SuitClubs;
        break;
      case "Herz":
        return SuitHearts;
        break;
      case "Karo":
        return SuitDiamonds;
        break;
      default:
        return SuitSpades;
        break;
    }
  };
  const getCardNumberValue = (card) => {
    switch (card.value) {
      case "Ass":
        return 1;
      case "Zwei":
        return 2;
      case "Drei":
        return 3;
      case "Vier":
        return 4;
      case "Fünf":
        return 5;
      case "Sechs":
        return 6;
      case "Sieben":
        return 7;
      case "Acht":
        return 8;
      case "Neun":
        return 9;
      default:
        return 10;
    }
  };
  const getScore = (cards) => {
    let score = 0;
    let hasAss = false;
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      score += getCardNumberValue(card);
      if (card.value === "Ass") {
        hasAss = true;
      }
    }
    if (hasAss && score + 10 <= 21) {
      return score + 10;
    }

    return score;
  };
  const shuffleDeck = (deck) => {
    for (let i = 0; i < deck.length; i++) {
      let swapIndex = Math.trunc(Math.random() * deck.length);
      let temp = deck[swapIndex];
      deck[swapIndex] = deck[i];
      deck[i] = temp;
    }
  };
  const updateScores = () => {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
  };
  const getCards = (
    card
  ) => `<div class="inline-flex items-center space-x-3 px-2 pt-2 pb-3 rounded-lg border border-gray-300">
                <img src="${getIcon(card.suit)}" class="w-8 h-8" alt="" />
                <span class="text-3xl font-bold"> ${getCardNumberValue(
                  card
                )}</span>
            </div>`;
  $: dealerCardString = ``;
  $: playerCardString = ``;
  const showStatus = () => {
    if (!gameStarted) {
      console.log("Welcome to BlackJack Game");
      return;
    }

    dealerCardString = "";
    for (let i = 0; i < dealerCards.length; i++) {
      dealerCardString += getCards(dealerCards[i]);
    }
    playerCardString = "";
    for (let i = 0; i < playerCards.length; i++) {
      playerCardString += getCards(playerCards[i]);
    }
    updateScores();

    if (gameOver) {
      if (playerWon) {
        won++;
        applyChange();
        console.log("PLAYER WON");
      } else {
        lost++;
        applyChange();
        console.log("Bank WON");
      }
      showGame = false;
      showStart = true;
    }
  };
  const createDeck = () => {
    let deck = [];
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
      for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
        let card = {
          value: values[valueIndex],
          suit: suits[suitIndex],
        };
        deck.push(card);
      }
    }
    return deck;
  };
  const getNextCard = () => deck.shift();
  const checkForEndGame = () => {
    updateScores();
    if (gameOver) {
      // let delar take cards
      while (
        dealerScore < playerScore &&
        playerScore <= 21 &&
        dealerScore <= 21
      ) {
        dealerCards.push(getNextCard());
        updateScores();
      }
    }

    if (playerScore > 21) {
      playerWon = false;
      gameOver = true;
    } else if (dealerScore > 21) {
      playerWon = true;
      gameOver = true;
    } else if (gameOver) {
      if (playerScore > dealerScore) {
        playerWon = true;
      } else {
        playerWon = false;
      }
    }
  };

  const onStart = async () => {
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    loading = false;
    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    showGame = true;
    showStart = false;

    showStatus();
  };
  const onHit = async () => {
    loading = true;
    playerCards.push(getNextCard());
    checkForEndGame();
    showStatus();
    await sleep(1000);
    loading = false;
  };
  const onStay = async () => {
    loading = true;
    await sleep(600);
    loading = false;
    gameOver = true;
    checkForEndGame();
    showStatus();
  };
</script>

<header class="flex justify-start items-center py-2 space-x-2">
  <Fa icon={faDice} fw size="2x" />
  <h2>Blackjack</h2>
  <span class="flex-1" />
  <span>
    <a href={$url("/")} class="">
      <Fa icon={faHome} size="lg" fw />
    </a>
  </span>
</header>

<hr />

<article class="relative w-full py-4">
  {#if gameStarted}
    <div class="spieltisch-wrapper">
      <article class="spieltisch bg-red-50">
        <h4>
          <Fa icon={faLandmark} fw /> <span> Bank</span>
        </h4>

        <nav class="space-x-1 space-y-1 mb-4">
          {@html dealerCardString}
        </nav>

        <footer class="flex items-center space-x-2 py-2">
          <Fa icon={faDice} fw size="lg" />
          <span class="text-3xl font-bold">{dealerScore}</span>
        </footer>
      </article>
      <article class="spieltisch">
        <h4>
          <Fa icon={faUser} fw /> <span> Player</span>
        </h4>

        <nav class="space-x-1 space-y-1 mb-4">
          {@html playerCardString}
        </nav>

        <footer class="flex items-center space-x-2 py-2">
          <Fa icon={faDice} fw size="lg" />
          <span class="text-3xl font-bold">{playerScore}</span>
        </footer>
      </article>
    </div>

    {#if gameOver}
      <footer
        class="grid grid-cols-2 py-2 gap-3 text-2xl font-semibold text-center "
      >
        {#if playerWon}
          <div class="btn-red font-bold p-3 rounded opacity-20">
            Bank ({$_game.lost})
          </div>
          <div class="btn-blue font-bold p-3 rounded">
            Player Wins ({$_game.won})
          </div>
        {:else}
          <div class="btn-red font-bold p-3 rounded">
            Bank Wins ({$_game.lost})
          </div>
          <div class="btn-blue font-bold p-3 rounded opacity-20">
            Player ({$_game.won})
          </div>
        {/if}
      </footer>
    {/if}
  {/if}

  {#if showGame}
    <div class="grid grid-cols-4 py-1 gap-2" class:opacity-20={loading}>
      <div />
      <div />
      <button class="btn btn-blue flex-col" on:click={onHit} disabled={loading}>
        <span class="text-xl mb-1">Hit</span>
        <small>Eine weitere Karte</small>
      </button>
      <button
        class="btn btn-gray flex-col"
        on:click={onStay}
        disabled={loading}
      >
        <span class="text-xl mb-1">Stay</span>
        <small>Keine weitere Karte</small>
      </button>
    </div>
  {/if}

  {#if showStart}
    <div class="grid grid-cols-1 py-2 gap-2">
      <button
        class="btn-gray py-3 px-4 text-2xl font-semibold"
        on:click={onStart}>{gameStarted ? "Restart Game" : "Start Game"}</button
      >
    </div>
  {/if}
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
