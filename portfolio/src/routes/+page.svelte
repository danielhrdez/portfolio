<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  
  const text1 = "Computer Engineer with experience in Artificial Intelligence with neural networks and data analysis.";
  const text2 = "Time Series, Images, Text and Audio with frameworks such as TensorFlow and PyTorch.";
</script>

<Block
  title="Daniel Hernández de León"
  subtitle="Software"
  className="home"
>
  <ul class="description__summary">
    {#each [text1, text2] as line}
      <li>
        <p>{line}</p>
      </li>
    {/each}
  </ul>
</Block>
