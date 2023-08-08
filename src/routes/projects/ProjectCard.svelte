<script lang="ts">
	import Icon from "$components/Icon.svelte";
  import githubIcon from "$assets/github.svg";
	import { t } from "svelte-i18n";
	import ArrowRight from "$components/icons/ArrowRight.svelte";

  export let name: string;
  export let href: string;
  export let srcImg: string;
  export let srcCodeLink: string;
  export let description: string;
  export let techStack: {src: string, alt: string}[];

  let clickedDescription = false;
</script>

<div
  class=" 
    rounded-2xl
    overflow-hidden
    drop-shadow-md
    w-[200px] h-[200px]
  "
>
  <div
    class="
      p-2
      w-[200px] h-[50px]
      absolute
      z-30
      bg-gradient-to-t
      from-white/0
      to-white/25
    "
  >
    <div class="relative w-full h-full">
      <a {href} class="absolute" target="_blank">
        <h3 class="font-bold text-black dark:text-white">
          {name}
        </h3>
      </a>
      <a href={srcCodeLink} class="absolute right-0" target="_blank">
        <Icon src={githubIcon} alt="GitHub icon" />
      </a>
    </div>
  </div>
  <div class="absolute bottom-0 w-full z-20 text-white">
    <div class="
      w-full h-10
      bg-gradient-to-b
      from-black/0
      to-black/50
      p-2
    ">
      {#if !clickedDescription}
        <div class="relative">
          <div class="absolute flex gap-2 right-0">
            {#each techStack as { src, alt }}
              <img {src} {alt} class="w-8 h-8 grayscale hover:grayscale-0"/>
            {/each}
          </div>
        </div>
      {/if}
    </div>
    <button
      class="
        flex
        w-full
        bg-black/50
        p-2
        justify-between
      "
      on:click={() => clickedDescription = !clickedDescription}
    >
      <p>
        {$t('page.projects.description')}
      </p>
      <div class={clickedDescription ? 'rotate-90' : '-rotate-90'}>
        <ArrowRight />
      </div>
    </button>
    {#if clickedDescription}
      <p class="bg-black/50 p-2">
        {description}
      </p>
    {/if}
  </div>
  <img loading="lazy" src={srcImg} alt={name} class="opacity-25 blur-[2px]" />
</div>
