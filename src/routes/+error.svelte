<script>
	import simpson404 from '$assets/404-simpson.webm';
	import { t } from 'svelte-i18n';
	import AButton from '$components/ui/AButton.svelte';
	import ArrowDown from '$components/icons/ArrowDown.svelte';
</script>

<div class="flex w-full justify-center items-center">
	<div class="flex flex-col gap-4">
		<strong>
			<h1
				class="
                    text-2xl
                    text-center
                    flex
                    justify-between
                    gap-2
                    text-red-900
                    dark:text-red-300
                "
			>
				<span>404</span>
				<span>{$t('error.notFound')}</span>
			</h1>
		</strong>
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
		<AButton
			hrefLabel={{
				href: '/',
				label: $t('page.about.title')
			}}
		>
			{$t('error.notFoundButton')}
			<ArrowDown />
		</AButton>
	</div>
</div>
