import { persisted } from 'svelte-local-storage-store';
import { getLocaleFromNavigator } from 'svelte-i18n';

export enum Lang {
    ENGLISH = 'en',
    SPANISH = 'es'
}

export enum Theme {
    SYSTEM = 'system',
    LIGHT = 'light',
    DARK = 'dark'
}

export const preferences = persisted('preferences', {
    theme: Theme.SYSTEM as Theme,
    lang: (getLocaleFromNavigator() || Lang.ENGLISH) as Lang,
});
