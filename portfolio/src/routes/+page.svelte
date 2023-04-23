<script lang="ts">
  import Block from '$lib/components/Block.svelte';

  let year = new Date().getFullYear();
  let birthYear = 2001;
</script>

<Block title="Daniel Hernández de León" subtitle="Software Engineer">
  Software Engineer with {year - birthYear} years old.<br>
  Graduated from the <a href="https://www.ull.es/">ULL</a> in 2023.<br>
  In love with the Artificial Intelligence and Web Development.
</Block>
