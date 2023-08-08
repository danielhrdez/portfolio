<script lang="ts">
	import Block from '$components/Block.svelte';
	import emailIcon from '$assets/email.svg';
	import linkedInIcon from '$assets/linked-in.svg';
	import githubIcon from '$assets/github.svg';
	import AIcon from '$components/AIcon.svelte';

	export let email: string;
	export let linkedIn: string;
	export let github: string;
</script>

<Block id="contact-links" minWidth={0} >
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
