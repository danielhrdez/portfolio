<script lang="ts">
	export let images: { name: string; src: string }[] = [];
	images.push(...images);
</script>

<div class="overflow-hidden rounded-md">
	<div class="flex max-w-sm slide-image">
		{#each images as image}
			<img class="relative" src={image.src} alt={image.name} />
		{/each}
	</div>
</div>

<style>
	.slide-image {
		animation: slide 20s infinite;
		animation-timing-function: linear;
	}

	@keyframes slide {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-223%);
		}
	}
</style>
