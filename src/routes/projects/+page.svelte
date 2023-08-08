<script lang="ts">
    import Page from '../Page.svelte';
    import { t } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
    import solidJSIcon from '$assets/solidjs.svg';
    import fastAPIIcon from '$assets/fastapi.svg';
</script>

<Page
    title={$t('page.projects.title')}
    prevHrefLabel={{
        href: '/',
        label: $t('page.about.title')
    }}
    nextHrefLabel={{
        href: '/contact',
        label: $t('page.contact.title')
    }}
>
    <div class="flex flex-wrap gap-4 justify-center">
        <ProjectCard
            name="CloudML"
            href="https://cloudml.danielhrdez.dev/"
            srcImg="https://cloudml.danielhrdez.dev/"
            srcCodeLink="https://github.com/DanielHrdez/cloudml"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            techStack={[
                {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/520px-Scikit_learn_logo_small.svg.png?20180808062052",
                    alt: 'Sklearn'
                },
                {
                    src: solidJSIcon,
                    alt: 'SolidJS'
                },
                {
                    src: fastAPIIcon,
                    alt: 'FastAPI'
                },
            ]}
        />
    </div>
</Page>
