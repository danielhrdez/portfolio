<script lang="ts">
  let count = 0;
  let numbers = '';
  let sum = 0;

  function increment() {
    count += 1;
    numbers += count + ' + ';
    sum += count;
  }
</script>

<h1>Welcome to SvelteKit {count}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<button on:click={increment}>Click me</button>

{#if count > 10}
  <p>Count is high!</p>
{/if}

<p>
  {numbers.slice(0, -3)} = {sum}
</p>
