<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  import { t } from 'svelte-i18n';

  let year = new Date().getFullYear();
  let birthYear = 2001;
  let age = year - birthYear;
  let description = $t('page.home.description', { values: { age } });
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.home.job')}>
  {@html description}
</Block>
