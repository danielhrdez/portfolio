<script lang="ts">
  export let title: string;
  export let subtitle: string = '';
</script>

<div class="flex flex-col">
  <h2 class="text-2xl">{title}</h2>
  <h3 class="text-xl">{subtitle}</h3>
  <p class="flex px-4">
    <slot />
  </p>
  <br>
</div>
