<script lang="ts">
	import Block from '$components/ui/Block.svelte';
	import emailIcon from '$assets/contact/email.svg';
	import linkedInIcon from '$assets/contact/linked-in.svg';
	import githubIcon from '$assets/contact/github.svg';
	import AIcon from '$components/ui/AIcon.svelte';

	export let email: string;
	export let linkedIn: string;
	export let github: string;
</script>

<Block>
	<div
		class="
			flex
			flex-row
			sm:flex-col
			justify-between
			h-full
			items-center
		"
	>
		<AIcon src={githubIcon} alt="GitHub" href={github} />
		<AIcon src={linkedInIcon} alt="LinkedIn" href={linkedIn} />
		<AIcon src={emailIcon} alt="E-mail" href={`mailto:${email}`} />
	</div>
</Block>
