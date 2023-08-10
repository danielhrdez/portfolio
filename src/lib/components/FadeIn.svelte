<script lang="ts">
	export let durationMs = 0;
	let opacityDiv: HTMLDivElement;

	$: {
		if (opacityDiv) {
			opacityDiv.style.opacity = '0';
			const keyframes = [
				{ opacity: 1, scale: 1 },
				{ opacity: 0.85, scale: 0.99 },
				{ opacity: 1, scale: 1 }
			];
			const options: KeyframeAnimationOptions = {
				duration: durationMs,
				easing: 'ease-in-out',
				fill: 'forwards'
			};
			const animation = opacityDiv.animate(keyframes, options);
			animation.play();
		}
	}
</script>

<div bind:this={opacityDiv} class="flex">
	<slot />
</div>
