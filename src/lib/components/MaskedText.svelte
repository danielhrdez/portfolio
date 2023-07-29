<div
	class="
		mask
		font-serif
		text-md
		italic
		bg-gradient-to-r
		from-[#0522FF]
		to-[#7400C2]
		dark:from-[#00ff80]
		dark:to-[#0AFFFB]
	"
>
	<slot />
</div>

<style>
	.mask {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: fit-content;
	}
</style>
