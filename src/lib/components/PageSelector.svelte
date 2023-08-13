<script lang="ts">
	import { onMount } from 'svelte';
    import type { HrefLabel } from './ui/AButton';
    import AButton from './ui/AButton.svelte';
    import ArrowLeft from './icons/ArrowLeft.svelte';
    import ArrowRight from './icons/ArrowRight.svelte';
	import { goto } from '$app/navigation';

    export let prevHrefLabel: HrefLabel | undefined = undefined;
    export let nextHrefLabel: HrefLabel | undefined = undefined;

    onMount(() => {
        const leftArrow = 'ArrowLeft';
        const rightArrow = 'ArrowRight';
        function goToPage(hrefLabel: HrefLabel | undefined) {
            if (hrefLabel !== undefined) {
                goto(hrefLabel.href);
            }
        }
        document.addEventListener('keydown', (event) => {
            if (event.code === leftArrow) {
                goToPage(prevHrefLabel);
            } else if (event.code === rightArrow) {
                goToPage(nextHrefLabel);
            }
        });
    });
</script>

<div class="flex flex-row gap-4">
    <div class="w-full" />

    <div class="w-14">
        <AButton hrefLabel={prevHrefLabel}>
            <ArrowLeft />
        </AButton>
    </div>

    <div class="w-14">
        <AButton hrefLabel={nextHrefLabel}>
            <ArrowRight />
        </AButton>
    </div>
</div>
