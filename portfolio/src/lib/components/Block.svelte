<script lang="ts">
  import MaskedText from '$lib/components/MaskedText.svelte';

  export let title: string;
  export let subtitle: string = '';
  export let className: string = '';

  if (className === '') {
    className = title.toLowerCase().replace(' ', '-');
  }
</script>

<div id="{title.toLowerCase().replace(' ', '-')}" class="block__{className}">
  <h1 class="block__title">{title}</h1>
  <MaskedText>{subtitle}</MaskedText>
  <slot />
</div>
