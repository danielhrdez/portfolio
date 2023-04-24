<div class="mask font-serif text-xl italic">
	<slot />
</div>

<style>
	.mask {
		background: linear-gradient(90deg, #00ff80, #00a2ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: fit-content;
	}
</style>
