import { persisted } from 'svelte-local-storage-store';
import { getLocaleFromNavigator } from 'svelte-i18n';
import type { Lang } from './i18n';

export enum Theme {
	SYSTEM = 'system',
	LIGHT = 'light',
	DARK = 'dark'
}

export const preferences = persisted('preferences', {
	theme: Theme.SYSTEM as Theme,
	lang: (getLocaleFromNavigator() || 'en') as Lang,
});
