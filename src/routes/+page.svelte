<script lang="ts">
	import Description from './Description.svelte';
	import Experiences from './Experiences.svelte';
	import Education from './Education.svelte';
</script>

<div class="flex flex-col gap-4 m-4 justify-center items-center h-full">
	<div class="flex md:flex-row flex-col gap-4">
		<div class="flex flex-col gap-4">
			<Description />
			<Education />
		</div>
		<Experiences />
	</div>
</div>
