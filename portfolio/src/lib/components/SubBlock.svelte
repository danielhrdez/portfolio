<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let className: string = '';

  if (className === '') {
    className = title.toLowerCase().replace(' ', '-');
  }
</script>

<div id="{title.toLowerCase().replace(' ', '-')}" class="subblock__{className}">
  <h2 class="subblock__title">{title}</h2>
  <h3 class="subblock__title">{subtitle}</h3>
  <p>
    <slot />
  </p>
</div>
