<script lang="ts">
    import type { HrefLabel } from './AButton';
    export let hrefLabel: HrefLabel | undefined = undefined;
</script>

{#if hrefLabel}
    <a class="abutton" href={hrefLabel.href} style="opacity: 1" aria-label={hrefLabel.label}>
        <slot />
    </a>
{:else}
    <div class="abutton hover:scale-100" style="opacity: .5">
        <slot />
    </div>
{/if}
