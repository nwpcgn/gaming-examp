<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button {...$$restProps} on:click={increment}>
  count is {count}
</button>
