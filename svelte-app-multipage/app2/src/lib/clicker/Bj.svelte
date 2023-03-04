<script>
  import Page from "../lib/components/Page.svelte";
  import { sleep, _game } from "../lib/data";
  import SuitClubs from "../assets/SuitClubs.svg";
  import SuitDiamonds from "../assets/SuitDiamonds.svg";
  import SuitHearts from "../assets/SuitHearts.svg";
  import SuitSpades from "../assets/SuitSpades.svg";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faDice, faSpinner } from "@fortawesome/free-solid-svg-icons";
  let { points, lost, won, name } = $_game;

  function applyChange() {
    _game.set({ points, lost, won, name });
  }

  let suits = ["Herz", "Kreuz", "Karo", "Pick"];
  let values = [
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

  // Game variables
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
  // getCardNumber

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
  function getCardNumberValue(card) {
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
  }
  function getScore(cards) {
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
  }

  function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let swapIndex = Math.trunc(Math.random() * deck.length);
      let temp = deck[swapIndex];
      deck[swapIndex] = deck[i];
      deck[i] = temp;
    }
  }

  // update scores
  function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
  }
  function getCards(card) {
    return `<div class="inline-flex items-center space-x-3 p-3 rounded-lg border">
                <img src="${getIcon(card.suit)}" class="w-8 h-8" alt="" />
                <span class="text-3xl font-bold"> ${getCardNumberValue(
                  card
                )}</span>
            </div>`;
  }
  $: dealerCardString = ``;
  $: playerCardString = ``;
  // show status
  function showStatus() {
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
  }
  let loading;
  // Create Deck
  function createDeck() {
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
  }
  function getNextCard() {
    return deck.shift();
  }
  function checkForEndGame() {
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
  }

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

<Page>
  <section class="container mx-auto px-4 py-4 nwp">
    <header>
      <h2>Blackjack</h2>
    </header>

    <hr />
    <article class="relative w-full py-4">
      {#if gameStarted}
        <div class="grid grid-cols-2 py-4 gap-3">
          <article class="px-4 py-2 rounded-lg border border-emerald-600">
            <h5>Bank</h5>

            <nav class="space-x-1 space-y-1 mb-4">
              {@html dealerCardString}
            </nav>

            <footer class="flex items-center space-x-2 py-2">
              <Fa icon={faDice} fw size="lg" />
              <span class="text-3xl font-bold">{dealerScore}</span>
            </footer>
          </article>
          <article class="px-4 py-2 rounded-lg border border-emerald-600">
            <h5>Player</h5>

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
            class="grid grid-cols-2 py-4 gap-3 text-3xl font-semibold text-center "
          >
            {#if playerWon}
              <div
                class="text-white bg-red-800 font-bold p-2 rounded opacity-20"
              >
                Bank
              </div>
              <div class="text-white bg-emerald-800 font-bold p-2 rounded">
                Player Wins
              </div>
            {:else}
              <div class="text-white bg-red-800 font-bold p-2 rounded">
                Bank Wins
              </div>
              <div
                class="text-white bg-emerald-800 font-bold p-2 rounded opacity-20"
              >
                Player
              </div>
            {/if}
          </footer>
        {/if}
      {/if}

      {#if showGame}
        <div class="grid grid-cols-4 py-4 gap-2">
          <div />
          <div />
          <button class="btn btn-gray py-3" on:click={onHit} disabled={loading}>
            {#if loading}
              <Fa icon={faSpinner} spin />
            {:else}
              <span>Hit</span>
            {/if}
          </button>
          <button
            class="btn btn-gray py-3"
            on:click={onStay}
            disabled={loading}
          >
            {#if loading}
              <Fa icon={faSpinner} spin />
            {:else}
              <span>Stay</span>
            {/if}
          </button>
        </div>
      {/if}

      {#if showStart}
        <div class="grid grid-cols-1 py-4 gap-2">
          <button
            class="btn btn-gray py-3 px-6 text-lg font-semibold"
            on:click={onStart}>Start</button
          >
        </div>
      {/if}
    </article>
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
