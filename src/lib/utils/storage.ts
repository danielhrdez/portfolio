import { persisted } from 'svelte-local-storage-store';
import { getLocaleFromNavigator } from 'svelte-i18n';

export const preferences = persisted('preferences', {
	theme: 'light',
	lang: getLocaleFromNavigator()
});
