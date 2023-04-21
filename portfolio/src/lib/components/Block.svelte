<script lang="ts">
  import MaskedText from '$lib/components/MaskedText.svelte';

  export let title: string;
  export let subtitle: string = '';
</script>

<div class="flex justify-center items-center h-full">
  <div class="bg-gray-200 p-4 rounded-2xl drop-shadow-xl">
    <h1 class="text-3xl font-bold">
      {title}
    </h1>
    <MaskedText>{subtitle}</MaskedText>
    <br>
    <slot />
  </div>
</div>
