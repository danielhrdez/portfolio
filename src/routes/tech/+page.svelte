<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import SubBlock from '$lib/components/SubBlock.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import { programmingLanguages, frameworks } from './constants';
</script>

<Block title="Tech Stack">
	<Block title="" subtitle="Programming Languages">
		<Slideshow images={programmingLanguages} />
	</Block>
	<br />
	<br />
	<Block title="" subtitle="Frameworks by Field">
		<SubBlock title="Deep Learning">
			<img src={frameworks.tensorflow} alt="TensorFlow" />
			<img src={frameworks.pytorch} alt="PyTorch" />
		</SubBlock>
		<SubBlock title="Frontend">
			<img src={frameworks.react} alt="React" />
			<img src={frameworks.svelte} alt="Svelte" />
			<img src={frameworks.tailwind} alt="Tailwind" />
			<img src={frameworks.sass} alt="Sass" />
		</SubBlock>
		<SubBlock title="Backend">
			<img src={frameworks.flask} alt="Flask" />
		</SubBlock>
	</Block>
</Block>
