<script>
	import simpson404 from '$assets/404-simpson.webm';
	import { t } from 'svelte-i18n';
</script>

<div class="flex w-full justify-center items-center">
	<div class="flex flex-col gap-4">
		<h1
			class="
				text-2xl
				font-bold
				text-center
				flex
				justify-between
				gap-2
				text-red-900
				dark:text-red-300
			"
		>
			<p>404</p>
			<p>{$t('error.notFound')}</p>
		</h1>
		<p class="text-center">
			{$t('error.notFoundDescription')}
		</p>
		<video
			autoplay
			loop
			muted
			playsinline
			class="rounded-xl bg-slate-300 dark:bg-slate-600 h-[320px]"
			width="320"
			src={simpson404}
		/>
		<a
			class="
				p-4
				rounded-xl
				bg-slate-300
				dark:bg-slate-600
				w-full
				hover:scale-105
				drop-shadow-md
				flex
				justify-between
				text-black
				dark:text-white
				hover:text-black
				hover:dark:text-white
			"
			href="/"
		>
			{$t('error.notFoundButton')}
			<svg
				class="h-6 w-6 animate-bounce transition-none"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</a>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
