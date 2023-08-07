<script lang="ts">
	import Block from '$components/Block.svelte';
	import emailIcon from '$assets/email.svg';
	import linkedInIcon from '$assets/linked-in.svg';
	import phoneIcon from '$assets/phone.svg';
	import githubIcon from '$assets/github.svg';
</script>

<Block id="contact-links" minWidth={0} >
	<div class="flex flex-row sm:flex-col justify-between h-full items-center">
		<!-- <img src={githubIcon} alt="GitHub"> -->
		<img src={linkedInIcon} alt="LinkedIn">
		<img src={emailIcon} alt="E-mail">
		<img src={phoneIcon} alt="TLF">
	</div>
</Block>
