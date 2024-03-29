import { register, init } from 'svelte-i18n';
import { preferences } from '$utils/storage';
import { get } from 'svelte/store';
import { Lang } from '$utils/storage';

register(Lang.ENGLISH, () => import('$locales/en.json'));
register(Lang.SPANISH, () => import('$locales/es.json'));

init({
    fallbackLocale: Lang.ENGLISH,
    initialLocale: get(preferences).lang
});
