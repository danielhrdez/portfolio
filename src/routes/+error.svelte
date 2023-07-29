<script>
	import simpsonGIF from '$assets/404-simpson.gif';
	import { t } from 'svelte-i18n';
</script>

<div class="flex flex-col items-center justify-center gap-4 w-full h-full">
	<h1 class="text-2xl font-bold text-center flex justify-center gap-4">
		<p>404</p>
		<p class="text-red-500">{$t('error.notFound')}</p>
	</h1>
	<p class="text-center">
		{$t('error.notFoundDescription')}
	</p>
	<img alt="404 Homer Simpson meme" src={simpsonGIF} class="w-[50%] rounded-xl" />
	<a
		class="
            p-4
            rounded-xl
            bg-slate-200
            dark:bg-slate-500
            w-[50%]
            hover:scale-105
            drop-shadow-md
            flex
            justify-around
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
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				strokeWidth={2}
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</a>
</div>

<style>
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
