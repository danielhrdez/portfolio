<script lang="ts">
	export let src: string;
	export let alt: string;
	let className = '';
	export { className as class };
	export let multipliers: number[];

	const fileExt = src.split('.').pop();
	const srcset = multipliers
		.map((size) => {
			const replaced = src.replace(`.${fileExt}`, `-${size}x.${fileExt}`);
			return `${replaced} ${size}x`;
		})
		.join(', ');
</script>

<img {src} {alt} class={className} {srcset} />
